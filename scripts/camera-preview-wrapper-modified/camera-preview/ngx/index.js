var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var CameraPreview = /** @class */ (function (_super) {
    __extends(CameraPreview, _super);
    function CameraPreview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FOCUS_MODE = {
            FIXED: 'fixed',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CONTINUOUS_PICTURE: 'continuous-picture',
            CONTINUOUS_VIDEO: 'continuous-video',
            EDOF: 'edof',
            INFINITY: 'infinity',
            MACRO: 'macro' // Android Only
        };
        _this.EXPOSURE_MODE = {
            LOCK: 'lock',
            AUTO: 'auto',
            CONTINUOUS: 'continuous',
            CUSTOM: 'custom'
        };
        _this.FLASH_MODE = {
            OFF: 'off',
            ON: 'on',
            AUTO: 'auto',
            RED_EYE: 'red-eye',
            TORCH: 'torch' // Android Only
        };
        _this.COLOR_EFFECT = {
            AQUA: 'aqua',
            BLACKBOARD: 'blackboard',
            MONO: 'mono',
            NEGATIVE: 'negative',
            NONE: 'none',
            POSTERIZE: 'posterize',
            SEPIA: 'sepia',
            SOLARIZE: 'solarize',
            WHITEBOARD: 'whiteboard' // Android Only
        };
        _this.CAMERA_DIRECTION = {
            BACK: 'back',
            FRONT: 'front'
        };
        return _this;
    }
    CameraPreview.prototype.startCamera = function (options) { return cordova(this, "startCamera", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    CameraPreview.prototype.switchCamera = function () { return cordova(this, "switchCamera", {}, arguments); };
    CameraPreview.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    CameraPreview.prototype.show = function () { return cordova(this, "show", {}, arguments); };
    CameraPreview.prototype.takePicture = function (options) { return cordova(this, "takePicture", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setColorEffect = function (effect) { return cordova(this, "setColorEffect", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.setZoom = function (zoom) { return cordova(this, "setZoom", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getMaxZoom = function () { return cordova(this, "getMaxZoom", {}, arguments); };
    CameraPreview.prototype.getZoom = function () { return cordova(this, "getZoom", {}, arguments); };
    CameraPreview.prototype.setPreviewSize = function (dimensions) { return cordova(this, "setPreviewSize", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getFocusMode = function () { return cordova(this, "getFocusMode", {}, arguments); };
    CameraPreview.prototype.setFocusMode = function (focusMode) { return cordova(this, "setFocusMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFocusModes = function () { return cordova(this, "getSupportedFocusModes", {}, arguments); };
    CameraPreview.prototype.getFlashMode = function () { return cordova(this, "getFlashMode", {}, arguments); };
    CameraPreview.prototype.setFlashMode = function (flashMode) { return cordova(this, "setFlashMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getSupportedFlashModes = function () { return cordova(this, "getSupportedFlashModes", {}, arguments); };
    CameraPreview.prototype.getSupportedPictureSizes = function () { return cordova(this, "getSupportedPictureSizes", {}, arguments); };
    CameraPreview.prototype.getExposureMode = function () { return cordova(this, "getExposureMode", {}, arguments); };
    CameraPreview.prototype.getExposureModes = function () { return cordova(this, "getExposureModes", {}, arguments); };
    CameraPreview.prototype.setExposureMode = function (lock) { return cordova(this, "setExposureMode", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensation = function () { return cordova(this, "getExposureCompensation", {}, arguments); };
    CameraPreview.prototype.setExposureCompensation = function (exposureCompensation) { return cordova(this, "setExposureCompensation", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CameraPreview.prototype.getExposureCompensationRange = function () { return cordova(this, "getExposureCompensationRange", {}, arguments); };
    CameraPreview.prototype.tapToFocus = function (xPoint, yPoint) { return cordova(this, "tapToFocus", {}, arguments); };
    CameraPreview.prototype.onBackButton = function () { return cordova(this, "onBackButton", {}, arguments); };
    CameraPreview.prototype.getHorizontalFOV = function () { return cordova(this, "getHorizontalFOV", {}, arguments); };
    CameraPreview.pluginName = "CameraPreview";
    CameraPreview.plugin = "cordova-plugin-camera-preview";
    CameraPreview.pluginRef = "CameraPreview";
    CameraPreview.repo = "https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview";
    CameraPreview.platforms = ["Android", "iOS"];
    CameraPreview = __decorate([
        Injectable()
    ], CameraPreview);
    return CameraPreview;
}(IonicNativePlugin));
export { CameraPreview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS1wcmV2aWV3L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQTRJckMsaUNBQWlCOzs7UUFDbEQsZ0JBQVUsR0FBRztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsWUFBWTtZQUN4QixrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ3BDLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFVBQVU7WUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlO1NBQy9CLENBQUM7UUFFRixtQkFBYSxHQUFHO1lBQ2QsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7UUFFRixnQkFBVSxHQUFHO1lBQ1gsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLFNBQVM7WUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxlQUFlO1NBQy9CLENBQUM7UUFFRixrQkFBWSxHQUFHO1lBQ2IsSUFBSSxFQUFFLE1BQU07WUFDWixVQUFVLEVBQUUsWUFBWTtZQUN4QixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLElBQUksRUFBRSxNQUFNO1lBQ1osU0FBUyxFQUFFLFdBQVc7WUFDdEIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsWUFBWSxDQUFDLGVBQWU7U0FDekMsQ0FBQztRQUVGLHNCQUFnQixHQUFHO1lBQ2pCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE9BQU87U0FDZixDQUFDOzs7SUFXRixtQ0FBVyxhQUFDLE9BQTZCO0lBU3pDLGtDQUFVO0lBU1Ysb0NBQVk7SUFTWiw0QkFBSTtJQVNKLDRCQUFJO0lBYUosbUNBQVcsYUFBQyxPQUFxQztJQWVqRCxzQ0FBYyxhQUFDLE1BQWM7SUFhN0IsK0JBQU8sYUFBQyxJQUFhO0lBU3JCLGtDQUFVO0lBU1YsK0JBQU87SUFhUCxzQ0FBYyxhQUFDLFVBQW9DO0lBU25ELG9DQUFZO0lBYVosb0NBQVksYUFBQyxTQUFrQjtJQVMvQiw4Q0FBc0I7SUFTdEIsb0NBQVk7SUFhWixvQ0FBWSxhQUFDLFNBQWtCO0lBUy9CLDhDQUFzQjtJQVN0QixnREFBd0I7SUFTeEIsdUNBQWU7SUFTZix3Q0FBZ0I7SUFhaEIsdUNBQWUsYUFBQyxJQUFhO0lBUzdCLCtDQUF1QjtJQWF2QiwrQ0FBdUIsYUFBQyxvQkFBNkI7SUFTckQsb0RBQTRCO0lBVzVCLGtDQUFVLGFBQUMsTUFBYyxFQUFFLE1BQWM7SUFTekMsb0NBQVk7SUFTWix3Q0FBZ0I7Ozs7OztJQW5VTCxhQUFhO1FBRHpCLFVBQVUsRUFBRTtPQUNBLGFBQWE7d0JBN0kxQjtFQTZJbUMsaUJBQWlCO1NBQXZDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQcmV2aWV3RGltZW5zaW9ucyB7XG4gIC8qKiBUaGUgd2lkdGggb2YgdGhlIGNhbWVyYSBwcmV2aWV3LCBkZWZhdWx0IHRvIHdpbmRvdy5zY3JlZW4ud2lkdGggKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBoZWlnaHQgb2YgdGhlIGNhbWVyYSBwcmV2aWV3LCBkZWZhdWx0IHRvIHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICovXG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQcmV2aWV3T3B0aW9ucyB7XG4gIC8qKiBUaGUgbGVmdCBlZGdlIGluIHBpeGVscywgZGVmYXVsdCAwICovXG4gIHg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSB0b3AgZWRnZSBpbiBwaXhlbHMsIGRlZmF1bHQgMCAqL1xuICB5PzogbnVtYmVyO1xuXG4gIC8qKiBUaGUgd2lkdGggaW4gcGl4ZWxzLCBkZWZhdWx0IHdpbmRvdy5zY3JlZW4ud2lkdGggKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBoZWlnaHQgaW4gcGl4ZWxzLCBkZWZhdWx0IHdpbmRvdy5zY3JlZW4uaGVpZ2h0ICovXG4gIGhlaWdodD86IG51bWJlcjtcblxuICAvKiogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlICdmcm9udCcgb3IgJ3JlYXInLCBkZWZhdWx0ICdmcm9udCcgKi9cbiAgY2FtZXJhPzogc3RyaW5nO1xuXG4gIC8qKiBUYXAgdG8gdGFrZSBhIHBob3RvLCBkZWZhdWx0IHRydWUgKHBpY3R1cmUgcXVhbGl0eSBieSBkZWZhdWx0IDogODUpICovXG4gIHRhcFBob3RvPzogYm9vbGVhbjtcblxuICAvKiogUHJldmlldyBib3ggZHJhZyBhY3Jvc3MgdGhlIHNjcmVlbiwgZGVmYXVsdCAnZmFsc2UnICovXG4gIHByZXZpZXdEcmFnPzogYm9vbGVhbjtcblxuICAvKiogUHJldmlldyBib3ggdG8gdGhlIGJhY2sgb2YgdGhlIHdlYnZpZXcgKHRydWUgPT4gYmFjaywgZmFsc2UgPT4gZnJvbnQpICwgZGVmYXVsdCBmYWxzZSAqL1xuICB0b0JhY2s/OiBib29sZWFuO1xuXG4gIC8qKiBBbHBoYSBjaGFubmVsIG9mIHRoZSBwcmV2aWV3IGJveCwgZmxvYXQsIFswLDFdLCBkZWZhdWx0IDEgKi9cbiAgYWxwaGE/OiBudW1iZXI7XG5cbiAgLyoqIFRhcCB0byBzZXQgc3BlY2lmaWMgZm9jdXMgcG9pbnQuIE5vdGUsIHRoaXMgYXNzdW1lcyB0aGUgY2FtZXJhIGlzIGZ1bGwtc2NyZWVuLiBkZWZhdWx0IGZhbHNlICovXG4gIHRhcFRvRm9jdXM/OiBib29sZWFuO1xuXG4gIC8qKiBPbiBBbmRyb2lkIGRpc2FibGUgYXV0b21hdGljIHJvdGF0aW9uIG9mIHRoZSBpbWFnZSBhbmQgc3RyaXBwaW5nIG9mIEV4aXQgaGVhZGVyLiBkZWZhdWx0IGZhbHNlICovXG4gIGRpc2FibGVFeGlmSGVhZGVyU3RyaXBwaW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnMge1xuICAvKiogVGhlIHdpZHRoIGluIHBpeGVscywgZGVmYXVsdCAwICovXG4gIHdpZHRoPzogbnVtYmVyO1xuICAvKiogVGhlIGhlaWdodCBpbiBwaXhlbHMsIGRlZmF1bHQgMCAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiBUaGUgcGljdHVyZSBxdWFsaXR5LCAwIC0gMTAwLCBkZWZhdWx0IDg1ICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQGJldGFcbiAqIEBuYW1lIENhbWVyYSBQcmV2aWV3XG4gKiBAZGVzY3JpcHRpb25cbiAqIFNob3dpbmcgY2FtZXJhIHByZXZpZXcgaW4gSFRNTFxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtcGx1Z2luLWNhbWVyYS1wcmV2aWV3L2NvcmRvdmEtcGx1Z2luLWNhbWVyYS1wcmV2aWV3LmdpdGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIENhbWVyYSBQcmV2aWV3IGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEtcHJldmlldy9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEtcHJldmlldykuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmFQcmV2aWV3LCBDYW1lcmFQcmV2aWV3UGljdHVyZU9wdGlvbnMsIENhbWVyYVByZXZpZXdPcHRpb25zLCBDYW1lcmFQcmV2aWV3RGltZW5zaW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FtZXJhLXByZXZpZXcvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbWVyYVByZXZpZXc6IENhbWVyYVByZXZpZXcpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIGNhbWVyYSBvcHRpb25zIChTaXplIGFuZCBsb2NhdGlvbikuIEluIHRoZSBmb2xsb3dpbmcgZXhhbXBsZSwgdGhlIHByZXZpZXcgdXNlcyB0aGUgcmVhciBjYW1lcmEgYW5kIGRpc3BsYXkgdGhlIHByZXZpZXcgaW4gdGhlIGJhY2sgb2YgdGhlIHdlYnZpZXdcbiAqIGNvbnN0IGNhbWVyYVByZXZpZXdPcHRzOiBDYW1lcmFQcmV2aWV3T3B0aW9ucyA9IHtcbiAqICAgeDogMCxcbiAqICAgeTogMCxcbiAqICAgd2lkdGg6IHdpbmRvdy5zY3JlZW4ud2lkdGgsXG4gKiAgIGhlaWdodDogd2luZG93LnNjcmVlbi5oZWlnaHQsXG4gKiAgIGNhbWVyYTogJ3JlYXInLFxuICogICB0YXBQaG90bzogdHJ1ZSxcbiAqICAgcHJldmlld0RyYWc6IHRydWUsXG4gKiAgIHRvQmFjazogdHJ1ZSxcbiAqICAgYWxwaGE6IDFcbiAqIH1cbiAqXG4gKiAvLyBzdGFydCBjYW1lcmFcbiAqIHRoaXMuY2FtZXJhUHJldmlldy5zdGFydENhbWVyYShjYW1lcmFQcmV2aWV3T3B0cykudGhlbihcbiAqICAgKHJlcykgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKHJlcylcbiAqICAgfSxcbiAqICAgKGVycikgPT4ge1xuICogICAgIGNvbnNvbGUubG9nKGVycilcbiAqICAgfSk7XG4gKlxuICogLy8gU2V0IHRoZSBoYW5kbGVyIHRvIHJ1biBldmVyeSB0aW1lIHdlIHRha2UgYSBwaWN0dXJlXG4gKiB0aGlzLmNhbWVyYVByZXZpZXcuc2V0T25QaWN0dXJlVGFrZW5IYW5kbGVyKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAqICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAqICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIHJlc3VsdFxuICogfSk7XG4gKlxuICpcbiAqIC8vIHBpY3R1cmUgb3B0aW9uc1xuICogY29uc3QgcGljdHVyZU9wdHM6IENhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9ucyA9IHtcbiAqICAgd2lkdGg6IDEyODAsXG4gKiAgIGhlaWdodDogMTI4MCxcbiAqICAgcXVhbGl0eTogODVcbiAqIH1cbiAqXG4gKiAvLyB0YWtlIGEgcGljdHVyZVxuICogdGhpcy5jYW1lcmFQcmV2aWV3LnRha2VQaWN0dXJlKHRoaXMucGljdHVyZU9wdHMpLnRoZW4oKGltYWdlRGF0YSkgPT4ge1xuICogICB0aGlzLnBpY3R1cmUgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgaW1hZ2VEYXRhO1xuICogfSwgKGVycikgPT4ge1xuICogICBjb25zb2xlLmxvZyhlcnIpO1xuICogICB0aGlzLnBpY3R1cmUgPSAnYXNzZXRzL2ltZy90ZXN0LmpwZyc7XG4gKiB9KTtcbiAqXG4gKlxuICogLy8gU3dpdGNoIGNhbWVyYVxuICogdGhpcy5jYW1lcmFQcmV2aWV3LnN3aXRjaENhbWVyYSgpO1xuICpcbiAqIC8vIHNldCBjb2xvciBlZmZlY3QgdG8gbmVnYXRpdmVcbiAqIHRoaXMuY2FtZXJhUHJldmlldy5zZXRDb2xvckVmZmVjdCgnbmVnYXRpdmUnKTtcbiAqXG4gKiAvLyBTdG9wIHRoZSBjYW1lcmEgcHJldmlld1xuICogdGhpcy5jYW1lcmFQcmV2aWV3LnN0b3BDYW1lcmEoKTtcbiAqXG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJmYWNlc1xuICogQ2FtZXJhUHJldmlld09wdGlvbnNcbiAqIENhbWVyYVByZXZpZXdQaWN0dXJlT3B0aW9uc1xuICogQ2FtZXJhUHJldmlld0RpbWVuc2lvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYW1lcmFQcmV2aWV3JyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhLXByZXZpZXcnLFxuICBwbHVnaW5SZWY6ICdDYW1lcmFQcmV2aWV3JyxcbiAgcmVwbzpcbiAgICAnaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtcGx1Z2luLWNhbWVyYS1wcmV2aWV3L2NvcmRvdmEtcGx1Z2luLWNhbWVyYS1wcmV2aWV3JyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FtZXJhUHJldmlldyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRk9DVVNfTU9ERSA9IHtcbiAgICBGSVhFRDogJ2ZpeGVkJyxcbiAgICBBVVRPOiAnYXV0bycsXG4gICAgQ09OVElOVU9VUzogJ2NvbnRpbnVvdXMnLCAvLyBJT1MgT25seVxuICAgIENPTlRJTlVPVVNfUElDVFVSRTogJ2NvbnRpbnVvdXMtcGljdHVyZScsIC8vIEFuZHJvaWQgT25seVxuICAgIENPTlRJTlVPVVNfVklERU86ICdjb250aW51b3VzLXZpZGVvJywgLy8gQW5kcm9pZCBPbmx5XG4gICAgRURPRjogJ2Vkb2YnLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBJTkZJTklUWTogJ2luZmluaXR5JywgLy8gQW5kcm9pZCBPbmx5XG4gICAgTUFDUk86ICdtYWNybycgLy8gQW5kcm9pZCBPbmx5XG4gIH07XG5cbiAgRVhQT1NVUkVfTU9ERSA9IHtcbiAgICBMT0NLOiAnbG9jaycsIC8vIElPUyBPbmx5XG4gICAgQVVUTzogJ2F1dG8nLCAvLyBJT1MgT25seVxuICAgIENPTlRJTlVPVVM6ICdjb250aW51b3VzJyxcbiAgICBDVVNUT006ICdjdXN0b20nXG4gIH07XG5cbiAgRkxBU0hfTU9ERSA9IHtcbiAgICBPRkY6ICdvZmYnLFxuICAgIE9OOiAnb24nLFxuICAgIEFVVE86ICdhdXRvJyxcbiAgICBSRURfRVlFOiAncmVkLWV5ZScsXG4gICAgVE9SQ0g6ICd0b3JjaCcgLy8gQW5kcm9pZCBPbmx5XG4gIH07XG5cbiAgQ09MT1JfRUZGRUNUID0ge1xuICAgIEFRVUE6ICdhcXVhJywgLy8gQW5kcm9pZCBPbmx5XG4gICAgQkxBQ0tCT0FSRDogJ2JsYWNrYm9hcmQnLCAvLyBBbmRyb2lkIE9ubHlcbiAgICBNT05POiAnbW9ubycsXG4gICAgTkVHQVRJVkU6ICduZWdhdGl2ZScsXG4gICAgTk9ORTogJ25vbmUnLFxuICAgIFBPU1RFUklaRTogJ3Bvc3Rlcml6ZScsXG4gICAgU0VQSUE6ICdzZXBpYScsXG4gICAgU09MQVJJWkU6ICdzb2xhcml6ZScsIC8vIEFuZHJvaWQgT25seVxuICAgIFdISVRFQk9BUkQ6ICd3aGl0ZWJvYXJkJyAvLyBBbmRyb2lkIE9ubHlcbiAgfTtcblxuICBDQU1FUkFfRElSRUNUSU9OID0ge1xuICAgIEJBQ0s6ICdiYWNrJyxcbiAgICBGUk9OVDogJ2Zyb250J1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydHMgdGhlIGNhbWVyYSBwcmV2aWV3IGluc3RhbmNlLlxuICAgKiBAcGFyYW0ge0NhbWVyYVByZXZpZXdPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzdGFydENhbWVyYShvcHRpb25zOiBDYW1lcmFQcmV2aWV3T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHRoZSBjYW1lcmEgcHJldmlldyBpbnN0YW5jZS4gKGlPUyAmIEFuZHJvaWQpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcENhbWVyYSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggZnJvbSB0aGUgcmVhciBjYW1lcmEgYW5kIGZyb250IGNhbWVyYSwgaWYgYXZhaWxhYmxlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN3aXRjaENhbWVyYSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjYW1lcmEgcHJldmlldyBib3guXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjYW1lcmEgcHJldmlldyBib3guXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlIHRoZSBwaWN0dXJlIChiYXNlNjQpXG4gICAqIEBwYXJhbSB7Q2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zfSBbb3B0aW9uc10gc2l6ZSBhbmQgcXVhbGl0eSBvZiB0aGUgcGljdHVyZSB0byB0YWtlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICB0YWtlUGljdHVyZShvcHRpb25zPzogQ2FtZXJhUHJldmlld1BpY3R1cmVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogU2V0IGNhbWVyYSBjb2xvciBlZmZlY3QuXG4gICAqIEBzdGF0aWNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVmZmVjdCBuYW1lIDogJ25vbmUnIChpT1MgJiBBbmRyb2lkKSwgJ2FxdWEnIChBbmRyb2lkKSwgJ2JsYWNrYm9hcmQnIChBbmRyb2lkKSwgJ21vbm8nIChpT1MgJiBBbmRyb2lkKSwgJ25lZ2F0aXZlJyAoaU9TICYgQW5kcm9pZCksICdwb3N0ZXJpemUnIChpT1MgJiBBbmRyb2lkKSwgJ3NlcGlhJyAoaU9TICYgQW5kcm9pZCksICdzb2xhcml6ZScgKEFuZHJvaWQpIG9yICd3aGl0ZWJvYXJkJyAoQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHNldENvbG9yRWZmZWN0KGVmZmVjdDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB6b29tIChBbmRyb2lkKVxuICAgKiBAcGFyYW0gW3pvb21dIHtudW1iZXJ9IFpvb20gdmFsdWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHNldFpvb20oem9vbT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4aW11bSB6b29tIChBbmRyb2lkKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldE1heFpvb20oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgem9vbSAoQW5kcm9pZClcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRab29tKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJldmlldyBTaXplXG4gICAqIEBwYXJhbSB7Q2FtZXJhUHJldmlld0RpbWVuc2lvbnN9IFtkaW1lbnNpb25zXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc2V0UHJldmlld1NpemUoZGltZW5zaW9ucz86IENhbWVyYVByZXZpZXdEaW1lbnNpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZvY3VzIG1vZGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRGb2N1c01vZGUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmb2N1cyBtb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZm9jdXNNb2RlXSAnZml4ZWQnLCAnYXV0bycsICdjb250aW51b3VzLXBpY3R1cmUnLCAnY29udGludW91cy12aWRlbycgKGlPUyAmIEFuZHJvaWQpLCAnZWRvZicsICdpbmZpbml0eScsICdtYWNybycgKEFuZHJvaWQgT25seSlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyXG4gIH0pXG4gIHNldEZvY3VzTW9kZShmb2N1c01vZGU/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc3VwcG9ydGVkIGZvY3VzIG1vZGVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkRm9jdXNNb2RlcygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZmxhc2ggbW9kZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEZsYXNoTW9kZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZsYXNoIG1vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtmbGFzaE1vZGVdICdvZmYnIChpT1MgJiBBbmRyb2lkKSwgJ29uJyAoaU9TICYgQW5kcm9pZCksICdhdXRvJyAoaU9TICYgQW5kcm9pZCksICd0b3JjaCcgKEFuZHJvaWQpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzZXRGbGFzaE1vZGUoZmxhc2hNb2RlPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBmbGFzaCBtb2Rlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFN1cHBvcnRlZEZsYXNoTW9kZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHN1cHBvcnRlZCBwaWN0dXJlIHNpemVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwcG9ydGVkUGljdHVyZVNpemVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBtb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RXhwb3N1cmVNb2RlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBtb2Rlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEV4cG9zdXJlTW9kZXMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV4cG9zdXJlIG1vZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtsb2NrXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDJcbiAgfSlcbiAgc2V0RXhwb3N1cmVNb2RlKGxvY2s/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXhwb3N1cmUgY29tcGVuc2F0aW9uIChBbmRyb2lkKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEV4cG9zdXJlQ29tcGVuc2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBleHBvc3VyZSBjb21wZW5zYXRpb24gKEFuZHJvaWQpXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZXhwb3N1cmVDb21wZW5zYXRpb25dXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMlxuICB9KVxuICBzZXRFeHBvc3VyZUNvbXBlbnNhdGlvbihleHBvc3VyZUNvbXBlbnNhdGlvbj86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBleHBvc3VyZSBjb21wZW5zYXRpb24gcmFuZ2UgKEFuZHJvaWQpXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0RXhwb3N1cmVDb21wZW5zYXRpb25SYW5nZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3BlY2lmaWMgZm9jdXMgcG9pbnQuIE5vdGUsIHRoaXMgYXNzdW1lcyB0aGUgY2FtZXJhIGlzIGZ1bGwtc2NyZWVuLlxuICAgKiBAcGFyYW0ge251bWJlcn0geFBvaW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5UG9pbnRcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0YXBUb0ZvY3VzKHhQb2ludDogbnVtYmVyLCB5UG9pbnQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIGZvciB0aGUgYmFjayBldmVudCBmb3IgdGhlIHByZXZpZXdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBpZiBiYWNrIGJ1dHRvbiBwcmVzc2VkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG9uQmFja0J1dHRvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gaW4gdXNlIGRldmljZSBjYW1lcmEgZm92XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0SG9yaXpvbnRhbEZPVigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19