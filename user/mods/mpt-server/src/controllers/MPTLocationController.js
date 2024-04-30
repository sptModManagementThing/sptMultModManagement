"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPTLocationController = void 0;
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const MPTMatchService_1 = require("../services/MPTMatchService");
let MPTLocationController = class MPTLocationController {
    mptMatchService;
    constructor(mptMatchService) {
        this.mptMatchService = mptMatchService;
        // empty
    }
    /**
     * Handle /mpt/location/raids
     * @param request
     * @returns
     */
    handleGetRaids(request) {
        const matches = [];
        for (const [matchId, match] of this.mptMatchService.getAllMatches()) {
            matches.push({
                serverId: matchId,
                hostUsername: match.hostUsername,
                playerCount: match.players.size,
                status: match.status,
                location: match.raidConfig.location,
                side: match.side,
                time: match.time
            });
        }
        return matches;
    }
};
exports.MPTLocationController = MPTLocationController;
exports.MPTLocationController = MPTLocationController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("MPTMatchService")),
    __metadata("design:paramtypes", [typeof (_a = typeof MPTMatchService_1.MPTMatchService !== "undefined" && MPTMatchService_1.MPTMatchService) === "function" ? _a : Object])
], MPTLocationController);
//# sourceMappingURL=MPTLocationController.js.map