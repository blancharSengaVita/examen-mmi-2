/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Controller/Game.ts":
/*!***********************************!*\
  !*** ./src/js/Controller/Game.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Game = void 0;\n\nvar Snake_1 = __webpack_require__(/*! ../Models/Snake */ \"./src/js/Models/Snake.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Game = function () {\n  function Game() {\n    this.formPlay = document.querySelector(settings_1.settings.forms.domSelector);\n    this.snakeCanvas = document.querySelector(settings_1.settings.canvas.snake.domSelector);\n    this.snakeCtx = this.snakeCanvas.getContext(settings_1.settings.canvas.snake.ctx);\n    this.snake = new Snake_1.Snake(this.snakeCanvas, this.snakeCtx, this.current, this.apples, this.score, this.replay);\n    this.addEventListeners();\n  }\n\n  Game.prototype.addEventListeners = function () {\n    this.reset(new SubmitEvent('reset', {\n      submitter: this.formPlay\n    }));\n  };\n\n  Game.prototype.reset = function (event) {\n    var _this = this;\n\n    event.preventDefault();\n    event.submitter.addEventListener('submit', function () {\n      _this.formPlay.classList.add(settings_1.settings.forms.hideClass);\n    });\n  };\n\n  Game.prototype.replay = function (message) {};\n\n  return Game;\n}();\n\nexports.Game = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQ29udHJvbGxlci9HYW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBS0E7O0FBR0E7RUFlSTtJQUNJLEtBQUtBLFFBQUwsR0FBZ0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkMsb0JBQVNDLEtBQVQsQ0FBZUMsV0FBdEMsQ0FBaEI7SUFFQSxLQUFLQyxXQUFMLEdBQW1CTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUJDLG9CQUFTSSxNQUFULENBQWdCQyxLQUFoQixDQUFzQkgsV0FBN0MsQ0FBbkI7SUFDQSxLQUFLSSxRQUFMLEdBQWdCLEtBQUtILFdBQUwsQ0FBaUJJLFVBQWpCLENBQTRCUCxvQkFBU0ksTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JHLEdBQWxELENBQWhCO0lBQ0EsS0FBS0gsS0FBTCxHQUFhLElBQUlJLGFBQUosQ0FBVSxLQUFLTixXQUFmLEVBQTRCLEtBQUtHLFFBQWpDLEVBQTJDLEtBQUtJLE9BQWhELEVBQXlELEtBQUtDLE1BQTlELEVBQXNFLEtBQUtDLEtBQTNFLEVBQWtGLEtBQUtDLE1BQXZGLENBQWI7SUFFQSxLQUFLQyxpQkFBTDtFQUNIOztFQUVEQztJQUNJLEtBQUtDLEtBQUwsQ0FBVyxJQUFJQyxXQUFKLENBQWdCLE9BQWhCLEVBQXlCO01BQUNDLFNBQVMsRUFBQyxLQUFLckI7SUFBaEIsQ0FBekIsQ0FBWDtFQUNILENBRkQ7O0VBSVFrQix1QkFBUixVQUFjSSxLQUFkLEVBQWdDO0lBQWhDOztJQUNJQSxLQUFLLENBQUNDLGNBQU47SUFDQUQsS0FBSyxDQUFDRCxTQUFOLENBQWdCRyxnQkFBaEIsQ0FBaUMsUUFBakMsRUFBMEM7TUFDdENDLEtBQUksQ0FBQ3pCLFFBQUwsQ0FBYzBCLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCeEIsb0JBQVNDLEtBQVQsQ0FBZXdCLFNBQTNDO0lBQ0gsQ0FGRDtFQUdILENBTE87O0VBT1JWLGtDQUFPVyxPQUFQLEVBQXNCLENBRXJCLENBRkQ7O0VBSUo7QUFBQyxDQXhDRDs7QUFBYUMsWUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtZW4tanVpbi0yMDIyLy4vc3JjL2pzL0NvbnRyb2xsZXIvR2FtZS50cz84YTFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U25ha2V9IGZyb20gXCIuLi9Nb2RlbHMvU25ha2VcIjtcbmltcG9ydCB7QW5pbWF0aW9ufSBmcm9tIFwiLi4vTW9kZWxzL0FuaW1hdGlvblwiO1xuaW1wb3J0IHtkaXJlY3Rpb259IGZyb20gXCIuLi9UeXBlcy9kaXJlY3Rpb25cIjtcbmltcG9ydCB7QXBwbGV9IGZyb20gXCIuLi9Nb2RlbHMvQXBwbGVcIjtcbmltcG9ydCB7U2NvcmV9IGZyb20gXCIuLi9Nb2RlbHMvU2NvcmVcIjtcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb29kQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNuYWtlOiBTbmFrZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFuaW1hdGlvbjogQW5pbWF0aW9uO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhdHVzOiB7IHN0YXJ0OiBib29sZWFuIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50OiB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH07XG4gICAgcHJpdmF0ZSByZWFkb25seSBhcHBsZXM6IEFwcGxlW107XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb29kQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzY29yZTogU2NvcmU7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtUGxheTogSFRNTEZvcm1FbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVzc2FnZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzY29yZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZm9ybVBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNldHRpbmdzLmZvcm1zLmRvbVNlbGVjdG9yKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5zbmFrZUNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2V0dGluZ3MuY2FudmFzLnNuYWtlLmRvbVNlbGVjdG9yKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgdGhpcy5zbmFrZUN0eCA9IHRoaXMuc25ha2VDYW52YXMuZ2V0Q29udGV4dChzZXR0aW5ncy5jYW52YXMuc25ha2UuY3R4KSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgICAgIHRoaXMuc25ha2UgPSBuZXcgU25ha2UodGhpcy5zbmFrZUNhbnZhcywgdGhpcy5zbmFrZUN0eCwgdGhpcy5jdXJyZW50LCB0aGlzLmFwcGxlcywgdGhpcy5zY29yZSwgdGhpcy5yZXBsYXkpXG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMucmVzZXQobmV3IFN1Ym1pdEV2ZW50KCdyZXNldCcsIHtzdWJtaXR0ZXI6dGhpcy5mb3JtUGxheX0pKVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXQoZXZlbnQ6IFN1Ym1pdEV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgZXZlbnQuc3VibWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKCk9PntcbiAgICAgICAgICAgIHRoaXMuZm9ybVBsYXkuY2xhc3NMaXN0LmFkZChzZXR0aW5ncy5mb3Jtcy5oaWRlQ2xhc3MpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVwbGF5KG1lc3NhZ2U6IHN0cmluZykge1xuXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImZvcm1QbGF5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0dGluZ3NfMSIsImZvcm1zIiwiZG9tU2VsZWN0b3IiLCJzbmFrZUNhbnZhcyIsImNhbnZhcyIsInNuYWtlIiwic25ha2VDdHgiLCJnZXRDb250ZXh0IiwiY3R4IiwiU25ha2VfMSIsImN1cnJlbnQiLCJhcHBsZXMiLCJzY29yZSIsInJlcGxheSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiR2FtZSIsInJlc2V0IiwiU3VibWl0RXZlbnQiLCJzdWJtaXR0ZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiY2xhc3NMaXN0IiwiYWRkIiwiaGlkZUNsYXNzIiwibWVzc2FnZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Controller/Game.ts\n");

