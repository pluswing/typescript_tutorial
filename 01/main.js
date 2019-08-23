"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
function total(data) {
    var t = 0;
    data.forEach(function (item) {
        t += item.count;
    });
    return t;
}
var content = fs.readFileSync('data.json');
var data = JSON.parse(content.toString());
console.log(total(data));
