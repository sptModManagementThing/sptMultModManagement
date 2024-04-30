"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class biggerStash {
    container;
    config = require("../config/config.json");
    logger;
    postDBLoad(container) {
        this.container = container;
        this.logger = this.container.resolve("WinstonLogger");
        const items = this.container.resolve("DatabaseServer").getTables().templates.items;
        const stashes = [
            "566abbc34bdc2d92178b4576", //Standard stash 10x28
            "5811ce572459770cba1a34ea", //Left Behind stash 10x38
            "5811ce662459770f6f490f32", //Prepare for escape stash 10x48
            "5811ce772459770e9e5f9532" //Edge of darkness stash 10x68
        ];
        for (let stash of stashes) {
            let newSize = this.config.ChangeAll !== false ? this.config.ChangeAll : this.config[stash].size;
            items[stash]._props.Grids[0]._props.cellsV = newSize;
            if (this.config.debug === true)
                this.logger.log(`[kiki-BiggerStash] : ${this.config[stash].name} stash size changed to ${newSize}`, "yellow", "black");
        }
    }
}
module.exports = { mod: new biggerStash() };
//# sourceMappingURL=biggerStash.js.map