/***/ }),

/***/ "./src/js/Models/Body.ts":
/*!*******************************!*\
  !*** ./src/js/Models/Body.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Body = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/js/Models/Canvas.ts\");\n\nvar Body = function (_super) {\n  __extends(Body, _super);\n\n  function Body(canvas, ctx, position) {\n    return _super.call(this, canvas, ctx, position) || this;\n  }\n\n  Body.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = settings_1.settings.snake.color;\n    this.ctx.rect(this.position.x, this.position.y, settings_1.settings.snake.unit, settings_1.settings.snake.unit);\n    this.ctx.stroke();\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  Body.prototype.clear = function () {\n    this.ctx.clearRect(this.position.x, this.position.y, settings_1.settings.snake.unit, settings_1.settings.snake.unit);\n  };\n\n  return Body;\n}(Canvas_1.Canvas);\n\nexports.Body = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0JvZHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBR0E7RUFBMEJBOztFQUd0QixjQUFZQyxNQUFaLEVBQXVDQyxHQUF2QyxFQUFzRUMsUUFBdEUsRUFBd0Y7V0FDcEZDLGtCQUFNSCxNQUFOLEVBQWNDLEdBQWQsRUFBbUJDLFFBQW5CLEtBQTRCO0VBQy9COztFQUVERTtJQUNJLEtBQUtILEdBQUwsQ0FBU0ksU0FBVDtJQUNBLEtBQUtKLEdBQUwsQ0FBU0ssU0FBVCxHQUFxQkMsb0JBQVNDLEtBQVQsQ0FBZUMsS0FBcEM7SUFDQSxLQUFLUixHQUFMLENBQVNTLElBQVQsQ0FBYyxLQUFLUixRQUFMLENBQWNTLENBQTVCLEVBQStCLEtBQUtULFFBQUwsQ0FBY1UsQ0FBN0MsRUFBZ0RMLG9CQUFTQyxLQUFULENBQWVLLElBQS9ELEVBQXFFTixvQkFBU0MsS0FBVCxDQUFlSyxJQUFwRjtJQUNBLEtBQUtaLEdBQUwsQ0FBU2EsTUFBVDtJQUNBLEtBQUtiLEdBQUwsQ0FBU2MsSUFBVDtJQUNBLEtBQUtkLEdBQUwsQ0FBU2UsU0FBVDtFQUNILENBUEQ7O0VBU0FaO0lBQ0ksS0FBS0gsR0FBTCxDQUFTZ0IsU0FBVCxDQUFtQixLQUFLZixRQUFMLENBQWNTLENBQWpDLEVBQW9DLEtBQUtULFFBQUwsQ0FBY1UsQ0FBbEQsRUFBcURMLG9CQUFTQyxLQUFULENBQWVLLElBQXBFLEVBQTBFTixvQkFBU0MsS0FBVCxDQUFlSyxJQUF6RjtFQUNILENBRkQ7O0VBR0o7QUFBQyxDQW5CRCxDQUEwQkssZUFBMUI7O0FBQWFDLFlBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9qcy9Nb2RlbHMvQm9keS50cz9kMmMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IHtwb3NpdGlvbn0gZnJvbSBcIi4uL1R5cGVzL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBCb2R5IGV4dGVuZHMgQ2FudmFzIHtcbiAgICBwcm90ZWN0ZWQgY29sb3I6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb3NpdGlvbjogcG9zaXRpb24pIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBzZXR0aW5ncy5zbmFrZS5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHgucmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgc2V0dGluZ3Muc25ha2UudW5pdCwgc2V0dGluZ3Muc25ha2UudW5pdCk7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpXG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgc2V0dGluZ3Muc25ha2UudW5pdCwgc2V0dGluZ3Muc25ha2UudW5pdClcbiAgICB9XG59Il0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImNhbnZhcyIsImN0eCIsInBvc2l0aW9uIiwiX3N1cGVyIiwiQm9keSIsImJlZ2luUGF0aCIsImZpbGxTdHlsZSIsInNldHRpbmdzXzEiLCJzbmFrZSIsImNvbG9yIiwicmVjdCIsIngiLCJ5IiwidW5pdCIsInN0cm9rZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJjbGVhclJlY3QiLCJDYW52YXNfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Models/Body.ts\n");

/***/ }),

