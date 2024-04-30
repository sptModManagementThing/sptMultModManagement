"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gear = void 0;
const enums_1 = require("../utils/enums");
class Gear {
    arrays;
    tables;
    logger;
    constructor(arrays, tables, logger) {
        this.arrays = arrays;
        this.tables = tables;
        this.logger = logger;
    }
    itemDB() {
        return this.tables.templates.items;
    }
    loadGearConflicts() {
        let confMasks = this.arrays.conflMasks;
        let confHats = this.arrays.conflHats;
        let confNVG = this.arrays.conflNVGomponents;
        let armorCompArr = [];
        for (let item in this.itemDB()) {
            let serverItem = this.itemDB()[item];
            if (serverItem._parent === enums_1.ParentClasses.ARMOREDEQUIPMENT && serverItem._props.HasHinge == true) {
                armorCompArr.push(serverItem._id);
            }
        }
        for (let nvg in confNVG) {
            for (let item in this.itemDB()) {
                let serverItem = this.itemDB()[item];
                if (serverItem._id === confNVG[nvg]) {
                    let confItems = serverItem._props.ConflictingItems;
                    serverItem._props.ConflictingItems = confItems.concat(armorCompArr);
                }
            }
        }
        for (let hat in confHats) {
            for (let item in this.itemDB()) {
                if (this.itemDB()[item]._id === confHats[hat]) {
                    let confItems = this.itemDB()[item]._props.ConflictingItems;
                    this.itemDB()[item]._props.ConflictingItems = confMasks.concat(confItems);
                }
            }
        }
        for (let item in this.itemDB()) {
            if (this.itemDB()[item]._parent === enums_1.ParentClasses.HEADWEAR) {
                for (let c in this.itemDB()[item]._props.ConflictingItems) {
                    let confItem = this.itemDB()[item]._props.ConflictingItems[c];
                    if (this.itemDB()[confItem] !== undefined && this.itemDB()[confItem]._parent === enums_1.ParentClasses.HEADSET) {
                        this.itemDB()[item]._props.ConflictingItems[c] = "";
                    }
                }
            }
        }
    }
    loadHeadsetTweaks() {
        for (let item in this.itemDB()) {
            let serverItem = this.itemDB()[item];
            //Sordin
            if (serverItem._id === "5aa2ba71e5b5b000137b758f") {
                serverItem._props.Distortion = 0.1;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -48;
                serverItem._props.AmbientVolume = -2.5;
                serverItem._props.CompressorGain = 6;
            }
            //GSSH
            if (serverItem._id === "5b432b965acfc47a8774094e") {
                serverItem._props.Distortion = 0.31;
                serverItem._props.Resonance = 3;
                serverItem._props.DryVolume = -49;
                serverItem._props.AmbientVolume = -3;
                serverItem._props.CompressorGain = 6;
            }
            //Peltor ComTac 2
            if (serverItem._id === "5645bcc04bdc2d363b8b4572") {
                serverItem._props.Distortion = 0.22;
                serverItem._props.Resonance = 2;
                serverItem._props.DryVolume = -51;
                serverItem._props.AmbientVolume = -3.75;
                serverItem._props.CompressorGain = 7;
            }
            //Peltor Sport
            if (serverItem._id === "5c165d832e2216398b5a7e36") {
                serverItem._props.Distortion = 0.28;
                serverItem._props.Resonance = 2.5;
                serverItem._props.DryVolume = -52;
                serverItem._props.AmbientVolume = -3.5;
                serverItem._props.CompressorGain = 7;
            }
            //Peltor ComTac 4
            if (serverItem._id === "628e4e576d783146b124c64d") {
                serverItem._props.Distortion = 0.05;
                serverItem._props.Resonance = 1;
                serverItem._props.DryVolume = -54;
                serverItem._props.AmbientVolume = -2;
                serverItem._props.CompressorGain = 8;
            }
            //FAST RAC
            if (serverItem._id === "5a16b9fffcdbcb0176308b34") {
                serverItem._props.Distortion = 0.15;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -56;
                serverItem._props.AmbientVolume = -4;
                serverItem._props.CompressorGain = 8;
            }
            //Opsmen Earmor M32
            if (serverItem._id === "6033fa48ffd42c541047f728") {
                serverItem._props.Distortion = 0.2;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -58;
                serverItem._props.AmbientVolume = -4.25;
                serverItem._props.CompressorGain = 8;
            }
            //Walker Razor Digital Headset
            if (serverItem._id === "5e4d34ca86f774264f758330") {
                serverItem._props.Distortion = 0.12;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -59;
                serverItem._props.AmbientVolume = -4.5;
                serverItem._props.CompressorGain = 9;
            }
            //Walker XCEL 500BT
            if (serverItem._id === "5f60cd6cf2bcbb675b00dac6") {
                serverItem._props.Distortion = 0.1;
                serverItem._props.Resonance = 1.5;
                serverItem._props.DryVolume = -60;
                serverItem._props.AmbientVolume = -5;
                serverItem._props.CompressorGain = 9;
            }
        }
    }
}
exports.Gear = Gear;
//# sourceMappingURL=gear.js.map