/***/ "./src/js/Models/Canvas.ts":
/*!*********************************!*\
  !*** ./src/js/Models/Canvas.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Canvas = function () {\n  function Canvas(canvas, ctx, position) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.position = position;\n  }\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL0NhbnZhcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUdBO0VBTUksZ0JBQXNCQSxNQUF0QixFQUFpREMsR0FBakQsRUFBZ0ZDLFFBQWhGLEVBQWtHO0lBQzlGLEtBQUtGLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0g7O0VBS0w7QUFBQyxDQWZEOztBQUFzQkMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtZW4tanVpbi0yMDIyLy4vc3JjL2pzL01vZGVscy9DYW52YXMudHM/ZDY2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSURyYXdhYmxlXCI7XG5pbXBvcnQge3Bvc2l0aW9ufSBmcm9tIFwiLi4vVHlwZXMvcG9zaXRpb25cIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhbnZhcyBpbXBsZW1lbnRzIElEcmF3YWJsZSB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHB1YmxpYyBwb3NpdGlvbjogcG9zaXRpb247XG5cblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9zaXRpb246IHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGRyYXcoKTogdm9pZDtcbiAgICBhYnN0cmFjdCBjbGVhcigpOiB2b2lkO1xuXG59Il0sIm5hbWVzIjpbImNhbnZhcyIsImN0eCIsInBvc2l0aW9uIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Models/Canvas.ts\n");

/***/ }),

/***/ "./src/js/Models/Snake.ts":
/*!********************************!*\
  !*** ./src/js/Models/Snake.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Snake = void 0;\n\nvar Body_1 = __webpack_require__(/*! ./Body */ \"./src/js/Models/Body.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/js/settings.ts\");\n\nvar Canvas_1 = __webpack_require__(/*! ./Canvas */ \"./src/js/Models/Canvas.ts\");\n\nvar Snake = function (_super) {\n  __extends(Snake, _super);\n\n  function Snake(canvas, ctx, current, apples, score, replay) {\n    var _this = _super.call(this, canvas, ctx, {\n      x: 0,\n      y: 0\n    }) || this;\n\n    _this.tail = [];\n\n    _this.draw();\n\n    return _this;\n  }\n\n  Snake.prototype.draw = function () {\n    var _this = this;\n\n    for (var i = 0; i < settings_1.settings.snake.initialCount; i++) {\n      this.tail.push(new Body_1.Body(this.canvas, this.ctx, {\n        x: this.position.x - settings_1.settings.snake.unit * i,\n        y: this.position.y\n      }));\n      console.table(this.tail);\n    }\n\n    this.tail.forEach(function (body) {\n      body.position.x += _this.canvas.width / 2 + 2 * settings_1.settings.snake.unit;\n      body.position.y += _this.canvas.height / 2;\n      body.draw();\n    });\n  };\n\n  Snake.prototype.update = function () {};\n\n  Snake.prototype.isGoingOutside = function () {};\n\n  Snake.prototype.isEating = function () {};\n\n  Snake.prototype.isBitingItsTail = function () {};\n\n  Snake.prototype.clear = function () {};\n\n  Snake.prototype.createSnake = function () {};\n\n  return Snake;\n}(Canvas_1.Canvas);\n\nexports.Snake = Snake;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTW9kZWxzL1NuYWtlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQU1BO0VBQTJCQTs7RUFPdkIsZUFBWUMsTUFBWixFQUF1Q0MsR0FBdkMsRUFBc0VDLE9BQXRFLEVBQXlHQyxNQUF6RyxFQUEwSEMsS0FBMUgsRUFBd0lDLE1BQXhJLEVBQXlLO0lBQXpLLFlBQ0lDLGtCQUFNTixNQUFOLEVBQWNDLEdBQWQsRUFBbUI7TUFDZk0sQ0FBQyxFQUFFLENBRFk7TUFFZkMsQ0FBQyxFQUFDO0lBRmEsQ0FBbkIsS0FHRSxJQUpOOztJQU1JQyxLQUFJLENBQUNDLElBQUwsR0FBWSxFQUFaOztJQUNBRCxLQUFJLENBQUNFLElBQUw7OztFQUNIOztFQUVEQztJQUFBOztJQUNJLEtBQUssSUFBSUMsQ0FBQyxHQUFFLENBQVosRUFBZUEsQ0FBQyxHQUFHQyxvQkFBU0MsS0FBVCxDQUFlQyxZQUFsQyxFQUFnREgsQ0FBQyxFQUFqRCxFQUFvRDtNQUNoRCxLQUFLSCxJQUFMLENBQVVPLElBQVYsQ0FBZSxJQUFJQyxXQUFKLENBQVMsS0FBS2xCLE1BQWQsRUFBc0IsS0FBS0MsR0FBM0IsRUFBZ0M7UUFDM0NNLENBQUMsRUFBRSxLQUFLWSxRQUFMLENBQWNaLENBQWQsR0FBa0JPLG9CQUFTQyxLQUFULENBQWVLLElBQWYsR0FBc0JQLENBREE7UUFFM0NMLENBQUMsRUFBRSxLQUFLVyxRQUFMLENBQWNYO01BRjBCLENBQWhDLENBQWY7TUFJQWEsT0FBTyxDQUFDQyxLQUFSLENBQWMsS0FBS1osSUFBbkI7SUFDSDs7SUFFRCxLQUFLQSxJQUFMLENBQVVhLE9BQVYsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFLO01BQ25CQSxJQUFJLENBQUNMLFFBQUwsQ0FBY1osQ0FBZCxJQUFtQkUsS0FBSSxDQUFDVCxNQUFMLENBQVl5QixLQUFaLEdBQW9CLENBQXBCLEdBQXdCLElBQUlYLG9CQUFTQyxLQUFULENBQWVLLElBQTlEO01BQ0FJLElBQUksQ0FBQ0wsUUFBTCxDQUFjWCxDQUFkLElBQW1CQyxLQUFJLENBQUNULE1BQUwsQ0FBWTBCLE1BQVosR0FBcUIsQ0FBeEM7TUFDQUYsSUFBSSxDQUFDYixJQUFMO0lBQ0gsQ0FKRDtFQUtILENBZEQ7O0VBaUJBQyxzQ0FFQyxDQUZEOztFQUdRQSxpQ0FBUixhQUVDLENBRk87O0VBSUFBLDJCQUFSLGFBRUMsQ0FGTzs7RUFJQUEsa0NBQVIsYUFFQyxDQUZPOztFQUtSQSxxQ0FFQyxDQUZEOztFQUlBQSwyQ0FFQyxDQUZEOztFQUdKO0FBQUMsQ0F6REQsQ0FBMkJlLGVBQTNCOztBQUFhQyxhQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1qdWluLTIwMjIvLi9zcmMvanMvTW9kZWxzL1NuYWtlLnRzP2I0NmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCb2R5fSBmcm9tIFwiLi9Cb2R5XCI7XG5pbXBvcnQge2RpcmVjdGlvbn0gZnJvbSBcIi4uL1R5cGVzL2RpcmVjdGlvblwiO1xuaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XG5pbXBvcnQge0NhbnZhc30gZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQge3Bvc2l0aW9ufSBmcm9tIFwiLi4vVHlwZXMvcG9zaXRpb25cIjtcbmltcG9ydCB7QXBwbGV9IGZyb20gXCIuL0FwcGxlXCI7XG5pbXBvcnQge1Njb3JlfSBmcm9tIFwiLi9TY29yZVwiO1xuaW1wb3J0IHtjb21wYXJlfSBmcm9tIFwiLi4vSGVscGVycy9jb21wYXJlXCI7XG5cbmV4cG9ydCBjbGFzcyBTbmFrZSBleHRlbmRzIENhbnZhcyB7XG4gICAgcHJpdmF0ZSBjdXJyZW50OiB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH07XG4gICAgcHVibGljIHRhaWw6IEJvZHlbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFwcGxlczogQXBwbGVbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNjb3JlOiBTY29yZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlcGxheTogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjdXJyZW50OiB7IGRpcmVjdGlvbjogZGlyZWN0aW9uIH0sIGFwcGxlczogQXBwbGVbXSwgc2NvcmU6IFNjb3JlLCByZXBsYXk6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIoY2FudmFzLCBjdHgsIHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50YWlsID0gW107XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cblxuICAgIGRyYXcoKXtcbiAgICAgICAgZm9yIChsZXQgaT0gMDsgaSA8IHNldHRpbmdzLnNuYWtlLmluaXRpYWxDb3VudDsgaSsrKXtcbiAgICAgICAgICAgIHRoaXMudGFpbC5wdXNoKG5ldyBCb2R5KHRoaXMuY2FudmFzLCB0aGlzLmN0eCwge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueCAtIHNldHRpbmdzLnNuYWtlLnVuaXQgKiBpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueVxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKHRoaXMudGFpbClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFpbC5mb3JFYWNoKChib2R5KT0+IHtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueCArPSB0aGlzLmNhbnZhcy53aWR0aCAvIDIgKyAyICogc2V0dGluZ3Muc25ha2UudW5pdDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueSArPSB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgYm9keS5kcmF3KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICB1cGRhdGUoKSB7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBpc0dvaW5nT3V0c2lkZSgpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaXNFYXRpbmcoKSB7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQml0aW5nSXRzVGFpbCgpIHtcblxuICAgIH1cblxuXG4gICAgY2xlYXIoKSB7XG5cbiAgICB9XG5cbiAgICBjcmVhdGVTbmFrZSgpe1xuXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImNhbnZhcyIsImN0eCIsImN1cnJlbnQiLCJhcHBsZXMiLCJzY29yZSIsInJlcGxheSIsIl9zdXBlciIsIngiLCJ5IiwiX3RoaXMiLCJ0YWlsIiwiZHJhdyIsIlNuYWtlIiwiaSIsInNldHRpbmdzXzEiLCJzbmFrZSIsImluaXRpYWxDb3VudCIsInB1c2giLCJCb2R5XzEiLCJwb3NpdGlvbiIsInVuaXQiLCJjb25zb2xlIiwidGFibGUiLCJmb3JFYWNoIiwiYm9keSIsIndpZHRoIiwiaGVpZ2h0IiwiQ2FudmFzXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Models/Snake.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Game_1 = __webpack_require__(/*! ./Controller/Game */ \"./src/js/Controller/Game.ts\");\n\nnew Game_1.Game();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBSUEsV0FBSiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1qdWluLTIwMjIvLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZX0gZnJvbSBcIi4vQ29udHJvbGxlci9HYW1lXCI7XG5cbm5ldyBHYW1lKCk7Il0sIm5hbWVzIjpbIkdhbWVfMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvas: {\n    snake: {\n      domSelector: \"#snake\",\n      ctx: \"2d\"\n    },\n    food: {\n      domSelector: \"#food\",\n      ctx: \"2d\"\n    },\n    fps: 4\n  },\n  snake: {\n    unit: 20,\n    color: \"#ffb347\",\n    initialCount: 6\n  },\n  food: {\n    radius: 10,\n    color: \"#EB5E28\"\n  },\n  score: {\n    domSelector: \".game__score span\"\n  },\n  forms: {\n    domSelector: \".game__play\",\n    messageSelector: \".game__play__message\",\n    inputSelector: \".game__play__score\",\n    hideClass: \"hide\",\n    messages: {\n      selfEating: \"Oh non ! Le serpent s'est mordu la queue...\",\n      goOut: \"Oh non ! Le serpent s’est pris la tête dans le mur...\"\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNhQSxnQkFBQUEsR0FBVztFQUNwQkMsTUFBTSxFQUFFO0lBQ0pDLEtBQUssRUFBRTtNQUFDQyxXQUFXLEVBQUUsUUFBZDtNQUF3QkMsR0FBRyxFQUFFO0lBQTdCLENBREg7SUFFSkMsSUFBSSxFQUFFO01BQUNGLFdBQVcsRUFBRSxPQUFkO01BQXVCQyxHQUFHLEVBQUU7SUFBNUIsQ0FGRjtJQUdKRSxHQUFHLEVBQUU7RUFIRCxDQURZO0VBTXBCSixLQUFLLEVBQUU7SUFDSEssSUFBSSxFQUFFLEVBREg7SUFFSEMsS0FBSyxFQUFFLFNBRko7SUFHSEMsWUFBWSxFQUFFO0VBSFgsQ0FOYTtFQVdwQkosSUFBSSxFQUFFO0lBQUNLLE1BQU0sRUFBRSxFQUFUO0lBQWFGLEtBQUssRUFBRTtFQUFwQixDQVhjO0VBWXBCRyxLQUFLLEVBQUU7SUFDSFIsV0FBVyxFQUFFO0VBRFYsQ0FaYTtFQWVwQlMsS0FBSyxFQUFFO0lBQ0hULFdBQVcsRUFBRSxhQURWO0lBRUhVLGVBQWUsRUFBRSxzQkFGZDtJQUdIQyxhQUFhLEVBQUUsb0JBSFo7SUFJSEMsU0FBUyxFQUFFLE1BSlI7SUFLSEMsUUFBUSxFQUFFO01BQ05DLFVBQVUsRUFBRSw2Q0FETjtNQUVOQyxLQUFLLEVBQUU7SUFGRDtFQUxQO0FBZmEsQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1lbi1qdWluLTIwMjIvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBjYW52YXM6IHtcbiAgICAgICAgc25ha2U6IHtkb21TZWxlY3RvcjogXCIjc25ha2VcIiwgY3R4OiBcIjJkXCJ9LFxuICAgICAgICBmb29kOiB7ZG9tU2VsZWN0b3I6IFwiI2Zvb2RcIiwgY3R4OiBcIjJkXCJ9LFxuICAgICAgICBmcHM6IDRcbiAgICB9LFxuICAgIHNuYWtlOiB7XG4gICAgICAgIHVuaXQ6IDIwLFxuICAgICAgICBjb2xvcjogXCIjZmZiMzQ3XCIsXG4gICAgICAgIGluaXRpYWxDb3VudDogNlxuICAgIH0sXG4gICAgZm9vZDoge3JhZGl1czogMTAsIGNvbG9yOiBcIiNFQjVFMjhcIn0sXG4gICAgc2NvcmU6IHtcbiAgICAgICAgZG9tU2VsZWN0b3I6IFwiLmdhbWVfX3Njb3JlIHNwYW5cIlxuICAgIH0sXG4gICAgZm9ybXM6IHtcbiAgICAgICAgZG9tU2VsZWN0b3I6IFwiLmdhbWVfX3BsYXlcIixcbiAgICAgICAgbWVzc2FnZVNlbGVjdG9yOiBcIi5nYW1lX19wbGF5X19tZXNzYWdlXCIsXG4gICAgICAgIGlucHV0U2VsZWN0b3I6IFwiLmdhbWVfX3BsYXlfX3Njb3JlXCIsXG4gICAgICAgIGhpZGVDbGFzczogXCJoaWRlXCIsXG4gICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICBzZWxmRWF0aW5nOiBcIk9oIG5vbiAhIExlIHNlcnBlbnQgcydlc3QgbW9yZHUgbGEgcXVldWUuLi5cIixcbiAgICAgICAgICAgIGdvT3V0OiBcIk9oIG5vbiAhIExlIHNlcnBlbnQgc+KAmWVzdCBwcmlzIGxhIHTDqnRlIGRhbnMgbGUgbXVyLi4uXCIsXG4gICAgICAgIH0sXG4gICAgfVxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiY2FudmFzIiwic25ha2UiLCJkb21TZWxlY3RvciIsImN0eCIsImZvb2QiLCJmcHMiLCJ1bml0IiwiY29sb3IiLCJpbml0aWFsQ291bnQiLCJyYWRpdXMiLCJzY29yZSIsImZvcm1zIiwibWVzc2FnZVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsImhpZGVDbGFzcyIsIm1lc3NhZ2VzIiwic2VsZkVhdGluZyIsImdvT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbWVuLWp1aW4tMjAyMi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkexamen_juin_2022"] = self["webpackChunkexamen_juin_2022"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;