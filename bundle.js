/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 223);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Math__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Quaternion__ = __webpack_require__(17);




/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */

function Vector3( x, y, z ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;

}

Object.assign( Vector3.prototype, {

	isVector3: true,

	set: function ( x, y, z ) {

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	},

	setScalar: function ( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	},

	setX: function ( x ) {

		this.x = x;

		return this;

	},

	setY: function ( y ) {

		this.y = y;

		return this;

	},

	setZ: function ( z ) {

		this.z = z;

		return this;

	},

	setComponent: function ( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	},

	getComponent: function ( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	},

	clone: function () {

		return new this.constructor( this.x, this.y, this.z );

	},

	copy: function ( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	},

	add: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
			return this.addVectors( v, w );

		}

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	},

	addScalar: function ( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	},

	addVectors: function ( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	},

	addScaledVector: function ( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	},

	sub: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
			return this.subVectors( v, w );

		}

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	},

	subScalar: function ( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	},

	subVectors: function ( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	},

	multiply: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
			return this.multiplyVectors( v, w );

		}

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	},

	multiplyScalar: function ( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	},

	multiplyVectors: function ( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	},

	applyEuler: function () {

		var quaternion = new __WEBPACK_IMPORTED_MODULE_2__Quaternion__["a" /* Quaternion */]();

		return function applyEuler( euler ) {

			if ( ! ( euler && euler.isEuler ) ) {

				console.error( 'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.' );

			}

			return this.applyQuaternion( quaternion.setFromEuler( euler ) );

		};

	}(),

	applyAxisAngle: function () {

		var quaternion = new __WEBPACK_IMPORTED_MODULE_2__Quaternion__["a" /* Quaternion */]();

		return function applyAxisAngle( axis, angle ) {

			return this.applyQuaternion( quaternion.setFromAxisAngle( axis, angle ) );

		};

	}(),

	applyMatrix3: function ( m ) {

		var x = this.x, y = this.y, z = this.z;
		var e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	},

	applyMatrix4: function ( m ) {

		var x = this.x, y = this.y, z = this.z;
		var e = m.elements;

		var w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	},

	applyQuaternion: function ( q ) {

		var x = this.x, y = this.y, z = this.z;
		var qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// calculate quat * vector

		var ix =  qw * x + qy * z - qz * y;
		var iy =  qw * y + qz * x - qx * z;
		var iz =  qw * z + qx * y - qy * x;
		var iw = - qx * x - qy * y - qz * z;

		// calculate result * inverse quat

		this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
		this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
		this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

		return this;

	},

	project: function () {

		var matrix = new __WEBPACK_IMPORTED_MODULE_1__Matrix4__["a" /* Matrix4 */]();

		return function project( camera ) {

			matrix.multiplyMatrices( camera.projectionMatrix, matrix.getInverse( camera.matrixWorld ) );
			return this.applyMatrix4( matrix );

		};

	}(),

	unproject: function () {

		var matrix = new __WEBPACK_IMPORTED_MODULE_1__Matrix4__["a" /* Matrix4 */]();

		return function unproject( camera ) {

			matrix.multiplyMatrices( camera.matrixWorld, matrix.getInverse( camera.projectionMatrix ) );
			return this.applyMatrix4( matrix );

		};

	}(),

	transformDirection: function ( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		var x = this.x, y = this.y, z = this.z;
		var e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	},

	divide: function ( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	},

	divideScalar: function ( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	},

	min: function ( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	},

	max: function ( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	},

	clamp: function ( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

		return this;

	},

	clampScalar: function () {

		var min = new Vector3();
		var max = new Vector3();

		return function clampScalar( minVal, maxVal ) {

			min.set( minVal, minVal, minVal );
			max.set( maxVal, maxVal, maxVal );

			return this.clamp( min, max );

		};

	}(),

	clampLength: function ( min, max ) {

		var length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	},

	floor: function () {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	},

	ceil: function () {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	},

	round: function () {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	},

	roundToZero: function () {

		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
		this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

		return this;

	},

	negate: function () {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	},

	dot: function ( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	},

	// TODO lengthSquared?

	lengthSq: function () {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	},

	length: function () {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	},

	lengthManhattan: function () {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	},

	normalize: function () {

		return this.divideScalar( this.length() || 1 );

	},

	setLength: function ( length ) {

		return this.normalize().multiplyScalar( length );

	},

	lerp: function ( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	},

	lerpVectors: function ( v1, v2, alpha ) {

		return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

	},

	cross: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
			return this.crossVectors( v, w );

		}

		var x = this.x, y = this.y, z = this.z;

		this.x = y * v.z - z * v.y;
		this.y = z * v.x - x * v.z;
		this.z = x * v.y - y * v.x;

		return this;

	},

	crossVectors: function ( a, b ) {

		var ax = a.x, ay = a.y, az = a.z;
		var bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	},

	projectOnVector: function ( vector ) {

		var scalar = vector.dot( this ) / vector.lengthSq();

		return this.copy( vector ).multiplyScalar( scalar );

	},

	projectOnPlane: function () {

		var v1 = new Vector3();

		return function projectOnPlane( planeNormal ) {

			v1.copy( this ).projectOnVector( planeNormal );

			return this.sub( v1 );

		};

	}(),

	reflect: function () {

		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length

		var v1 = new Vector3();

		return function reflect( normal ) {

			return this.sub( v1.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

		};

	}(),

	angleTo: function ( v ) {

		var theta = this.dot( v ) / ( Math.sqrt( this.lengthSq() * v.lengthSq() ) );

		// clamp, to handle numerical problems

		return Math.acos( __WEBPACK_IMPORTED_MODULE_0__Math__["a" /* _Math */].clamp( theta, - 1, 1 ) );

	},

	distanceTo: function ( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	},

	distanceToSquared: function ( v ) {

		var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	},

	distanceToManhattan: function ( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	},

	setFromSpherical: function ( s ) {

		var sinPhiRadius = Math.sin( s.phi ) * s.radius;

		this.x = sinPhiRadius * Math.sin( s.theta );
		this.y = Math.cos( s.phi ) * s.radius;
		this.z = sinPhiRadius * Math.cos( s.theta );

		return this;

	},

	setFromCylindrical: function ( c ) {

		this.x = c.radius * Math.sin( c.theta );
		this.y = c.y;
		this.z = c.radius * Math.cos( c.theta );

		return this;

	},

	setFromMatrixPosition: function ( m ) {

		var e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	},

	setFromMatrixScale: function ( m ) {

		var sx = this.setFromMatrixColumn( m, 0 ).length();
		var sy = this.setFromMatrixColumn( m, 1 ).length();
		var sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	},

	setFromMatrixColumn: function ( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	},

	equals: function ( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	},

	fromBufferAttribute: function ( attribute, index, offset ) {

		if ( offset !== undefined ) {

			console.warn( 'THREE.Vector3: offset has been removed from .fromBufferAttribute().' );

		}

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

} );





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REVISION; });
/* unused harmony export MOUSE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_54", function() { return CullFaceNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_48", function() { return CullFaceBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_55", function() { return CullFaceFront; });
/* unused harmony export CullFaceFrontBack */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return FrontFaceDirectionCW; });
/* unused harmony export FrontFaceDirectionCCW */
/* unused harmony export BasicShadowMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return PCFShadowMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return PCFSoftShadowMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FrontSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return BackSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return DoubleSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return FlatShading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SmoothShading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NoColors; });
/* unused harmony export FaceColors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_56", function() { return VertexColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_49", function() { return NoBlending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalBlending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_51", function() { return AdditiveBlending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_52", function() { return SubtractiveBlending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_53", function() { return MultiplyBlending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_50", function() { return CustomBlending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AddEquation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return SubtractEquation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return ReverseSubtractEquation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return MinEquation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return MaxEquation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return ZeroFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return OneFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return SrcColorFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return OneMinusSrcColorFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SrcAlphaFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OneMinusSrcAlphaFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return DstAlphaFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return OneMinusDstAlphaFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return DstColorFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return OneMinusDstColorFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return SrcAlphaSaturateFactor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_41", function() { return NeverDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_42", function() { return AlwaysDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_43", function() { return LessDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LessEqualDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_44", function() { return EqualDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_45", function() { return GreaterEqualDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_46", function() { return GreaterDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_47", function() { return NotEqualDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return MultiplyOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_38", function() { return MixOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_39", function() { return AddOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_40", function() { return NoToneMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LinearToneMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return ReinhardToneMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return Uncharted2ToneMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return CineonToneMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return UVMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return CubeReflectionMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_34", function() { return CubeRefractionMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_35", function() { return EquirectangularReflectionMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_36", function() { return EquirectangularRefractionMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_37", function() { return SphericalReflectionMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return CubeUVReflectionMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return CubeUVRefractionMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return RepeatWrapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ClampToEdgeWrapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return MirroredRepeatWrapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return NearestFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return NearestMipMapNearestFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return NearestMipMapLinearFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LinearFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return LinearMipMapNearestFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return LinearMipMapLinearFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return UnsignedByteType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return ByteType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return ShortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UnsignedShortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return IntType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UnsignedIntType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return FloatType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return HalfFloatType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UnsignedShort4444Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UnsignedShort5551Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UnsignedShort565Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return UnsignedInt248Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return AlphaFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return RGBFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return RGBAFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return LuminanceFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return LuminanceAlphaFormat; });
/* unused harmony export RGBEFormat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return DepthFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return DepthStencilFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return RGB_S3TC_DXT1_Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return RGBA_S3TC_DXT1_Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return RGBA_S3TC_DXT3_Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return RGBA_S3TC_DXT5_Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return RGB_PVRTC_4BPPV1_Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return RGB_PVRTC_2BPPV1_Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return RGBA_PVRTC_4BPPV1_Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return RGBA_PVRTC_2BPPV1_Format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return RGB_ETC1_Format; });
/* unused harmony export LoopOnce */
/* unused harmony export LoopRepeat */
/* unused harmony export LoopPingPong */
/* unused harmony export InterpolateDiscrete */
/* unused harmony export InterpolateLinear */
/* unused harmony export InterpolateSmooth */
/* unused harmony export ZeroCurvatureEnding */
/* unused harmony export ZeroSlopeEnding */
/* unused harmony export WrapAroundEnding */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TrianglesDrawMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TriangleStripDrawMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return TriangleFanDrawMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return LinearEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return sRGBEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return GammaEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return RGBEEncoding; });
/* unused harmony export LogLuvEncoding */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return RGBM7Encoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return RGBM16Encoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return RGBDEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return BasicDepthPacking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return RGBADepthPacking; });
var REVISION = '86';
var MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };
var CullFaceNone = 0;
var CullFaceBack = 1;
var CullFaceFront = 2;
var CullFaceFrontBack = 3;
var FrontFaceDirectionCW = 0;
var FrontFaceDirectionCCW = 1;
var BasicShadowMap = 0;
var PCFShadowMap = 1;
var PCFSoftShadowMap = 2;
var FrontSide = 0;
var BackSide = 1;
var DoubleSide = 2;
var FlatShading = 1;
var SmoothShading = 2;
var NoColors = 0;
var FaceColors = 1;
var VertexColors = 2;
var NoBlending = 0;
var NormalBlending = 1;
var AdditiveBlending = 2;
var SubtractiveBlending = 3;
var MultiplyBlending = 4;
var CustomBlending = 5;
var AddEquation = 100;
var SubtractEquation = 101;
var ReverseSubtractEquation = 102;
var MinEquation = 103;
var MaxEquation = 104;
var ZeroFactor = 200;
var OneFactor = 201;
var SrcColorFactor = 202;
var OneMinusSrcColorFactor = 203;
var SrcAlphaFactor = 204;
var OneMinusSrcAlphaFactor = 205;
var DstAlphaFactor = 206;
var OneMinusDstAlphaFactor = 207;
var DstColorFactor = 208;
var OneMinusDstColorFactor = 209;
var SrcAlphaSaturateFactor = 210;
var NeverDepth = 0;
var AlwaysDepth = 1;
var LessDepth = 2;
var LessEqualDepth = 3;
var EqualDepth = 4;
var GreaterEqualDepth = 5;
var GreaterDepth = 6;
var NotEqualDepth = 7;
var MultiplyOperation = 0;
var MixOperation = 1;
var AddOperation = 2;
var NoToneMapping = 0;
var LinearToneMapping = 1;
var ReinhardToneMapping = 2;
var Uncharted2ToneMapping = 3;
var CineonToneMapping = 4;
var UVMapping = 300;
var CubeReflectionMapping = 301;
var CubeRefractionMapping = 302;
var EquirectangularReflectionMapping = 303;
var EquirectangularRefractionMapping = 304;
var SphericalReflectionMapping = 305;
var CubeUVReflectionMapping = 306;
var CubeUVRefractionMapping = 307;
var RepeatWrapping = 1000;
var ClampToEdgeWrapping = 1001;
var MirroredRepeatWrapping = 1002;
var NearestFilter = 1003;
var NearestMipMapNearestFilter = 1004;
var NearestMipMapLinearFilter = 1005;
var LinearFilter = 1006;
var LinearMipMapNearestFilter = 1007;
var LinearMipMapLinearFilter = 1008;
var UnsignedByteType = 1009;
var ByteType = 1010;
var ShortType = 1011;
var UnsignedShortType = 1012;
var IntType = 1013;
var UnsignedIntType = 1014;
var FloatType = 1015;
var HalfFloatType = 1016;
var UnsignedShort4444Type = 1017;
var UnsignedShort5551Type = 1018;
var UnsignedShort565Type = 1019;
var UnsignedInt248Type = 1020;
var AlphaFormat = 1021;
var RGBFormat = 1022;
var RGBAFormat = 1023;
var LuminanceFormat = 1024;
var LuminanceAlphaFormat = 1025;
var RGBEFormat = RGBAFormat;
var DepthFormat = 1026;
var DepthStencilFormat = 1027;
var RGB_S3TC_DXT1_Format = 2001;
var RGBA_S3TC_DXT1_Format = 2002;
var RGBA_S3TC_DXT3_Format = 2003;
var RGBA_S3TC_DXT5_Format = 2004;
var RGB_PVRTC_4BPPV1_Format = 2100;
var RGB_PVRTC_2BPPV1_Format = 2101;
var RGBA_PVRTC_4BPPV1_Format = 2102;
var RGBA_PVRTC_2BPPV1_Format = 2103;
var RGB_ETC1_Format = 2151;
var LoopOnce = 2200;
var LoopRepeat = 2201;
var LoopPingPong = 2202;
var InterpolateDiscrete = 2300;
var InterpolateLinear = 2301;
var InterpolateSmooth = 2302;
var ZeroCurvatureEnding = 2400;
var ZeroSlopeEnding = 2401;
var WrapAroundEnding = 2402;
var TrianglesDrawMode = 0;
var TriangleStripDrawMode = 1;
var TriangleFanDrawMode = 2;
var LinearEncoding = 3000;
var sRGBEncoding = 3001;
var GammaEncoding = 3007;
var RGBEEncoding = 3002;
var LogLuvEncoding = 3003;
var RGBM7Encoding = 3004;
var RGBM16Encoding = 3005;
var RGBDEncoding = 3006;
var BasicDepthPacking = 3200;
var RGBADepthPacking = 3201;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Object3D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Quaternion__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EventDispatcher__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Euler__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layers__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_Matrix3__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_Math__ = __webpack_require__(5);









/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author elephantatwork / www.elephantatwork.ch
 */

var object3DId = 0;

function Object3D() {

	Object.defineProperty( this, 'id', { value: object3DId ++ } );

	this.uuid = __WEBPACK_IMPORTED_MODULE_7__math_Math__["a" /* _Math */].generateUUID();

	this.name = '';
	this.type = 'Object3D';

	this.parent = null;
	this.children = [];

	this.up = Object3D.DefaultUp.clone();

	var position = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();
	var rotation = new __WEBPACK_IMPORTED_MODULE_4__math_Euler__["a" /* Euler */]();
	var quaternion = new __WEBPACK_IMPORTED_MODULE_0__math_Quaternion__["a" /* Quaternion */]();
	var scale = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]( 1, 1, 1 );

	function onRotationChange() {

		quaternion.setFromEuler( rotation, false );

	}

	function onQuaternionChange() {

		rotation.setFromQuaternion( quaternion, undefined, false );

	}

	rotation.onChange( onRotationChange );
	quaternion.onChange( onQuaternionChange );

	Object.defineProperties( this, {
		position: {
			enumerable: true,
			value: position
		},
		rotation: {
			enumerable: true,
			value: rotation
		},
		quaternion: {
			enumerable: true,
			value: quaternion
		},
		scale: {
			enumerable: true,
			value: scale
		},
		modelViewMatrix: {
			value: new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */]()
		},
		normalMatrix: {
			value: new __WEBPACK_IMPORTED_MODULE_6__math_Matrix3__["a" /* Matrix3 */]()
		}
	} );

	this.matrix = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */]();
	this.matrixWorld = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */]();

	this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate;
	this.matrixWorldNeedsUpdate = false;

	this.layers = new __WEBPACK_IMPORTED_MODULE_5__Layers__["a" /* Layers */]();
	this.visible = true;

	this.castShadow = false;
	this.receiveShadow = false;

	this.frustumCulled = true;
	this.renderOrder = 0;

	this.userData = {};
}

Object3D.DefaultUp = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]( 0, 1, 0 );
Object3D.DefaultMatrixAutoUpdate = true;

Object.assign( Object3D.prototype, __WEBPACK_IMPORTED_MODULE_3__EventDispatcher__["a" /* EventDispatcher */].prototype, {

	isObject3D: true,

	onBeforeRender: function () {},
	onAfterRender: function () {},

	applyMatrix: function ( matrix ) {

		this.matrix.multiplyMatrices( matrix, this.matrix );

		this.matrix.decompose( this.position, this.quaternion, this.scale );

	},

	applyQuaternion: function ( q ) {

		this.quaternion.premultiply( q );

		return this;

	},

	setRotationFromAxisAngle: function ( axis, angle ) {

		// assumes axis is normalized

		this.quaternion.setFromAxisAngle( axis, angle );

	},

	setRotationFromEuler: function ( euler ) {

		this.quaternion.setFromEuler( euler, true );

	},

	setRotationFromMatrix: function ( m ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this.quaternion.setFromRotationMatrix( m );

	},

	setRotationFromQuaternion: function ( q ) {

		// assumes q is normalized

		this.quaternion.copy( q );

	},

	rotateOnAxis: function () {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		var q1 = new __WEBPACK_IMPORTED_MODULE_0__math_Quaternion__["a" /* Quaternion */]();

		return function rotateOnAxis( axis, angle ) {

			q1.setFromAxisAngle( axis, angle );

			this.quaternion.multiply( q1 );

			return this;

		};

	}(),

	rotateX: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]( 1, 0, 0 );

		return function rotateX( angle ) {

			return this.rotateOnAxis( v1, angle );

		};

	}(),

	rotateY: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]( 0, 1, 0 );

		return function rotateY( angle ) {

			return this.rotateOnAxis( v1, angle );

		};

	}(),

	rotateZ: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]( 0, 0, 1 );

		return function rotateZ( angle ) {

			return this.rotateOnAxis( v1, angle );

		};

	}(),

	translateOnAxis: function () {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();

		return function translateOnAxis( axis, distance ) {

			v1.copy( axis ).applyQuaternion( this.quaternion );

			this.position.add( v1.multiplyScalar( distance ) );

			return this;

		};

	}(),

	translateX: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]( 1, 0, 0 );

		return function translateX( distance ) {

			return this.translateOnAxis( v1, distance );

		};

	}(),

	translateY: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]( 0, 1, 0 );

		return function translateY( distance ) {

			return this.translateOnAxis( v1, distance );

		};

	}(),

	translateZ: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]( 0, 0, 1 );

		return function translateZ( distance ) {

			return this.translateOnAxis( v1, distance );

		};

	}(),

	localToWorld: function ( vector ) {

		return vector.applyMatrix4( this.matrixWorld );

	},

	worldToLocal: function () {

		var m1 = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */]();

		return function worldToLocal( vector ) {

			return vector.applyMatrix4( m1.getInverse( this.matrixWorld ) );

		};

	}(),

	lookAt: function () {

		// This method does not support objects with rotated and/or translated parent(s)

		var m1 = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */]();

		return function lookAt( vector ) {

			if ( this.isCamera ) {

				m1.lookAt( this.position, vector, this.up );

			} else {

				m1.lookAt( vector, this.position, this.up );

			}

			this.quaternion.setFromRotationMatrix( m1 );

		};

	}(),

	add: function ( object ) {

		if ( arguments.length > 1 ) {

			for ( var i = 0; i < arguments.length; i ++ ) {

				this.add( arguments[ i ] );

			}

			return this;

		}

		if ( object === this ) {

			console.error( "THREE.Object3D.add: object can't be added as a child of itself.", object );
			return this;

		}

		if ( ( object && object.isObject3D ) ) {

			if ( object.parent !== null ) {

				object.parent.remove( object );

			}

			object.parent = this;
			object.dispatchEvent( { type: 'added' } );

			this.children.push( object );

		} else {

			console.error( "THREE.Object3D.add: object not an instance of THREE.Object3D.", object );

		}

		return this;

	},

	remove: function ( object ) {

		if ( arguments.length > 1 ) {

			for ( var i = 0; i < arguments.length; i ++ ) {

				this.remove( arguments[ i ] );

			}

			return this;

		}

		var index = this.children.indexOf( object );

		if ( index !== - 1 ) {

			object.parent = null;

			object.dispatchEvent( { type: 'removed' } );

			this.children.splice( index, 1 );

		}

		return this;
		
	},

	getObjectById: function ( id ) {

		return this.getObjectByProperty( 'id', id );

	},

	getObjectByName: function ( name ) {

		return this.getObjectByProperty( 'name', name );

	},

	getObjectByProperty: function ( name, value ) {

		if ( this[ name ] === value ) return this;

		for ( var i = 0, l = this.children.length; i < l; i ++ ) {

			var child = this.children[ i ];
			var object = child.getObjectByProperty( name, value );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	},

	getWorldPosition: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();

		this.updateMatrixWorld( true );

		return result.setFromMatrixPosition( this.matrixWorld );

	},

	getWorldQuaternion: function () {

		var position = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();
		var scale = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();

		return function getWorldQuaternion( optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__math_Quaternion__["a" /* Quaternion */]();

			this.updateMatrixWorld( true );

			this.matrixWorld.decompose( position, result, scale );

			return result;

		};

	}(),

	getWorldRotation: function () {

		var quaternion = new __WEBPACK_IMPORTED_MODULE_0__math_Quaternion__["a" /* Quaternion */]();

		return function getWorldRotation( optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_4__math_Euler__["a" /* Euler */]();

			this.getWorldQuaternion( quaternion );

			return result.setFromQuaternion( quaternion, this.rotation.order, false );

		};

	}(),

	getWorldScale: function () {

		var position = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();
		var quaternion = new __WEBPACK_IMPORTED_MODULE_0__math_Quaternion__["a" /* Quaternion */]();

		return function getWorldScale( optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();

			this.updateMatrixWorld( true );

			this.matrixWorld.decompose( position, quaternion, result );

			return result;

		};

	}(),

	getWorldDirection: function () {

		var quaternion = new __WEBPACK_IMPORTED_MODULE_0__math_Quaternion__["a" /* Quaternion */]();

		return function getWorldDirection( optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();

			this.getWorldQuaternion( quaternion );

			return result.set( 0, 0, 1 ).applyQuaternion( quaternion );

		};

	}(),

	raycast: function () {},

	traverse: function ( callback ) {

		callback( this );

		var children = this.children;

		for ( var i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	},

	traverseVisible: function ( callback ) {

		if ( this.visible === false ) return;

		callback( this );

		var children = this.children;

		for ( var i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	},

	traverseAncestors: function ( callback ) {

		var parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	},

	updateMatrix: function () {

		this.matrix.compose( this.position, this.quaternion, this.scale );

		this.matrixWorldNeedsUpdate = true;

	},

	updateMatrixWorld: function ( force ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// update children

		var children = this.children;

		for ( var i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].updateMatrixWorld( force );

		}

	},

	toJSON: function ( meta ) {

		// meta is '' when called from JSON.stringify
		var isRootObject = ( meta === undefined || meta === '' );

		var output = {};

		// meta is a hash used to collect geometries, materials.
		// not providing it implies that this is the root object
		// being serialized.
		if ( isRootObject ) {

			// initialize meta obj
			meta = {
				geometries: {},
				materials: {},
				textures: {},
				images: {}
			};

			output.metadata = {
				version: 4.5,
				type: 'Object',
				generator: 'Object3D.toJSON'
			};

		}

		// standard Object3D serialization

		var object = {};

		object.uuid = this.uuid;
		object.type = this.type;

		if ( this.name !== '' ) object.name = this.name;
		if ( JSON.stringify( this.userData ) !== '{}' ) object.userData = this.userData;
		if ( this.castShadow === true ) object.castShadow = true;
		if ( this.receiveShadow === true ) object.receiveShadow = true;
		if ( this.visible === false ) object.visible = false;

		object.matrix = this.matrix.toArray();

		//

		function serialize( library, element ) {

			if ( library[ element.uuid ] === undefined ) {

				library[ element.uuid ] = element.toJSON( meta );

			}

			return element.uuid;

		}

		if ( this.geometry !== undefined ) {

			object.geometry = serialize( meta.geometries, this.geometry );

		}

		if ( this.material !== undefined ) {

			if ( Array.isArray( this.material ) ) {

				var uuids = [];

				for ( var i = 0, l = this.material.length; i < l; i ++ ) {

					uuids.push( serialize( meta.materials, this.material[ i ] ) );

				}

				object.material = uuids;

			} else {

				object.material = serialize( meta.materials, this.material );

			}

		}

		//

		if ( this.children.length > 0 ) {

			object.children = [];

			for ( var i = 0; i < this.children.length; i ++ ) {

				object.children.push( this.children[ i ].toJSON( meta ).object );

			}

		}

		if ( isRootObject ) {

			var geometries = extractFromCache( meta.geometries );
			var materials = extractFromCache( meta.materials );
			var textures = extractFromCache( meta.textures );
			var images = extractFromCache( meta.images );

			if ( geometries.length > 0 ) output.geometries = geometries;
			if ( materials.length > 0 ) output.materials = materials;
			if ( textures.length > 0 ) output.textures = textures;
			if ( images.length > 0 ) output.images = images;

		}

		output.object = object;

		return output;

		// extract data from the cache hash
		// remove metadata on each item
		// and return as array
		function extractFromCache( cache ) {

			var values = [];
			for ( var key in cache ) {

				var data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}
			return values;

		}

	},

	clone: function ( recursive ) {

		return new this.constructor().copy( this, recursive );

	},

	copy: function ( source, recursive ) {

		if ( recursive === undefined ) recursive = true;

		this.name = source.name;

		this.up.copy( source.up );

		this.position.copy( source.position );
		this.quaternion.copy( source.quaternion );
		this.scale.copy( source.scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.layers.mask = source.layers.mask;
		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( var i = 0; i < source.children.length; i ++ ) {

				var child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}

} );





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrix4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(0);


/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author timknip / http://www.floorplanner.com/
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */

function Matrix4() {

	this.elements = [

		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1

	];

	if ( arguments.length > 0 ) {

		console.error( 'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.' );

	}

}

Object.assign( Matrix4.prototype, {

	isMatrix4: true,

	set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		var te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	},

	identity: function () {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	},

	clone: function () {

		return new Matrix4().fromArray( this.elements );

	},

	copy: function ( m ) {

		var te = this.elements;
		var me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	},

	copyPosition: function ( m ) {

		var te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	},

	extractBasis: function ( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	},

	makeBasis: function ( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0,       0,       0,       1
		);

		return this;

	},

	extractRotation: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function extractRotation( m ) {

			var te = this.elements;
			var me = m.elements;

			var scaleX = 1 / v1.setFromMatrixColumn( m, 0 ).length();
			var scaleY = 1 / v1.setFromMatrixColumn( m, 1 ).length();
			var scaleZ = 1 / v1.setFromMatrixColumn( m, 2 ).length();

			te[ 0 ] = me[ 0 ] * scaleX;
			te[ 1 ] = me[ 1 ] * scaleX;
			te[ 2 ] = me[ 2 ] * scaleX;

			te[ 4 ] = me[ 4 ] * scaleY;
			te[ 5 ] = me[ 5 ] * scaleY;
			te[ 6 ] = me[ 6 ] * scaleY;

			te[ 8 ] = me[ 8 ] * scaleZ;
			te[ 9 ] = me[ 9 ] * scaleZ;
			te[ 10 ] = me[ 10 ] * scaleZ;

			return this;

		};

	}(),

	makeRotationFromEuler: function ( euler ) {

		if ( ! ( euler && euler.isEuler ) ) {

			console.error( 'THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );

		}

		var te = this.elements;

		var x = euler.x, y = euler.y, z = euler.z;
		var a = Math.cos( x ), b = Math.sin( x );
		var c = Math.cos( y ), d = Math.sin( y );
		var e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			var ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			var ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			var ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			var ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// last column
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// bottom row
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	},

	makeRotationFromQuaternion: function ( q ) {

		var te = this.elements;

		var x = q._x, y = q._y, z = q._z, w = q._w;
		var x2 = x + x, y2 = y + y, z2 = z + z;
		var xx = x * x2, xy = x * y2, xz = x * z2;
		var yy = y * y2, yz = y * z2, zz = z * z2;
		var wx = w * x2, wy = w * y2, wz = w * z2;

		te[ 0 ] = 1 - ( yy + zz );
		te[ 4 ] = xy - wz;
		te[ 8 ] = xz + wy;

		te[ 1 ] = xy + wz;
		te[ 5 ] = 1 - ( xx + zz );
		te[ 9 ] = yz - wx;

		te[ 2 ] = xz - wy;
		te[ 6 ] = yz + wx;
		te[ 10 ] = 1 - ( xx + yy );

		// last column
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// bottom row
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	},

	lookAt: function () {

		var x = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var y = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var z = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function lookAt( eye, target, up ) {

			var te = this.elements;

			z.subVectors( eye, target );

			if ( z.lengthSq() === 0 ) {

				// eye and target are in the same position

				z.z = 1;

			}

			z.normalize();
			x.crossVectors( up, z );

			if ( x.lengthSq() === 0 ) {

				// up and z are parallel

				if ( Math.abs( up.z ) === 1 ) {

					z.x += 0.0001;

				} else {

					z.z += 0.0001;

				}

				z.normalize();
				x.crossVectors( up, z );

			}

			x.normalize();
			y.crossVectors( z, x );

			te[ 0 ] = x.x; te[ 4 ] = y.x; te[ 8 ] = z.x;
			te[ 1 ] = x.y; te[ 5 ] = y.y; te[ 9 ] = z.y;
			te[ 2 ] = x.z; te[ 6 ] = y.z; te[ 10 ] = z.z;

			return this;

		};

	}(),

	multiply: function ( m, n ) {

		if ( n !== undefined ) {

			console.warn( 'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.' );
			return this.multiplyMatrices( m, n );

		}

		return this.multiplyMatrices( this, m );

	},

	premultiply: function ( m ) {

		return this.multiplyMatrices( m, this );

	},

	multiplyMatrices: function ( a, b ) {

		var ae = a.elements;
		var be = b.elements;
		var te = this.elements;

		var a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		var a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		var a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		var a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		var b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		var b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		var b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		var b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	},

	multiplyScalar: function ( s ) {

		var te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	},

	applyToBufferAttribute: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function applyToBufferAttribute( attribute ) {

			for ( var i = 0, l = attribute.count; i < l; i ++ ) {

				v1.x = attribute.getX( i );
				v1.y = attribute.getY( i );
				v1.z = attribute.getZ( i );

				v1.applyMatrix4( this );

				attribute.setXYZ( i, v1.x, v1.y, v1.z );

			}

			return attribute;

		};

	}(),

	determinant: function () {

		var te = this.elements;

		var n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		var n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		var n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		var n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	},

	transpose: function () {

		var te = this.elements;
		var tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	},

	setPosition: function ( v ) {

		var te = this.elements;

		te[ 12 ] = v.x;
		te[ 13 ] = v.y;
		te[ 14 ] = v.z;

		return this;

	},

	getInverse: function ( m, throwOnDegenerate ) {

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		var te = this.elements,
			me = m.elements,

			n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ], n41 = me[ 3 ],
			n12 = me[ 4 ], n22 = me[ 5 ], n32 = me[ 6 ], n42 = me[ 7 ],
			n13 = me[ 8 ], n23 = me[ 9 ], n33 = me[ 10 ], n43 = me[ 11 ],
			n14 = me[ 12 ], n24 = me[ 13 ], n34 = me[ 14 ], n44 = me[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) {

			var msg = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";

			if ( throwOnDegenerate === true ) {

				throw new Error( msg );

			} else {

				console.warn( msg );

			}

			return this.identity();

		}

		var detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	},

	scale: function ( v ) {

		var te = this.elements;
		var x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	},

	getMaxScaleOnAxis: function () {

		var te = this.elements;

		var scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		var scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		var scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	},

	makeTranslation: function ( x, y, z ) {

		this.set(

			1, 0, 0, x,
			0, 1, 0, y,
			0, 0, 1, z,
			0, 0, 0, 1

		);

		return this;

	},

	makeRotationX: function ( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0,  0, 0,
			0, c, - s, 0,
			0, s,  c, 0,
			0, 0,  0, 1

		);

		return this;

	},

	makeRotationY: function ( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	},

	makeRotationZ: function ( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s,  c, 0, 0,
			0,  0, 1, 0,
			0,  0, 0, 1

		);

		return this;

	},

	makeRotationAxis: function ( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		var c = Math.cos( angle );
		var s = Math.sin( angle );
		var t = 1 - c;
		var x = axis.x, y = axis.y, z = axis.z;
		var tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		 return this;

	},

	makeScale: function ( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	},

	makeShear: function ( x, y, z ) {

		this.set(

			1, y, z, 0,
			x, 1, z, 0,
			x, y, 1, 0,
			0, 0, 0, 1

		);

		return this;

	},

	compose: function ( position, quaternion, scale ) {

		this.makeRotationFromQuaternion( quaternion );
		this.scale( scale );
		this.setPosition( position );

		return this;

	},

	decompose: function () {

		var vector = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var matrix = new Matrix4();

		return function decompose( position, quaternion, scale ) {

			var te = this.elements;

			var sx = vector.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
			var sy = vector.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
			var sz = vector.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

			// if determine is negative, we need to invert one scale
			var det = this.determinant();
			if ( det < 0 ) sx = - sx;

			position.x = te[ 12 ];
			position.y = te[ 13 ];
			position.z = te[ 14 ];

			// scale the rotation part
			matrix.copy( this );

			var invSX = 1 / sx;
			var invSY = 1 / sy;
			var invSZ = 1 / sz;

			matrix.elements[ 0 ] *= invSX;
			matrix.elements[ 1 ] *= invSX;
			matrix.elements[ 2 ] *= invSX;

			matrix.elements[ 4 ] *= invSY;
			matrix.elements[ 5 ] *= invSY;
			matrix.elements[ 6 ] *= invSY;

			matrix.elements[ 8 ] *= invSZ;
			matrix.elements[ 9 ] *= invSZ;
			matrix.elements[ 10 ] *= invSZ;

			quaternion.setFromRotationMatrix( matrix );

			scale.x = sx;
			scale.y = sy;
			scale.z = sz;

			return this;

		};

	}(),

	makePerspective: function ( left, right, top, bottom, near, far ) {

		if ( far === undefined ) {

			console.warn( 'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.' );

		}

		var te = this.elements;
		var x = 2 * near / ( right - left );
		var y = 2 * near / ( top - bottom );

		var a = ( right + left ) / ( right - left );
		var b = ( top + bottom ) / ( top - bottom );
		var c = - ( far + near ) / ( far - near );
		var d = - 2 * far * near / ( far - near );

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

		return this;

	},

	makeOrthographic: function ( left, right, top, bottom, near, far ) {

		var te = this.elements;
		var w = 1.0 / ( right - left );
		var h = 1.0 / ( top - bottom );
		var p = 1.0 / ( far - near );

		var x = ( right + left ) * w;
		var y = ( top + bottom ) * h;
		var z = ( far + near ) * p;

		te[ 0 ] = 2 * w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
		te[ 1 ] = 0;	te[ 5 ] = 2 * h;	te[ 9 ] = 0;	te[ 13 ] = - y;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 * p;	te[ 14 ] = - z;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;

		return this;

	},

	equals: function ( matrix ) {

		var te = this.elements;
		var me = matrix.elements;

		for ( var i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		for ( var i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		var te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

} );





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Math__ = __webpack_require__(5);


/**
 * @author mrdoob / http://mrdoob.com/
 */

var ColorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

function Color( r, g, b ) {

	if ( g === undefined && b === undefined ) {

		// r is THREE.Color, hex or string
		return this.set( r );

	}

	return this.setRGB( r, g, b );

}

Object.assign( Color.prototype, {

	isColor: true,

	r: 1, g: 1, b: 1,

	set: function ( value ) {

		if ( value && value.isColor ) {

			this.copy( value );

		} else if ( typeof value === 'number' ) {

			this.setHex( value );

		} else if ( typeof value === 'string' ) {

			this.setStyle( value );

		}

		return this;

	},

	setScalar: function ( scalar ) {

		this.r = scalar;
		this.g = scalar;
		this.b = scalar;

		return this;

	},

	setHex: function ( hex ) {

		hex = Math.floor( hex );

		this.r = ( hex >> 16 & 255 ) / 255;
		this.g = ( hex >> 8 & 255 ) / 255;
		this.b = ( hex & 255 ) / 255;

		return this;

	},

	setRGB: function ( r, g, b ) {

		this.r = r;
		this.g = g;
		this.b = b;

		return this;

	},

	setHSL: function () {

		function hue2rgb( p, q, t ) {

			if ( t < 0 ) t += 1;
			if ( t > 1 ) t -= 1;
			if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
			if ( t < 1 / 2 ) return q;
			if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
			return p;

		}

		return function setHSL( h, s, l ) {

			// h,s,l ranges are in 0.0 - 1.0
			h = __WEBPACK_IMPORTED_MODULE_0__Math__["a" /* _Math */].euclideanModulo( h, 1 );
			s = __WEBPACK_IMPORTED_MODULE_0__Math__["a" /* _Math */].clamp( s, 0, 1 );
			l = __WEBPACK_IMPORTED_MODULE_0__Math__["a" /* _Math */].clamp( l, 0, 1 );

			if ( s === 0 ) {

				this.r = this.g = this.b = l;

			} else {

				var p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
				var q = ( 2 * l ) - p;

				this.r = hue2rgb( q, p, h + 1 / 3 );
				this.g = hue2rgb( q, p, h );
				this.b = hue2rgb( q, p, h - 1 / 3 );

			}

			return this;

		};

	}(),

	setStyle: function ( style ) {

		function handleAlpha( string ) {

			if ( string === undefined ) return;

			if ( parseFloat( string ) < 1 ) {

				console.warn( 'THREE.Color: Alpha component of ' + style + ' will be ignored.' );

			}

		}


		var m;

		if ( m = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec( style ) ) {

			// rgb / hsl

			var color;
			var name = m[ 1 ];
			var components = m[ 2 ];

			switch ( name ) {

				case 'rgb':
				case 'rgba':

					if ( color = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( components ) ) {

						// rgb(255,0,0) rgba(255,0,0,0.5)
						this.r = Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255;
						this.g = Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255;
						this.b = Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255;

						handleAlpha( color[ 5 ] );

						return this;

					}

					if ( color = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( components ) ) {

						// rgb(100%,0%,0%) rgba(100%,0%,0%,0.5)
						this.r = Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100;
						this.g = Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100;
						this.b = Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100;

						handleAlpha( color[ 5 ] );

						return this;

					}

					break;

				case 'hsl':
				case 'hsla':

					if ( color = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec( components ) ) {

						// hsl(120,50%,50%) hsla(120,50%,50%,0.5)
						var h = parseFloat( color[ 1 ] ) / 360;
						var s = parseInt( color[ 2 ], 10 ) / 100;
						var l = parseInt( color[ 3 ], 10 ) / 100;

						handleAlpha( color[ 5 ] );

						return this.setHSL( h, s, l );

					}

					break;

			}

		} else if ( m = /^\#([A-Fa-f0-9]+)$/.exec( style ) ) {

			// hex color

			var hex = m[ 1 ];
			var size = hex.length;

			if ( size === 3 ) {

				// #ff0
				this.r = parseInt( hex.charAt( 0 ) + hex.charAt( 0 ), 16 ) / 255;
				this.g = parseInt( hex.charAt( 1 ) + hex.charAt( 1 ), 16 ) / 255;
				this.b = parseInt( hex.charAt( 2 ) + hex.charAt( 2 ), 16 ) / 255;

				return this;

			} else if ( size === 6 ) {

				// #ff0000
				this.r = parseInt( hex.charAt( 0 ) + hex.charAt( 1 ), 16 ) / 255;
				this.g = parseInt( hex.charAt( 2 ) + hex.charAt( 3 ), 16 ) / 255;
				this.b = parseInt( hex.charAt( 4 ) + hex.charAt( 5 ), 16 ) / 255;

				return this;

			}

		}

		if ( style && style.length > 0 ) {

			// color keywords
			var hex = ColorKeywords[ style ];

			if ( hex !== undefined ) {

				// red
				this.setHex( hex );

			} else {

				// unknown color
				console.warn( 'THREE.Color: Unknown color ' + style );

			}

		}

		return this;

	},

	clone: function () {

		return new this.constructor( this.r, this.g, this.b );

	},

	copy: function ( color ) {

		this.r = color.r;
		this.g = color.g;
		this.b = color.b;

		return this;

	},

	copyGammaToLinear: function ( color, gammaFactor ) {

		if ( gammaFactor === undefined ) gammaFactor = 2.0;

		this.r = Math.pow( color.r, gammaFactor );
		this.g = Math.pow( color.g, gammaFactor );
		this.b = Math.pow( color.b, gammaFactor );

		return this;

	},

	copyLinearToGamma: function ( color, gammaFactor ) {

		if ( gammaFactor === undefined ) gammaFactor = 2.0;

		var safeInverse = ( gammaFactor > 0 ) ? ( 1.0 / gammaFactor ) : 1.0;

		this.r = Math.pow( color.r, safeInverse );
		this.g = Math.pow( color.g, safeInverse );
		this.b = Math.pow( color.b, safeInverse );

		return this;

	},

	convertGammaToLinear: function () {

		var r = this.r, g = this.g, b = this.b;

		this.r = r * r;
		this.g = g * g;
		this.b = b * b;

		return this;

	},

	convertLinearToGamma: function () {

		this.r = Math.sqrt( this.r );
		this.g = Math.sqrt( this.g );
		this.b = Math.sqrt( this.b );

		return this;

	},

	getHex: function () {

		return ( this.r * 255 ) << 16 ^ ( this.g * 255 ) << 8 ^ ( this.b * 255 ) << 0;

	},

	getHexString: function () {

		return ( '000000' + this.getHex().toString( 16 ) ).slice( - 6 );

	},

	getHSL: function ( optionalTarget ) {

		// h,s,l ranges are in 0.0 - 1.0

		var hsl = optionalTarget || { h: 0, s: 0, l: 0 };

		var r = this.r, g = this.g, b = this.b;

		var max = Math.max( r, g, b );
		var min = Math.min( r, g, b );

		var hue, saturation;
		var lightness = ( min + max ) / 2.0;

		if ( min === max ) {

			hue = 0;
			saturation = 0;

		} else {

			var delta = max - min;

			saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

			switch ( max ) {

				case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
				case g: hue = ( b - r ) / delta + 2; break;
				case b: hue = ( r - g ) / delta + 4; break;

			}

			hue /= 6;

		}

		hsl.h = hue;
		hsl.s = saturation;
		hsl.l = lightness;

		return hsl;

	},

	getStyle: function () {

		return 'rgb(' + ( ( this.r * 255 ) | 0 ) + ',' + ( ( this.g * 255 ) | 0 ) + ',' + ( ( this.b * 255 ) | 0 ) + ')';

	},

	offsetHSL: function ( h, s, l ) {

		var hsl = this.getHSL();

		hsl.h += h; hsl.s += s; hsl.l += l;

		this.setHSL( hsl.h, hsl.s, hsl.l );

		return this;

	},

	add: function ( color ) {

		this.r += color.r;
		this.g += color.g;
		this.b += color.b;

		return this;

	},

	addColors: function ( color1, color2 ) {

		this.r = color1.r + color2.r;
		this.g = color1.g + color2.g;
		this.b = color1.b + color2.b;

		return this;

	},

	addScalar: function ( s ) {

		this.r += s;
		this.g += s;
		this.b += s;

		return this;

	},

	sub: function( color ) {

		this.r = Math.max( 0, this.r - color.r );
		this.g = Math.max( 0, this.g - color.g );
		this.b = Math.max( 0, this.b - color.b );

		return this;

	},

	multiply: function ( color ) {

		this.r *= color.r;
		this.g *= color.g;
		this.b *= color.b;

		return this;

	},

	multiplyScalar: function ( s ) {

		this.r *= s;
		this.g *= s;
		this.b *= s;

		return this;

	},

	lerp: function ( color, alpha ) {

		this.r += ( color.r - this.r ) * alpha;
		this.g += ( color.g - this.g ) * alpha;
		this.b += ( color.b - this.b ) * alpha;

		return this;

	},

	equals: function ( c ) {

		return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		this.r = array[ offset ];
		this.g = array[ offset + 1 ];
		this.b = array[ offset + 2 ];

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		array[ offset ] = this.r;
		array[ offset + 1 ] = this.g;
		array[ offset + 2 ] = this.b;

		return array;

	},

	toJSON: function () {

		return this.getHex();

	}

} );





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Math; });
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */

var _Math = {

	DEG2RAD: Math.PI / 180,
	RAD2DEG: 180 / Math.PI,

	generateUUID: function () {

		// http://www.broofa.com/Tools/Math.uuid.htm

		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split( '' );
		var uuid = new Array( 36 );
		var rnd = 0, r;

		return function generateUUID() {

			for ( var i = 0; i < 36; i ++ ) {

				if ( i === 8 || i === 13 || i === 18 || i === 23 ) {

					uuid[ i ] = '-';

				} else if ( i === 14 ) {

					uuid[ i ] = '4';

				} else {

					if ( rnd <= 0x02 ) rnd = 0x2000000 + ( Math.random() * 0x1000000 ) | 0;
					r = rnd & 0xf;
					rnd = rnd >> 4;
					uuid[ i ] = chars[ ( i === 19 ) ? ( r & 0x3 ) | 0x8 : r ];

				}

			}

			return uuid.join( '' );

		};

	}(),

	clamp: function ( value, min, max ) {

		return Math.max( min, Math.min( max, value ) );

	},

	// compute euclidian modulo of m % n
	// https://en.wikipedia.org/wiki/Modulo_operation

	euclideanModulo: function ( n, m ) {

		return ( ( n % m ) + m ) % m;

	},

	// Linear mapping from range <a1, a2> to range <b1, b2>

	mapLinear: function ( x, a1, a2, b1, b2 ) {

		return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

	},

	// https://en.wikipedia.org/wiki/Linear_interpolation

	lerp: function ( x, y, t ) {

		return ( 1 - t ) * x + t * y;

	},

	// http://en.wikipedia.org/wiki/Smoothstep

	smoothstep: function ( x, min, max ) {

		if ( x <= min ) return 0;
		if ( x >= max ) return 1;

		x = ( x - min ) / ( max - min );

		return x * x * ( 3 - 2 * x );

	},

	smootherstep: function ( x, min, max ) {

		if ( x <= min ) return 0;
		if ( x >= max ) return 1;

		x = ( x - min ) / ( max - min );

		return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

	},

	// Random integer from <low, high> interval

	randInt: function ( low, high ) {

		return low + Math.floor( Math.random() * ( high - low + 1 ) );

	},

	// Random float from <low, high> interval

	randFloat: function ( low, high ) {

		return low + Math.random() * ( high - low );

	},

	// Random float from <-range/2, range/2> interval

	randFloatSpread: function ( range ) {

		return range * ( 0.5 - Math.random() );

	},

	degToRad: function ( degrees ) {

		return degrees * _Math.DEG2RAD;

	},

	radToDeg: function ( radians ) {

		return radians * _Math.RAD2DEG;

	},

	isPowerOfTwo: function ( value ) {

		return ( value & ( value - 1 ) ) === 0 && value !== 0;

	},

	nearestPowerOfTwo: function ( value ) {

		return Math.pow( 2, Math.round( Math.log( value ) / Math.LN2 ) );

	},

	nextPowerOfTwo: function ( value ) {

		value --;
		value |= value >> 1;
		value |= value >> 2;
		value |= value >> 4;
		value |= value >> 8;
		value |= value >> 16;
		value ++;

		return value;

	}

};





/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector2; });
/**
 * @author mrdoob / http://mrdoob.com/
 * @author philogb / http://blog.thejit.org/
 * @author egraether / http://egraether.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 */

function Vector2( x, y ) {

	this.x = x || 0;
	this.y = y || 0;

}

Object.defineProperties( Vector2.prototype, {

	"width" : {

		get: function () {

			return this.x;

		},

		set: function ( value ) {

			this.x = value;

		}

	},

	"height" : {

		get: function () {

			return this.y;

		},

		set: function ( value ) {

			this.y = value;

		}

	}

} );

Object.assign( Vector2.prototype, {

	isVector2: true,

	set: function ( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	},

	setScalar: function ( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	},

	setX: function ( x ) {

		this.x = x;

		return this;

	},

	setY: function ( y ) {

		this.y = y;

		return this;

	},

	setComponent: function ( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	},

	getComponent: function ( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	},

	clone: function () {

		return new this.constructor( this.x, this.y );

	},

	copy: function ( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	},

	add: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
			return this.addVectors( v, w );

		}

		this.x += v.x;
		this.y += v.y;

		return this;

	},

	addScalar: function ( s ) {

		this.x += s;
		this.y += s;

		return this;

	},

	addVectors: function ( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	},

	addScaledVector: function ( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	},

	sub: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
			return this.subVectors( v, w );

		}

		this.x -= v.x;
		this.y -= v.y;

		return this;

	},

	subScalar: function ( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	},

	subVectors: function ( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	},

	multiply: function ( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	},

	multiplyScalar: function ( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	},

	divide: function ( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	},

	divideScalar: function ( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	},

	min: function ( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	},

	max: function ( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	},

	clamp: function ( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );

		return this;

	},

	clampScalar: function () {

		var min = new Vector2();
		var max = new Vector2();

		return function clampScalar( minVal, maxVal ) {

			min.set( minVal, minVal );
			max.set( maxVal, maxVal );

			return this.clamp( min, max );

		};

	}(),

	clampLength: function ( min, max ) {

		var length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	},

	floor: function () {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	},

	ceil: function () {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	},

	round: function () {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	},

	roundToZero: function () {

		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );

		return this;

	},

	negate: function () {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	},

	dot: function ( v ) {

		return this.x * v.x + this.y * v.y;

	},

	lengthSq: function () {

		return this.x * this.x + this.y * this.y;

	},

	length: function () {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	},

	lengthManhattan: function() {

		return Math.abs( this.x ) + Math.abs( this.y );

	},

	normalize: function () {

		return this.divideScalar( this.length() || 1 );

	},

	angle: function () {

		// computes the angle in radians with respect to the positive x-axis

		var angle = Math.atan2( this.y, this.x );

		if ( angle < 0 ) angle += 2 * Math.PI;

		return angle;

	},

	distanceTo: function ( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	},

	distanceToSquared: function ( v ) {

		var dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	},

	distanceToManhattan: function ( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	},

	setLength: function ( length ) {

		return this.normalize().multiplyScalar( length );

	},

	lerp: function ( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	},

	lerpVectors: function ( v1, v2, alpha ) {

		return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

	},

	equals: function ( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	},

	fromBufferAttribute: function ( attribute, index, offset ) {

		if ( offset !== undefined ) {

			console.warn( 'THREE.Vector2: offset has been removed from .fromBufferAttribute().' );

		}

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	},

	rotateAround: function ( center, angle ) {

		var c = Math.cos( angle ), s = Math.sin( angle );

		var x = this.x - center.x;
		var y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

} );





/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BufferGeometry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Box3__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EventDispatcher__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Sphere__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DirectGeometry__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__math_Matrix3__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__math_Math__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Geometry__ = __webpack_require__(13);













/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */

function BufferGeometry() {

	Object.defineProperty( this, 'id', { value: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__Geometry__["b" /* GeometryIdCount */])() } );

	this.uuid = __WEBPACK_IMPORTED_MODULE_9__math_Math__["a" /* _Math */].generateUUID();

	this.name = '';
	this.type = 'BufferGeometry';

	this.index = null;
	this.attributes = {};

	this.morphAttributes = {};

	this.groups = [];

	this.boundingBox = null;
	this.boundingSphere = null;

	this.drawRange = { start: 0, count: Infinity };

}

BufferGeometry.MaxIndex = 65535;

Object.assign( BufferGeometry.prototype, __WEBPACK_IMPORTED_MODULE_2__EventDispatcher__["a" /* EventDispatcher */].prototype, {

	isBufferGeometry: true,

	getIndex: function () {

		return this.index;

	},

	setIndex: function ( index ) {

		if ( Array.isArray( index ) ) {

			this.index = new ( __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* arrayMax */])( index ) > 65535 ? __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["a" /* Uint32BufferAttribute */] : __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["b" /* Uint16BufferAttribute */] )( index, 1 );

		} else {

			this.index = index;

		}

	},

	addAttribute: function ( name, attribute ) {

		if ( ! ( attribute && attribute.isBufferAttribute ) && ! ( attribute && attribute.isInterleavedBufferAttribute ) ) {

			console.warn( 'THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).' );

			this.addAttribute( name, new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( arguments[ 1 ], arguments[ 2 ] ) );

			return;

		}

		if ( name === 'index' ) {

			console.warn( 'THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.' );
			this.setIndex( attribute );

			return;

		}

		this.attributes[ name ] = attribute;

		return this;

	},

	getAttribute: function ( name ) {

		return this.attributes[ name ];

	},

	removeAttribute: function ( name ) {

		delete this.attributes[ name ];

		return this;

	},

	addGroup: function ( start, count, materialIndex ) {

		this.groups.push( {

			start: start,
			count: count,
			materialIndex: materialIndex !== undefined ? materialIndex : 0

		} );

	},

	clearGroups: function () {

		this.groups = [];

	},

	setDrawRange: function ( start, count ) {

		this.drawRange.start = start;
		this.drawRange.count = count;

	},

	applyMatrix: function ( matrix ) {

		var position = this.attributes.position;

		if ( position !== undefined ) {

			matrix.applyToBufferAttribute( position );
			position.needsUpdate = true;

		}

		var normal = this.attributes.normal;

		if ( normal !== undefined ) {

			var normalMatrix = new __WEBPACK_IMPORTED_MODULE_8__math_Matrix3__["a" /* Matrix3 */]().getNormalMatrix( matrix );

			normalMatrix.applyToBufferAttribute( normal );
			normal.needsUpdate = true;

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		return this;

	},

	rotateX: function () {

		// rotate geometry around world x-axis

		var m1 = new __WEBPACK_IMPORTED_MODULE_7__math_Matrix4__["a" /* Matrix4 */]();

		return function rotateX( angle ) {

			m1.makeRotationX( angle );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	rotateY: function () {

		// rotate geometry around world y-axis

		var m1 = new __WEBPACK_IMPORTED_MODULE_7__math_Matrix4__["a" /* Matrix4 */]();

		return function rotateY( angle ) {

			m1.makeRotationY( angle );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	rotateZ: function () {

		// rotate geometry around world z-axis

		var m1 = new __WEBPACK_IMPORTED_MODULE_7__math_Matrix4__["a" /* Matrix4 */]();

		return function rotateZ( angle ) {

			m1.makeRotationZ( angle );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	translate: function () {

		// translate geometry

		var m1 = new __WEBPACK_IMPORTED_MODULE_7__math_Matrix4__["a" /* Matrix4 */]();

		return function translate( x, y, z ) {

			m1.makeTranslation( x, y, z );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	scale: function () {

		// scale geometry

		var m1 = new __WEBPACK_IMPORTED_MODULE_7__math_Matrix4__["a" /* Matrix4 */]();

		return function scale( x, y, z ) {

			m1.makeScale( x, y, z );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	lookAt: function () {

		var obj = new __WEBPACK_IMPORTED_MODULE_6__Object3D__["a" /* Object3D */]();

		return function lookAt( vector ) {

			obj.lookAt( vector );

			obj.updateMatrix();

			this.applyMatrix( obj.matrix );

		};

	}(),

	center: function () {

		this.computeBoundingBox();

		var offset = this.boundingBox.getCenter().negate();

		this.translate( offset.x, offset.y, offset.z );

		return offset;

	},

	setFromObject: function ( object ) {

		// console.log( 'THREE.BufferGeometry.setFromObject(). Converting', object, this );

		var geometry = object.geometry;

		if ( object.isPoints || object.isLine ) {

			var positions = new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["d" /* Float32BufferAttribute */]( geometry.vertices.length * 3, 3 );
			var colors = new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["d" /* Float32BufferAttribute */]( geometry.colors.length * 3, 3 );

			this.addAttribute( 'position', positions.copyVector3sArray( geometry.vertices ) );
			this.addAttribute( 'color', colors.copyColorsArray( geometry.colors ) );

			if ( geometry.lineDistances && geometry.lineDistances.length === geometry.vertices.length ) {

				var lineDistances = new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["d" /* Float32BufferAttribute */]( geometry.lineDistances.length, 1 );

				this.addAttribute( 'lineDistance', lineDistances.copyArray( geometry.lineDistances ) );

			}

			if ( geometry.boundingSphere !== null ) {

				this.boundingSphere = geometry.boundingSphere.clone();

			}

			if ( geometry.boundingBox !== null ) {

				this.boundingBox = geometry.boundingBox.clone();

			}

		} else if ( object.isMesh ) {

			if ( geometry && geometry.isGeometry ) {

				this.fromGeometry( geometry );

			}

		}

		return this;

	},

	updateFromObject: function ( object ) {

		var geometry = object.geometry;

		if ( object.isMesh ) {

			var direct = geometry.__directGeometry;

			if ( geometry.elementsNeedUpdate === true ) {

				direct = undefined;
				geometry.elementsNeedUpdate = false;

			}

			if ( direct === undefined ) {

				return this.fromGeometry( geometry );

			}

			direct.verticesNeedUpdate = geometry.verticesNeedUpdate;
			direct.normalsNeedUpdate = geometry.normalsNeedUpdate;
			direct.colorsNeedUpdate = geometry.colorsNeedUpdate;
			direct.uvsNeedUpdate = geometry.uvsNeedUpdate;
			direct.groupsNeedUpdate = geometry.groupsNeedUpdate;

			geometry.verticesNeedUpdate = false;
			geometry.normalsNeedUpdate = false;
			geometry.colorsNeedUpdate = false;
			geometry.uvsNeedUpdate = false;
			geometry.groupsNeedUpdate = false;

			geometry = direct;

		}

		var attribute;

		if ( geometry.verticesNeedUpdate === true ) {

			attribute = this.attributes.position;

			if ( attribute !== undefined ) {

				attribute.copyVector3sArray( geometry.vertices );
				attribute.needsUpdate = true;

			}

			geometry.verticesNeedUpdate = false;

		}

		if ( geometry.normalsNeedUpdate === true ) {

			attribute = this.attributes.normal;

			if ( attribute !== undefined ) {

				attribute.copyVector3sArray( geometry.normals );
				attribute.needsUpdate = true;

			}

			geometry.normalsNeedUpdate = false;

		}

		if ( geometry.colorsNeedUpdate === true ) {

			attribute = this.attributes.color;

			if ( attribute !== undefined ) {

				attribute.copyColorsArray( geometry.colors );
				attribute.needsUpdate = true;

			}

			geometry.colorsNeedUpdate = false;

		}

		if ( geometry.uvsNeedUpdate ) {

			attribute = this.attributes.uv;

			if ( attribute !== undefined ) {

				attribute.copyVector2sArray( geometry.uvs );
				attribute.needsUpdate = true;

			}

			geometry.uvsNeedUpdate = false;

		}

		if ( geometry.lineDistancesNeedUpdate ) {

			attribute = this.attributes.lineDistance;

			if ( attribute !== undefined ) {

				attribute.copyArray( geometry.lineDistances );
				attribute.needsUpdate = true;

			}

			geometry.lineDistancesNeedUpdate = false;

		}

		if ( geometry.groupsNeedUpdate ) {

			geometry.computeGroups( object.geometry );
			this.groups = geometry.groups;

			geometry.groupsNeedUpdate = false;

		}

		return this;

	},

	fromGeometry: function ( geometry ) {

		geometry.__directGeometry = new __WEBPACK_IMPORTED_MODULE_5__DirectGeometry__["a" /* DirectGeometry */]().fromGeometry( geometry );

		return this.fromDirectGeometry( geometry.__directGeometry );

	},

	fromDirectGeometry: function ( geometry ) {

		var positions = new Float32Array( geometry.vertices.length * 3 );
		this.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( positions, 3 ).copyVector3sArray( geometry.vertices ) );

		if ( geometry.normals.length > 0 ) {

			var normals = new Float32Array( geometry.normals.length * 3 );
			this.addAttribute( 'normal', new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( normals, 3 ).copyVector3sArray( geometry.normals ) );

		}

		if ( geometry.colors.length > 0 ) {

			var colors = new Float32Array( geometry.colors.length * 3 );
			this.addAttribute( 'color', new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( colors, 3 ).copyColorsArray( geometry.colors ) );

		}

		if ( geometry.uvs.length > 0 ) {

			var uvs = new Float32Array( geometry.uvs.length * 2 );
			this.addAttribute( 'uv', new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( uvs, 2 ).copyVector2sArray( geometry.uvs ) );

		}

		if ( geometry.uvs2.length > 0 ) {

			var uvs2 = new Float32Array( geometry.uvs2.length * 2 );
			this.addAttribute( 'uv2', new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( uvs2, 2 ).copyVector2sArray( geometry.uvs2 ) );

		}

		if ( geometry.indices.length > 0 ) {

			var TypeArray = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils__["a" /* arrayMax */])( geometry.indices ) > 65535 ? Uint32Array : Uint16Array;
			var indices = new TypeArray( geometry.indices.length * 3 );
			this.setIndex( new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( indices, 1 ).copyIndicesArray( geometry.indices ) );

		}

		// groups

		this.groups = geometry.groups;

		// morphs

		for ( var name in geometry.morphTargets ) {

			var array = [];
			var morphTargets = geometry.morphTargets[ name ];

			for ( var i = 0, l = morphTargets.length; i < l; i ++ ) {

				var morphTarget = morphTargets[ i ];

				var attribute = new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["d" /* Float32BufferAttribute */]( morphTarget.length * 3, 3 );

				array.push( attribute.copyVector3sArray( morphTarget ) );

			}

			this.morphAttributes[ name ] = array;

		}

		// skinning

		if ( geometry.skinIndices.length > 0 ) {

			var skinIndices = new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["d" /* Float32BufferAttribute */]( geometry.skinIndices.length * 4, 4 );
			this.addAttribute( 'skinIndex', skinIndices.copyVector4sArray( geometry.skinIndices ) );

		}

		if ( geometry.skinWeights.length > 0 ) {

			var skinWeights = new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["d" /* Float32BufferAttribute */]( geometry.skinWeights.length * 4, 4 );
			this.addAttribute( 'skinWeight', skinWeights.copyVector4sArray( geometry.skinWeights ) );

		}

		//

		if ( geometry.boundingSphere !== null ) {

			this.boundingSphere = geometry.boundingSphere.clone();

		}

		if ( geometry.boundingBox !== null ) {

			this.boundingBox = geometry.boundingBox.clone();

		}

		return this;

	},

	computeBoundingBox: function () {

		if ( this.boundingBox === null ) {

			this.boundingBox = new __WEBPACK_IMPORTED_MODULE_1__math_Box3__["a" /* Box3 */]();

		}

		var position = this.attributes.position;

		if ( position !== undefined ) {

			this.boundingBox.setFromBufferAttribute( position );

		} else {

			this.boundingBox.makeEmpty();

		}

		if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

		}

	},

	computeBoundingSphere: function () {

		var box = new __WEBPACK_IMPORTED_MODULE_1__math_Box3__["a" /* Box3 */]();
		var vector = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();

		return function computeBoundingSphere() {

			if ( this.boundingSphere === null ) {

				this.boundingSphere = new __WEBPACK_IMPORTED_MODULE_4__math_Sphere__["a" /* Sphere */]();

			}

			var position = this.attributes.position;

			if ( position ) {

				var center = this.boundingSphere.center;

				box.setFromBufferAttribute( position );
				box.getCenter( center );

				// hoping to find a boundingSphere with a radius smaller than the
				// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

				var maxRadiusSq = 0;

				for ( var i = 0, il = position.count; i < il; i ++ ) {

					vector.x = position.getX( i );
					vector.y = position.getY( i );
					vector.z = position.getZ( i );
					maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( vector ) );

				}

				this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

				if ( isNaN( this.boundingSphere.radius ) ) {

					console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

				}

			}

		};

	}(),

	computeFaceNormals: function () {

		// backwards compatibility

	},

	computeVertexNormals: function () {

		var index = this.index;
		var attributes = this.attributes;
		var groups = this.groups;

		if ( attributes.position ) {

			var positions = attributes.position.array;

			if ( attributes.normal === undefined ) {

				this.addAttribute( 'normal', new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( new Float32Array( positions.length ), 3 ) );

			} else {

				// reset existing normals to zero

				var array = attributes.normal.array;

				for ( var i = 0, il = array.length; i < il; i ++ ) {

					array[ i ] = 0;

				}

			}

			var normals = attributes.normal.array;

			var vA, vB, vC;
			var pA = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */](), pB = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */](), pC = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();
			var cb = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */](), ab = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();

			// indexed elements

			if ( index ) {

				var indices = index.array;

				if ( groups.length === 0 ) {

					this.addGroup( 0, indices.length );

				}

				for ( var j = 0, jl = groups.length; j < jl; ++ j ) {

					var group = groups[ j ];

					var start = group.start;
					var count = group.count;

					for ( var i = start, il = start + count; i < il; i += 3 ) {

						vA = indices[ i + 0 ] * 3;
						vB = indices[ i + 1 ] * 3;
						vC = indices[ i + 2 ] * 3;

						pA.fromArray( positions, vA );
						pB.fromArray( positions, vB );
						pC.fromArray( positions, vC );

						cb.subVectors( pC, pB );
						ab.subVectors( pA, pB );
						cb.cross( ab );

						normals[ vA ] += cb.x;
						normals[ vA + 1 ] += cb.y;
						normals[ vA + 2 ] += cb.z;

						normals[ vB ] += cb.x;
						normals[ vB + 1 ] += cb.y;
						normals[ vB + 2 ] += cb.z;

						normals[ vC ] += cb.x;
						normals[ vC + 1 ] += cb.y;
						normals[ vC + 2 ] += cb.z;

					}

				}

			} else {

				// non-indexed elements (unconnected triangle soup)

				for ( var i = 0, il = positions.length; i < il; i += 9 ) {

					pA.fromArray( positions, i );
					pB.fromArray( positions, i + 3 );
					pC.fromArray( positions, i + 6 );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					normals[ i ] = cb.x;
					normals[ i + 1 ] = cb.y;
					normals[ i + 2 ] = cb.z;

					normals[ i + 3 ] = cb.x;
					normals[ i + 4 ] = cb.y;
					normals[ i + 5 ] = cb.z;

					normals[ i + 6 ] = cb.x;
					normals[ i + 7 ] = cb.y;
					normals[ i + 8 ] = cb.z;

				}

			}

			this.normalizeNormals();

			attributes.normal.needsUpdate = true;

		}

	},

	merge: function ( geometry, offset ) {

		if ( ! ( geometry && geometry.isBufferGeometry ) ) {

			console.error( 'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.', geometry );
			return;

		}

		if ( offset === undefined ) offset = 0;

		var attributes = this.attributes;

		for ( var key in attributes ) {

			if ( geometry.attributes[ key ] === undefined ) continue;

			var attribute1 = attributes[ key ];
			var attributeArray1 = attribute1.array;

			var attribute2 = geometry.attributes[ key ];
			var attributeArray2 = attribute2.array;

			var attributeSize = attribute2.itemSize;

			for ( var i = 0, j = attributeSize * offset; i < attributeArray2.length; i ++, j ++ ) {

				attributeArray1[ j ] = attributeArray2[ i ];

			}

		}

		return this;

	},

	normalizeNormals: function () {

		var normals = this.attributes.normal;

		var x, y, z, n;

		for ( var i = 0, il = normals.count; i < il; i ++ ) {

			x = normals.getX( i );
			y = normals.getY( i );
			z = normals.getZ( i );

			n = 1.0 / Math.sqrt( x * x + y * y + z * z );

			normals.setXYZ( i, x * n, y * n, z * n );

		}

	},

	toNonIndexed: function () {

		if ( this.index === null ) {

			console.warn( 'THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.' );
			return this;

		}

		var geometry2 = new BufferGeometry();

		var indices = this.index.array;
		var attributes = this.attributes;

		for ( var name in attributes ) {

			var attribute = attributes[ name ];

			var array = attribute.array;
			var itemSize = attribute.itemSize;

			var array2 = new array.constructor( indices.length * itemSize );

			var index = 0, index2 = 0;

			for ( var i = 0, l = indices.length; i < l; i ++ ) {

				index = indices[ i ] * itemSize;

				for ( var j = 0; j < itemSize; j ++ ) {

					array2[ index2 ++ ] = array[ index ++ ];

				}

			}

			geometry2.addAttribute( name, new __WEBPACK_IMPORTED_MODULE_3__BufferAttribute__["c" /* BufferAttribute */]( array2, itemSize ) );

		}

		return geometry2;

	},

	toJSON: function () {

		var data = {
			metadata: {
				version: 4.5,
				type: 'BufferGeometry',
				generator: 'BufferGeometry.toJSON'
			}
		};

		// standard BufferGeometry serialization

		data.uuid = this.uuid;
		data.type = this.type;
		if ( this.name !== '' ) data.name = this.name;

		if ( this.parameters !== undefined ) {

			var parameters = this.parameters;

			for ( var key in parameters ) {

				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

			}

			return data;

		}

		data.data = { attributes: {} };

		var index = this.index;

		if ( index !== null ) {

			var array = Array.prototype.slice.call( index.array );

			data.data.index = {
				type: index.array.constructor.name,
				array: array
			};

		}

		var attributes = this.attributes;

		for ( var key in attributes ) {

			var attribute = attributes[ key ];

			var array = Array.prototype.slice.call( attribute.array );

			data.data.attributes[ key ] = {
				itemSize: attribute.itemSize,
				type: attribute.array.constructor.name,
				array: array,
				normalized: attribute.normalized
			};

		}

		var groups = this.groups;

		if ( groups.length > 0 ) {

			data.data.groups = JSON.parse( JSON.stringify( groups ) );

		}

		var boundingSphere = this.boundingSphere;

		if ( boundingSphere !== null ) {

			data.data.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			};

		}

		return data;

	},

	clone: function () {

		/*
		 // Handle primitives

		 var parameters = this.parameters;

		 if ( parameters !== undefined ) {

		 var values = [];

		 for ( var key in parameters ) {

		 values.push( parameters[ key ] );

		 }

		 var geometry = Object.create( this.constructor.prototype );
		 this.constructor.apply( geometry, values );
		 return geometry;

		 }

		 return new this.constructor().copy( this );
		 */

		return new BufferGeometry().copy( this );

	},

	copy: function ( source ) {

		var name, i, l;

		// reset

		this.index = null;
		this.attributes = {};
		this.morphAttributes = {};
		this.groups = [];
		this.boundingBox = null;
		this.boundingSphere = null;

		// name

		this.name = source.name;

		// index

		var index = source.index;

		if ( index !== null ) {

			this.setIndex( index.clone() );

		}

		// attributes

		var attributes = source.attributes;

		for ( name in attributes ) {

			var attribute = attributes[ name ];
			this.addAttribute( name, attribute.clone() );

		}

		// morph attributes

		var morphAttributes = source.morphAttributes;

		for ( name in morphAttributes ) {

			var array = [];
			var morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( i = 0, l = morphAttribute.length; i < l; i ++ ) {

				array.push( morphAttribute[ i ].clone() );

			}

			this.morphAttributes[ name ] = array;

		}

		// groups

		var groups = source.groups;

		for ( i = 0, l = groups.length; i < l; i ++ ) {

			var group = groups[ i ];
			this.addGroup( group.start, group.count, group.materialIndex );

		}

		// bounding box

		var boundingBox = source.boundingBox;

		if ( boundingBox !== null ) {

			this.boundingBox = boundingBox.clone();

		}

		// bounding sphere

		var boundingSphere = source.boundingSphere;

		if ( boundingSphere !== null ) {

			this.boundingSphere = boundingSphere.clone();

		}

		// draw range

		this.drawRange.start = source.drawRange.start;
		this.drawRange.count = source.drawRange.count;

		return this;

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	}

} );





/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Texture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Math__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Vector2__ = __webpack_require__(6);






/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 */

var textureId = 0;

function Texture( image, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding ) {

	Object.defineProperty( this, 'id', { value: textureId ++ } );

	this.uuid = __WEBPACK_IMPORTED_MODULE_2__math_Math__["a" /* _Math */].generateUUID();

	this.name = '';

	this.image = image !== undefined ? image : Texture.DEFAULT_IMAGE;
	this.mipmaps = [];

	this.mapping = mapping !== undefined ? mapping : Texture.DEFAULT_MAPPING;

	this.wrapS = wrapS !== undefined ? wrapS : __WEBPACK_IMPORTED_MODULE_1__constants__["u" /* ClampToEdgeWrapping */];
	this.wrapT = wrapT !== undefined ? wrapT : __WEBPACK_IMPORTED_MODULE_1__constants__["u" /* ClampToEdgeWrapping */];

	this.magFilter = magFilter !== undefined ? magFilter : __WEBPACK_IMPORTED_MODULE_1__constants__["z" /* LinearFilter */];
	this.minFilter = minFilter !== undefined ? minFilter : __WEBPACK_IMPORTED_MODULE_1__constants__["B" /* LinearMipMapLinearFilter */];

	this.anisotropy = anisotropy !== undefined ? anisotropy : 1;

	this.format = format !== undefined ? format : __WEBPACK_IMPORTED_MODULE_1__constants__["o" /* RGBAFormat */];
	this.type = type !== undefined ? type : __WEBPACK_IMPORTED_MODULE_1__constants__["r" /* UnsignedByteType */];

	this.offset = new __WEBPACK_IMPORTED_MODULE_3__math_Vector2__["a" /* Vector2 */]( 0, 0 );
	this.repeat = new __WEBPACK_IMPORTED_MODULE_3__math_Vector2__["a" /* Vector2 */]( 1, 1 );

	this.generateMipmaps = true;
	this.premultiplyAlpha = false;
	this.flipY = true;
	this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

	// Values of encoding !== THREE.LinearEncoding only supported on map, envMap and emissiveMap.
	//
	// Also changing the encoding after already used by a Material will not automatically make the Material
	// update.  You need to explicitly call Material.needsUpdate to trigger it to recompile.
	this.encoding = encoding !== undefined ? encoding : __WEBPACK_IMPORTED_MODULE_1__constants__["_13" /* LinearEncoding */];

	this.version = 0;
	this.onUpdate = null;

}

Texture.DEFAULT_IMAGE = undefined;
Texture.DEFAULT_MAPPING = __WEBPACK_IMPORTED_MODULE_1__constants__["_14" /* UVMapping */];

Object.defineProperty( Texture.prototype, "needsUpdate", {

	set: function ( value ) {

		if ( value === true ) this.version ++;

	}

} );

Object.assign( Texture.prototype, __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__["a" /* EventDispatcher */].prototype, {

	constructor: Texture,

	isTexture: true,

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.name = source.name;

		this.image = source.image;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.encoding = source.encoding;

		return this;

	},

	toJSON: function ( meta ) {

		if ( meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		function getDataURL( image ) {

			var canvas;

			if ( image.toDataURL !== undefined ) {

				canvas = image;

			} else {

				canvas = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
				canvas.width = image.width;
				canvas.height = image.height;

				canvas.getContext( '2d' ).drawImage( image, 0, 0, image.width, image.height );

			}

			if ( canvas.width > 2048 || canvas.height > 2048 ) {

				return canvas.toDataURL( 'image/jpeg', 0.6 );

			} else {

				return canvas.toDataURL( 'image/png' );

			}

		}

		var output = {
			metadata: {
				version: 4.5,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			mapping: this.mapping,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			wrap: [ this.wrapS, this.wrapT ],

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY
		};

		if ( this.image !== undefined ) {

			// TODO: Move to THREE.Image

			var image = this.image;

			if ( image.uuid === undefined ) {

				image.uuid = __WEBPACK_IMPORTED_MODULE_2__math_Math__["a" /* _Math */].generateUUID(); // UGH

			}

			if ( meta.images[ image.uuid ] === undefined ) {

				meta.images[ image.uuid ] = {
					uuid: image.uuid,
					url: getDataURL( image )
				};

			}

			output.image = image.uuid;

		}

		meta.textures[ this.uuid ] = output;

		return output;

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	},

	transformUv: function ( uv ) {

		if ( this.mapping !== __WEBPACK_IMPORTED_MODULE_1__constants__["_14" /* UVMapping */] ) return;

		uv.multiply( this.repeat );
		uv.add( this.offset );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case __WEBPACK_IMPORTED_MODULE_1__constants__["t" /* RepeatWrapping */]:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case __WEBPACK_IMPORTED_MODULE_1__constants__["u" /* ClampToEdgeWrapping */]:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case __WEBPACK_IMPORTED_MODULE_1__constants__["v" /* MirroredRepeatWrapping */]:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}
					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case __WEBPACK_IMPORTED_MODULE_1__constants__["t" /* RepeatWrapping */]:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case __WEBPACK_IMPORTED_MODULE_1__constants__["u" /* ClampToEdgeWrapping */]:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case __WEBPACK_IMPORTED_MODULE_1__constants__["v" /* MirroredRepeatWrapping */]:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}
					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

	}

} );





/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sphere; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Box3__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector3__ = __webpack_require__(0);



/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */

function Sphere( center, radius ) {

	this.center = ( center !== undefined ) ? center : new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();
	this.radius = ( radius !== undefined ) ? radius : 0;

}

Object.assign( Sphere.prototype, {

	set: function ( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	},

	setFromPoints: function () {

		var box = new __WEBPACK_IMPORTED_MODULE_0__Box3__["a" /* Box3 */]();

		return function setFromPoints( points, optionalCenter ) {

			var center = this.center;

			if ( optionalCenter !== undefined ) {

				center.copy( optionalCenter );

			} else {

				box.setFromPoints( points ).getCenter( center );

			}

			var maxRadiusSq = 0;

			for ( var i = 0, il = points.length; i < il; i ++ ) {

				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

			}

			this.radius = Math.sqrt( maxRadiusSq );

			return this;

		};

	}(),

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	},

	empty: function () {

		return ( this.radius <= 0 );

	},

	containsPoint: function ( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	},

	distanceToPoint: function ( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	},

	intersectsSphere: function ( sphere ) {

		var radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	},

	intersectsBox: function ( box ) {

		return box.intersectsSphere( this );

	},

	intersectsPlane: function ( plane ) {

		// We use the following equation to compute the signed distance from
		// the center of the sphere to the plane.
		//
		// distance = q * n - d
		//
		// If this distance is greater than the radius of the sphere,
		// then there is no intersection.

		return Math.abs( this.center.dot( plane.normal ) - plane.constant ) <= this.radius;

	},

	clampPoint: function ( point, optionalTarget ) {

		var deltaLengthSq = this.center.distanceToSquared( point );

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();

		result.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			result.sub( this.center ).normalize();
			result.multiplyScalar( this.radius ).add( this.center );

		}

		return result;

	},

	getBoundingBox: function ( optionalTarget ) {

		var box = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Box3__["a" /* Box3 */]();

		box.set( this.center, this.center );
		box.expandByScalar( this.radius );

		return box;

	},

	applyMatrix4: function ( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	},

	translate: function ( offset ) {

		this.center.add( offset );

		return this;

	},

	equals: function ( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

} );





/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Vector4; });
/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */

function Vector4( x, y, z, w ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = ( w !== undefined ) ? w : 1;

}

Object.assign( Vector4.prototype, {

	isVector4: true,

	set: function ( x, y, z, w ) {

		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;

		return this;

	},

	setScalar: function ( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;
		this.w = scalar;

		return this;

	},

	setX: function ( x ) {

		this.x = x;

		return this;

	},

	setY: function ( y ) {

		this.y = y;

		return this;

	},

	setZ: function ( z ) {

		this.z = z;

		return this;

	},

	setW: function ( w ) {

		this.w = w;

		return this;

	},

	setComponent: function ( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			case 3: this.w = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	},

	getComponent: function ( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw new Error( 'index is out of range: ' + index );

		}

	},

	clone: function () {

		return new this.constructor( this.x, this.y, this.z, this.w );

	},

	copy: function ( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = ( v.w !== undefined ) ? v.w : 1;

		return this;

	},

	add: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
			return this.addVectors( v, w );

		}

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		this.w += v.w;

		return this;

	},

	addScalar: function ( s ) {

		this.x += s;
		this.y += s;
		this.z += s;
		this.w += s;

		return this;

	},

	addVectors: function ( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;
		this.w = a.w + b.w;

		return this;

	},

	addScaledVector: function ( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		this.w += v.w * s;

		return this;

	},

	sub: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
			return this.subVectors( v, w );

		}

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		this.w -= v.w;

		return this;

	},

	subScalar: function ( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;
		this.w -= s;

		return this;

	},

	subVectors: function ( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;
		this.w = a.w - b.w;

		return this;

	},

	multiplyScalar: function ( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		this.w *= scalar;

		return this;

	},

	applyMatrix4: function ( m ) {

		var x = this.x, y = this.y, z = this.z, w = this.w;
		var e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
		this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

		return this;

	},

	divideScalar: function ( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	},

	setAxisAngleFromQuaternion: function ( q ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

		// q is assumed to be normalized

		this.w = 2 * Math.acos( q.w );

		var s = Math.sqrt( 1 - q.w * q.w );

		if ( s < 0.0001 ) {

			 this.x = 1;
			 this.y = 0;
			 this.z = 0;

		} else {

			 this.x = q.x / s;
			 this.y = q.y / s;
			 this.z = q.z / s;

		}

		return this;

	},

	setAxisAngleFromRotationMatrix: function ( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		var angle, x, y, z,		// variables for result
			epsilon = 0.01,		// margin to allow for rounding errors
			epsilon2 = 0.1,		// margin to distinguish between 0 and 180 degrees

			te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		if ( ( Math.abs( m12 - m21 ) < epsilon ) &&
		     ( Math.abs( m13 - m31 ) < epsilon ) &&
		     ( Math.abs( m23 - m32 ) < epsilon ) ) {

			// singularity found
			// first check for identity matrix which must have +1 for all terms
			// in leading diagonal and zero in other terms

			if ( ( Math.abs( m12 + m21 ) < epsilon2 ) &&
			     ( Math.abs( m13 + m31 ) < epsilon2 ) &&
			     ( Math.abs( m23 + m32 ) < epsilon2 ) &&
			     ( Math.abs( m11 + m22 + m33 - 3 ) < epsilon2 ) ) {

				// this singularity is identity matrix so angle = 0

				this.set( 1, 0, 0, 0 );

				return this; // zero angle, arbitrary axis

			}

			// otherwise this singularity is angle = 180

			angle = Math.PI;

			var xx = ( m11 + 1 ) / 2;
			var yy = ( m22 + 1 ) / 2;
			var zz = ( m33 + 1 ) / 2;
			var xy = ( m12 + m21 ) / 4;
			var xz = ( m13 + m31 ) / 4;
			var yz = ( m23 + m32 ) / 4;

			if ( ( xx > yy ) && ( xx > zz ) ) {

				// m11 is the largest diagonal term

				if ( xx < epsilon ) {

					x = 0;
					y = 0.707106781;
					z = 0.707106781;

				} else {

					x = Math.sqrt( xx );
					y = xy / x;
					z = xz / x;

				}

			} else if ( yy > zz ) {

				// m22 is the largest diagonal term

				if ( yy < epsilon ) {

					x = 0.707106781;
					y = 0;
					z = 0.707106781;

				} else {

					y = Math.sqrt( yy );
					x = xy / y;
					z = yz / y;

				}

			} else {

				// m33 is the largest diagonal term so base result on this

				if ( zz < epsilon ) {

					x = 0.707106781;
					y = 0.707106781;
					z = 0;

				} else {

					z = Math.sqrt( zz );
					x = xz / z;
					y = yz / z;

				}

			}

			this.set( x, y, z, angle );

			return this; // return 180 deg rotation

		}

		// as we have reached here there are no singularities so we can handle normally

		var s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 ) +
		                   ( m13 - m31 ) * ( m13 - m31 ) +
		                   ( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

		if ( Math.abs( s ) < 0.001 ) s = 1;

		// prevent divide by zero, should not happen if matrix is orthogonal and should be
		// caught by singularity test above, but I've left it in just in case

		this.x = ( m32 - m23 ) / s;
		this.y = ( m13 - m31 ) / s;
		this.z = ( m21 - m12 ) / s;
		this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

		return this;

	},

	min: function ( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );
		this.w = Math.min( this.w, v.w );

		return this;

	},

	max: function ( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );
		this.w = Math.max( this.w, v.w );

		return this;

	},

	clamp: function ( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );
		this.w = Math.max( min.w, Math.min( max.w, this.w ) );

		return this;

	},

	clampScalar: function () {

		var min, max;

		return function clampScalar( minVal, maxVal ) {

			if ( min === undefined ) {

				min = new Vector4();
				max = new Vector4();

			}

			min.set( minVal, minVal, minVal, minVal );
			max.set( maxVal, maxVal, maxVal, maxVal );

			return this.clamp( min, max );

		};

	}(),

	clampLength: function ( min, max ) {

		var length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	},

	floor: function () {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );
		this.w = Math.floor( this.w );

		return this;

	},

	ceil: function () {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );
		this.w = Math.ceil( this.w );

		return this;

	},

	round: function () {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );
		this.w = Math.round( this.w );

		return this;

	},

	roundToZero: function () {

		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
		this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );
		this.w = ( this.w < 0 ) ? Math.ceil( this.w ) : Math.floor( this.w );

		return this;

	},

	negate: function () {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;
		this.w = - this.w;

		return this;

	},

	dot: function ( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

	},

	lengthSq: function () {

		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

	},

	length: function () {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

	},

	lengthManhattan: function () {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w );

	},

	normalize: function () {

		return this.divideScalar( this.length() || 1 );

	},

	setLength: function ( length ) {

		return this.normalize().multiplyScalar( length );

	},

	lerp: function ( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;
		this.w += ( v.w - this.w ) * alpha;

		return this;

	},

	lerpVectors: function ( v1, v2, alpha ) {

		return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

	},

	equals: function ( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];
		this.w = array[ offset + 3 ];

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;
		array[ offset + 3 ] = this.w;

		return array;

	},

	fromBufferAttribute: function ( attribute, index, offset ) {

		if ( offset !== undefined ) {

			console.warn( 'THREE.Vector4: offset has been removed from .fromBufferAttribute().' );

		}

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );
		this.w = attribute.getW( index );

		return this;

	}

} );





/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Float64BufferAttribute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Float32BufferAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Uint32BufferAttribute; });
/* unused harmony export Int32BufferAttribute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Uint16BufferAttribute; });
/* unused harmony export Int16BufferAttribute */
/* unused harmony export Uint8ClampedBufferAttribute */
/* unused harmony export Uint8BufferAttribute */
/* unused harmony export Int8BufferAttribute */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BufferAttribute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector4__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Math__ = __webpack_require__(5);






/**
 * @author mrdoob / http://mrdoob.com/
 */

function BufferAttribute( array, itemSize, normalized ) {

	if ( Array.isArray( array ) ) {

		throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

	}

	this.uuid = __WEBPACK_IMPORTED_MODULE_4__math_Math__["a" /* _Math */].generateUUID();
	this.name = '';

	this.array = array;
	this.itemSize = itemSize;
	this.count = array !== undefined ? array.length / itemSize : 0;
	this.normalized = normalized === true;

	this.dynamic = false;
	this.updateRange = { offset: 0, count: - 1 };

	this.onUploadCallback = function () {};

	this.version = 0;

}

Object.defineProperty( BufferAttribute.prototype, 'needsUpdate', {

	set: function ( value ) {

		if ( value === true ) this.version ++;

	}

} );

Object.assign( BufferAttribute.prototype, {

	isBufferAttribute: true,

	setArray: function ( array ) {

		if ( Array.isArray( array ) ) {

			throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

		}

		this.count = array !== undefined ? array.length / this.itemSize : 0;
		this.array = array;

	},

	setDynamic: function ( value ) {

		this.dynamic = value;

		return this;

	},

	copy: function ( source ) {

		this.array = new source.array.constructor( source.array );
		this.itemSize = source.itemSize;
		this.count = source.count;
		this.normalized = source.normalized;

		this.dynamic = source.dynamic;

		return this;

	},

	copyAt: function ( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( var i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	},

	copyArray: function ( array ) {

		this.array.set( array );

		return this;

	},

	copyColorsArray: function ( colors ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = colors.length; i < l; i ++ ) {

			var color = colors[ i ];

			if ( color === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyColorsArray(): color is undefined', i );
				color = new __WEBPACK_IMPORTED_MODULE_3__math_Color__["a" /* Color */]();

			}

			array[ offset ++ ] = color.r;
			array[ offset ++ ] = color.g;
			array[ offset ++ ] = color.b;

		}

		return this;

	},

	copyIndicesArray: function ( indices ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = indices.length; i < l; i ++ ) {

			var index = indices[ i ];

			array[ offset ++ ] = index.a;
			array[ offset ++ ] = index.b;
			array[ offset ++ ] = index.c;

		}

		return this;

	},

	copyVector2sArray: function ( vectors ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = vectors.length; i < l; i ++ ) {

			var vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector2sArray(): vector is undefined', i );
				vector = new __WEBPACK_IMPORTED_MODULE_2__math_Vector2__["a" /* Vector2 */]();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;

		}

		return this;

	},

	copyVector3sArray: function ( vectors ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = vectors.length; i < l; i ++ ) {

			var vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector3sArray(): vector is undefined', i );
				vector = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;
			array[ offset ++ ] = vector.z;

		}

		return this;

	},

	copyVector4sArray: function ( vectors ) {

		var array = this.array, offset = 0;

		for ( var i = 0, l = vectors.length; i < l; i ++ ) {

			var vector = vectors[ i ];

			if ( vector === undefined ) {

				console.warn( 'THREE.BufferAttribute.copyVector4sArray(): vector is undefined', i );
				vector = new __WEBPACK_IMPORTED_MODULE_0__math_Vector4__["a" /* Vector4 */]();

			}

			array[ offset ++ ] = vector.x;
			array[ offset ++ ] = vector.y;
			array[ offset ++ ] = vector.z;
			array[ offset ++ ] = vector.w;

		}

		return this;

	},

	set: function ( value, offset ) {

		if ( offset === undefined ) offset = 0;

		this.array.set( value, offset );

		return this;

	},

	getX: function ( index ) {

		return this.array[ index * this.itemSize ];

	},

	setX: function ( index, x ) {

		this.array[ index * this.itemSize ] = x;

		return this;

	},

	getY: function ( index ) {

		return this.array[ index * this.itemSize + 1 ];

	},

	setY: function ( index, y ) {

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	},

	getZ: function ( index ) {

		return this.array[ index * this.itemSize + 2 ];

	},

	setZ: function ( index, z ) {

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	},

	getW: function ( index ) {

		return this.array[ index * this.itemSize + 3 ];

	},

	setW: function ( index, w ) {

		this.array[ index * this.itemSize + 3 ] = w;

		return this;

	},

	setXY: function ( index, x, y ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;

		return this;

	},

	setXYZ: function ( index, x, y, z ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	},

	setXYZW: function ( index, x, y, z, w ) {

		index *= this.itemSize;

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;
		this.array[ index + 3 ] = w;

		return this;

	},

	onUpload: function ( callback ) {

		this.onUploadCallback = callback;

		return this;

	},

	clone: function () {

		return new this.constructor( this.array, this.itemSize ).copy( this );

	}

} );

//

function Int8BufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Int8Array( array ), itemSize );

}

Int8BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Int8BufferAttribute.prototype.constructor = Int8BufferAttribute;


function Uint8BufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Uint8Array( array ), itemSize );

}

Uint8BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Uint8BufferAttribute.prototype.constructor = Uint8BufferAttribute;


function Uint8ClampedBufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Uint8ClampedArray( array ), itemSize );

}

Uint8ClampedBufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Uint8ClampedBufferAttribute.prototype.constructor = Uint8ClampedBufferAttribute;


function Int16BufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Int16Array( array ), itemSize );

}

Int16BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Int16BufferAttribute.prototype.constructor = Int16BufferAttribute;


function Uint16BufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Uint16Array( array ), itemSize );

}

Uint16BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Uint16BufferAttribute.prototype.constructor = Uint16BufferAttribute;


function Int32BufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Int32Array( array ), itemSize );

}

Int32BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Int32BufferAttribute.prototype.constructor = Int32BufferAttribute;


function Uint32BufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Uint32Array( array ), itemSize );

}

Uint32BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Uint32BufferAttribute.prototype.constructor = Uint32BufferAttribute;


function Float32BufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Float32Array( array ), itemSize );

}

Float32BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Float32BufferAttribute.prototype.constructor = Float32BufferAttribute;


function Float64BufferAttribute( array, itemSize ) {

	BufferAttribute.call( this, new Float64Array( array ), itemSize );

}

Float64BufferAttribute.prototype = Object.create( BufferAttribute.prototype );
Float64BufferAttribute.prototype.constructor = Float64BufferAttribute;

//




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDispatcher; });
/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */

function EventDispatcher() {}

Object.assign( EventDispatcher.prototype, {

	addEventListener: function ( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		var listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === - 1 ) {

			listeners[ type ].push( listener );

		}

	},

	hasEventListener: function ( type, listener ) {

		if ( this._listeners === undefined ) return false;

		var listeners = this._listeners;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

	},

	removeEventListener: function ( type, listener ) {

		if ( this._listeners === undefined ) return;

		var listeners = this._listeners;
		var listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			var index = listenerArray.indexOf( listener );

			if ( index !== - 1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	},

	dispatchEvent: function ( event ) {

		if ( this._listeners === undefined ) return;

		var listeners = this._listeners;
		var listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			var array = listenerArray.slice( 0 );

			for ( var i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

		}

	}

} );





/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GeometryIdCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Geometry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Face3__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Matrix3__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Sphere__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Box3__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_Vector2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__math_Color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__math_Math__ = __webpack_require__(5);












/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author bhouston / http://clara.io
 */

var count = 0;
function GeometryIdCount() { return count++; }

function Geometry() {

	Object.defineProperty( this, 'id', { value: GeometryIdCount() } );

	this.uuid = __WEBPACK_IMPORTED_MODULE_10__math_Math__["a" /* _Math */].generateUUID();

	this.name = '';
	this.type = 'Geometry';

	this.vertices = [];
	this.colors = [];
	this.faces = [];
	this.faceVertexUvs = [[]];

	this.morphTargets = [];
	this.morphNormals = [];

	this.skinWeights = [];
	this.skinIndices = [];

	this.lineDistances = [];

	this.boundingBox = null;
	this.boundingSphere = null;

	// update flags

	this.elementsNeedUpdate = false;
	this.verticesNeedUpdate = false;
	this.uvsNeedUpdate = false;
	this.normalsNeedUpdate = false;
	this.colorsNeedUpdate = false;
	this.lineDistancesNeedUpdate = false;
	this.groupsNeedUpdate = false;

}

Object.assign( Geometry.prototype, __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__["a" /* EventDispatcher */].prototype, {

	isGeometry: true,

	applyMatrix: function ( matrix ) {

		var normalMatrix = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix3__["a" /* Matrix3 */]().getNormalMatrix( matrix );

		for ( var i = 0, il = this.vertices.length; i < il; i ++ ) {

			var vertex = this.vertices[ i ];
			vertex.applyMatrix4( matrix );

		}

		for ( var i = 0, il = this.faces.length; i < il; i ++ ) {

			var face = this.faces[ i ];
			face.normal.applyMatrix3( normalMatrix ).normalize();

			for ( var j = 0, jl = face.vertexNormals.length; j < jl; j ++ ) {

				face.vertexNormals[ j ].applyMatrix3( normalMatrix ).normalize();

			}

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		this.verticesNeedUpdate = true;
		this.normalsNeedUpdate = true;

		return this;

	},

	rotateX: function () {

		// rotate geometry around world x-axis

		var m1 = new __WEBPACK_IMPORTED_MODULE_6__math_Matrix4__["a" /* Matrix4 */]();

		return function rotateX( angle ) {

			m1.makeRotationX( angle );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	rotateY: function () {

		// rotate geometry around world y-axis

		var m1 = new __WEBPACK_IMPORTED_MODULE_6__math_Matrix4__["a" /* Matrix4 */]();

		return function rotateY( angle ) {

			m1.makeRotationY( angle );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	rotateZ: function () {

		// rotate geometry around world z-axis

		var m1 = new __WEBPACK_IMPORTED_MODULE_6__math_Matrix4__["a" /* Matrix4 */]();

		return function rotateZ( angle ) {

			m1.makeRotationZ( angle );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	translate: function () {

		// translate geometry

		var m1 = new __WEBPACK_IMPORTED_MODULE_6__math_Matrix4__["a" /* Matrix4 */]();

		return function translate( x, y, z ) {

			m1.makeTranslation( x, y, z );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	scale: function () {

		// scale geometry

		var m1 = new __WEBPACK_IMPORTED_MODULE_6__math_Matrix4__["a" /* Matrix4 */]();

		return function scale( x, y, z ) {

			m1.makeScale( x, y, z );

			this.applyMatrix( m1 );

			return this;

		};

	}(),

	lookAt: function () {

		var obj = new __WEBPACK_IMPORTED_MODULE_9__Object3D__["a" /* Object3D */]();

		return function lookAt( vector ) {

			obj.lookAt( vector );

			obj.updateMatrix();

			this.applyMatrix( obj.matrix );

		};

	}(),

	fromBufferGeometry: function ( geometry ) {

		var scope = this;

		var indices = geometry.index !== null ? geometry.index.array : undefined;
		var attributes = geometry.attributes;

		var positions = attributes.position.array;
		var normals = attributes.normal !== undefined ? attributes.normal.array : undefined;
		var colors = attributes.color !== undefined ? attributes.color.array : undefined;
		var uvs = attributes.uv !== undefined ? attributes.uv.array : undefined;
		var uvs2 = attributes.uv2 !== undefined ? attributes.uv2.array : undefined;

		if ( uvs2 !== undefined ) this.faceVertexUvs[ 1 ] = [];

		var tempNormals = [];
		var tempUVs = [];
		var tempUVs2 = [];

		for ( var i = 0, j = 0; i < positions.length; i += 3, j += 2 ) {

			scope.vertices.push( new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */]( positions[ i ], positions[ i + 1 ], positions[ i + 2 ] ) );

			if ( normals !== undefined ) {

				tempNormals.push( new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */]( normals[ i ], normals[ i + 1 ], normals[ i + 2 ] ) );

			}

			if ( colors !== undefined ) {

				scope.colors.push( new __WEBPACK_IMPORTED_MODULE_8__math_Color__["a" /* Color */]( colors[ i ], colors[ i + 1 ], colors[ i + 2 ] ) );

			}

			if ( uvs !== undefined ) {

				tempUVs.push( new __WEBPACK_IMPORTED_MODULE_7__math_Vector2__["a" /* Vector2 */]( uvs[ j ], uvs[ j + 1 ] ) );

			}

			if ( uvs2 !== undefined ) {

				tempUVs2.push( new __WEBPACK_IMPORTED_MODULE_7__math_Vector2__["a" /* Vector2 */]( uvs2[ j ], uvs2[ j + 1 ] ) );

			}

		}

		function addFace( a, b, c, materialIndex ) {

			var vertexNormals = normals !== undefined ? [ tempNormals[ a ].clone(), tempNormals[ b ].clone(), tempNormals[ c ].clone() ] : [];
			var vertexColors = colors !== undefined ? [ scope.colors[ a ].clone(), scope.colors[ b ].clone(), scope.colors[ c ].clone() ] : [];

			var face = new __WEBPACK_IMPORTED_MODULE_1__Face3__["a" /* Face3 */]( a, b, c, vertexNormals, vertexColors, materialIndex );

			scope.faces.push( face );

			if ( uvs !== undefined ) {

				scope.faceVertexUvs[ 0 ].push( [ tempUVs[ a ].clone(), tempUVs[ b ].clone(), tempUVs[ c ].clone() ] );

			}

			if ( uvs2 !== undefined ) {

				scope.faceVertexUvs[ 1 ].push( [ tempUVs2[ a ].clone(), tempUVs2[ b ].clone(), tempUVs2[ c ].clone() ] );

			}

		}

		var groups = geometry.groups;

		if ( groups.length > 0 ) {

			for ( var i = 0; i < groups.length; i ++ ) {

				var group = groups[ i ];

				var start = group.start;
				var count = group.count;

				for ( var j = start, jl = start + count; j < jl; j += 3 ) {

					if ( indices !== undefined ) {

						addFace( indices[ j ], indices[ j + 1 ], indices[ j + 2 ], group.materialIndex );

					} else {

						addFace( j, j + 1, j + 2, group.materialIndex );

					}

				}

			}

		} else {

			if ( indices !== undefined ) {

				for ( var i = 0; i < indices.length; i += 3 ) {

					addFace( indices[ i ], indices[ i + 1 ], indices[ i + 2 ] );

				}

			} else {

				for ( var i = 0; i < positions.length / 3; i += 3 ) {

					addFace( i, i + 1, i + 2 );

				}

			}

		}

		this.computeFaceNormals();

		if ( geometry.boundingBox !== null ) {

			this.boundingBox = geometry.boundingBox.clone();

		}

		if ( geometry.boundingSphere !== null ) {

			this.boundingSphere = geometry.boundingSphere.clone();

		}

		return this;

	},

	center: function () {

		this.computeBoundingBox();

		var offset = this.boundingBox.getCenter().negate();

		this.translate( offset.x, offset.y, offset.z );

		return offset;

	},

	normalize: function () {

		this.computeBoundingSphere();

		var center = this.boundingSphere.center;
		var radius = this.boundingSphere.radius;

		var s = radius === 0 ? 1 : 1.0 / radius;

		var matrix = new __WEBPACK_IMPORTED_MODULE_6__math_Matrix4__["a" /* Matrix4 */]();
		matrix.set(
			s, 0, 0, - s * center.x,
			0, s, 0, - s * center.y,
			0, 0, s, - s * center.z,
			0, 0, 0, 1
		);

		this.applyMatrix( matrix );

		return this;

	},

	computeFaceNormals: function () {

		var cb = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */](), ab = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */]();

		for ( var f = 0, fl = this.faces.length; f < fl; f ++ ) {

			var face = this.faces[ f ];

			var vA = this.vertices[ face.a ];
			var vB = this.vertices[ face.b ];
			var vC = this.vertices[ face.c ];

			cb.subVectors( vC, vB );
			ab.subVectors( vA, vB );
			cb.cross( ab );

			cb.normalize();

			face.normal.copy( cb );

		}

	},

	computeVertexNormals: function ( areaWeighted ) {

		if ( areaWeighted === undefined ) areaWeighted = true;

		var v, vl, f, fl, face, vertices;

		vertices = new Array( this.vertices.length );

		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

			vertices[ v ] = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */]();

		}

		if ( areaWeighted ) {

			// vertex normals weighted by triangle areas
			// http://www.iquilezles.org/www/articles/normals/normals.htm

			var vA, vB, vC;
			var cb = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */](), ab = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */]();

			for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

				face = this.faces[ f ];

				vA = this.vertices[ face.a ];
				vB = this.vertices[ face.b ];
				vC = this.vertices[ face.c ];

				cb.subVectors( vC, vB );
				ab.subVectors( vA, vB );
				cb.cross( ab );

				vertices[ face.a ].add( cb );
				vertices[ face.b ].add( cb );
				vertices[ face.c ].add( cb );

			}

		} else {

			this.computeFaceNormals();

			for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

				face = this.faces[ f ];

				vertices[ face.a ].add( face.normal );
				vertices[ face.b ].add( face.normal );
				vertices[ face.c ].add( face.normal );

			}

		}

		for ( v = 0, vl = this.vertices.length; v < vl; v ++ ) {

			vertices[ v ].normalize();

		}

		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];

			var vertexNormals = face.vertexNormals;

			if ( vertexNormals.length === 3 ) {

				vertexNormals[ 0 ].copy( vertices[ face.a ] );
				vertexNormals[ 1 ].copy( vertices[ face.b ] );
				vertexNormals[ 2 ].copy( vertices[ face.c ] );

			} else {

				vertexNormals[ 0 ] = vertices[ face.a ].clone();
				vertexNormals[ 1 ] = vertices[ face.b ].clone();
				vertexNormals[ 2 ] = vertices[ face.c ].clone();

			}

		}

		if ( this.faces.length > 0 ) {

			this.normalsNeedUpdate = true;

		}

	},

	computeFlatVertexNormals: function () {

		var f, fl, face;

		this.computeFaceNormals();

		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];

			var vertexNormals = face.vertexNormals;

			if ( vertexNormals.length === 3 ) {

				vertexNormals[ 0 ].copy( face.normal );
				vertexNormals[ 1 ].copy( face.normal );
				vertexNormals[ 2 ].copy( face.normal );

			} else {

				vertexNormals[ 0 ] = face.normal.clone();
				vertexNormals[ 1 ] = face.normal.clone();
				vertexNormals[ 2 ] = face.normal.clone();

			}

		}

		if ( this.faces.length > 0 ) {

			this.normalsNeedUpdate = true;

		}

	},

	computeMorphNormals: function () {

		var i, il, f, fl, face;

		// save original normals
		// - create temp variables on first access
		//   otherwise just copy (for faster repeated calls)

		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];

			if ( ! face.__originalFaceNormal ) {

				face.__originalFaceNormal = face.normal.clone();

			} else {

				face.__originalFaceNormal.copy( face.normal );

			}

			if ( ! face.__originalVertexNormals ) face.__originalVertexNormals = [];

			for ( i = 0, il = face.vertexNormals.length; i < il; i ++ ) {

				if ( ! face.__originalVertexNormals[ i ] ) {

					face.__originalVertexNormals[ i ] = face.vertexNormals[ i ].clone();

				} else {

					face.__originalVertexNormals[ i ].copy( face.vertexNormals[ i ] );

				}

			}

		}

		// use temp geometry to compute face and vertex normals for each morph

		var tmpGeo = new Geometry();
		tmpGeo.faces = this.faces;

		for ( i = 0, il = this.morphTargets.length; i < il; i ++ ) {

			// create on first access

			if ( ! this.morphNormals[ i ] ) {

				this.morphNormals[ i ] = {};
				this.morphNormals[ i ].faceNormals = [];
				this.morphNormals[ i ].vertexNormals = [];

				var dstNormalsFace = this.morphNormals[ i ].faceNormals;
				var dstNormalsVertex = this.morphNormals[ i ].vertexNormals;

				var faceNormal, vertexNormals;

				for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

					faceNormal = new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */]();
					vertexNormals = { a: new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */](), b: new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */](), c: new __WEBPACK_IMPORTED_MODULE_5__math_Vector3__["a" /* Vector3 */]() };

					dstNormalsFace.push( faceNormal );
					dstNormalsVertex.push( vertexNormals );

				}

			}

			var morphNormals = this.morphNormals[ i ];

			// set vertices to morph target

			tmpGeo.vertices = this.morphTargets[ i ].vertices;

			// compute morph normals

			tmpGeo.computeFaceNormals();
			tmpGeo.computeVertexNormals();

			// store morph normals

			var faceNormal, vertexNormals;

			for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

				face = this.faces[ f ];

				faceNormal = morphNormals.faceNormals[ f ];
				vertexNormals = morphNormals.vertexNormals[ f ];

				faceNormal.copy( face.normal );

				vertexNormals.a.copy( face.vertexNormals[ 0 ] );
				vertexNormals.b.copy( face.vertexNormals[ 1 ] );
				vertexNormals.c.copy( face.vertexNormals[ 2 ] );

			}

		}

		// restore original normals

		for ( f = 0, fl = this.faces.length; f < fl; f ++ ) {

			face = this.faces[ f ];

			face.normal = face.__originalFaceNormal;
			face.vertexNormals = face.__originalVertexNormals;

		}

	},

	computeLineDistances: function () {

		var d = 0;
		var vertices = this.vertices;

		for ( var i = 0, il = vertices.length; i < il; i ++ ) {

			if ( i > 0 ) {

				d += vertices[ i ].distanceTo( vertices[ i - 1 ] );

			}

			this.lineDistances[ i ] = d;

		}

	},

	computeBoundingBox: function () {

		if ( this.boundingBox === null ) {

			this.boundingBox = new __WEBPACK_IMPORTED_MODULE_4__math_Box3__["a" /* Box3 */]();

		}

		this.boundingBox.setFromPoints( this.vertices );

	},

	computeBoundingSphere: function () {

		if ( this.boundingSphere === null ) {

			this.boundingSphere = new __WEBPACK_IMPORTED_MODULE_3__math_Sphere__["a" /* Sphere */]();

		}

		this.boundingSphere.setFromPoints( this.vertices );

	},

	merge: function ( geometry, matrix, materialIndexOffset ) {

		if ( ! ( geometry && geometry.isGeometry ) ) {

			console.error( 'THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.', geometry );
			return;

		}

		var normalMatrix,
			vertexOffset = this.vertices.length,
			vertices1 = this.vertices,
			vertices2 = geometry.vertices,
			faces1 = this.faces,
			faces2 = geometry.faces,
			uvs1 = this.faceVertexUvs[ 0 ],
			uvs2 = geometry.faceVertexUvs[ 0 ],
			colors1 = this.colors,
			colors2 = geometry.colors;

		if ( materialIndexOffset === undefined ) materialIndexOffset = 0;

		if ( matrix !== undefined ) {

			normalMatrix = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix3__["a" /* Matrix3 */]().getNormalMatrix( matrix );

		}

		// vertices

		for ( var i = 0, il = vertices2.length; i < il; i ++ ) {

			var vertex = vertices2[ i ];

			var vertexCopy = vertex.clone();

			if ( matrix !== undefined ) vertexCopy.applyMatrix4( matrix );

			vertices1.push( vertexCopy );

		}

		// colors

		for ( var i = 0, il = colors2.length; i < il; i ++ ) {

			colors1.push( colors2[ i ].clone() );

		}

		// faces

		for ( i = 0, il = faces2.length; i < il; i ++ ) {

			var face = faces2[ i ], faceCopy, normal, color,
				faceVertexNormals = face.vertexNormals,
				faceVertexColors = face.vertexColors;

			faceCopy = new __WEBPACK_IMPORTED_MODULE_1__Face3__["a" /* Face3 */]( face.a + vertexOffset, face.b + vertexOffset, face.c + vertexOffset );
			faceCopy.normal.copy( face.normal );

			if ( normalMatrix !== undefined ) {

				faceCopy.normal.applyMatrix3( normalMatrix ).normalize();

			}

			for ( var j = 0, jl = faceVertexNormals.length; j < jl; j ++ ) {

				normal = faceVertexNormals[ j ].clone();

				if ( normalMatrix !== undefined ) {

					normal.applyMatrix3( normalMatrix ).normalize();

				}

				faceCopy.vertexNormals.push( normal );

			}

			faceCopy.color.copy( face.color );

			for ( var j = 0, jl = faceVertexColors.length; j < jl; j ++ ) {

				color = faceVertexColors[ j ];
				faceCopy.vertexColors.push( color.clone() );

			}

			faceCopy.materialIndex = face.materialIndex + materialIndexOffset;

			faces1.push( faceCopy );

		}

		// uvs

		for ( i = 0, il = uvs2.length; i < il; i ++ ) {

			var uv = uvs2[ i ], uvCopy = [];

			if ( uv === undefined ) {

				continue;

			}

			for ( var j = 0, jl = uv.length; j < jl; j ++ ) {

				uvCopy.push( uv[ j ].clone() );

			}

			uvs1.push( uvCopy );

		}

	},

	mergeMesh: function ( mesh ) {

		if ( ! ( mesh && mesh.isMesh ) ) {

			console.error( 'THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.', mesh );
			return;

		}

		mesh.matrixAutoUpdate && mesh.updateMatrix();

		this.merge( mesh.geometry, mesh.matrix );

	},

	/*
	 * Checks for duplicate vertices with hashmap.
	 * Duplicated vertices are removed
	 * and faces' vertices are updated.
	 */

	mergeVertices: function () {

		var verticesMap = {}; // Hashmap for looking up vertices by position coordinates (and making sure they are unique)
		var unique = [], changes = [];

		var v, key;
		var precisionPoints = 4; // number of decimal points, e.g. 4 for epsilon of 0.0001
		var precision = Math.pow( 10, precisionPoints );
		var i, il, face;
		var indices, j, jl;

		for ( i = 0, il = this.vertices.length; i < il; i ++ ) {

			v = this.vertices[ i ];
			key = Math.round( v.x * precision ) + '_' + Math.round( v.y * precision ) + '_' + Math.round( v.z * precision );

			if ( verticesMap[ key ] === undefined ) {

				verticesMap[ key ] = i;
				unique.push( this.vertices[ i ] );
				changes[ i ] = unique.length - 1;

			} else {

				//console.log('Duplicate vertex found. ', i, ' could be using ', verticesMap[key]);
				changes[ i ] = changes[ verticesMap[ key ] ];

			}

		}


		// if faces are completely degenerate after merging vertices, we
		// have to remove them from the geometry.
		var faceIndicesToRemove = [];

		for ( i = 0, il = this.faces.length; i < il; i ++ ) {

			face = this.faces[ i ];

			face.a = changes[ face.a ];
			face.b = changes[ face.b ];
			face.c = changes[ face.c ];

			indices = [ face.a, face.b, face.c ];

			// if any duplicate vertices are found in a Face3
			// we have to remove the face as nothing can be saved
			for ( var n = 0; n < 3; n ++ ) {

				if ( indices[ n ] === indices[ ( n + 1 ) % 3 ] ) {

					faceIndicesToRemove.push( i );
					break;

				}

			}

		}

		for ( i = faceIndicesToRemove.length - 1; i >= 0; i -- ) {

			var idx = faceIndicesToRemove[ i ];

			this.faces.splice( idx, 1 );

			for ( j = 0, jl = this.faceVertexUvs.length; j < jl; j ++ ) {

				this.faceVertexUvs[ j ].splice( idx, 1 );

			}

		}

		// Use unique set of vertices

		var diff = this.vertices.length - unique.length;
		this.vertices = unique;
		return diff;

	},

	sortFacesByMaterialIndex: function () {

		var faces = this.faces;
		var length = faces.length;

		// tag faces

		for ( var i = 0; i < length; i ++ ) {

			faces[ i ]._id = i;

		}

		// sort faces

		function materialIndexSort( a, b ) {

			return a.materialIndex - b.materialIndex;

		}

		faces.sort( materialIndexSort );

		// sort uvs

		var uvs1 = this.faceVertexUvs[ 0 ];
		var uvs2 = this.faceVertexUvs[ 1 ];

		var newUvs1, newUvs2;

		if ( uvs1 && uvs1.length === length ) newUvs1 = [];
		if ( uvs2 && uvs2.length === length ) newUvs2 = [];

		for ( var i = 0; i < length; i ++ ) {

			var id = faces[ i ]._id;

			if ( newUvs1 ) newUvs1.push( uvs1[ id ] );
			if ( newUvs2 ) newUvs2.push( uvs2[ id ] );

		}

		if ( newUvs1 ) this.faceVertexUvs[ 0 ] = newUvs1;
		if ( newUvs2 ) this.faceVertexUvs[ 1 ] = newUvs2;

	},

	toJSON: function () {

		var data = {
			metadata: {
				version: 4.5,
				type: 'Geometry',
				generator: 'Geometry.toJSON'
			}
		};

		// standard Geometry serialization

		data.uuid = this.uuid;
		data.type = this.type;
		if ( this.name !== '' ) data.name = this.name;

		if ( this.parameters !== undefined ) {

			var parameters = this.parameters;

			for ( var key in parameters ) {

				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

			}

			return data;

		}

		var vertices = [];

		for ( var i = 0; i < this.vertices.length; i ++ ) {

			var vertex = this.vertices[ i ];
			vertices.push( vertex.x, vertex.y, vertex.z );

		}

		var faces = [];
		var normals = [];
		var normalsHash = {};
		var colors = [];
		var colorsHash = {};
		var uvs = [];
		var uvsHash = {};

		for ( var i = 0; i < this.faces.length; i ++ ) {

			var face = this.faces[ i ];

			var hasMaterial = true;
			var hasFaceUv = false; // deprecated
			var hasFaceVertexUv = this.faceVertexUvs[ 0 ][ i ] !== undefined;
			var hasFaceNormal = face.normal.length() > 0;
			var hasFaceVertexNormal = face.vertexNormals.length > 0;
			var hasFaceColor = face.color.r !== 1 || face.color.g !== 1 || face.color.b !== 1;
			var hasFaceVertexColor = face.vertexColors.length > 0;

			var faceType = 0;

			faceType = setBit( faceType, 0, 0 ); // isQuad
			faceType = setBit( faceType, 1, hasMaterial );
			faceType = setBit( faceType, 2, hasFaceUv );
			faceType = setBit( faceType, 3, hasFaceVertexUv );
			faceType = setBit( faceType, 4, hasFaceNormal );
			faceType = setBit( faceType, 5, hasFaceVertexNormal );
			faceType = setBit( faceType, 6, hasFaceColor );
			faceType = setBit( faceType, 7, hasFaceVertexColor );

			faces.push( faceType );
			faces.push( face.a, face.b, face.c );
			faces.push( face.materialIndex );

			if ( hasFaceVertexUv ) {

				var faceVertexUvs = this.faceVertexUvs[ 0 ][ i ];

				faces.push(
					getUvIndex( faceVertexUvs[ 0 ] ),
					getUvIndex( faceVertexUvs[ 1 ] ),
					getUvIndex( faceVertexUvs[ 2 ] )
				);

			}

			if ( hasFaceNormal ) {

				faces.push( getNormalIndex( face.normal ) );

			}

			if ( hasFaceVertexNormal ) {

				var vertexNormals = face.vertexNormals;

				faces.push(
					getNormalIndex( vertexNormals[ 0 ] ),
					getNormalIndex( vertexNormals[ 1 ] ),
					getNormalIndex( vertexNormals[ 2 ] )
				);

			}

			if ( hasFaceColor ) {

				faces.push( getColorIndex( face.color ) );

			}

			if ( hasFaceVertexColor ) {

				var vertexColors = face.vertexColors;

				faces.push(
					getColorIndex( vertexColors[ 0 ] ),
					getColorIndex( vertexColors[ 1 ] ),
					getColorIndex( vertexColors[ 2 ] )
				);

			}

		}

		function setBit( value, position, enabled ) {

			return enabled ? value | ( 1 << position ) : value & ( ~ ( 1 << position ) );

		}

		function getNormalIndex( normal ) {

			var hash = normal.x.toString() + normal.y.toString() + normal.z.toString();

			if ( normalsHash[ hash ] !== undefined ) {

				return normalsHash[ hash ];

			}

			normalsHash[ hash ] = normals.length / 3;
			normals.push( normal.x, normal.y, normal.z );

			return normalsHash[ hash ];

		}

		function getColorIndex( color ) {

			var hash = color.r.toString() + color.g.toString() + color.b.toString();

			if ( colorsHash[ hash ] !== undefined ) {

				return colorsHash[ hash ];

			}

			colorsHash[ hash ] = colors.length;
			colors.push( color.getHex() );

			return colorsHash[ hash ];

		}

		function getUvIndex( uv ) {

			var hash = uv.x.toString() + uv.y.toString();

			if ( uvsHash[ hash ] !== undefined ) {

				return uvsHash[ hash ];

			}

			uvsHash[ hash ] = uvs.length / 2;
			uvs.push( uv.x, uv.y );

			return uvsHash[ hash ];

		}

		data.data = {};

		data.data.vertices = vertices;
		data.data.normals = normals;
		if ( colors.length > 0 ) data.data.colors = colors;
		if ( uvs.length > 0 ) data.data.uvs = [ uvs ]; // temporal backward compatibility
		data.data.faces = faces;

		return data;

	},

	clone: function () {

		/*
		 // Handle primitives

		 var parameters = this.parameters;

		 if ( parameters !== undefined ) {

		 var values = [];

		 for ( var key in parameters ) {

		 values.push( parameters[ key ] );

		 }

		 var geometry = Object.create( this.constructor.prototype );
		 this.constructor.apply( geometry, values );
		 return geometry;

		 }

		 return new this.constructor().copy( this );
		 */

		return new Geometry().copy( this );

	},

	copy: function ( source ) {

		var i, il, j, jl, k, kl;

		// reset

		this.vertices = [];
		this.colors = [];
		this.faces = [];
		this.faceVertexUvs = [[]];
		this.morphTargets = [];
		this.morphNormals = [];
		this.skinWeights = [];
		this.skinIndices = [];
		this.lineDistances = [];
		this.boundingBox = null;
		this.boundingSphere = null;

		// name

		this.name = source.name;

		// vertices

		var vertices = source.vertices;

		for ( i = 0, il = vertices.length; i < il; i ++ ) {

			this.vertices.push( vertices[ i ].clone() );

		}

		// colors

		var colors = source.colors;

		for ( i = 0, il = colors.length; i < il; i ++ ) {

			this.colors.push( colors[ i ].clone() );

		}

		// faces

		var faces = source.faces;

		for ( i = 0, il = faces.length; i < il; i ++ ) {

			this.faces.push( faces[ i ].clone() );

		}

		// face vertex uvs

		for ( i = 0, il = source.faceVertexUvs.length; i < il; i ++ ) {

			var faceVertexUvs = source.faceVertexUvs[ i ];

			if ( this.faceVertexUvs[ i ] === undefined ) {

				this.faceVertexUvs[ i ] = [];

			}

			for ( j = 0, jl = faceVertexUvs.length; j < jl; j ++ ) {

				var uvs = faceVertexUvs[ j ], uvsCopy = [];

				for ( k = 0, kl = uvs.length; k < kl; k ++ ) {

					var uv = uvs[ k ];

					uvsCopy.push( uv.clone() );

				}

				this.faceVertexUvs[ i ].push( uvsCopy );

			}

		}

		// morph targets

		var morphTargets = source.morphTargets;

		for ( i = 0, il = morphTargets.length; i < il; i ++ ) {

			var morphTarget = {};
			morphTarget.name = morphTargets[ i ].name;

			// vertices

			if ( morphTargets[ i ].vertices !== undefined ) {

				morphTarget.vertices = [];

				for ( j = 0, jl = morphTargets[ i ].vertices.length; j < jl; j ++ ) {

					morphTarget.vertices.push( morphTargets[ i ].vertices[ j ].clone() );

				}

			}

			// normals

			if ( morphTargets[ i ].normals !== undefined ) {

				morphTarget.normals = [];

				for ( j = 0, jl = morphTargets[ i ].normals.length; j < jl; j ++ ) {

					morphTarget.normals.push( morphTargets[ i ].normals[ j ].clone() );

				}

			}

			this.morphTargets.push( morphTarget );

		}

		// morph normals

		var morphNormals = source.morphNormals;

		for ( i = 0, il = morphNormals.length; i < il; i ++ ) {

			var morphNormal = {};

			// vertex normals

			if ( morphNormals[ i ].vertexNormals !== undefined ) {

				morphNormal.vertexNormals = [];

				for ( j = 0, jl = morphNormals[ i ].vertexNormals.length; j < jl; j ++ ) {

					var srcVertexNormal = morphNormals[ i ].vertexNormals[ j ];
					var destVertexNormal = {};

					destVertexNormal.a = srcVertexNormal.a.clone();
					destVertexNormal.b = srcVertexNormal.b.clone();
					destVertexNormal.c = srcVertexNormal.c.clone();

					morphNormal.vertexNormals.push( destVertexNormal );

				}

			}

			// face normals

			if ( morphNormals[ i ].faceNormals !== undefined ) {

				morphNormal.faceNormals = [];

				for ( j = 0, jl = morphNormals[ i ].faceNormals.length; j < jl; j ++ ) {

					morphNormal.faceNormals.push( morphNormals[ i ].faceNormals[ j ].clone() );

				}

			}

			this.morphNormals.push( morphNormal );

		}

		// skin weights

		var skinWeights = source.skinWeights;

		for ( i = 0, il = skinWeights.length; i < il; i ++ ) {

			this.skinWeights.push( skinWeights[ i ].clone() );

		}

		// skin indices

		var skinIndices = source.skinIndices;

		for ( i = 0, il = skinIndices.length; i < il; i ++ ) {

			this.skinIndices.push( skinIndices[ i ].clone() );

		}

		// line distances

		var lineDistances = source.lineDistances;

		for ( i = 0, il = lineDistances.length; i < il; i ++ ) {

			this.lineDistances.push( lineDistances[ i ] );

		}

		// bounding box

		var boundingBox = source.boundingBox;

		if ( boundingBox !== null ) {

			this.boundingBox = boundingBox.clone();

		}

		// bounding sphere

		var boundingSphere = source.boundingSphere;

		if ( boundingSphere !== null ) {

			this.boundingSphere = boundingSphere.clone();

		}

		// update flags

		this.elementsNeedUpdate = source.elementsNeedUpdate;
		this.verticesNeedUpdate = source.verticesNeedUpdate;
		this.uvsNeedUpdate = source.uvsNeedUpdate;
		this.normalsNeedUpdate = source.normalsNeedUpdate;
		this.colorsNeedUpdate = source.colorsNeedUpdate;
		this.lineDistancesNeedUpdate = source.lineDistancesNeedUpdate;
		this.groupsNeedUpdate = source.groupsNeedUpdate;

		return this;

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	}

} );





/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Math__ = __webpack_require__(5);




/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

var materialId = 0;

function Material() {

	Object.defineProperty( this, 'id', { value: materialId ++ } );

	this.uuid = __WEBPACK_IMPORTED_MODULE_2__math_Math__["a" /* _Math */].generateUUID();

	this.name = '';
	this.type = 'Material';

	this.fog = true;
	this.lights = true;

	this.blending = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* NormalBlending */];
	this.side = __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* FrontSide */];
	this.shading = __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* SmoothShading */]; // THREE.FlatShading, THREE.SmoothShading
	this.vertexColors = __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* NoColors */]; // THREE.NoColors, THREE.VertexColors, THREE.FaceColors

	this.opacity = 1;
	this.transparent = false;

	this.blendSrc = __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* SrcAlphaFactor */];
	this.blendDst = __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* OneMinusSrcAlphaFactor */];
	this.blendEquation = __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* AddEquation */];
	this.blendSrcAlpha = null;
	this.blendDstAlpha = null;
	this.blendEquationAlpha = null;

	this.depthFunc = __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* LessEqualDepth */];
	this.depthTest = true;
	this.depthWrite = true;

	this.clippingPlanes = null;
	this.clipIntersection = false;
	this.clipShadows = false;

	this.colorWrite = true;

	this.precision = null; // override the renderer's default precision for this material

	this.polygonOffset = false;
	this.polygonOffsetFactor = 0;
	this.polygonOffsetUnits = 0;

	this.dithering = false;

	this.alphaTest = 0;
	this.premultipliedAlpha = false;

	this.overdraw = 0; // Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer

	this.visible = true;

	this.needsUpdate = true;

}

Object.assign( Material.prototype, __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__["a" /* EventDispatcher */].prototype, {

	isMaterial: true,

	onBeforeCompile: function () {},

	setValues: function ( values ) {

		if ( values === undefined ) return;

		for ( var key in values ) {

			var newValue = values[ key ];

			if ( newValue === undefined ) {

				console.warn( "THREE.Material: '" + key + "' parameter is undefined." );
				continue;

			}

			var currentValue = this[ key ];

			if ( currentValue === undefined ) {

				console.warn( "THREE." + this.type + ": '" + key + "' is not a property of this material." );
				continue;

			}

			if ( currentValue && currentValue.isColor ) {

				currentValue.set( newValue );

			} else if ( ( currentValue && currentValue.isVector3 ) && ( newValue && newValue.isVector3 ) ) {

				currentValue.copy( newValue );

			} else if ( key === 'overdraw' ) {

				// ensure overdraw is backwards-compatible with legacy boolean type
				this[ key ] = Number( newValue );

			} else {

				this[ key ] = newValue;

			}

		}

	},

	toJSON: function ( meta ) {

		var isRoot = meta === undefined;

		if ( isRoot ) {

			meta = {
				textures: {},
				images: {}
			};

		}

		var data = {
			metadata: {
				version: 4.5,
				type: 'Material',
				generator: 'Material.toJSON'
			}
		};

		// standard Material serialization
		data.uuid = this.uuid;
		data.type = this.type;

		if ( this.name !== '' ) data.name = this.name;

		if ( this.color && this.color.isColor ) data.color = this.color.getHex();

		if ( this.roughness !== undefined ) data.roughness = this.roughness;
		if ( this.metalness !== undefined ) data.metalness = this.metalness;

		if ( this.emissive && this.emissive.isColor ) data.emissive = this.emissive.getHex();
		if ( this.specular && this.specular.isColor ) data.specular = this.specular.getHex();
		if ( this.shininess !== undefined ) data.shininess = this.shininess;
		if ( this.clearCoat !== undefined ) data.clearCoat = this.clearCoat;
		if ( this.clearCoatRoughness !== undefined ) data.clearCoatRoughness = this.clearCoatRoughness;

		if ( this.map && this.map.isTexture ) data.map = this.map.toJSON( meta ).uuid;
		if ( this.alphaMap && this.alphaMap.isTexture ) data.alphaMap = this.alphaMap.toJSON( meta ).uuid;
		if ( this.lightMap && this.lightMap.isTexture ) data.lightMap = this.lightMap.toJSON( meta ).uuid;
		if ( this.bumpMap && this.bumpMap.isTexture ) {

			data.bumpMap = this.bumpMap.toJSON( meta ).uuid;
			data.bumpScale = this.bumpScale;

		}
		if ( this.normalMap && this.normalMap.isTexture ) {

			data.normalMap = this.normalMap.toJSON( meta ).uuid;
			data.normalScale = this.normalScale.toArray();

		}
		if ( this.displacementMap && this.displacementMap.isTexture ) {

			data.displacementMap = this.displacementMap.toJSON( meta ).uuid;
			data.displacementScale = this.displacementScale;
			data.displacementBias = this.displacementBias;

		}
		if ( this.roughnessMap && this.roughnessMap.isTexture ) data.roughnessMap = this.roughnessMap.toJSON( meta ).uuid;
		if ( this.metalnessMap && this.metalnessMap.isTexture ) data.metalnessMap = this.metalnessMap.toJSON( meta ).uuid;

		if ( this.emissiveMap && this.emissiveMap.isTexture ) data.emissiveMap = this.emissiveMap.toJSON( meta ).uuid;
		if ( this.specularMap && this.specularMap.isTexture ) data.specularMap = this.specularMap.toJSON( meta ).uuid;

		if ( this.envMap && this.envMap.isTexture ) {

			data.envMap = this.envMap.toJSON( meta ).uuid;
			data.reflectivity = this.reflectivity; // Scale behind envMap

		}

		if ( this.gradientMap && this.gradientMap.isTexture ) {

			data.gradientMap = this.gradientMap.toJSON( meta ).uuid;

		}

		if ( this.size !== undefined ) data.size = this.size;
		if ( this.sizeAttenuation !== undefined ) data.sizeAttenuation = this.sizeAttenuation;

		if ( this.blending !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* NormalBlending */] ) data.blending = this.blending;
		if ( this.shading !== __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* SmoothShading */] ) data.shading = this.shading;
		if ( this.side !== __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* FrontSide */] ) data.side = this.side;
		if ( this.vertexColors !== __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* NoColors */] ) data.vertexColors = this.vertexColors;

		if ( this.opacity < 1 ) data.opacity = this.opacity;
		if ( this.transparent === true ) data.transparent = this.transparent;

		data.depthFunc = this.depthFunc;
		data.depthTest = this.depthTest;
		data.depthWrite = this.depthWrite;

		if ( this.alphaTest > 0 ) data.alphaTest = this.alphaTest;
		if ( this.premultipliedAlpha === true ) data.premultipliedAlpha = this.premultipliedAlpha;
		if ( this.wireframe === true ) data.wireframe = this.wireframe;
		if ( this.wireframeLinewidth > 1 ) data.wireframeLinewidth = this.wireframeLinewidth;
		if ( this.wireframeLinecap !== 'round' ) data.wireframeLinecap = this.wireframeLinecap;
		if ( this.wireframeLinejoin !== 'round' ) data.wireframeLinejoin = this.wireframeLinejoin;

		data.skinning = this.skinning;
		data.morphTargets = this.morphTargets;

		data.dithering = this.dithering;

		// TODO: Copied from Object3D.toJSON

		function extractFromCache( cache ) {

			var values = [];

			for ( var key in cache ) {

				var data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

		if ( isRoot ) {

			var textures = extractFromCache( meta.textures );
			var images = extractFromCache( meta.images );

			if ( textures.length > 0 ) data.textures = textures;
			if ( images.length > 0 ) data.images = images;

		}

		return data;

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.name = source.name;

		this.fog = source.fog;
		this.lights = source.lights;

		this.blending = source.blending;
		this.side = source.side;
		this.shading = source.shading;
		this.vertexColors = source.vertexColors;

		this.opacity = source.opacity;
		this.transparent = source.transparent;

		this.blendSrc = source.blendSrc;
		this.blendDst = source.blendDst;
		this.blendEquation = source.blendEquation;
		this.blendSrcAlpha = source.blendSrcAlpha;
		this.blendDstAlpha = source.blendDstAlpha;
		this.blendEquationAlpha = source.blendEquationAlpha;

		this.depthFunc = source.depthFunc;
		this.depthTest = source.depthTest;
		this.depthWrite = source.depthWrite;

		this.colorWrite = source.colorWrite;

		this.precision = source.precision;

		this.polygonOffset = source.polygonOffset;
		this.polygonOffsetFactor = source.polygonOffsetFactor;
		this.polygonOffsetUnits = source.polygonOffsetUnits;

		this.dithering = source.dithering;

		this.alphaTest = source.alphaTest;

		this.premultipliedAlpha = source.premultipliedAlpha;

		this.overdraw = source.overdraw;

		this.visible = source.visible;
		this.clipShadows = source.clipShadows;
		this.clipIntersection = source.clipIntersection;

		var srcPlanes = source.clippingPlanes,
			dstPlanes = null;

		if ( srcPlanes !== null ) {

			var n = srcPlanes.length;
			dstPlanes = new Array( n );

			for ( var i = 0; i !== n; ++ i )
				dstPlanes[ i ] = srcPlanes[ i ].clone();

		}

		this.clippingPlanes = dstPlanes;

		return this;

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	}

} );





/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerspectiveCamera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Camera__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Math__ = __webpack_require__(5);




/**
 * @author mrdoob / http://mrdoob.com/
 * @author greggman / http://games.greggman.com/
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * @author tschw
 */

function PerspectiveCamera( fov, aspect, near, far ) {

	__WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* Camera */].call( this );

	this.type = 'PerspectiveCamera';

	this.fov = fov !== undefined ? fov : 50;
	this.zoom = 1;

	this.near = near !== undefined ? near : 0.1;
	this.far = far !== undefined ? far : 2000;
	this.focus = 10;

	this.aspect = aspect !== undefined ? aspect : 1;
	this.view = null;

	this.filmGauge = 35;	// width of the film (default in millimeters)
	this.filmOffset = 0;	// horizontal film offset (same unit as gauge)

	this.updateProjectionMatrix();

}

PerspectiveCamera.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* Camera */].prototype ), {

	constructor: PerspectiveCamera,

	isPerspectiveCamera: true,

	copy: function ( source, recursive ) {

		__WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* Camera */].prototype.copy.call( this, source, recursive );

		this.fov = source.fov;
		this.zoom = source.zoom;

		this.near = source.near;
		this.far = source.far;
		this.focus = source.focus;

		this.aspect = source.aspect;
		this.view = source.view === null ? null : Object.assign( {}, source.view );

		this.filmGauge = source.filmGauge;
		this.filmOffset = source.filmOffset;

		return this;

	},

	/**
	 * Sets the FOV by focal length in respect to the current .filmGauge.
	 *
	 * The default film gauge is 35, so that the focal length can be specified for
	 * a 35mm (full frame) camera.
	 *
	 * Values for focal length and film gauge must have the same unit.
	 */
	setFocalLength: function ( focalLength ) {

		// see http://www.bobatkins.com/photography/technical/field_of_view.html
		var vExtentSlope = 0.5 * this.getFilmHeight() / focalLength;

		this.fov = __WEBPACK_IMPORTED_MODULE_2__math_Math__["a" /* _Math */].RAD2DEG * 2 * Math.atan( vExtentSlope );
		this.updateProjectionMatrix();

	},

	/**
	 * Calculates the focal length from the current .fov and .filmGauge.
	 */
	getFocalLength: function () {

		var vExtentSlope = Math.tan( __WEBPACK_IMPORTED_MODULE_2__math_Math__["a" /* _Math */].DEG2RAD * 0.5 * this.fov );

		return 0.5 * this.getFilmHeight() / vExtentSlope;

	},

	getEffectiveFOV: function () {

		return __WEBPACK_IMPORTED_MODULE_2__math_Math__["a" /* _Math */].RAD2DEG * 2 * Math.atan(
				Math.tan( __WEBPACK_IMPORTED_MODULE_2__math_Math__["a" /* _Math */].DEG2RAD * 0.5 * this.fov ) / this.zoom );

	},

	getFilmWidth: function () {

		// film not completely covered in portrait format (aspect < 1)
		return this.filmGauge * Math.min( this.aspect, 1 );

	},

	getFilmHeight: function () {

		// film not completely covered in landscape format (aspect > 1)
		return this.filmGauge / Math.max( this.aspect, 1 );

	},

	/**
	 * Sets an offset in a larger frustum. This is useful for multi-window or
	 * multi-monitor/multi-machine setups.
	 *
	 * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
	 * the monitors are in grid like this
	 *
	 *   +---+---+---+
	 *   | A | B | C |
	 *   +---+---+---+
	 *   | D | E | F |
	 *   +---+---+---+
	 *
	 * then for each monitor you would call it like this
	 *
	 *   var w = 1920;
	 *   var h = 1080;
	 *   var fullWidth = w * 3;
	 *   var fullHeight = h * 2;
	 *
	 *   --A--
	 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
	 *   --B--
	 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
	 *   --C--
	 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
	 *   --D--
	 *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
	 *   --E--
	 *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
	 *   --F--
	 *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
	 *
	 *   Note there is no reason monitors have to be the same size or in a grid.
	 */
	setViewOffset: function ( fullWidth, fullHeight, x, y, width, height ) {

		this.aspect = fullWidth / fullHeight;

		this.view = {
			fullWidth: fullWidth,
			fullHeight: fullHeight,
			offsetX: x,
			offsetY: y,
			width: width,
			height: height
		};

		this.updateProjectionMatrix();

	},

	clearViewOffset: function () {

		this.view = null;
		this.updateProjectionMatrix();

	},

	updateProjectionMatrix: function () {

		var near = this.near,
			top = near * Math.tan(
					__WEBPACK_IMPORTED_MODULE_2__math_Math__["a" /* _Math */].DEG2RAD * 0.5 * this.fov ) / this.zoom,
			height = 2 * top,
			width = this.aspect * height,
			left = - 0.5 * width,
			view = this.view;

		if ( view !== null ) {

			var fullWidth = view.fullWidth,
				fullHeight = view.fullHeight;

			left += view.offsetX * width / fullWidth;
			top -= view.offsetY * height / fullHeight;
			width *= view.width / fullWidth;
			height *= view.height / fullHeight;

		}

		var skew = this.filmOffset;
		if ( skew !== 0 ) left += near * skew / this.getFilmWidth();

		this.projectionMatrix.makePerspective( left, left + width, top, top - height, near, this.far );

	},

	toJSON: function ( meta ) {

		var data = __WEBPACK_IMPORTED_MODULE_1__core_Object3D__["a" /* Object3D */].prototype.toJSON.call( this, meta );

		data.object.fov = this.fov;
		data.object.zoom = this.zoom;

		data.object.near = this.near;
		data.object.far = this.far;
		data.object.focus = this.focus;

		data.object.aspect = this.aspect;

		if ( this.view !== null ) data.object.view = Object.assign( {}, this.view );

		data.object.filmGauge = this.filmGauge;
		data.object.filmOffset = this.filmOffset;

		return data;

	}

} );





/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matrix3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(0);


/**
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 * @author tschw
 */

function Matrix3() {

	this.elements = [

		1, 0, 0,
		0, 1, 0,
		0, 0, 1

	];

	if ( arguments.length > 0 ) {

		console.error( 'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.' );

	}

}

Object.assign( Matrix3.prototype, {

	isMatrix3: true,

	set: function ( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		var te = this.elements;

		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

		return this;

	},

	identity: function () {

		this.set(

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		);

		return this;

	},

	clone: function () {

		return new this.constructor().fromArray( this.elements );

	},

	copy: function ( m ) {

		var te = this.elements;
		var me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

		return this;

	},

	setFromMatrix4: function ( m ) {

		var me = m.elements;

		this.set(

			me[ 0 ], me[ 4 ], me[  8 ],
			me[ 1 ], me[ 5 ], me[  9 ],
			me[ 2 ], me[ 6 ], me[ 10 ]

		);

		return this;

	},

	applyToBufferAttribute: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function applyToBufferAttribute( attribute ) {

			for ( var i = 0, l = attribute.count; i < l; i ++ ) {

				v1.x = attribute.getX( i );
				v1.y = attribute.getY( i );
				v1.z = attribute.getZ( i );

				v1.applyMatrix3( this );

				attribute.setXYZ( i, v1.x, v1.y, v1.z );

			}

			return attribute;

		};

	}(),

	multiply: function ( m ) {

		return this.multiplyMatrices( this, m );

	},

	premultiply: function ( m ) {

		return this.multiplyMatrices( m, this );

	},

	multiplyMatrices: function ( a, b ) {

		var ae = a.elements;
		var be = b.elements;
		var te = this.elements;

		var a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
		var a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
		var a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

		var b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
		var b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
		var b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

		return this;

	},

	multiplyScalar: function ( s ) {

		var te = this.elements;

		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

		return this;

	},

	determinant: function () {

		var te = this.elements;

		var a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

	},

	getInverse: function ( matrix, throwOnDegenerate ) {

		if ( matrix && matrix.isMatrix4 ) {

			console.error( "THREE.Matrix3.getInverse no longer takes a Matrix4 argument." );

		}

		var me = matrix.elements,
			te = this.elements,

			n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ],
			n12 = me[ 3 ], n22 = me[ 4 ], n32 = me[ 5 ],
			n13 = me[ 6 ], n23 = me[ 7 ], n33 = me[ 8 ],

			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,

			det = n11 * t11 + n21 * t12 + n31 * t13;

		if ( det === 0 ) {

			var msg = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";

			if ( throwOnDegenerate === true ) {

				throw new Error( msg );

			} else {

				console.warn( msg );

			}

			return this.identity();

		}

		var detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

		te[ 3 ] = t12 * detInv;
		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

		te[ 6 ] = t13 * detInv;
		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

		return this;

	},

	transpose: function () {

		var tmp, m = this.elements;

		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

		return this;

	},

	getNormalMatrix: function ( matrix4 ) {

		return this.setFromMatrix4( matrix4 ).getInverse( this ).transpose();

	},

	transposeIntoArray: function ( r ) {

		var m = this.elements;

		r[ 0 ] = m[ 0 ];
		r[ 1 ] = m[ 3 ];
		r[ 2 ] = m[ 6 ];
		r[ 3 ] = m[ 1 ];
		r[ 4 ] = m[ 4 ];
		r[ 5 ] = m[ 7 ];
		r[ 6 ] = m[ 2 ];
		r[ 7 ] = m[ 5 ];
		r[ 8 ] = m[ 8 ];

		return this;

	},

	equals: function ( matrix ) {

		var te = this.elements;
		var me = matrix.elements;

		for ( var i = 0; i < 9; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		for ( var i = 0; i < 9; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		var te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];

		array[ offset + 3 ] = te[ 3 ];
		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];

		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];
		array[ offset + 8 ] = te[ 8 ];

		return array;

	}

} );





/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quaternion; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(0);


/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */

function Quaternion( x, y, z, w ) {

	this._x = x || 0;
	this._y = y || 0;
	this._z = z || 0;
	this._w = ( w !== undefined ) ? w : 1;

}

Object.assign( Quaternion, {

	slerp: function ( qa, qb, qm, t ) {

		return qm.copy( qa ).slerp( qb, t );

	},

	slerpFlat: function ( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		var x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ],

			x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			var s = 1 - t,

				cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,

				dir = ( cos >= 0 ? 1 : - 1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				var sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			var tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				var f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

} );

Object.defineProperties( Quaternion.prototype, {

	x: {

		get: function () {

			return this._x;

		},

		set: function ( value ) {

			this._x = value;
			this.onChangeCallback();

		}

	},

	y: {

		get: function () {

			return this._y;

		},

		set: function ( value ) {

			this._y = value;
			this.onChangeCallback();

		}

	},

	z: {

		get: function () {

			return this._z;

		},

		set: function ( value ) {

			this._z = value;
			this.onChangeCallback();

		}

	},

	w: {

		get: function () {

			return this._w;

		},

		set: function ( value ) {

			this._w = value;
			this.onChangeCallback();

		}

	}

} );

Object.assign( Quaternion.prototype, {

	set: function ( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this.onChangeCallback();

		return this;

	},

	clone: function () {

		return new this.constructor( this._x, this._y, this._z, this._w );

	},

	copy: function ( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this.onChangeCallback();

		return this;

	},

	setFromEuler: function ( euler, update ) {

		if ( ! ( euler && euler.isEuler ) ) {

			throw new Error( 'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.' );

		}

		var x = euler._x, y = euler._y, z = euler._z, order = euler.order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		var cos = Math.cos;
		var sin = Math.sin;

		var c1 = cos( x / 2 );
		var c2 = cos( y / 2 );
		var c3 = cos( z / 2 );

		var s1 = sin( x / 2 );
		var s2 = sin( y / 2 );
		var s3 = sin( z / 2 );

		if ( order === 'XYZ' ) {

			this._x = s1 * c2 * c3 + c1 * s2 * s3;
			this._y = c1 * s2 * c3 - s1 * c2 * s3;
			this._z = c1 * c2 * s3 + s1 * s2 * c3;
			this._w = c1 * c2 * c3 - s1 * s2 * s3;

		} else if ( order === 'YXZ' ) {

			this._x = s1 * c2 * c3 + c1 * s2 * s3;
			this._y = c1 * s2 * c3 - s1 * c2 * s3;
			this._z = c1 * c2 * s3 - s1 * s2 * c3;
			this._w = c1 * c2 * c3 + s1 * s2 * s3;

		} else if ( order === 'ZXY' ) {

			this._x = s1 * c2 * c3 - c1 * s2 * s3;
			this._y = c1 * s2 * c3 + s1 * c2 * s3;
			this._z = c1 * c2 * s3 + s1 * s2 * c3;
			this._w = c1 * c2 * c3 - s1 * s2 * s3;

		} else if ( order === 'ZYX' ) {

			this._x = s1 * c2 * c3 - c1 * s2 * s3;
			this._y = c1 * s2 * c3 + s1 * c2 * s3;
			this._z = c1 * c2 * s3 - s1 * s2 * c3;
			this._w = c1 * c2 * c3 + s1 * s2 * s3;

		} else if ( order === 'YZX' ) {

			this._x = s1 * c2 * c3 + c1 * s2 * s3;
			this._y = c1 * s2 * c3 + s1 * c2 * s3;
			this._z = c1 * c2 * s3 - s1 * s2 * c3;
			this._w = c1 * c2 * c3 - s1 * s2 * s3;

		} else if ( order === 'XZY' ) {

			this._x = s1 * c2 * c3 - c1 * s2 * s3;
			this._y = c1 * s2 * c3 - s1 * c2 * s3;
			this._z = c1 * c2 * s3 + s1 * s2 * c3;
			this._w = c1 * c2 * c3 + s1 * s2 * s3;

		}

		if ( update !== false ) this.onChangeCallback();

		return this;

	},

	setFromAxisAngle: function ( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		// assumes axis is normalized

		var halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this.onChangeCallback();

		return this;

	},

	setFromRotationMatrix: function ( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		var te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33,
			s;

		if ( trace > 0 ) {

			s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this.onChangeCallback();

		return this;

	},

	setFromUnitVectors: function () {

		// assumes direction vectors vFrom and vTo are normalized

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var r;

		var EPS = 0.000001;

		return function setFromUnitVectors( vFrom, vTo ) {

			if ( v1 === undefined ) v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

			r = vFrom.dot( vTo ) + 1;

			if ( r < EPS ) {

				r = 0;

				if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

					v1.set( - vFrom.y, vFrom.x, 0 );

				} else {

					v1.set( 0, - vFrom.z, vFrom.y );

				}

			} else {

				v1.crossVectors( vFrom, vTo );

			}

			this._x = v1.x;
			this._y = v1.y;
			this._z = v1.z;
			this._w = r;

			return this.normalize();

		};

	}(),

	inverse: function () {

		return this.conjugate().normalize();

	},

	conjugate: function () {

		this._x *= - 1;
		this._y *= - 1;
		this._z *= - 1;

		this.onChangeCallback();

		return this;

	},

	dot: function ( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	},

	lengthSq: function () {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	},

	length: function () {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	},

	normalize: function () {

		var l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this.onChangeCallback();

		return this;

	},

	multiply: function ( q, p ) {

		if ( p !== undefined ) {

			console.warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' );
			return this.multiplyQuaternions( q, p );

		}

		return this.multiplyQuaternions( this, q );

	},

	premultiply: function ( q ) {

		return this.multiplyQuaternions( q, this );

	},

	multiplyQuaternions: function ( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		var qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		var qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this.onChangeCallback();

		return this;

	},

	slerp: function ( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		var x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		var sinHalfTheta = Math.sqrt( 1.0 - cosHalfTheta * cosHalfTheta );

		if ( Math.abs( sinHalfTheta ) < 0.001 ) {

			this._w = 0.5 * ( w + this._w );
			this._x = 0.5 * ( x + this._x );
			this._y = 0.5 * ( y + this._y );
			this._z = 0.5 * ( z + this._z );

			return this;

		}

		var halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		var ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this.onChangeCallback();

		return this;

	},

	equals: function ( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this.onChangeCallback();

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	},

	onChange: function ( callback ) {

		this.onChangeCallback = callback;

		return this;

	},

	onChangeCallback: function () {}

} );





/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshBasicMaterial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Color__ = __webpack_require__(4);




/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  shading: THREE.SmoothShading,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>
 * }
 */

function MeshBasicMaterial( parameters ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].call( this );

	this.type = 'MeshBasicMaterial';

	this.color = new __WEBPACK_IMPORTED_MODULE_2__math_Color__["a" /* Color */]( 0xffffff ); // emissive

	this.map = null;

	this.lightMap = null;
	this.lightMapIntensity = 1.0;

	this.aoMap = null;
	this.aoMapIntensity = 1.0;

	this.specularMap = null;

	this.alphaMap = null;

	this.envMap = null;
	this.combine = __WEBPACK_IMPORTED_MODULE_1__constants__["_21" /* MultiplyOperation */];
	this.reflectivity = 1;
	this.refractionRatio = 0.98;

	this.wireframe = false;
	this.wireframeLinewidth = 1;
	this.wireframeLinecap = 'round';
	this.wireframeLinejoin = 'round';

	this.skinning = false;
	this.morphTargets = false;

	this.lights = false;

	this.setValues( parameters );

}

MeshBasicMaterial.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype );
MeshBasicMaterial.prototype.constructor = MeshBasicMaterial;

MeshBasicMaterial.prototype.isMeshBasicMaterial = true;

MeshBasicMaterial.prototype.copy = function ( source ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype.copy.call( this, source );

	this.color.copy( source.color );

	this.map = source.map;

	this.lightMap = source.lightMap;
	this.lightMapIntensity = source.lightMapIntensity;

	this.aoMap = source.aoMap;
	this.aoMapIntensity = source.aoMapIntensity;

	this.specularMap = source.specularMap;

	this.alphaMap = source.alphaMap;

	this.envMap = source.envMap;
	this.combine = source.combine;
	this.reflectivity = source.reflectivity;
	this.refractionRatio = source.refractionRatio;

	this.wireframe = source.wireframe;
	this.wireframeLinewidth = source.wireframeLinewidth;
	this.wireframeLinecap = source.wireframeLinecap;
	this.wireframeLinejoin = source.wireframeLinejoin;

	this.skinning = source.skinning;
	this.morphTargets = source.morphTargets;

	return this;

};





/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(0);


/**
 * @author bhouston / http://clara.io
 */

function Ray( origin, direction ) {

	this.origin = ( origin !== undefined ) ? origin : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
	this.direction = ( direction !== undefined ) ? direction : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

}

Object.assign( Ray.prototype, {

	set: function ( origin, direction ) {

		this.origin.copy( origin );
		this.direction.copy( direction );

		return this;

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( ray ) {

		this.origin.copy( ray.origin );
		this.direction.copy( ray.direction );

		return this;

	},

	at: function ( t, optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return result.copy( this.direction ).multiplyScalar( t ).add( this.origin );

	},

	lookAt: function ( v ) {

		this.direction.copy( v ).sub( this.origin ).normalize();

		return this;

	},

	recast: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function recast( t ) {

			this.origin.copy( this.at( t, v1 ) );

			return this;

		};

	}(),

	closestPointToPoint: function ( point, optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		result.subVectors( point, this.origin );
		var directionDistance = result.dot( this.direction );

		if ( directionDistance < 0 ) {

			return result.copy( this.origin );

		}

		return result.copy( this.direction ).multiplyScalar( directionDistance ).add( this.origin );

	},

	distanceToPoint: function ( point ) {

		return Math.sqrt( this.distanceSqToPoint( point ) );

	},

	distanceSqToPoint: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function distanceSqToPoint( point ) {

			var directionDistance = v1.subVectors( point, this.origin ).dot( this.direction );

			// point behind the ray

			if ( directionDistance < 0 ) {

				return this.origin.distanceToSquared( point );

			}

			v1.copy( this.direction ).multiplyScalar( directionDistance ).add( this.origin );

			return v1.distanceToSquared( point );

		};

	}(),

	distanceSqToSegment: function () {

		var segCenter = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var segDir = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var diff = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function distanceSqToSegment( v0, v1, optionalPointOnRay, optionalPointOnSegment ) {

			// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteDistRaySegment.h
			// It returns the min distance between the ray and the segment
			// defined by v0 and v1
			// It can also set two optional targets :
			// - The closest point on the ray
			// - The closest point on the segment

			segCenter.copy( v0 ).add( v1 ).multiplyScalar( 0.5 );
			segDir.copy( v1 ).sub( v0 ).normalize();
			diff.copy( this.origin ).sub( segCenter );

			var segExtent = v0.distanceTo( v1 ) * 0.5;
			var a01 = - this.direction.dot( segDir );
			var b0 = diff.dot( this.direction );
			var b1 = - diff.dot( segDir );
			var c = diff.lengthSq();
			var det = Math.abs( 1 - a01 * a01 );
			var s0, s1, sqrDist, extDet;

			if ( det > 0 ) {

				// The ray and segment are not parallel.

				s0 = a01 * b1 - b0;
				s1 = a01 * b0 - b1;
				extDet = segExtent * det;

				if ( s0 >= 0 ) {

					if ( s1 >= - extDet ) {

						if ( s1 <= extDet ) {

							// region 0
							// Minimum at interior points of ray and segment.

							var invDet = 1 / det;
							s0 *= invDet;
							s1 *= invDet;
							sqrDist = s0 * ( s0 + a01 * s1 + 2 * b0 ) + s1 * ( a01 * s0 + s1 + 2 * b1 ) + c;

						} else {

							// region 1

							s1 = segExtent;
							s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
							sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

						}

					} else {

						// region 5

						s1 = - segExtent;
						s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				} else {

					if ( s1 <= - extDet ) {

						// region 4

						s0 = Math.max( 0, - ( - a01 * segExtent + b0 ) );
						s1 = ( s0 > 0 ) ? - segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					} else if ( s1 <= extDet ) {

						// region 3

						s0 = 0;
						s1 = Math.min( Math.max( - segExtent, - b1 ), segExtent );
						sqrDist = s1 * ( s1 + 2 * b1 ) + c;

					} else {

						// region 2

						s0 = Math.max( 0, - ( a01 * segExtent + b0 ) );
						s1 = ( s0 > 0 ) ? segExtent : Math.min( Math.max( - segExtent, - b1 ), segExtent );
						sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

					}

				}

			} else {

				// Ray and segment are parallel.

				s1 = ( a01 > 0 ) ? - segExtent : segExtent;
				s0 = Math.max( 0, - ( a01 * s1 + b0 ) );
				sqrDist = - s0 * s0 + s1 * ( s1 + 2 * b1 ) + c;

			}

			if ( optionalPointOnRay ) {

				optionalPointOnRay.copy( this.direction ).multiplyScalar( s0 ).add( this.origin );

			}

			if ( optionalPointOnSegment ) {

				optionalPointOnSegment.copy( segDir ).multiplyScalar( s1 ).add( segCenter );

			}

			return sqrDist;

		};

	}(),

	intersectSphere: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function intersectSphere( sphere, optionalTarget ) {

			v1.subVectors( sphere.center, this.origin );
			var tca = v1.dot( this.direction );
			var d2 = v1.dot( v1 ) - tca * tca;
			var radius2 = sphere.radius * sphere.radius;

			if ( d2 > radius2 ) return null;

			var thc = Math.sqrt( radius2 - d2 );

			// t0 = first intersect point - entrance on front of sphere
			var t0 = tca - thc;

			// t1 = second intersect point - exit point on back of sphere
			var t1 = tca + thc;

			// test to see if both t0 and t1 are behind the ray - if so, return null
			if ( t0 < 0 && t1 < 0 ) return null;

			// test to see if t0 is behind the ray:
			// if it is, the ray is inside the sphere, so return the second exit point scaled by t1,
			// in order to always return an intersect point that is in front of the ray.
			if ( t0 < 0 ) return this.at( t1, optionalTarget );

			// else t0 is in front of the ray, so return the first collision point scaled by t0
			return this.at( t0, optionalTarget );

		};

	}(),

	intersectsSphere: function ( sphere ) {

		return this.distanceToPoint( sphere.center ) <= sphere.radius;

	},

	distanceToPlane: function ( plane ) {

		var denominator = plane.normal.dot( this.direction );

		if ( denominator === 0 ) {

			// line is coplanar, return origin
			if ( plane.distanceToPoint( this.origin ) === 0 ) {

				return 0;

			}

			// Null is preferable to undefined since undefined means.... it is undefined

			return null;

		}

		var t = - ( this.origin.dot( plane.normal ) + plane.constant ) / denominator;

		// Return if the ray never intersects the plane

		return t >= 0 ? t :  null;

	},

	intersectPlane: function ( plane, optionalTarget ) {

		var t = this.distanceToPlane( plane );

		if ( t === null ) {

			return null;

		}

		return this.at( t, optionalTarget );

	},

	intersectsPlane: function ( plane ) {

		// check if the ray lies on the plane first

		var distToPoint = plane.distanceToPoint( this.origin );

		if ( distToPoint === 0 ) {

			return true;

		}

		var denominator = plane.normal.dot( this.direction );

		if ( denominator * distToPoint < 0 ) {

			return true;

		}

		// ray origin is behind the plane (and is pointing behind it)

		return false;

	},

	intersectBox: function ( box, optionalTarget ) {

		var tmin, tmax, tymin, tymax, tzmin, tzmax;

		var invdirx = 1 / this.direction.x,
			invdiry = 1 / this.direction.y,
			invdirz = 1 / this.direction.z;

		var origin = this.origin;

		if ( invdirx >= 0 ) {

			tmin = ( box.min.x - origin.x ) * invdirx;
			tmax = ( box.max.x - origin.x ) * invdirx;

		} else {

			tmin = ( box.max.x - origin.x ) * invdirx;
			tmax = ( box.min.x - origin.x ) * invdirx;

		}

		if ( invdiry >= 0 ) {

			tymin = ( box.min.y - origin.y ) * invdiry;
			tymax = ( box.max.y - origin.y ) * invdiry;

		} else {

			tymin = ( box.max.y - origin.y ) * invdiry;
			tymax = ( box.min.y - origin.y ) * invdiry;

		}

		if ( ( tmin > tymax ) || ( tymin > tmax ) ) return null;

		// These lines also handle the case where tmin or tmax is NaN
		// (result of 0 * Infinity). x !== x returns true if x is NaN

		if ( tymin > tmin || tmin !== tmin ) tmin = tymin;

		if ( tymax < tmax || tmax !== tmax ) tmax = tymax;

		if ( invdirz >= 0 ) {

			tzmin = ( box.min.z - origin.z ) * invdirz;
			tzmax = ( box.max.z - origin.z ) * invdirz;

		} else {

			tzmin = ( box.max.z - origin.z ) * invdirz;
			tzmax = ( box.min.z - origin.z ) * invdirz;

		}

		if ( ( tmin > tzmax ) || ( tzmin > tmax ) ) return null;

		if ( tzmin > tmin || tmin !== tmin ) tmin = tzmin;

		if ( tzmax < tmax || tmax !== tmax ) tmax = tzmax;

		//return point closest to the ray (positive side)

		if ( tmax < 0 ) return null;

		return this.at( tmin >= 0 ? tmin : tmax, optionalTarget );

	},

	intersectsBox: ( function () {

		var v = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function intersectsBox( box ) {

			return this.intersectBox( box, v ) !== null;

		};

	} )(),

	intersectTriangle: function () {

		// Compute the offset origin, edges, and normal.
		var diff = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var edge1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var edge2 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var normal = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function intersectTriangle( a, b, c, backfaceCulling, optionalTarget ) {

			// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

			edge1.subVectors( b, a );
			edge2.subVectors( c, a );
			normal.crossVectors( edge1, edge2 );

			// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
			// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
			//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
			//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
			//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
			var DdN = this.direction.dot( normal );
			var sign;

			if ( DdN > 0 ) {

				if ( backfaceCulling ) return null;
				sign = 1;

			} else if ( DdN < 0 ) {

				sign = - 1;
				DdN = - DdN;

			} else {

				return null;

			}

			diff.subVectors( this.origin, a );
			var DdQxE2 = sign * this.direction.dot( edge2.crossVectors( diff, edge2 ) );

			// b1 < 0, no intersection
			if ( DdQxE2 < 0 ) {

				return null;

			}

			var DdE1xQ = sign * this.direction.dot( edge1.cross( diff ) );

			// b2 < 0, no intersection
			if ( DdE1xQ < 0 ) {

				return null;

			}

			// b1+b2 > 1, no intersection
			if ( DdQxE2 + DdE1xQ > DdN ) {

				return null;

			}

			// Line intersects triangle, check if ray does.
			var QdN = - sign * diff.dot( normal );

			// t < 0, no intersection
			if ( QdN < 0 ) {

				return null;

			}

			// Ray intersects triangle.
			return this.at( QdN / DdN, optionalTarget );

		};

	}(),

	applyMatrix4: function ( matrix4 ) {

		this.origin.applyMatrix4( matrix4 );
		this.direction.transformDirection( matrix4 );

		return this;

	},

	equals: function ( ray ) {

		return ray.origin.equals( this.origin ) && ray.direction.equals( this.direction );

	}

} );





/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mesh; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Sphere__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Ray__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_Triangle__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_Face3__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__materials_MeshBasicMaterial__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_BufferGeometry__ = __webpack_require__(7);












/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author jonobr1 / http://jonobr1.com/
 */

function Mesh( geometry, material ) {

	__WEBPACK_IMPORTED_MODULE_5__core_Object3D__["a" /* Object3D */].call( this );

	this.type = 'Mesh';

	this.geometry = geometry !== undefined ? geometry : new __WEBPACK_IMPORTED_MODULE_10__core_BufferGeometry__["a" /* BufferGeometry */]();
	this.material = material !== undefined ? material : new __WEBPACK_IMPORTED_MODULE_9__materials_MeshBasicMaterial__["a" /* MeshBasicMaterial */]( { color: Math.random() * 0xffffff } );

	this.drawMode = __WEBPACK_IMPORTED_MODULE_8__constants__["l" /* TrianglesDrawMode */];

	this.updateMorphTargets();

}

Mesh.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_5__core_Object3D__["a" /* Object3D */].prototype ), {

	constructor: Mesh,

	isMesh: true,

	setDrawMode: function ( value ) {

		this.drawMode = value;

	},

	copy: function ( source ) {

		__WEBPACK_IMPORTED_MODULE_5__core_Object3D__["a" /* Object3D */].prototype.copy.call( this, source );

		this.drawMode = source.drawMode;

		return this;

	},

	updateMorphTargets: function () {

		var geometry = this.geometry;
		var m, ml, name;

		if ( geometry.isBufferGeometry ) {

			var morphAttributes = geometry.morphAttributes;
			var keys = Object.keys( morphAttributes );

			if ( keys.length > 0 ) {

				var morphAttribute = morphAttributes[ keys[ 0 ] ];

				if ( morphAttribute !== undefined ) {

					this.morphTargetInfluences = [];
					this.morphTargetDictionary = {};

					for ( m = 0, ml = morphAttribute.length; m < ml; m ++ ) {

						name = morphAttribute[ m ].name || String( m );

						this.morphTargetInfluences.push( 0 );
						this.morphTargetDictionary[ name ] = m;

					}

				}

			}

		} else {

			var morphTargets = geometry.morphTargets;

			if ( morphTargets !== undefined && morphTargets.length > 0 ) {

				this.morphTargetInfluences = [];
				this.morphTargetDictionary = {};

				for ( m = 0, ml = morphTargets.length; m < ml; m ++ ) {

					name = morphTargets[ m ].name || String( m );

					this.morphTargetInfluences.push( 0 );
					this.morphTargetDictionary[ name ] = m;

				}

			}

		}

	},

	raycast: ( function () {

		var inverseMatrix = new __WEBPACK_IMPORTED_MODULE_4__math_Matrix4__["a" /* Matrix4 */]();
		var ray = new __WEBPACK_IMPORTED_MODULE_3__math_Ray__["a" /* Ray */]();
		var sphere = new __WEBPACK_IMPORTED_MODULE_2__math_Sphere__["a" /* Sphere */]();

		var vA = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();
		var vB = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();
		var vC = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();

		var tempA = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();
		var tempB = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();
		var tempC = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();

		var uvA = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* Vector2 */]();
		var uvB = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* Vector2 */]();
		var uvC = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* Vector2 */]();

		var barycoord = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();

		var intersectionPoint = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();
		var intersectionPointWorld = new __WEBPACK_IMPORTED_MODULE_0__math_Vector3__["a" /* Vector3 */]();

		function uvIntersection( point, p1, p2, p3, uv1, uv2, uv3 ) {

			__WEBPACK_IMPORTED_MODULE_6__math_Triangle__["a" /* Triangle */].barycoordFromPoint( point, p1, p2, p3, barycoord );

			uv1.multiplyScalar( barycoord.x );
			uv2.multiplyScalar( barycoord.y );
			uv3.multiplyScalar( barycoord.z );

			uv1.add( uv2 ).add( uv3 );

			return uv1.clone();

		}

		function checkIntersection( object, raycaster, ray, pA, pB, pC, point ) {

			var intersect;
			var material = object.material;

			if ( material.side === __WEBPACK_IMPORTED_MODULE_8__constants__["_19" /* BackSide */] ) {

				intersect = ray.intersectTriangle( pC, pB, pA, true, point );

			} else {

				intersect = ray.intersectTriangle( pA, pB, pC, material.side !== __WEBPACK_IMPORTED_MODULE_8__constants__["_18" /* DoubleSide */], point );

			}

			if ( intersect === null ) return null;

			intersectionPointWorld.copy( point );
			intersectionPointWorld.applyMatrix4( object.matrixWorld );

			var distance = raycaster.ray.origin.distanceTo( intersectionPointWorld );

			if ( distance < raycaster.near || distance > raycaster.far ) return null;

			return {
				distance: distance,
				point: intersectionPointWorld.clone(),
				object: object
			};

		}

		function checkBufferGeometryIntersection( object, raycaster, ray, position, uv, a, b, c ) {

			vA.fromBufferAttribute( position, a );
			vB.fromBufferAttribute( position, b );
			vC.fromBufferAttribute( position, c );

			var intersection = checkIntersection( object, raycaster, ray, vA, vB, vC, intersectionPoint );

			if ( intersection ) {

				if ( uv ) {

					uvA.fromBufferAttribute( uv, a );
					uvB.fromBufferAttribute( uv, b );
					uvC.fromBufferAttribute( uv, c );

					intersection.uv = uvIntersection( intersectionPoint, vA, vB, vC, uvA, uvB, uvC );

				}

				intersection.face = new __WEBPACK_IMPORTED_MODULE_7__core_Face3__["a" /* Face3 */]( a, b, c, __WEBPACK_IMPORTED_MODULE_6__math_Triangle__["a" /* Triangle */].normal( vA, vB, vC ) );
				intersection.faceIndex = a;

			}

			return intersection;

		}

		return function raycast( raycaster, intersects ) {

			var geometry = this.geometry;
			var material = this.material;
			var matrixWorld = this.matrixWorld;

			if ( material === undefined ) return;

			// Checking boundingSphere distance to ray

			if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

			sphere.copy( geometry.boundingSphere );
			sphere.applyMatrix4( matrixWorld );

			if ( raycaster.ray.intersectsSphere( sphere ) === false ) return;

			//

			inverseMatrix.getInverse( matrixWorld );
			ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

			// Check boundingBox before continuing

			if ( geometry.boundingBox !== null ) {

				if ( ray.intersectsBox( geometry.boundingBox ) === false ) return;

			}

			var intersection;

			if ( geometry.isBufferGeometry ) {

				var a, b, c;
				var index = geometry.index;
				var position = geometry.attributes.position;
				var uv = geometry.attributes.uv;
				var i, l;

				if ( index !== null ) {

					// indexed buffer geometry

					for ( i = 0, l = index.count; i < l; i += 3 ) {

						a = index.getX( i );
						b = index.getX( i + 1 );
						c = index.getX( i + 2 );

						intersection = checkBufferGeometryIntersection( this, raycaster, ray, position, uv, a, b, c );

						if ( intersection ) {

							intersection.faceIndex = Math.floor( i / 3 ); // triangle number in indices buffer semantics
							intersects.push( intersection );

						}

					}

				} else {

					// non-indexed buffer geometry

					for ( i = 0, l = position.count; i < l; i += 3 ) {

						a = i;
						b = i + 1;
						c = i + 2;

						intersection = checkBufferGeometryIntersection( this, raycaster, ray, position, uv, a, b, c );

						if ( intersection ) {

							intersection.index = a; // triangle number in positions buffer semantics
							intersects.push( intersection );

						}

					}

				}

			} else if ( geometry.isGeometry ) {

				var fvA, fvB, fvC;
				var isMultiMaterial = Array.isArray( material );

				var vertices = geometry.vertices;
				var faces = geometry.faces;
				var uvs;

				var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
				if ( faceVertexUvs.length > 0 ) uvs = faceVertexUvs;

				for ( var f = 0, fl = faces.length; f < fl; f ++ ) {

					var face = faces[ f ];
					var faceMaterial = isMultiMaterial ? material[ face.materialIndex ] : material;

					if ( faceMaterial === undefined ) continue;

					fvA = vertices[ face.a ];
					fvB = vertices[ face.b ];
					fvC = vertices[ face.c ];

					if ( faceMaterial.morphTargets === true ) {

						var morphTargets = geometry.morphTargets;
						var morphInfluences = this.morphTargetInfluences;

						vA.set( 0, 0, 0 );
						vB.set( 0, 0, 0 );
						vC.set( 0, 0, 0 );

						for ( var t = 0, tl = morphTargets.length; t < tl; t ++ ) {

							var influence = morphInfluences[ t ];

							if ( influence === 0 ) continue;

							var targets = morphTargets[ t ].vertices;

							vA.addScaledVector( tempA.subVectors( targets[ face.a ], fvA ), influence );
							vB.addScaledVector( tempB.subVectors( targets[ face.b ], fvB ), influence );
							vC.addScaledVector( tempC.subVectors( targets[ face.c ], fvC ), influence );

						}

						vA.add( fvA );
						vB.add( fvB );
						vC.add( fvC );

						fvA = vA;
						fvB = vB;
						fvC = vC;

					}

					intersection = checkIntersection( this, raycaster, ray, fvA, fvB, fvC, intersectionPoint );

					if ( intersection ) {

						if ( uvs && uvs[ f ] ) {

							var uvs_f = uvs[ f ];
							uvA.copy( uvs_f[ 0 ] );
							uvB.copy( uvs_f[ 1 ] );
							uvC.copy( uvs_f[ 2 ] );

							intersection.uv = uvIntersection( intersectionPoint, fvA, fvB, fvC, uvA, uvB, uvC );

						}

						intersection.face = face;
						intersection.faceIndex = f;
						intersects.push( intersection );

					}

				}

			}

		};

	}() ),

	clone: function () {

		return new this.constructor( this.geometry, this.material ).copy( this );

	}

} );





/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniformsUtils; });
/**
 * Uniform Utilities
 */

var UniformsUtils = {

	merge: function ( uniforms ) {

		var merged = {};

		for ( var u = 0; u < uniforms.length; u ++ ) {

			var tmp = this.clone( uniforms[ u ] );

			for ( var p in tmp ) {

				merged[ p ] = tmp[ p ];

			}

		}

		return merged;

	},

	clone: function ( uniforms_src ) {

		var uniforms_dst = {};

		for ( var u in uniforms_src ) {

			uniforms_dst[ u ] = {};

			for ( var p in uniforms_src[ u ] ) {

				var parameter_src = uniforms_src[ u ][ p ];

				if ( parameter_src && ( parameter_src.isColor ||
					parameter_src.isMatrix3 || parameter_src.isMatrix4 ||
					parameter_src.isVector2 || parameter_src.isVector3 || parameter_src.isVector4 ||
					parameter_src.isTexture ) ) {

					uniforms_dst[ u ][ p ] = parameter_src.clone();

				} else if ( Array.isArray( parameter_src ) ) {

					uniforms_dst[ u ][ p ] = parameter_src.slice();

				} else {

					uniforms_dst[ u ][ p ] = parameter_src;

				}

			}

		}

		return uniforms_dst;

	}

};





/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlaneGeometry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaneBufferGeometry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Geometry__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__ = __webpack_require__(11);
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */





// PlaneGeometry

function PlaneGeometry( width, height, widthSegments, heightSegments ) {

	__WEBPACK_IMPORTED_MODULE_0__core_Geometry__["a" /* Geometry */].call( this );

	this.type = 'PlaneGeometry';

	this.parameters = {
		width: width,
		height: height,
		widthSegments: widthSegments,
		heightSegments: heightSegments
	};

	this.fromBufferGeometry( new PlaneBufferGeometry( width, height, widthSegments, heightSegments ) );
	this.mergeVertices();

}

PlaneGeometry.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__core_Geometry__["a" /* Geometry */].prototype );
PlaneGeometry.prototype.constructor = PlaneGeometry;

// PlaneBufferGeometry

function PlaneBufferGeometry( width, height, widthSegments, heightSegments ) {

	__WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__["a" /* BufferGeometry */].call( this );

	this.type = 'PlaneBufferGeometry';

	this.parameters = {
		width: width,
		height: height,
		widthSegments: widthSegments,
		heightSegments: heightSegments
	};

	var width_half = width / 2;
	var height_half = height / 2;

	var gridX = Math.floor( widthSegments ) || 1;
	var gridY = Math.floor( heightSegments ) || 1;

	var gridX1 = gridX + 1;
	var gridY1 = gridY + 1;

	var segment_width = width / gridX;
	var segment_height = height / gridY;

	var ix, iy;

	// buffers

	var indices = [];
	var vertices = [];
	var normals = [];
	var uvs = [];

	// generate vertices, normals and uvs

	for ( iy = 0; iy < gridY1; iy ++ ) {

		var y = iy * segment_height - height_half;

		for ( ix = 0; ix < gridX1; ix ++ ) {

			var x = ix * segment_width - width_half;

			vertices.push( x, - y, 0 );

			normals.push( 0, 0, 1 );

			uvs.push( ix / gridX );
			uvs.push( 1 - ( iy / gridY ) );

		}

	}

	// indices

	for ( iy = 0; iy < gridY; iy ++ ) {

		for ( ix = 0; ix < gridX; ix ++ ) {

			var a = ix + gridX1 * iy;
			var b = ix + gridX1 * ( iy + 1 );
			var c = ( ix + 1 ) + gridX1 * ( iy + 1 );
			var d = ( ix + 1 ) + gridX1 * iy;

			// faces

			indices.push( a, b, d );
			indices.push( b, c, d );

		}

	}

	// build geometry

	this.setIndex( indices );
	this.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( vertices, 3 ) );
	this.addAttribute( 'normal', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( normals, 3 ) );
	this.addAttribute( 'uv', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( uvs, 2 ) );

}

PlaneBufferGeometry.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__["a" /* BufferGeometry */].prototype );
PlaneBufferGeometry.prototype.constructor = PlaneBufferGeometry;





/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsMaterial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Color__ = __webpack_require__(4);



/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  size: <float>,
 *  sizeAttenuation: <bool>
 * }
 */

function PointsMaterial( parameters ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].call( this );

	this.type = 'PointsMaterial';

	this.color = new __WEBPACK_IMPORTED_MODULE_1__math_Color__["a" /* Color */]( 0xffffff );

	this.map = null;

	this.size = 1;
	this.sizeAttenuation = true;

	this.lights = false;

	this.setValues( parameters );

}

PointsMaterial.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype );
PointsMaterial.prototype.constructor = PointsMaterial;

PointsMaterial.prototype.isPointsMaterial = true;

PointsMaterial.prototype.copy = function ( source ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype.copy.call( this, source );

	this.color.copy( source.color );

	this.map = source.map;

	this.size = source.size;
	this.sizeAttenuation = source.sizeAttenuation;

	return this;

};





/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sphere__ = __webpack_require__(9);



/**
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */

function Box3( min, max ) {

	this.min = ( min !== undefined ) ? min : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]( + Infinity, + Infinity, + Infinity );
	this.max = ( max !== undefined ) ? max : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]( - Infinity, - Infinity, - Infinity );

}

Object.assign( Box3.prototype, {

	isBox3: true,

	set: function ( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	},

	setFromArray: function ( array ) {

		var minX = + Infinity;
		var minY = + Infinity;
		var minZ = + Infinity;

		var maxX = - Infinity;
		var maxY = - Infinity;
		var maxZ = - Infinity;

		for ( var i = 0, l = array.length; i < l; i += 3 ) {

			var x = array[ i ];
			var y = array[ i + 1 ];
			var z = array[ i + 2 ];

			if ( x < minX ) minX = x;
			if ( y < minY ) minY = y;
			if ( z < minZ ) minZ = z;

			if ( x > maxX ) maxX = x;
			if ( y > maxY ) maxY = y;
			if ( z > maxZ ) maxZ = z;

		}

		this.min.set( minX, minY, minZ );
		this.max.set( maxX, maxY, maxZ );

		return this;

	},

	setFromBufferAttribute: function ( attribute ) {

		var minX = + Infinity;
		var minY = + Infinity;
		var minZ = + Infinity;

		var maxX = - Infinity;
		var maxY = - Infinity;
		var maxZ = - Infinity;

		for ( var i = 0, l = attribute.count; i < l; i ++ ) {

			var x = attribute.getX( i );
			var y = attribute.getY( i );
			var z = attribute.getZ( i );

			if ( x < minX ) minX = x;
			if ( y < minY ) minY = y;
			if ( z < minZ ) minZ = z;

			if ( x > maxX ) maxX = x;
			if ( y > maxY ) maxY = y;
			if ( z > maxZ ) maxZ = z;

		}

		this.min.set( minX, minY, minZ );
		this.max.set( maxX, maxY, maxZ );

		return this;

	},

	setFromPoints: function ( points ) {

		this.makeEmpty();

		for ( var i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	},

	setFromCenterAndSize: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function setFromCenterAndSize( center, size ) {

			var halfSize = v1.copy( size ).multiplyScalar( 0.5 );

			this.min.copy( center ).sub( halfSize );
			this.max.copy( center ).add( halfSize );

			return this;

		};

	}(),

	setFromObject: function ( object ) {

		this.makeEmpty();

		return this.expandByObject( object );

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	},

	makeEmpty: function () {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	},

	isEmpty: function () {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	},

	getCenter: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		return this.isEmpty() ? result.set( 0, 0, 0 ) : result.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	},

	getSize: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		return this.isEmpty() ? result.set( 0, 0, 0 ) : result.subVectors( this.max, this.min );

	},

	expandByPoint: function ( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	},

	expandByVector: function ( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	},

	expandByScalar: function ( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	},

	expandByObject: function () {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function expandByObject( object ) {

			var scope = this;

			object.updateMatrixWorld( true );

			object.traverse( function ( node ) {

				var i, l;

				var geometry = node.geometry;

				if ( geometry !== undefined ) {

					if ( geometry.isGeometry ) {

						var vertices = geometry.vertices;

						for ( i = 0, l = vertices.length; i < l; i ++ ) {

							v1.copy( vertices[ i ] );
							v1.applyMatrix4( node.matrixWorld );

							scope.expandByPoint( v1 );

						}

					} else if ( geometry.isBufferGeometry ) {

						var attribute = geometry.attributes.position;

						if ( attribute !== undefined ) {

							for ( i = 0, l = attribute.count; i < l; i ++ ) {

								v1.fromBufferAttribute( attribute, i ).applyMatrix4( node.matrixWorld );

								scope.expandByPoint( v1 );

							}

						}

					}

				}

			} );

			return this;

		};

	}(),

	containsPoint: function ( point ) {

		return point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y ||
			point.z < this.min.z || point.z > this.max.z ? false : true;

	},

	containsBox: function ( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	},

	getParameter: function ( point, optionalTarget ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return result.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	},

	intersectsBox: function ( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x < this.min.x || box.min.x > this.max.x ||
			box.max.y < this.min.y || box.min.y > this.max.y ||
			box.max.z < this.min.z || box.min.z > this.max.z ? false : true;

	},

	intersectsSphere: ( function () {

		var closestPoint = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function intersectsSphere( sphere ) {

			// Find the point on the AABB closest to the sphere center.
			this.clampPoint( sphere.center, closestPoint );

			// If that point is inside the sphere, the AABB and sphere intersect.
			return closestPoint.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

		};

	} )(),

	intersectsPlane: function ( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		var min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= plane.constant && max >= plane.constant );

	},

	clampPoint: function ( point, optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		return result.copy( point ).clamp( this.min, this.max );

	},

	distanceToPoint: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function distanceToPoint( point ) {

			var clampedPoint = v1.copy( point ).clamp( this.min, this.max );
			return clampedPoint.sub( point ).length();

		};

	}(),

	getBoundingSphere: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function getBoundingSphere( optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_1__Sphere__["a" /* Sphere */]();

			this.getCenter( result.center );

			result.radius = this.getSize( v1 ).length() * 0.5;

			return result;

		};

	}(),

	intersect: function ( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if( this.isEmpty() ) this.makeEmpty();

		return this;

	},

	union: function ( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	},

	applyMatrix4: function () {

		var points = [
			new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */](),
			new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */](),
			new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */](),
			new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */](),
			new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */](),
			new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */](),
			new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */](),
			new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]()
		];

		return function applyMatrix4( matrix ) {

			// transform of empty box is an empty box.
			if( this.isEmpty() ) return this;

			// NOTE: I am using a binary pattern to specify all 2^3 combinations below
			points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
			points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
			points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
			points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
			points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
			points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
			points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
			points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix );	// 111

			this.setFromPoints( points );

			return this;

		};

	}(),

	translate: function ( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	},

	equals: function ( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

} );





/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Matrix3__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector3__ = __webpack_require__(0);



/**
 * @author bhouston / http://clara.io
 */

function Plane( normal, constant ) {

	this.normal = ( normal !== undefined ) ? normal : new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]( 1, 0, 0 );
	this.constant = ( constant !== undefined ) ? constant : 0;

}

Object.assign( Plane.prototype, {

	set: function ( normal, constant ) {

		this.normal.copy( normal );
		this.constant = constant;

		return this;

	},

	setComponents: function ( x, y, z, w ) {

		this.normal.set( x, y, z );
		this.constant = w;

		return this;

	},

	setFromNormalAndCoplanarPoint: function ( normal, point ) {

		this.normal.copy( normal );
		this.constant = - point.dot( this.normal );	// must be this.normal, not normal, as this.normal is normalized

		return this;

	},

	setFromCoplanarPoints: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();
		var v2 = new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();

		return function setFromCoplanarPoints( a, b, c ) {

			var normal = v1.subVectors( c, b ).cross( v2.subVectors( a, b ) ).normalize();

			// Q: should an error be thrown if normal is zero (e.g. degenerate plane)?

			this.setFromNormalAndCoplanarPoint( normal, a );

			return this;

		};

	}(),

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( plane ) {

		this.normal.copy( plane.normal );
		this.constant = plane.constant;

		return this;

	},

	normalize: function () {

		// Note: will lead to a divide by zero if the plane is invalid.

		var inverseNormalLength = 1.0 / this.normal.length();
		this.normal.multiplyScalar( inverseNormalLength );
		this.constant *= inverseNormalLength;

		return this;

	},

	negate: function () {

		this.constant *= - 1;
		this.normal.negate();

		return this;

	},

	distanceToPoint: function ( point ) {

		return this.normal.dot( point ) + this.constant;

	},

	distanceToSphere: function ( sphere ) {

		return this.distanceToPoint( sphere.center ) - sphere.radius;

	},

	projectPoint: function ( point, optionalTarget ) {

		return this.orthoPoint( point, optionalTarget ).sub( point ).negate();

	},

	orthoPoint: function ( point, optionalTarget ) {

		var perpendicularMagnitude = this.distanceToPoint( point );

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();
		return result.copy( this.normal ).multiplyScalar( perpendicularMagnitude );

	},

	intersectLine: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();

		return function intersectLine( line, optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();

			var direction = line.delta( v1 );

			var denominator = this.normal.dot( direction );

			if ( denominator === 0 ) {

				// line is coplanar, return origin
				if ( this.distanceToPoint( line.start ) === 0 ) {

					return result.copy( line.start );

				}

				// Unsure if this is the correct method to handle this case.
				return undefined;

			}

			var t = - ( line.start.dot( this.normal ) + this.constant ) / denominator;

			if ( t < 0 || t > 1 ) {

				return undefined;

			}

			return result.copy( direction ).multiplyScalar( t ).add( line.start );

		};

	}(),

	intersectsLine: function ( line ) {

		// Note: this tests if a line intersects the plane, not whether it (or its end-points) are coplanar with it.

		var startSign = this.distanceToPoint( line.start );
		var endSign = this.distanceToPoint( line.end );

		return ( startSign < 0 && endSign > 0 ) || ( endSign < 0 && startSign > 0 );

	},

	intersectsBox: function ( box ) {

		return box.intersectsPlane( this );

	},

	intersectsSphere: function ( sphere ) {

		return sphere.intersectsPlane( this );

	},

	coplanarPoint: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();
		return result.copy( this.normal ).multiplyScalar( - this.constant );

	},

	applyMatrix4: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]();
		var m1 = new __WEBPACK_IMPORTED_MODULE_0__Matrix3__["a" /* Matrix3 */]();

		return function applyMatrix4( matrix, optionalNormalMatrix ) {

			var referencePoint = this.coplanarPoint( v1 ).applyMatrix4( matrix );

			// transform normal based on theory here:
			// http://www.songho.ca/opengl/gl_normaltransform.html
			var normalMatrix = optionalNormalMatrix || m1.getNormalMatrix( matrix );
			var normal = this.normal.applyMatrix3( normalMatrix ).normalize();

			// recalculate constant (like in setFromNormalAndCoplanarPoint)
			this.constant = - referencePoint.dot( normal );

			return this;

		};

	}(),

	translate: function ( offset ) {

		this.constant = this.constant - offset.dot( this.normal );

		return this;

	},

	equals: function ( plane ) {

		return plane.normal.equals( this.normal ) && ( plane.constant === this.constant );

	}

} );





/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderLib; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UniformsLib__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Color__ = __webpack_require__(4);






/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 */

var ShaderLib = {

	basic: {

		uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].common,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].aomap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].lightmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].fog
		] ),

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshbasic_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshbasic_frag

	},

	lambert: {

		uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].common,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].aomap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].lightmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].emissivemap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].fog,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].lights,
			{
				emissive: { value: new __WEBPACK_IMPORTED_MODULE_4__math_Color__["a" /* Color */]( 0x000000 ) }
			}
		] ),

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshlambert_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshlambert_frag

	},

	phong: {

		uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].common,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].aomap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].lightmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].emissivemap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].bumpmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].normalmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].displacementmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].gradientmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].fog,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].lights,
			{
				emissive: { value: new __WEBPACK_IMPORTED_MODULE_4__math_Color__["a" /* Color */]( 0x000000 ) },
				specular: { value: new __WEBPACK_IMPORTED_MODULE_4__math_Color__["a" /* Color */]( 0x111111 ) },
				shininess: { value: 30 }
			}
		] ),

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshphong_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshphong_frag

	},

	standard: {

		uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].common,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].aomap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].lightmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].emissivemap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].bumpmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].normalmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].displacementmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].roughnessmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].metalnessmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].fog,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].lights,
			{
				emissive: { value: new __WEBPACK_IMPORTED_MODULE_4__math_Color__["a" /* Color */]( 0x000000 ) },
				roughness: { value: 0.5 },
				metalness: { value: 0.5 },
				envMapIntensity: { value: 1 } // temporary
			}
		] ),

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshphysical_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshphysical_frag

	},

	points: {

		uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].points,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].fog
		] ),

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].points_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].points_frag

	},

	dashed: {

		uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].common,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		] ),

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].linedashed_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].linedashed_frag

	},

	depth: {

		uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].common,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].displacementmap
		] ),

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].depth_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].depth_frag

	},

	normal: {

		uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].common,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].bumpmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].normalmap,
			__WEBPACK_IMPORTED_MODULE_3__UniformsLib__["a" /* UniformsLib */].displacementmap,
			{
				opacity: { value: 1.0 }
			}
		] ),

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].normal_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].normal_frag

	},

	/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */

	cube: {

		uniforms: {
			tCube: { value: null },
			tFlip: { value: - 1 },
			opacity: { value: 1.0 }
		},

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].cube_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].cube_frag

	},

	/* -------------------------------------------------------------------------
	//	Cube map shader
	 ------------------------------------------------------------------------- */

	equirect: {

		uniforms: {
			tEquirect: { value: null },
			tFlip: { value: - 1 }
		},

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].equirect_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].equirect_frag

	},

	distanceRGBA: {

		uniforms: {
			lightPos: { value: new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* Vector3 */]() }
		},

		vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].distanceRGBA_vert,
		fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].distanceRGBA_frag

	}

};

ShaderLib.physical = {

	uniforms: __WEBPACK_IMPORTED_MODULE_1__UniformsUtils__["a" /* UniformsUtils */].merge( [
		ShaderLib.standard.uniforms,
		{
			clearCoat: { value: 0 },
			clearCoatRoughness: { value: 0 }
		}
	] ),

	vertexShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshphysical_vert,
	fragmentShader: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk__["a" /* ShaderChunk */].meshphysical_frag

};





/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Quaternion__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Vector3__ = __webpack_require__(0);
/**
 * @author mrdoob / http://mrdoob.com/
 * @author mikael emtinger / http://gomo.se/
 * @author WestLangley / http://github.com/WestLangley
*/






function Camera() {

	__WEBPACK_IMPORTED_MODULE_2__core_Object3D__["a" /* Object3D */].call( this );

	this.type = 'Camera';

	this.matrixWorldInverse = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* Matrix4 */]();
	this.projectionMatrix = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* Matrix4 */]();

}

Camera.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_2__core_Object3D__["a" /* Object3D */].prototype ), {

	constructor: Camera,

	isCamera: true,

	copy: function ( source, recursive ) {

		__WEBPACK_IMPORTED_MODULE_2__core_Object3D__["a" /* Object3D */].prototype.copy.call( this, source, recursive );

		this.matrixWorldInverse.copy( source.matrixWorldInverse );
		this.projectionMatrix.copy( source.projectionMatrix );

		return this;

	},

	getWorldDirection: function () {

		var quaternion = new __WEBPACK_IMPORTED_MODULE_1__math_Quaternion__["a" /* Quaternion */]();

		return function getWorldDirection( optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_3__math_Vector3__["a" /* Vector3 */]();

			this.getWorldQuaternion( quaternion );

			return result.set( 0, 0, - 1 ).applyQuaternion( quaternion );

		};

	}(),

	updateMatrixWorld: function ( force ) {

		__WEBPACK_IMPORTED_MODULE_2__core_Object3D__["a" /* Object3D */].prototype.updateMatrixWorld.call( this, force );

		this.matrixWorldInverse.getInverse( this.matrixWorld );

	},

	clone: function () {

		return new this.constructor().copy( this );

	}

} );




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrthographicCamera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Camera__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_Object3D__ = __webpack_require__(2);



/**
 * @author alteredq / http://alteredqualia.com/
 * @author arose / http://github.com/arose
 */

function OrthographicCamera( left, right, top, bottom, near, far ) {

	__WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* Camera */].call( this );

	this.type = 'OrthographicCamera';

	this.zoom = 1;
	this.view = null;

	this.left = left;
	this.right = right;
	this.top = top;
	this.bottom = bottom;

	this.near = ( near !== undefined ) ? near : 0.1;
	this.far = ( far !== undefined ) ? far : 2000;

	this.updateProjectionMatrix();

}

OrthographicCamera.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* Camera */].prototype ), {

	constructor: OrthographicCamera,

	isOrthographicCamera: true,

	copy: function ( source, recursive ) {

		__WEBPACK_IMPORTED_MODULE_0__Camera__["a" /* Camera */].prototype.copy.call( this, source, recursive );

		this.left = source.left;
		this.right = source.right;
		this.top = source.top;
		this.bottom = source.bottom;
		this.near = source.near;
		this.far = source.far;

		this.zoom = source.zoom;
		this.view = source.view === null ? null : Object.assign( {}, source.view );

		return this;

	},

	setViewOffset: function( fullWidth, fullHeight, x, y, width, height ) {

		this.view = {
			fullWidth: fullWidth,
			fullHeight: fullHeight,
			offsetX: x,
			offsetY: y,
			width: width,
			height: height
		};

		this.updateProjectionMatrix();

	},

	clearViewOffset: function() {

		this.view = null;
		this.updateProjectionMatrix();

	},

	updateProjectionMatrix: function () {

		var dx = ( this.right - this.left ) / ( 2 * this.zoom );
		var dy = ( this.top - this.bottom ) / ( 2 * this.zoom );
		var cx = ( this.right + this.left ) / 2;
		var cy = ( this.top + this.bottom ) / 2;

		var left = cx - dx;
		var right = cx + dx;
		var top = cy + dy;
		var bottom = cy - dy;

		if ( this.view !== null ) {

			var zoomW = this.zoom / ( this.view.width / this.view.fullWidth );
			var zoomH = this.zoom / ( this.view.height / this.view.fullHeight );
			var scaleW = ( this.right - this.left ) / this.view.width;
			var scaleH = ( this.top - this.bottom ) / this.view.height;

			left += scaleW * ( this.view.offsetX / zoomW );
			right = left + scaleW * ( this.view.width / zoomW );
			top -= scaleH * ( this.view.offsetY / zoomH );
			bottom = top - scaleH * ( this.view.height / zoomH );

		}

		this.projectionMatrix.makeOrthographic( left, right, top, bottom, this.near, this.far );

	},

	toJSON: function ( meta ) {

		var data = __WEBPACK_IMPORTED_MODULE_1__core_Object3D__["a" /* Object3D */].prototype.toJSON.call( this, meta );

		data.object.zoom = this.zoom;
		data.object.left = this.left;
		data.object.right = this.right;
		data.object.top = this.top;
		data.object.bottom = this.bottom;
		data.object.near = this.near;
		data.object.far = this.far;

		if ( this.view !== null ) data.object.view = Object.assign( {}, this.view );

		return data;

	}

} );





/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Face3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector3__ = __webpack_require__(0);



/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function Face3( a, b, c, normal, color, materialIndex ) {

	this.a = a;
	this.b = b;
	this.c = c;

	this.normal = ( normal && normal.isVector3 ) ? normal : new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();
	this.vertexNormals = Array.isArray( normal ) ? normal : [];

	this.color = ( color && color.isColor ) ? color : new __WEBPACK_IMPORTED_MODULE_0__math_Color__["a" /* Color */]();
	this.vertexColors = Array.isArray( color ) ? color : [];

	this.materialIndex = materialIndex !== undefined ? materialIndex : 0;

}

Object.assign( Face3.prototype, {

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.a = source.a;
		this.b = source.b;
		this.c = source.c;

		this.normal.copy( source.normal );
		this.color.copy( source.color );

		this.materialIndex = source.materialIndex;

		for ( var i = 0, il = source.vertexNormals.length; i < il; i ++ ) {

			this.vertexNormals[ i ] = source.vertexNormals[ i ].clone();

		}

		for ( var i = 0, il = source.vertexColors.length; i < il; i ++ ) {

			this.vertexColors[ i ] = source.vertexColors[ i ].clone();

		}

		return this;

	}

} );





/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Light; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Color__ = __webpack_require__(4);



/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function Light( color, intensity ) {

	__WEBPACK_IMPORTED_MODULE_0__core_Object3D__["a" /* Object3D */].call( this );

	this.type = 'Light';

	this.color = new __WEBPACK_IMPORTED_MODULE_1__math_Color__["a" /* Color */]( color );
	this.intensity = intensity !== undefined ? intensity : 1;

	this.receiveShadow = undefined;

}

Light.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__core_Object3D__["a" /* Object3D */].prototype ), {

	constructor: Light,

	isLight: true,

	copy: function ( source ) {

		__WEBPACK_IMPORTED_MODULE_0__core_Object3D__["a" /* Object3D */].prototype.copy.call( this, source );

		this.color.copy( source.color );
		this.intensity = source.intensity;

		return this;

	},

	toJSON: function ( meta ) {

		var data = __WEBPACK_IMPORTED_MODULE_0__core_Object3D__["a" /* Object3D */].prototype.toJSON.call( this, meta );

		data.object.color = this.color.getHex();
		data.object.intensity = this.intensity;

		if ( this.groundColor !== undefined ) data.object.groundColor = this.groundColor.getHex();

		if ( this.distance !== undefined ) data.object.distance = this.distance;
		if ( this.angle !== undefined ) data.object.angle = this.angle;
		if ( this.decay !== undefined ) data.object.decay = this.decay;
		if ( this.penumbra !== undefined ) data.object.penumbra = this.penumbra;

		if ( this.shadow !== undefined ) data.object.shadow = this.shadow.toJSON();

		return data;

	}

} );





/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLoadingManager; });
/* unused harmony export LoadingManager */
/**
 * @author mrdoob / http://mrdoob.com/
 */

function LoadingManager( onLoad, onProgress, onError ) {

	var scope = this;

	var isLoading = false, itemsLoaded = 0, itemsTotal = 0;

	this.onStart = undefined;
	this.onLoad = onLoad;
	this.onProgress = onProgress;
	this.onError = onError;

	this.itemStart = function ( url ) {

		itemsTotal ++;

		if ( isLoading === false ) {

			if ( scope.onStart !== undefined ) {

				scope.onStart( url, itemsLoaded, itemsTotal );

			}

		}

		isLoading = true;

	};

	this.itemEnd = function ( url ) {

		itemsLoaded ++;

		if ( scope.onProgress !== undefined ) {

			scope.onProgress( url, itemsLoaded, itemsTotal );

		}

		if ( itemsLoaded === itemsTotal ) {

			isLoading = false;

			if ( scope.onLoad !== undefined ) {

				scope.onLoad();

			}

		}

	};

	this.itemError = function ( url ) {

		if ( scope.onError !== undefined ) {

			scope.onError( url );

		}

	};

}

var DefaultLoadingManager = new LoadingManager();





/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineBasicMaterial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Color__ = __webpack_require__(4);



/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  linewidth: <float>,
 *  linecap: "round",
 *  linejoin: "round"
 * }
 */

function LineBasicMaterial( parameters ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].call( this );

	this.type = 'LineBasicMaterial';

	this.color = new __WEBPACK_IMPORTED_MODULE_1__math_Color__["a" /* Color */]( 0xffffff );

	this.linewidth = 1;
	this.linecap = 'round';
	this.linejoin = 'round';

	this.lights = false;

	this.setValues( parameters );

}

LineBasicMaterial.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype );
LineBasicMaterial.prototype.constructor = LineBasicMaterial;

LineBasicMaterial.prototype.isLineBasicMaterial = true;

LineBasicMaterial.prototype.copy = function ( source ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype.copy.call( this, source );

	this.color.copy( source.color );

	this.linewidth = source.linewidth;
	this.linecap = source.linecap;
	this.linejoin = source.linejoin;

	return this;

};





/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderMaterial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderers_shaders_UniformsUtils__ = __webpack_require__(21);



/**
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  defines: { "label" : "value" },
 *  uniforms: { "parameter1": { value: 1.0 }, "parameter2": { value2: 2 } },
 *
 *  fragmentShader: <string>,
 *  vertexShader: <string>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  lights: <bool>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */

function ShaderMaterial( parameters ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].call( this );

	this.type = 'ShaderMaterial';

	this.defines = {};
	this.uniforms = {};

	this.vertexShader = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}';
	this.fragmentShader = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}';

	this.linewidth = 1;

	this.wireframe = false;
	this.wireframeLinewidth = 1;

	this.fog = false; // set to use scene fog
	this.lights = false; // set to use scene lights
	this.clipping = false; // set to use user-defined clipping planes

	this.skinning = false; // set to use skinning attribute streams
	this.morphTargets = false; // set to use morph targets
	this.morphNormals = false; // set to use morph normals

	this.extensions = {
		derivatives: false, // set to use derivatives
		fragDepth: false, // set to use fragment depth values
		drawBuffers: false, // set to use draw buffers
		shaderTextureLOD: false // set to use shader texture LOD
	};

	// When rendered geometry doesn't include these attributes but the material does,
	// use these default values in WebGL. This avoids errors when buffer data is missing.
	this.defaultAttributeValues = {
		'color': [ 1, 1, 1 ],
		'uv': [ 0, 0 ],
		'uv2': [ 0, 0 ]
	};

	this.index0AttributeName = undefined;

	if ( parameters !== undefined ) {

		if ( parameters.attributes !== undefined ) {

			console.error( 'THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.' );

		}

		this.setValues( parameters );

	}

}

ShaderMaterial.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype );
ShaderMaterial.prototype.constructor = ShaderMaterial;

ShaderMaterial.prototype.isShaderMaterial = true;

ShaderMaterial.prototype.copy = function ( source ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype.copy.call( this, source );

	this.fragmentShader = source.fragmentShader;
	this.vertexShader = source.vertexShader;

	this.uniforms = __WEBPACK_IMPORTED_MODULE_1__renderers_shaders_UniformsUtils__["a" /* UniformsUtils */].clone( source.uniforms );

	this.defines = source.defines;

	this.wireframe = source.wireframe;
	this.wireframeLinewidth = source.wireframeLinewidth;

	this.lights = source.lights;
	this.clipping = source.clipping;

	this.skinning = source.skinning;

	this.morphTargets = source.morphTargets;
	this.morphNormals = source.morphNormals;

	this.extensions = source.extensions;

	return this;

};

ShaderMaterial.prototype.toJSON = function ( meta ) {

	var data = __WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype.toJSON.call( this, meta );

	data.uniforms = this.uniforms;
	data.vertexShader = this.vertexShader;
	data.fragmentShader = this.fragmentShader;

	return data;

};





/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Frustum; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sphere__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Plane__ = __webpack_require__(25);




/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / http://clara.io
 */

function Frustum( p0, p1, p2, p3, p4, p5 ) {

	this.planes = [

		( p0 !== undefined ) ? p0 : new __WEBPACK_IMPORTED_MODULE_2__Plane__["a" /* Plane */](),
		( p1 !== undefined ) ? p1 : new __WEBPACK_IMPORTED_MODULE_2__Plane__["a" /* Plane */](),
		( p2 !== undefined ) ? p2 : new __WEBPACK_IMPORTED_MODULE_2__Plane__["a" /* Plane */](),
		( p3 !== undefined ) ? p3 : new __WEBPACK_IMPORTED_MODULE_2__Plane__["a" /* Plane */](),
		( p4 !== undefined ) ? p4 : new __WEBPACK_IMPORTED_MODULE_2__Plane__["a" /* Plane */](),
		( p5 !== undefined ) ? p5 : new __WEBPACK_IMPORTED_MODULE_2__Plane__["a" /* Plane */]()

	];

}

Object.assign( Frustum.prototype, {

	set: function ( p0, p1, p2, p3, p4, p5 ) {

		var planes = this.planes;

		planes[ 0 ].copy( p0 );
		planes[ 1 ].copy( p1 );
		planes[ 2 ].copy( p2 );
		planes[ 3 ].copy( p3 );
		planes[ 4 ].copy( p4 );
		planes[ 5 ].copy( p5 );

		return this;

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( frustum ) {

		var planes = this.planes;

		for ( var i = 0; i < 6; i ++ ) {

			planes[ i ].copy( frustum.planes[ i ] );

		}

		return this;

	},

	setFromMatrix: function ( m ) {

		var planes = this.planes;
		var me = m.elements;
		var me0 = me[ 0 ], me1 = me[ 1 ], me2 = me[ 2 ], me3 = me[ 3 ];
		var me4 = me[ 4 ], me5 = me[ 5 ], me6 = me[ 6 ], me7 = me[ 7 ];
		var me8 = me[ 8 ], me9 = me[ 9 ], me10 = me[ 10 ], me11 = me[ 11 ];
		var me12 = me[ 12 ], me13 = me[ 13 ], me14 = me[ 14 ], me15 = me[ 15 ];

		planes[ 0 ].setComponents( me3 - me0, me7 - me4, me11 - me8, me15 - me12 ).normalize();
		planes[ 1 ].setComponents( me3 + me0, me7 + me4, me11 + me8, me15 + me12 ).normalize();
		planes[ 2 ].setComponents( me3 + me1, me7 + me5, me11 + me9, me15 + me13 ).normalize();
		planes[ 3 ].setComponents( me3 - me1, me7 - me5, me11 - me9, me15 - me13 ).normalize();
		planes[ 4 ].setComponents( me3 - me2, me7 - me6, me11 - me10, me15 - me14 ).normalize();
		planes[ 5 ].setComponents( me3 + me2, me7 + me6, me11 + me10, me15 + me14 ).normalize();

		return this;

	},

	intersectsObject: function () {

		var sphere = new __WEBPACK_IMPORTED_MODULE_1__Sphere__["a" /* Sphere */]();

		return function intersectsObject( object ) {

			var geometry = object.geometry;

			if ( geometry.boundingSphere === null )
				geometry.computeBoundingSphere();

			sphere.copy( geometry.boundingSphere )
				.applyMatrix4( object.matrixWorld );

			return this.intersectsSphere( sphere );

		};

	}(),

	intersectsSprite: function () {

		var sphere = new __WEBPACK_IMPORTED_MODULE_1__Sphere__["a" /* Sphere */]();

		return function intersectsSprite( sprite ) {

			sphere.center.set( 0, 0, 0 );
			sphere.radius = 0.7071067811865476;
			sphere.applyMatrix4( sprite.matrixWorld );

			return this.intersectsSphere( sphere );

		};

	}(),

	intersectsSphere: function ( sphere ) {

		var planes = this.planes;
		var center = sphere.center;
		var negRadius = - sphere.radius;

		for ( var i = 0; i < 6; i ++ ) {

			var distance = planes[ i ].distanceToPoint( center );

			if ( distance < negRadius ) {

				return false;

			}

		}

		return true;

	},

	intersectsBox: function () {

		var p1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */](),
			p2 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function intersectsBox( box ) {

			var planes = this.planes;

			for ( var i = 0; i < 6; i ++ ) {

				var plane = planes[ i ];

				p1.x = plane.normal.x > 0 ? box.min.x : box.max.x;
				p2.x = plane.normal.x > 0 ? box.max.x : box.min.x;
				p1.y = plane.normal.y > 0 ? box.min.y : box.max.y;
				p2.y = plane.normal.y > 0 ? box.max.y : box.min.y;
				p1.z = plane.normal.z > 0 ? box.min.z : box.max.z;
				p2.z = plane.normal.z > 0 ? box.max.z : box.min.z;

				var d1 = plane.distanceToPoint( p1 );
				var d2 = plane.distanceToPoint( p2 );

				// if both outside plane, no intersection

				if ( d1 < 0 && d2 < 0 ) {

					return false;

				}

			}

			return true;

		};

	}(),

	containsPoint: function ( point ) {

		var planes = this.planes;

		for ( var i = 0; i < 6; i ++ ) {

			if ( planes[ i ].distanceToPoint( point ) < 0 ) {

				return false;

			}

		}

		return true;

	}

} );





/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineSegments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Line__ = __webpack_require__(73);


/**
 * @author mrdoob / http://mrdoob.com/
 */

function LineSegments( geometry, material ) {

	__WEBPACK_IMPORTED_MODULE_0__Line__["a" /* Line */].call( this, geometry, material );

	this.type = 'LineSegments';

}

LineSegments.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__Line__["a" /* Line */].prototype ), {

	constructor: LineSegments,

	isLineSegments: true

} );





/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Points; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Sphere__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Ray__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materials_PointsMaterial__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_BufferGeometry__ = __webpack_require__(7);








/**
 * @author alteredq / http://alteredqualia.com/
 */

function Points( geometry, material ) {

	__WEBPACK_IMPORTED_MODULE_3__core_Object3D__["a" /* Object3D */].call( this );

	this.type = 'Points';

	this.geometry = geometry !== undefined ? geometry : new __WEBPACK_IMPORTED_MODULE_6__core_BufferGeometry__["a" /* BufferGeometry */]();
	this.material = material !== undefined ? material : new __WEBPACK_IMPORTED_MODULE_5__materials_PointsMaterial__["a" /* PointsMaterial */]( { color: Math.random() * 0xffffff } );

}

Points.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_3__core_Object3D__["a" /* Object3D */].prototype ), {

	constructor: Points,

	isPoints: true,

	raycast: ( function () {

		var inverseMatrix = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */]();
		var ray = new __WEBPACK_IMPORTED_MODULE_1__math_Ray__["a" /* Ray */]();
		var sphere = new __WEBPACK_IMPORTED_MODULE_0__math_Sphere__["a" /* Sphere */]();

		return function raycast( raycaster, intersects ) {

			var object = this;
			var geometry = this.geometry;
			var matrixWorld = this.matrixWorld;
			var threshold = raycaster.params.Points.threshold;

			// Checking boundingSphere distance to ray

			if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

			sphere.copy( geometry.boundingSphere );
			sphere.applyMatrix4( matrixWorld );
			sphere.radius += threshold;

			if ( raycaster.ray.intersectsSphere( sphere ) === false ) return;

			//

			inverseMatrix.getInverse( matrixWorld );
			ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

			var localThreshold = threshold / ( ( this.scale.x + this.scale.y + this.scale.z ) / 3 );
			var localThresholdSq = localThreshold * localThreshold;
			var position = new __WEBPACK_IMPORTED_MODULE_4__math_Vector3__["a" /* Vector3 */]();

			function testPoint( point, index ) {

				var rayPointDistanceSq = ray.distanceSqToPoint( point );

				if ( rayPointDistanceSq < localThresholdSq ) {

					var intersectPoint = ray.closestPointToPoint( point );
					intersectPoint.applyMatrix4( matrixWorld );

					var distance = raycaster.ray.origin.distanceTo( intersectPoint );

					if ( distance < raycaster.near || distance > raycaster.far ) return;

					intersects.push( {

						distance: distance,
						distanceToRay: Math.sqrt( rayPointDistanceSq ),
						point: intersectPoint.clone(),
						index: index,
						face: null,
						object: object

					} );

				}

			}

			if ( geometry.isBufferGeometry ) {

				var index = geometry.index;
				var attributes = geometry.attributes;
				var positions = attributes.position.array;

				if ( index !== null ) {

					var indices = index.array;

					for ( var i = 0, il = indices.length; i < il; i ++ ) {

						var a = indices[ i ];

						position.fromArray( positions, a * 3 );

						testPoint( position, a );

					}

				} else {

					for ( var i = 0, l = positions.length / 3; i < l; i ++ ) {

						position.fromArray( positions, i * 3 );

						testPoint( position, i );

					}

				}

			} else {

				var vertices = geometry.vertices;

				for ( var i = 0, l = vertices.length; i < l; i ++ ) {

					testPoint( vertices[ i ], i );

				}

			}

		};

	}() ),

	clone: function () {

		return new this.constructor( this.geometry, this.material ).copy( this );

	}

} );





/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShaderChunk; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShaderChunk_alphamap_fragment_glsl__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ShaderChunk_alphamap_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ShaderChunk_alphamap_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ShaderChunk_alphamap_pars_fragment_glsl__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ShaderChunk_alphamap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ShaderChunk_alphamap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ShaderChunk_alphatest_fragment_glsl__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ShaderChunk_alphatest_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ShaderChunk_alphatest_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ShaderChunk_aomap_fragment_glsl__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ShaderChunk_aomap_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ShaderChunk_aomap_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ShaderChunk_aomap_pars_fragment_glsl__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ShaderChunk_aomap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__ShaderChunk_aomap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ShaderChunk_begin_vertex_glsl__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ShaderChunk_begin_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ShaderChunk_begin_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ShaderChunk_beginnormal_vertex_glsl__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ShaderChunk_beginnormal_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ShaderChunk_beginnormal_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShaderChunk_bsdfs_glsl__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShaderChunk_bsdfs_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ShaderChunk_bsdfs_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ShaderChunk_bumpmap_pars_fragment_glsl__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ShaderChunk_bumpmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ShaderChunk_bumpmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ShaderChunk_clipping_planes_fragment_glsl__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ShaderChunk_clipping_planes_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__ShaderChunk_clipping_planes_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ShaderChunk_clipping_planes_pars_fragment_glsl__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ShaderChunk_clipping_planes_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ShaderChunk_clipping_planes_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ShaderChunk_clipping_planes_pars_vertex_glsl__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ShaderChunk_clipping_planes_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__ShaderChunk_clipping_planes_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ShaderChunk_clipping_planes_vertex_glsl__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ShaderChunk_clipping_planes_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__ShaderChunk_clipping_planes_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ShaderChunk_color_fragment_glsl__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ShaderChunk_color_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__ShaderChunk_color_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ShaderChunk_color_pars_fragment_glsl__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ShaderChunk_color_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__ShaderChunk_color_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ShaderChunk_color_pars_vertex_glsl__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ShaderChunk_color_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__ShaderChunk_color_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ShaderChunk_color_vertex_glsl__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ShaderChunk_color_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__ShaderChunk_color_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ShaderChunk_common_glsl__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ShaderChunk_common_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__ShaderChunk_common_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ShaderChunk_cube_uv_reflection_fragment_glsl__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ShaderChunk_cube_uv_reflection_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__ShaderChunk_cube_uv_reflection_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ShaderChunk_defaultnormal_vertex_glsl__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ShaderChunk_defaultnormal_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__ShaderChunk_defaultnormal_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ShaderChunk_displacementmap_pars_vertex_glsl__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ShaderChunk_displacementmap_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__ShaderChunk_displacementmap_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ShaderChunk_displacementmap_vertex_glsl__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ShaderChunk_displacementmap_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__ShaderChunk_displacementmap_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ShaderChunk_emissivemap_fragment_glsl__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ShaderChunk_emissivemap_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__ShaderChunk_emissivemap_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ShaderChunk_emissivemap_pars_fragment_glsl__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ShaderChunk_emissivemap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__ShaderChunk_emissivemap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ShaderChunk_encodings_fragment_glsl__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ShaderChunk_encodings_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__ShaderChunk_encodings_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ShaderChunk_encodings_pars_fragment_glsl__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ShaderChunk_encodings_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__ShaderChunk_encodings_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ShaderChunk_envmap_fragment_glsl__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ShaderChunk_envmap_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__ShaderChunk_envmap_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ShaderChunk_envmap_pars_fragment_glsl__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ShaderChunk_envmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__ShaderChunk_envmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ShaderChunk_envmap_pars_vertex_glsl__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ShaderChunk_envmap_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__ShaderChunk_envmap_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ShaderChunk_envmap_vertex_glsl__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ShaderChunk_envmap_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__ShaderChunk_envmap_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ShaderChunk_fog_vertex_glsl__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ShaderChunk_fog_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__ShaderChunk_fog_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ShaderChunk_fog_pars_vertex_glsl__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ShaderChunk_fog_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__ShaderChunk_fog_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ShaderChunk_fog_fragment_glsl__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ShaderChunk_fog_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__ShaderChunk_fog_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ShaderChunk_fog_pars_fragment_glsl__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ShaderChunk_fog_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__ShaderChunk_fog_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ShaderChunk_gradientmap_pars_fragment_glsl__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ShaderChunk_gradientmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__ShaderChunk_gradientmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ShaderChunk_lightmap_fragment_glsl__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ShaderChunk_lightmap_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__ShaderChunk_lightmap_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ShaderChunk_lightmap_pars_fragment_glsl__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ShaderChunk_lightmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__ShaderChunk_lightmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ShaderChunk_lights_lambert_vertex_glsl__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ShaderChunk_lights_lambert_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37__ShaderChunk_lights_lambert_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ShaderChunk_lights_pars_glsl__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ShaderChunk_lights_pars_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38__ShaderChunk_lights_pars_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ShaderChunk_lights_phong_fragment_glsl__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ShaderChunk_lights_phong_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39__ShaderChunk_lights_phong_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ShaderChunk_lights_phong_pars_fragment_glsl__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ShaderChunk_lights_phong_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__ShaderChunk_lights_phong_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ShaderChunk_lights_physical_fragment_glsl__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ShaderChunk_lights_physical_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41__ShaderChunk_lights_physical_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ShaderChunk_lights_physical_pars_fragment_glsl__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ShaderChunk_lights_physical_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42__ShaderChunk_lights_physical_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ShaderChunk_lights_template_glsl__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ShaderChunk_lights_template_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43__ShaderChunk_lights_template_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ShaderChunk_logdepthbuf_fragment_glsl__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ShaderChunk_logdepthbuf_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44__ShaderChunk_logdepthbuf_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ShaderChunk_logdepthbuf_pars_fragment_glsl__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ShaderChunk_logdepthbuf_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45__ShaderChunk_logdepthbuf_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ShaderChunk_logdepthbuf_pars_vertex_glsl__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ShaderChunk_logdepthbuf_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46__ShaderChunk_logdepthbuf_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ShaderChunk_logdepthbuf_vertex_glsl__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ShaderChunk_logdepthbuf_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47__ShaderChunk_logdepthbuf_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ShaderChunk_map_fragment_glsl__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ShaderChunk_map_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48__ShaderChunk_map_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ShaderChunk_map_pars_fragment_glsl__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ShaderChunk_map_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49__ShaderChunk_map_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ShaderChunk_map_particle_fragment_glsl__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__ShaderChunk_map_particle_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_50__ShaderChunk_map_particle_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ShaderChunk_map_particle_pars_fragment_glsl__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ShaderChunk_map_particle_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51__ShaderChunk_map_particle_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ShaderChunk_metalnessmap_fragment_glsl__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ShaderChunk_metalnessmap_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52__ShaderChunk_metalnessmap_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ShaderChunk_metalnessmap_pars_fragment_glsl__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ShaderChunk_metalnessmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53__ShaderChunk_metalnessmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ShaderChunk_morphnormal_vertex_glsl__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ShaderChunk_morphnormal_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_54__ShaderChunk_morphnormal_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ShaderChunk_morphtarget_pars_vertex_glsl__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ShaderChunk_morphtarget_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_55__ShaderChunk_morphtarget_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ShaderChunk_morphtarget_vertex_glsl__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__ShaderChunk_morphtarget_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_56__ShaderChunk_morphtarget_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ShaderChunk_normal_flip_glsl__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ShaderChunk_normal_flip_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_57__ShaderChunk_normal_flip_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ShaderChunk_normal_fragment_glsl__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ShaderChunk_normal_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_58__ShaderChunk_normal_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ShaderChunk_normalmap_pars_fragment_glsl__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__ShaderChunk_normalmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_59__ShaderChunk_normalmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ShaderChunk_packing_glsl__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__ShaderChunk_packing_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_60__ShaderChunk_packing_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ShaderChunk_premultiplied_alpha_fragment_glsl__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ShaderChunk_premultiplied_alpha_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_61__ShaderChunk_premultiplied_alpha_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ShaderChunk_project_vertex_glsl__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ShaderChunk_project_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_62__ShaderChunk_project_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ShaderChunk_dithering_fragment_glsl__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ShaderChunk_dithering_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_63__ShaderChunk_dithering_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ShaderChunk_dithering_pars_fragment_glsl__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__ShaderChunk_dithering_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_64__ShaderChunk_dithering_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ShaderChunk_roughnessmap_fragment_glsl__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__ShaderChunk_roughnessmap_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_65__ShaderChunk_roughnessmap_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ShaderChunk_roughnessmap_pars_fragment_glsl__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__ShaderChunk_roughnessmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_66__ShaderChunk_roughnessmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ShaderChunk_shadowmap_pars_fragment_glsl__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ShaderChunk_shadowmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_67__ShaderChunk_shadowmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ShaderChunk_shadowmap_pars_vertex_glsl__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ShaderChunk_shadowmap_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_68__ShaderChunk_shadowmap_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ShaderChunk_shadowmap_vertex_glsl__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ShaderChunk_shadowmap_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_69__ShaderChunk_shadowmap_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__ShaderChunk_shadowmask_pars_fragment_glsl__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__ShaderChunk_shadowmask_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_70__ShaderChunk_shadowmask_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ShaderChunk_skinbase_vertex_glsl__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ShaderChunk_skinbase_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_71__ShaderChunk_skinbase_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ShaderChunk_skinning_pars_vertex_glsl__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ShaderChunk_skinning_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_72__ShaderChunk_skinning_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ShaderChunk_skinning_vertex_glsl__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ShaderChunk_skinning_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_73__ShaderChunk_skinning_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ShaderChunk_skinnormal_vertex_glsl__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ShaderChunk_skinnormal_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_74__ShaderChunk_skinnormal_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ShaderChunk_specularmap_fragment_glsl__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ShaderChunk_specularmap_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_75__ShaderChunk_specularmap_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ShaderChunk_specularmap_pars_fragment_glsl__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ShaderChunk_specularmap_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_76__ShaderChunk_specularmap_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ShaderChunk_tonemapping_fragment_glsl__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ShaderChunk_tonemapping_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_77__ShaderChunk_tonemapping_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__ShaderChunk_tonemapping_pars_fragment_glsl__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__ShaderChunk_tonemapping_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_78__ShaderChunk_tonemapping_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__ShaderChunk_uv_pars_fragment_glsl__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__ShaderChunk_uv_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_79__ShaderChunk_uv_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__ShaderChunk_uv_pars_vertex_glsl__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__ShaderChunk_uv_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_80__ShaderChunk_uv_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__ShaderChunk_uv_vertex_glsl__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__ShaderChunk_uv_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_81__ShaderChunk_uv_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ShaderChunk_uv2_pars_fragment_glsl__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ShaderChunk_uv2_pars_fragment_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_82__ShaderChunk_uv2_pars_fragment_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__ShaderChunk_uv2_pars_vertex_glsl__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__ShaderChunk_uv2_pars_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_83__ShaderChunk_uv2_pars_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__ShaderChunk_uv2_vertex_glsl__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__ShaderChunk_uv2_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_84__ShaderChunk_uv2_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__ShaderChunk_worldpos_vertex_glsl__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__ShaderChunk_worldpos_vertex_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_85__ShaderChunk_worldpos_vertex_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__ShaderLib_cube_frag_glsl__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__ShaderLib_cube_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_86__ShaderLib_cube_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__ShaderLib_cube_vert_glsl__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__ShaderLib_cube_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_87__ShaderLib_cube_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__ShaderLib_depth_frag_glsl__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__ShaderLib_depth_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_88__ShaderLib_depth_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__ShaderLib_depth_vert_glsl__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__ShaderLib_depth_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_89__ShaderLib_depth_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__ShaderLib_distanceRGBA_frag_glsl__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__ShaderLib_distanceRGBA_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_90__ShaderLib_distanceRGBA_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__ShaderLib_distanceRGBA_vert_glsl__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__ShaderLib_distanceRGBA_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_91__ShaderLib_distanceRGBA_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__ShaderLib_equirect_frag_glsl__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__ShaderLib_equirect_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_92__ShaderLib_equirect_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__ShaderLib_equirect_vert_glsl__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__ShaderLib_equirect_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_93__ShaderLib_equirect_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__ShaderLib_linedashed_frag_glsl__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__ShaderLib_linedashed_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_94__ShaderLib_linedashed_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__ShaderLib_linedashed_vert_glsl__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__ShaderLib_linedashed_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_95__ShaderLib_linedashed_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__ShaderLib_meshbasic_frag_glsl__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__ShaderLib_meshbasic_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_96__ShaderLib_meshbasic_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__ShaderLib_meshbasic_vert_glsl__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__ShaderLib_meshbasic_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_97__ShaderLib_meshbasic_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__ShaderLib_meshlambert_frag_glsl__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__ShaderLib_meshlambert_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_98__ShaderLib_meshlambert_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__ShaderLib_meshlambert_vert_glsl__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__ShaderLib_meshlambert_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_99__ShaderLib_meshlambert_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__ShaderLib_meshphong_frag_glsl__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__ShaderLib_meshphong_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_100__ShaderLib_meshphong_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__ShaderLib_meshphong_vert_glsl__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__ShaderLib_meshphong_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_101__ShaderLib_meshphong_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__ShaderLib_meshphysical_frag_glsl__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__ShaderLib_meshphysical_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_102__ShaderLib_meshphysical_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__ShaderLib_meshphysical_vert_glsl__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__ShaderLib_meshphysical_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_103__ShaderLib_meshphysical_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__ShaderLib_normal_frag_glsl__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__ShaderLib_normal_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_104__ShaderLib_normal_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__ShaderLib_normal_vert_glsl__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__ShaderLib_normal_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_105__ShaderLib_normal_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__ShaderLib_points_frag_glsl__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__ShaderLib_points_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_106__ShaderLib_points_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__ShaderLib_points_vert_glsl__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__ShaderLib_points_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_107__ShaderLib_points_vert_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__ShaderLib_shadow_frag_glsl__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__ShaderLib_shadow_frag_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_108__ShaderLib_shadow_frag_glsl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__ShaderLib_shadow_vert_glsl__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__ShaderLib_shadow_vert_glsl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_109__ShaderLib_shadow_vert_glsl__);
















































































































var ShaderChunk = {
	alphamap_fragment: __WEBPACK_IMPORTED_MODULE_0__ShaderChunk_alphamap_fragment_glsl___default.a,
	alphamap_pars_fragment: __WEBPACK_IMPORTED_MODULE_1__ShaderChunk_alphamap_pars_fragment_glsl___default.a,
	alphatest_fragment: __WEBPACK_IMPORTED_MODULE_2__ShaderChunk_alphatest_fragment_glsl___default.a,
	aomap_fragment: __WEBPACK_IMPORTED_MODULE_3__ShaderChunk_aomap_fragment_glsl___default.a,
	aomap_pars_fragment: __WEBPACK_IMPORTED_MODULE_4__ShaderChunk_aomap_pars_fragment_glsl___default.a,
	begin_vertex: __WEBPACK_IMPORTED_MODULE_5__ShaderChunk_begin_vertex_glsl___default.a,
	beginnormal_vertex: __WEBPACK_IMPORTED_MODULE_6__ShaderChunk_beginnormal_vertex_glsl___default.a,
	bsdfs: __WEBPACK_IMPORTED_MODULE_7__ShaderChunk_bsdfs_glsl___default.a,
	bumpmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_8__ShaderChunk_bumpmap_pars_fragment_glsl___default.a,
	clipping_planes_fragment: __WEBPACK_IMPORTED_MODULE_9__ShaderChunk_clipping_planes_fragment_glsl___default.a,
	clipping_planes_pars_fragment: __WEBPACK_IMPORTED_MODULE_10__ShaderChunk_clipping_planes_pars_fragment_glsl___default.a,
	clipping_planes_pars_vertex: __WEBPACK_IMPORTED_MODULE_11__ShaderChunk_clipping_planes_pars_vertex_glsl___default.a,
	clipping_planes_vertex: __WEBPACK_IMPORTED_MODULE_12__ShaderChunk_clipping_planes_vertex_glsl___default.a,
	color_fragment: __WEBPACK_IMPORTED_MODULE_13__ShaderChunk_color_fragment_glsl___default.a,
	color_pars_fragment: __WEBPACK_IMPORTED_MODULE_14__ShaderChunk_color_pars_fragment_glsl___default.a,
	color_pars_vertex: __WEBPACK_IMPORTED_MODULE_15__ShaderChunk_color_pars_vertex_glsl___default.a,
	color_vertex: __WEBPACK_IMPORTED_MODULE_16__ShaderChunk_color_vertex_glsl___default.a,
	common: __WEBPACK_IMPORTED_MODULE_17__ShaderChunk_common_glsl___default.a,
	cube_uv_reflection_fragment: __WEBPACK_IMPORTED_MODULE_18__ShaderChunk_cube_uv_reflection_fragment_glsl___default.a,
	defaultnormal_vertex: __WEBPACK_IMPORTED_MODULE_19__ShaderChunk_defaultnormal_vertex_glsl___default.a,
	displacementmap_pars_vertex: __WEBPACK_IMPORTED_MODULE_20__ShaderChunk_displacementmap_pars_vertex_glsl___default.a,
	displacementmap_vertex: __WEBPACK_IMPORTED_MODULE_21__ShaderChunk_displacementmap_vertex_glsl___default.a,
	emissivemap_fragment: __WEBPACK_IMPORTED_MODULE_22__ShaderChunk_emissivemap_fragment_glsl___default.a,
	emissivemap_pars_fragment: __WEBPACK_IMPORTED_MODULE_23__ShaderChunk_emissivemap_pars_fragment_glsl___default.a,
	encodings_fragment: __WEBPACK_IMPORTED_MODULE_24__ShaderChunk_encodings_fragment_glsl___default.a,
	encodings_pars_fragment: __WEBPACK_IMPORTED_MODULE_25__ShaderChunk_encodings_pars_fragment_glsl___default.a,
	envmap_fragment: __WEBPACK_IMPORTED_MODULE_26__ShaderChunk_envmap_fragment_glsl___default.a,
	envmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_27__ShaderChunk_envmap_pars_fragment_glsl___default.a,
	envmap_pars_vertex: __WEBPACK_IMPORTED_MODULE_28__ShaderChunk_envmap_pars_vertex_glsl___default.a,
	envmap_vertex: __WEBPACK_IMPORTED_MODULE_29__ShaderChunk_envmap_vertex_glsl___default.a,
	fog_vertex: __WEBPACK_IMPORTED_MODULE_30__ShaderChunk_fog_vertex_glsl___default.a,
	fog_pars_vertex: __WEBPACK_IMPORTED_MODULE_31__ShaderChunk_fog_pars_vertex_glsl___default.a,
	fog_fragment: __WEBPACK_IMPORTED_MODULE_32__ShaderChunk_fog_fragment_glsl___default.a,
	fog_pars_fragment: __WEBPACK_IMPORTED_MODULE_33__ShaderChunk_fog_pars_fragment_glsl___default.a,
	gradientmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_34__ShaderChunk_gradientmap_pars_fragment_glsl___default.a,
	lightmap_fragment: __WEBPACK_IMPORTED_MODULE_35__ShaderChunk_lightmap_fragment_glsl___default.a,
	lightmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_36__ShaderChunk_lightmap_pars_fragment_glsl___default.a,
	lights_lambert_vertex: __WEBPACK_IMPORTED_MODULE_37__ShaderChunk_lights_lambert_vertex_glsl___default.a,
	lights_pars: __WEBPACK_IMPORTED_MODULE_38__ShaderChunk_lights_pars_glsl___default.a,
	lights_phong_fragment: __WEBPACK_IMPORTED_MODULE_39__ShaderChunk_lights_phong_fragment_glsl___default.a,
	lights_phong_pars_fragment: __WEBPACK_IMPORTED_MODULE_40__ShaderChunk_lights_phong_pars_fragment_glsl___default.a,
	lights_physical_fragment: __WEBPACK_IMPORTED_MODULE_41__ShaderChunk_lights_physical_fragment_glsl___default.a,
	lights_physical_pars_fragment: __WEBPACK_IMPORTED_MODULE_42__ShaderChunk_lights_physical_pars_fragment_glsl___default.a,
	lights_template: __WEBPACK_IMPORTED_MODULE_43__ShaderChunk_lights_template_glsl___default.a,
	logdepthbuf_fragment: __WEBPACK_IMPORTED_MODULE_44__ShaderChunk_logdepthbuf_fragment_glsl___default.a,
	logdepthbuf_pars_fragment: __WEBPACK_IMPORTED_MODULE_45__ShaderChunk_logdepthbuf_pars_fragment_glsl___default.a,
	logdepthbuf_pars_vertex: __WEBPACK_IMPORTED_MODULE_46__ShaderChunk_logdepthbuf_pars_vertex_glsl___default.a,
	logdepthbuf_vertex: __WEBPACK_IMPORTED_MODULE_47__ShaderChunk_logdepthbuf_vertex_glsl___default.a,
	map_fragment: __WEBPACK_IMPORTED_MODULE_48__ShaderChunk_map_fragment_glsl___default.a,
	map_pars_fragment: __WEBPACK_IMPORTED_MODULE_49__ShaderChunk_map_pars_fragment_glsl___default.a,
	map_particle_fragment: __WEBPACK_IMPORTED_MODULE_50__ShaderChunk_map_particle_fragment_glsl___default.a,
	map_particle_pars_fragment: __WEBPACK_IMPORTED_MODULE_51__ShaderChunk_map_particle_pars_fragment_glsl___default.a,
	metalnessmap_fragment: __WEBPACK_IMPORTED_MODULE_52__ShaderChunk_metalnessmap_fragment_glsl___default.a,
	metalnessmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_53__ShaderChunk_metalnessmap_pars_fragment_glsl___default.a,
	morphnormal_vertex: __WEBPACK_IMPORTED_MODULE_54__ShaderChunk_morphnormal_vertex_glsl___default.a,
	morphtarget_pars_vertex: __WEBPACK_IMPORTED_MODULE_55__ShaderChunk_morphtarget_pars_vertex_glsl___default.a,
	morphtarget_vertex: __WEBPACK_IMPORTED_MODULE_56__ShaderChunk_morphtarget_vertex_glsl___default.a,
	normal_flip: __WEBPACK_IMPORTED_MODULE_57__ShaderChunk_normal_flip_glsl___default.a,
	normal_fragment: __WEBPACK_IMPORTED_MODULE_58__ShaderChunk_normal_fragment_glsl___default.a,
	normalmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_59__ShaderChunk_normalmap_pars_fragment_glsl___default.a,
	packing: __WEBPACK_IMPORTED_MODULE_60__ShaderChunk_packing_glsl___default.a,
	premultiplied_alpha_fragment: __WEBPACK_IMPORTED_MODULE_61__ShaderChunk_premultiplied_alpha_fragment_glsl___default.a,
	project_vertex: __WEBPACK_IMPORTED_MODULE_62__ShaderChunk_project_vertex_glsl___default.a,
	dithering_fragment: __WEBPACK_IMPORTED_MODULE_63__ShaderChunk_dithering_fragment_glsl___default.a,
	dithering_pars_fragment: __WEBPACK_IMPORTED_MODULE_64__ShaderChunk_dithering_pars_fragment_glsl___default.a,
	roughnessmap_fragment: __WEBPACK_IMPORTED_MODULE_65__ShaderChunk_roughnessmap_fragment_glsl___default.a,
	roughnessmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_66__ShaderChunk_roughnessmap_pars_fragment_glsl___default.a,
	shadowmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_67__ShaderChunk_shadowmap_pars_fragment_glsl___default.a,
	shadowmap_pars_vertex: __WEBPACK_IMPORTED_MODULE_68__ShaderChunk_shadowmap_pars_vertex_glsl___default.a,
	shadowmap_vertex: __WEBPACK_IMPORTED_MODULE_69__ShaderChunk_shadowmap_vertex_glsl___default.a,
	shadowmask_pars_fragment: __WEBPACK_IMPORTED_MODULE_70__ShaderChunk_shadowmask_pars_fragment_glsl___default.a,
	skinbase_vertex: __WEBPACK_IMPORTED_MODULE_71__ShaderChunk_skinbase_vertex_glsl___default.a,
	skinning_pars_vertex: __WEBPACK_IMPORTED_MODULE_72__ShaderChunk_skinning_pars_vertex_glsl___default.a,
	skinning_vertex: __WEBPACK_IMPORTED_MODULE_73__ShaderChunk_skinning_vertex_glsl___default.a,
	skinnormal_vertex: __WEBPACK_IMPORTED_MODULE_74__ShaderChunk_skinnormal_vertex_glsl___default.a,
	specularmap_fragment: __WEBPACK_IMPORTED_MODULE_75__ShaderChunk_specularmap_fragment_glsl___default.a,
	specularmap_pars_fragment: __WEBPACK_IMPORTED_MODULE_76__ShaderChunk_specularmap_pars_fragment_glsl___default.a,
	tonemapping_fragment: __WEBPACK_IMPORTED_MODULE_77__ShaderChunk_tonemapping_fragment_glsl___default.a,
	tonemapping_pars_fragment: __WEBPACK_IMPORTED_MODULE_78__ShaderChunk_tonemapping_pars_fragment_glsl___default.a,
	uv_pars_fragment: __WEBPACK_IMPORTED_MODULE_79__ShaderChunk_uv_pars_fragment_glsl___default.a,
	uv_pars_vertex: __WEBPACK_IMPORTED_MODULE_80__ShaderChunk_uv_pars_vertex_glsl___default.a,
	uv_vertex: __WEBPACK_IMPORTED_MODULE_81__ShaderChunk_uv_vertex_glsl___default.a,
	uv2_pars_fragment: __WEBPACK_IMPORTED_MODULE_82__ShaderChunk_uv2_pars_fragment_glsl___default.a,
	uv2_pars_vertex: __WEBPACK_IMPORTED_MODULE_83__ShaderChunk_uv2_pars_vertex_glsl___default.a,
	uv2_vertex: __WEBPACK_IMPORTED_MODULE_84__ShaderChunk_uv2_vertex_glsl___default.a,
	worldpos_vertex: __WEBPACK_IMPORTED_MODULE_85__ShaderChunk_worldpos_vertex_glsl___default.a,

	cube_frag: __WEBPACK_IMPORTED_MODULE_86__ShaderLib_cube_frag_glsl___default.a,
	cube_vert: __WEBPACK_IMPORTED_MODULE_87__ShaderLib_cube_vert_glsl___default.a,
	depth_frag: __WEBPACK_IMPORTED_MODULE_88__ShaderLib_depth_frag_glsl___default.a,
	depth_vert: __WEBPACK_IMPORTED_MODULE_89__ShaderLib_depth_vert_glsl___default.a,
	distanceRGBA_frag: __WEBPACK_IMPORTED_MODULE_90__ShaderLib_distanceRGBA_frag_glsl___default.a,
	distanceRGBA_vert: __WEBPACK_IMPORTED_MODULE_91__ShaderLib_distanceRGBA_vert_glsl___default.a,
	equirect_frag: __WEBPACK_IMPORTED_MODULE_92__ShaderLib_equirect_frag_glsl___default.a,
	equirect_vert: __WEBPACK_IMPORTED_MODULE_93__ShaderLib_equirect_vert_glsl___default.a,
	linedashed_frag: __WEBPACK_IMPORTED_MODULE_94__ShaderLib_linedashed_frag_glsl___default.a,
	linedashed_vert: __WEBPACK_IMPORTED_MODULE_95__ShaderLib_linedashed_vert_glsl___default.a,
	meshbasic_frag: __WEBPACK_IMPORTED_MODULE_96__ShaderLib_meshbasic_frag_glsl___default.a,
	meshbasic_vert: __WEBPACK_IMPORTED_MODULE_97__ShaderLib_meshbasic_vert_glsl___default.a,
	meshlambert_frag: __WEBPACK_IMPORTED_MODULE_98__ShaderLib_meshlambert_frag_glsl___default.a,
	meshlambert_vert: __WEBPACK_IMPORTED_MODULE_99__ShaderLib_meshlambert_vert_glsl___default.a,
	meshphong_frag: __WEBPACK_IMPORTED_MODULE_100__ShaderLib_meshphong_frag_glsl___default.a,
	meshphong_vert: __WEBPACK_IMPORTED_MODULE_101__ShaderLib_meshphong_vert_glsl___default.a,
	meshphysical_frag: __WEBPACK_IMPORTED_MODULE_102__ShaderLib_meshphysical_frag_glsl___default.a,
	meshphysical_vert: __WEBPACK_IMPORTED_MODULE_103__ShaderLib_meshphysical_vert_glsl___default.a,
	normal_frag: __WEBPACK_IMPORTED_MODULE_104__ShaderLib_normal_frag_glsl___default.a,
	normal_vert: __WEBPACK_IMPORTED_MODULE_105__ShaderLib_normal_vert_glsl___default.a,
	points_frag: __WEBPACK_IMPORTED_MODULE_106__ShaderLib_points_frag_glsl___default.a,
	points_vert: __WEBPACK_IMPORTED_MODULE_107__ShaderLib_points_vert_glsl___default.a,
	shadow_frag: __WEBPACK_IMPORTED_MODULE_108__ShaderLib_shadow_frag_glsl___default.a,
	shadow_vert: __WEBPACK_IMPORTED_MODULE_109__ShaderLib_shadow_vert_glsl___default.a
};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniformsLib; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector4__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textures_DataTexture__ = __webpack_require__(40);





/**
 * Uniforms library for shared webgl shaders
 */

var UniformsLib = {

	common: {

		diffuse: { value: new __WEBPACK_IMPORTED_MODULE_1__math_Color__["a" /* Color */]( 0xeeeeee ) },
		opacity: { value: 1.0 },

		map: { value: null },
		offsetRepeat: { value: new __WEBPACK_IMPORTED_MODULE_0__math_Vector4__["a" /* Vector4 */]( 0, 0, 1, 1 ) },

		specularMap: { value: null },
		alphaMap: { value: null },

		envMap: { value: null },
		flipEnvMap: { value: - 1 },
		reflectivity: { value: 1.0 },
		refractionRatio: { value: 0.98 }

	},

	aomap: {

		aoMap: { value: null },
		aoMapIntensity: { value: 1 }

	},

	lightmap: {

		lightMap: { value: null },
		lightMapIntensity: { value: 1 }

	},

	emissivemap: {

		emissiveMap: { value: null }

	},

	bumpmap: {

		bumpMap: { value: null },
		bumpScale: { value: 1 }

	},

	normalmap: {

		normalMap: { value: null },
		normalScale: { value: new __WEBPACK_IMPORTED_MODULE_2__math_Vector2__["a" /* Vector2 */]( 1, 1 ) }

	},

	displacementmap: {

		displacementMap: { value: null },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }

	},

	roughnessmap: {

		roughnessMap: { value: null }

	},

	metalnessmap: {

		metalnessMap: { value: null }

	},

	gradientmap: {

		gradientMap: { value: null }

	},

	fog: {

		fogDensity: { value: 0.00025 },
		fogNear: { value: 1 },
		fogFar: { value: 2000 },
		fogColor: { value: new __WEBPACK_IMPORTED_MODULE_1__math_Color__["a" /* Color */]( 0xffffff ) }

	},

	lights: {

		ambientLightColor: { value: [] },

		directionalLights: { value: [], properties: {
			direction: {},
			color: {},

			shadow: {},
			shadowBias: {},
			shadowRadius: {},
			shadowMapSize: {}
		} },

		directionalShadowMap: { value: [] },
		directionalShadowMatrix: { value: [] },

		spotLights: { value: [], properties: {
			color: {},
			position: {},
			direction: {},
			distance: {},
			coneCos: {},
			penumbraCos: {},
			decay: {},

			shadow: {},
			shadowBias: {},
			shadowRadius: {},
			shadowMapSize: {}
		} },

		spotShadowMap: { value: [] },
		spotShadowMatrix: { value: [] },

		pointLights: { value: [], properties: {
			color: {},
			position: {},
			decay: {},
			distance: {},

			shadow: {},
			shadowBias: {},
			shadowRadius: {},
			shadowMapSize: {}
		} },

		pointShadowMap: { value: [] },
		pointShadowMatrix: { value: [] },

		hemisphereLights: { value: [], properties: {
			direction: {},
			skyColor: {},
			groundColor: {}
		} },

		// TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
		rectAreaLights: { value: [], properties: {
			color: {},
			position: {},
			width: {},
			height: {}
		} }

	},

	points: {

		diffuse: { value: new __WEBPACK_IMPORTED_MODULE_1__math_Color__["a" /* Color */]( 0xeeeeee ) },
		opacity: { value: 1.0 },
		size: { value: 1.0 },
		scale: { value: 1.0 },
		map: { value: null },
		offsetRepeat: { value: new __WEBPACK_IMPORTED_MODULE_0__math_Vector4__["a" /* Vector4 */]( 0, 0, 1, 1 ) }

	}

};




/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLUniforms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textures_CubeTexture__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textures_Texture__ = __webpack_require__(8);
/**
 * @author tschw
 *
 * Uniforms of a program.
 * Those form a tree structure with a special top-level container for the root,
 * which you get by calling 'new WebGLUniforms( gl, program, renderer )'.
 *
 *
 * Properties of inner nodes including the top-level container:
 *
 * .seq - array of nested uniforms
 * .map - nested uniforms by name
 *
 *
 * Methods of all nodes except the top-level container:
 *
 * .setValue( gl, value, [renderer] )
 *
 * 		uploads a uniform value(s)
 *  	the 'renderer' parameter is needed for sampler uniforms
 *
 *
 * Static methods of the top-level container (renderer factorizations):
 *
 * .upload( gl, seq, values, renderer )
 *
 * 		sets uniforms in 'seq' to 'values[id].value'
 *
 * .seqWithValue( seq, values ) : filteredSeq
 *
 * 		filters 'seq' entries with corresponding entry in values
 *
 *
 * Methods of the top-level container (renderer factorizations):
 *
 * .setValue( gl, name, value )
 *
 * 		sets uniform with  name 'name' to 'value'
 *
 * .set( gl, obj, prop )
 *
 * 		sets uniform from object and property with same name than uniform
 *
 * .setOptional( gl, obj, prop )
 *
 * 		like .set for an optional property of the object
 *
 */




var emptyTexture = new __WEBPACK_IMPORTED_MODULE_1__textures_Texture__["a" /* Texture */]();
var emptyCubeTexture = new __WEBPACK_IMPORTED_MODULE_0__textures_CubeTexture__["a" /* CubeTexture */]();

// --- Base for inner nodes (including the root) ---

function UniformContainer() {

	this.seq = [];
	this.map = {};

}

// --- Utilities ---

// Array Caches (provide typed arrays for temporary by size)

var arrayCacheF32 = [];
var arrayCacheI32 = [];

// Float32Array caches used for uploading Matrix uniforms

var mat4array = new Float32Array( 16 );
var mat3array = new Float32Array( 9 );

// Flattening for arrays of vectors and matrices

function flatten( array, nBlocks, blockSize ) {

	var firstElem = array[ 0 ];

	if ( firstElem <= 0 || firstElem > 0 ) return array;
	// unoptimized: ! isNaN( firstElem )
	// see http://jacksondunstan.com/articles/983

	var n = nBlocks * blockSize,
		r = arrayCacheF32[ n ];

	if ( r === undefined ) {

		r = new Float32Array( n );
		arrayCacheF32[ n ] = r;

	}

	if ( nBlocks !== 0 ) {

		firstElem.toArray( r, 0 );

		for ( var i = 1, offset = 0; i !== nBlocks; ++ i ) {

			offset += blockSize;
			array[ i ].toArray( r, offset );

		}

	}

	return r;

}

// Texture unit allocation

function allocTexUnits( renderer, n ) {

	var r = arrayCacheI32[ n ];

	if ( r === undefined ) {

		r = new Int32Array( n );
		arrayCacheI32[ n ] = r;

	}

	for ( var i = 0; i !== n; ++ i )
		r[ i ] = renderer.allocTextureUnit();

	return r;

}

// --- Setters ---

// Note: Defining these methods externally, because they come in a bunch
// and this way their names minify.

// Single scalar

function setValue1f( gl, v ) { gl.uniform1f( this.addr, v ) }
function setValue1i( gl, v ) { gl.uniform1i( this.addr, v ) }

// Single float vector (from flat array or THREE.VectorN)

function setValue2fv( gl, v ) {

	if ( v.x === undefined ) gl.uniform2fv( this.addr, v );
	else gl.uniform2f( this.addr, v.x, v.y );

}

function setValue3fv( gl, v ) {

	if ( v.x !== undefined )
		gl.uniform3f( this.addr, v.x, v.y, v.z );
	else if ( v.r !== undefined )
		gl.uniform3f( this.addr, v.r, v.g, v.b );
	else
		gl.uniform3fv( this.addr, v );

}

function setValue4fv( gl, v ) {

	if ( v.x === undefined ) gl.uniform4fv( this.addr, v );
	else gl.uniform4f( this.addr, v.x, v.y, v.z, v.w );

}

// Single matrix (from flat array or MatrixN)

function setValue2fm( gl, v ) {

	gl.uniformMatrix2fv( this.addr, false, v.elements || v );

}

function setValue3fm( gl, v ) {

	if ( v.elements === undefined ) {

		gl.uniformMatrix3fv( this.addr, false, v );

	} else {

		mat3array.set( v.elements );
		gl.uniformMatrix3fv( this.addr, false, mat3array );

	}

}

function setValue4fm( gl, v ) {

	if ( v.elements === undefined ) {

		gl.uniformMatrix4fv( this.addr, false, v );

	} else {

		mat4array.set( v.elements );
		gl.uniformMatrix4fv( this.addr, false, mat4array );

	}

}

// Single texture (2D / Cube)

function setValueT1( gl, v, renderer ) {

	var unit = renderer.allocTextureUnit();
	gl.uniform1i( this.addr, unit );
	renderer.setTexture2D( v || emptyTexture, unit );

}

function setValueT6( gl, v, renderer ) {

	var unit = renderer.allocTextureUnit();
	gl.uniform1i( this.addr, unit );
	renderer.setTextureCube( v || emptyCubeTexture, unit );

}

// Integer / Boolean vectors or arrays thereof (always flat arrays)

function setValue2iv( gl, v ) { gl.uniform2iv( this.addr, v ) }
function setValue3iv( gl, v ) { gl.uniform3iv( this.addr, v ) }
function setValue4iv( gl, v ) { gl.uniform4iv( this.addr, v ) }

// Helper to pick the right setter for the singular case

function getSingularSetter( type ) {

	switch ( type ) {

		case 0x1406: return setValue1f; // FLOAT
		case 0x8b50: return setValue2fv; // _VEC2
		case 0x8b51: return setValue3fv; // _VEC3
		case 0x8b52: return setValue4fv; // _VEC4

		case 0x8b5a: return setValue2fm; // _MAT2
		case 0x8b5b: return setValue3fm; // _MAT3
		case 0x8b5c: return setValue4fm; // _MAT4

		case 0x8b5e: case 0x8d66: return setValueT1; // SAMPLER_2D, SAMPLER_EXTERNAL_OES
		case 0x8b60: return setValueT6; // SAMPLER_CUBE

		case 0x1404: case 0x8b56: return setValue1i; // INT, BOOL
		case 0x8b53: case 0x8b57: return setValue2iv; // _VEC2
		case 0x8b54: case 0x8b58: return setValue3iv; // _VEC3
		case 0x8b55: case 0x8b59: return setValue4iv; // _VEC4

	}

}

// Array of scalars

function setValue1fv( gl, v ) { gl.uniform1fv( this.addr, v ) }
function setValue1iv( gl, v ) { gl.uniform1iv( this.addr, v ) }

// Array of vectors (flat or from THREE classes)

function setValueV2a( gl, v ) {

	gl.uniform2fv( this.addr, flatten( v, this.size, 2 ) );

}

function setValueV3a( gl, v ) {

	gl.uniform3fv( this.addr, flatten( v, this.size, 3 ) );

}

function setValueV4a( gl, v ) {

	gl.uniform4fv( this.addr, flatten( v, this.size, 4 ) );

}

// Array of matrices (flat or from THREE clases)

function setValueM2a( gl, v ) {

	gl.uniformMatrix2fv( this.addr, false, flatten( v, this.size, 4 ) );

}

function setValueM3a( gl, v ) {

	gl.uniformMatrix3fv( this.addr, false, flatten( v, this.size, 9 ) );

}

function setValueM4a( gl, v ) {

	gl.uniformMatrix4fv( this.addr, false, flatten( v, this.size, 16 ) );

}

// Array of textures (2D / Cube)

function setValueT1a( gl, v, renderer ) {

	var n = v.length,
		units = allocTexUnits( renderer, n );

	gl.uniform1iv( this.addr, units );

	for ( var i = 0; i !== n; ++ i ) {

		renderer.setTexture2D( v[ i ] || emptyTexture, units[ i ] );

	}

}

function setValueT6a( gl, v, renderer ) {

	var n = v.length,
		units = allocTexUnits( renderer, n );

	gl.uniform1iv( this.addr, units );

	for ( var i = 0; i !== n; ++ i ) {

		renderer.setTextureCube( v[ i ] || emptyCubeTexture, units[ i ] );

	}

}

// Helper to pick the right setter for a pure (bottom-level) array

function getPureArraySetter( type ) {

	switch ( type ) {

		case 0x1406: return setValue1fv; // FLOAT
		case 0x8b50: return setValueV2a; // _VEC2
		case 0x8b51: return setValueV3a; // _VEC3
		case 0x8b52: return setValueV4a; // _VEC4

		case 0x8b5a: return setValueM2a; // _MAT2
		case 0x8b5b: return setValueM3a; // _MAT3
		case 0x8b5c: return setValueM4a; // _MAT4

		case 0x8b5e: return setValueT1a; // SAMPLER_2D
		case 0x8b60: return setValueT6a; // SAMPLER_CUBE

		case 0x1404: case 0x8b56: return setValue1iv; // INT, BOOL
		case 0x8b53: case 0x8b57: return setValue2iv; // _VEC2
		case 0x8b54: case 0x8b58: return setValue3iv; // _VEC3
		case 0x8b55: case 0x8b59: return setValue4iv; // _VEC4

	}

}

// --- Uniform Classes ---

function SingleUniform( id, activeInfo, addr ) {

	this.id = id;
	this.addr = addr;
	this.setValue = getSingularSetter( activeInfo.type );

	// this.path = activeInfo.name; // DEBUG

}

function PureArrayUniform( id, activeInfo, addr ) {

	this.id = id;
	this.addr = addr;
	this.size = activeInfo.size;
	this.setValue = getPureArraySetter( activeInfo.type );

	// this.path = activeInfo.name; // DEBUG

}

function StructuredUniform( id ) {

	this.id = id;

	UniformContainer.call( this ); // mix-in

}

StructuredUniform.prototype.setValue = function ( gl, value ) {

	// Note: Don't need an extra 'renderer' parameter, since samplers
	// are not allowed in structured uniforms.

	var seq = this.seq;

	for ( var i = 0, n = seq.length; i !== n; ++ i ) {

		var u = seq[ i ];
		u.setValue( gl, value[ u.id ] );

	}

};

// --- Top-level ---

// Parser - builds up the property tree from the path strings

var RePathPart = /([\w\d_]+)(\])?(\[|\.)?/g;

// extracts
// 	- the identifier (member name or array index)
//  - followed by an optional right bracket (found when array index)
//  - followed by an optional left bracket or dot (type of subscript)
//
// Note: These portions can be read in a non-overlapping fashion and
// allow straightforward parsing of the hierarchy that WebGL encodes
// in the uniform names.

function addUniform( container, uniformObject ) {

	container.seq.push( uniformObject );
	container.map[ uniformObject.id ] = uniformObject;

}

function parseUniform( activeInfo, addr, container ) {

	var path = activeInfo.name,
		pathLength = path.length;

	// reset RegExp object, because of the early exit of a previous run
	RePathPart.lastIndex = 0;

	for ( ; ; ) {

		var match = RePathPart.exec( path ),
			matchEnd = RePathPart.lastIndex,

			id = match[ 1 ],
			idIsIndex = match[ 2 ] === ']',
			subscript = match[ 3 ];

		if ( idIsIndex ) id = id | 0; // convert to integer

		if ( subscript === undefined || subscript === '[' && matchEnd + 2 === pathLength ) {

			// bare name or "pure" bottom-level array "[0]" suffix

			addUniform( container, subscript === undefined ?
					new SingleUniform( id, activeInfo, addr ) :
					new PureArrayUniform( id, activeInfo, addr ) );

			break;

		} else {

			// step into inner node / create it in case it doesn't exist

			var map = container.map, next = map[ id ];

			if ( next === undefined ) {

				next = new StructuredUniform( id );
				addUniform( container, next );

			}

			container = next;

		}

	}

}

// Root Container

function WebGLUniforms( gl, program, renderer ) {

	UniformContainer.call( this );

	this.renderer = renderer;

	var n = gl.getProgramParameter( program, gl.ACTIVE_UNIFORMS );

	for ( var i = 0; i < n; ++ i ) {

		var info = gl.getActiveUniform( program, i ),
			path = info.name,
			addr = gl.getUniformLocation( program, path );

		parseUniform( info, addr, this );

	}

}

WebGLUniforms.prototype.setValue = function ( gl, name, value ) {

	var u = this.map[ name ];

	if ( u !== undefined ) u.setValue( gl, value, this.renderer );

};

WebGLUniforms.prototype.setOptional = function ( gl, object, name ) {

	var v = object[ name ];

	if ( v !== undefined ) this.setValue( gl, name, v );

};


// Static interface

WebGLUniforms.upload = function ( gl, seq, values, renderer ) {

	for ( var i = 0, n = seq.length; i !== n; ++ i ) {

		var u = seq[ i ],
			v = values[ u.id ];

		if ( v.needsUpdate !== false ) {

			// note: always updating when .needsUpdate is undefined
			u.setValue( gl, v.value, renderer );

		}

	}

};

WebGLUniforms.seqWithValue = function ( seq, values ) {

	var r = [];

	for ( var i = 0, n = seq.length; i !== n; ++ i ) {

		var u = seq[ i ];
		if ( u.id in values ) r.push( u );

	}

	return r;

};




/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTexture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Texture__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);



/**
 * @author alteredq / http://alteredqualia.com/
 */

function DataTexture( data, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, encoding ) {

	__WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* Texture */].call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding );

	this.image = { data: data, width: width, height: height };

	this.magFilter = magFilter !== undefined ? magFilter : __WEBPACK_IMPORTED_MODULE_1__constants__["w" /* NearestFilter */];
	this.minFilter = minFilter !== undefined ? minFilter : __WEBPACK_IMPORTED_MODULE_1__constants__["w" /* NearestFilter */];

	this.generateMipmaps = false;
	this.flipY = false;
	this.unpackAlignment = 1;

}

DataTexture.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* Texture */].prototype );
DataTexture.prototype.constructor = DataTexture;

DataTexture.prototype.isDataTexture = true;





/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export arrayMin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayMax; });
function arrayMin( array ) {

	if ( array.length === 0 ) return Infinity;

	var min = array[ 0 ];

	for ( var i = 1, l = array.length; i < l; ++ i ) {

		if ( array[ i ] < min ) min = array[ i ];

	}

	return min;

}

function arrayMax( array ) {

	if ( array.length === 0 ) return - Infinity;

	var max = array[ 0 ];

	for ( var i = 1, l = array.length; i < l; ++ i ) {

		if ( array[ i ] > max ) max = array[ i ];

	}

	return max;

}




/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);


class CustomSocket {
  constructor(url) {
    this.url = url;
    this.socket = new window.WebSocket(url);
    this.emitter = new __WEBPACK_IMPORTED_MODULE_0_events___default.a();

    this.socket.onmessage = () => {
      const message = JSON.parse(event.data);
      this.emitter.emit('message', message);
    };
  }

  send(message) {
    const packet = JSON.stringify(message);
    this.socket.send(packet);
  }
}

const remoteUrl = `wss://${window.location.hostname}:8081`;
const socket = new CustomSocket(remoteUrl);

/* harmony default export */ __webpack_exports__["a"] = (socket);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_math_Color__ = __webpack_require__(4);


const clusterCount = 30;
const colors = new Array(clusterCount);
for (let i = 0; i < clusterCount; i += 1) {
  colors[i] = new __WEBPACK_IMPORTED_MODULE_0_three_math_Color__["a" /* Color */]().setHSL(i / clusterCount, 0.4, 0.5);
}

/* harmony default export */ __webpack_exports__["a"] = (colors);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadJson;
function loadJson(path, callback) {
  const request = new XMLHttpRequest();
  request.overrideMimeType('application/json');
  request.open('GET', path, true);
  request.onload = () => {
    if (request.status === 200) {
      const json = JSON.parse(request.responseText);
      callback(undefined, json);
    }
    else {
      const error = `Error ${request.status} loading ${path}`;
      callback(error, undefined);
    }
  };
  request.send(null);
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_core_Clock__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_examples_vr_WebVR__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tween_tween__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tween_tween___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_tween_tween__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CustomScene__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CustomCamera__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ViveControls__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CustomRenderer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Selector__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_UI__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__socket__ = __webpack_require__(42);














class Game {
  constructor() {
    this.render = this.render.bind(this);
    this.onMessage = this.onMessage.bind(this);

    this.clock = new __WEBPACK_IMPORTED_MODULE_1_three_core_Clock__["a" /* Clock */]();
    this.camera = new __WEBPACK_IMPORTED_MODULE_6__CustomCamera__["a" /* default */]();
    this.body = new __WEBPACK_IMPORTED_MODULE_0_three_core_Object3D__["a" /* Object3D */]();
    this.camera.body = this.body;
    this.scene = new __WEBPACK_IMPORTED_MODULE_5__CustomScene__["a" /* default */](this.camera);
    this.controls = new __WEBPACK_IMPORTED_MODULE_7__ViveControls__["a" /* default */](this.body);
    this.renderer = new __WEBPACK_IMPORTED_MODULE_8__CustomRenderer__["a" /* default */]();
    this.selector = new __WEBPACK_IMPORTED_MODULE_9__Selector__["a" /* default */]();
    this.ui = new __WEBPACK_IMPORTED_MODULE_10__ui_UI__["a" /* default */]();

    const container = document.body;
    container.appendChild(this.renderer.domElement);

    this.scene.add(this.camera);
    this.body.camera = this.camera;
    this.body.add(this.camera);
    this.scene.add(this.body);
    this.camera.add(this.ui);

    // Enable VR
    this.renderer.vr.enabled = true;
    __WEBPACK_IMPORTED_MODULE_2_three_examples_vr_WebVR__["a" /* WebVR */].getVRDisplay((display) => {
      this.renderer.vr.setDevice(display);
      document.body.appendChild(__WEBPACK_IMPORTED_MODULE_2_three_examples_vr_WebVR__["a" /* WebVR */].getButton(display, this.renderer.domElement));
    });

    // Overview
    this.overviewPosition = { x: 0, y: 0, z: 0 };
    this.overviewDirection = new __WEBPACK_IMPORTED_MODULE_3_three_math_Vector3__["a" /* Vector3 */](0, 0, 0);

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onMessage = this.onMessage.bind(this);
  }

  connect() {
    this.camera.connect();
    this.controls.connect();
    this.renderer.connect();
    this.selector.connect();
    window.addEventListener('keypress', this.onKeyPress, false);
    __WEBPACK_IMPORTED_MODULE_11__socket__["a" /* default */].emitter.on('message', this.onMessage);
  }

  disconnect() {
    this.camera.disconnect();
    this.controls.disconnect();
    this.renderer.disconnect();
    this.selector.disconnect();
    window.removeEventListener('keypress', this.onKeyPress);
    __WEBPACK_IMPORTED_MODULE_11__socket__["a" /* default */].emitter.removeListener('message', this.onMessage);
  }

  resetPosition() {
    const { x, y, z } = this.scene.origin;
    this.body.position.set(x, y, z + 200);
  }

  overview() {
    const { x, y, z } = this.scene.origin;
    const targetPosition = { x, y, z: z + 200 };
    const position = this.body.position;
    this.overviewPosition = { x: position.x, y: position.y, z: position.z };
    const tweenPosition = new __WEBPACK_IMPORTED_MODULE_4_tween_tween___default.a.Tween(this.body.position).to(targetPosition, 2000);
    tweenPosition.easing(__WEBPACK_IMPORTED_MODULE_4_tween_tween___default.a.Easing.Exponential.Out);
    tweenPosition.start();
  }

  start(data) {
    this.scene.load(data);
    this.resetPosition();
    this.camera.lookAt(this.scene.origin);
    this.animate();
  }

  animate() {
    this.renderer.animate(this.render);
  }

  render() {
    const delta = this.clock.getDelta();
    __WEBPACK_IMPORTED_MODULE_4_tween_tween___default.a.update();

    this.selector.update(this.scene, this.camera);
    this.controls.update(delta);
    this.scene.update();
    this.ui.update(delta, this.selector);

    this.renderer.render(this.scene, this.camera);
  }

  onKeyPress(event) {
    if (event.code === 'Digit1') {
      this.overview();
    }
    // else if (event.code === 'Digit2') {
    //   this.overview(this.overviewPosition);
    // }
  }

  onMessage(message) {
    if (message.type === 'start:release') {
      this.resetPosition();
    }
    else if (message.type === 'b') {
      this.overview();
    }
    else if (message.type === 'b:release') {
      this.overview(this.overviewPosition);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadBigData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadJson__ = __webpack_require__(44);



const multiplier = 300;

function loadBigData(callback) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loadJson__["a" /* default */])('assets/newBigData_v8.json', (error, data) => {
    if (!error) {
      const bigData = data.map(extract);
      callback(undefined, bigData);
    }
    else {
      callback(error, undefined);
    }
  });
}

function extract({ id, title, info, tsneVektor, cluster, cluster_name }) {
  const [x, y, z] = tsneVektor;
  return {
    id,
    title,
    info,
    position: new __WEBPACK_IMPORTED_MODULE_0_three_math_Vector3__["a" /* Vector3 */](x * multiplier, y * multiplier, z * multiplier),
    cluster,
    clusterName: cluster_name,
  };
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadMockData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loadJson__ = __webpack_require__(44);



const multiplier = 100;

function loadMockData(callback) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__loadJson__["a" /* default */])('assets/100.json', (error, data) => {
    if (!error) {
      const mockData = data.map(extract);
      callback(undefined, mockData);
    }
    else {
      callback(error, undefined);
    }
  });
}

function extract(obj) {
  const pos = obj.vektor;
  const rubrik = obj.rubrik.charAt(0).toUpperCase() + obj.rubrik.slice(1);
  return {
    id: obj.annonsid,
    title: rubrik,
    info: obj.yrke,
    position: new __WEBPACK_IMPORTED_MODULE_0_three_math_Vector3__["a" /* Vector3 */](pos[0] * multiplier, pos[1] * multiplier, pos[2] * multiplier),
    cluster: obj.kluster,
  };
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViveController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_math_Matrix4__ = __webpack_require__(3);

    
    
    const THREE = {
      Object3D: __WEBPACK_IMPORTED_MODULE_0_three_core_Object3D__["a" /* Object3D */],
      Matrix4: __WEBPACK_IMPORTED_MODULE_1_three_math_Matrix4__["a" /* Matrix4 */],
    };
    /**
 * @author mrdoob / http://mrdoob.com
 * @author stewdio / http://stewd.io
 */

THREE.ViveController = function ( id ) {

	THREE.Object3D.call( this );

	var scope = this;
	var gamepad;

	var axes = [ 0, 0 ];
	var thumbpadIsPressed = false;
	var triggerIsPressed = false;
	var gripsArePressed = false;
	var menuIsPressed = false;

	function findGamepad( id ) {

		// Iterate across gamepads as Vive Controllers may not be
		// in position 0 and 1.

		var gamepads = navigator.getGamepads();

		for ( var i = 0, j = 0; i < 4; i ++ ) {

			var gamepad = gamepads[ i ];

			if ( gamepad && ( gamepad.id === 'OpenVR Gamepad' || gamepad.id === 'Oculus Touch (Left)' || gamepad.id === 'Oculus Touch (Right)' ) ) {

				if ( j === id ) return gamepad;

				j ++;

			}

		}

	}

	this.matrixAutoUpdate = false;
	this.standingMatrix = new THREE.Matrix4();

	this.getGamepad = function () {

		return gamepad;

	};

	this.getButtonState = function ( button ) {

		if ( button === 'thumbpad' ) return thumbpadIsPressed;
		if ( button === 'trigger' ) return triggerIsPressed;
		if ( button === 'grips' ) return gripsArePressed;
		if ( button === 'menu' ) return menuIsPressed;

	};

	this.update = function () {

		gamepad = findGamepad( id );

		if ( gamepad !== undefined && gamepad.pose !== undefined ) {

			if ( gamepad.pose === null ) return; // No user action yet

			//  Position and orientation.

			var pose = gamepad.pose;

			if ( pose.position !== null ) scope.position.fromArray( pose.position );
			if ( pose.orientation !== null ) scope.quaternion.fromArray( pose.orientation );
			scope.matrix.compose( scope.position, scope.quaternion, scope.scale );
			scope.matrix.multiplyMatrices( scope.standingMatrix, scope.matrix );
			scope.matrixWorldNeedsUpdate = true;
			scope.visible = true;

			//  Thumbpad and Buttons.

			if ( axes[ 0 ] !== gamepad.axes[ 0 ] || axes[ 1 ] !== gamepad.axes[ 1 ] ) {

				axes[ 0 ] = gamepad.axes[ 0 ]; //  X axis: -1 = Left, +1 = Right.
				axes[ 1 ] = gamepad.axes[ 1 ]; //  Y axis: -1 = Bottom, +1 = Top.
				scope.dispatchEvent( { type: 'axischanged', axes: axes } );

			}

			if ( thumbpadIsPressed !== gamepad.buttons[ 0 ].pressed ) {

				thumbpadIsPressed = gamepad.buttons[ 0 ].pressed;
				scope.dispatchEvent( { type: thumbpadIsPressed ? 'thumbpaddown' : 'thumbpadup' } );

			}

			if ( triggerIsPressed !== gamepad.buttons[ 1 ].pressed ) {

				triggerIsPressed = gamepad.buttons[ 1 ].pressed;
				scope.dispatchEvent( { type: triggerIsPressed ? 'triggerdown' : 'triggerup' } );

			}

			if ( gripsArePressed !== gamepad.buttons[ 2 ].pressed ) {

				gripsArePressed = gamepad.buttons[ 2 ].pressed;
				scope.dispatchEvent( { type: gripsArePressed ? 'gripsdown' : 'gripsup' } );

			}

			if ( menuIsPressed !== gamepad.buttons[ 3 ].pressed ) {

				menuIsPressed = gamepad.buttons[ 3 ].pressed;
				scope.dispatchEvent( { type: menuIsPressed ? 'menudown' : 'menuup' } );

			}

		} else {

			scope.visible = false;

		}

	};

};

THREE.ViveController.prototype = Object.create( THREE.Object3D.prototype );
THREE.ViveController.prototype.constructor = THREE.ViveController;

    const ViveController = THREE.ViveController;
    
  

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VREffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_cameras_PerspectiveCamera__ = __webpack_require__(15);

    
    
    
    const THREE = {
      Vector3: __WEBPACK_IMPORTED_MODULE_0_three_math_Vector3__["a" /* Vector3 */],
      Matrix4: __WEBPACK_IMPORTED_MODULE_1_three_math_Matrix4__["a" /* Matrix4 */],
      PerspectiveCamera: __WEBPACK_IMPORTED_MODULE_2_three_cameras_PerspectiveCamera__["a" /* PerspectiveCamera */],
    };
    /**
 * @author dmarcos / https://github.com/dmarcos
 * @author mrdoob / http://mrdoob.com
 *
 * WebVR Spec: http://mozvr.github.io/webvr-spec/webvr.html
 *
 * Firefox: http://mozvr.com/downloads/
 * Chromium: https://webvr.info/get-chrome
 */

THREE.VREffect = function ( renderer, onError ) {

	var vrDisplay, vrDisplays;
	var eyeTranslationL = new THREE.Vector3();
	var eyeTranslationR = new THREE.Vector3();
	var renderRectL, renderRectR;
	var headMatrix = new THREE.Matrix4();
	var eyeMatrixL = new THREE.Matrix4();
	var eyeMatrixR = new THREE.Matrix4();

	var frameData = null;

	if ( 'VRFrameData' in window ) {

		frameData = new window.VRFrameData();

	}

	function gotVRDisplays( displays ) {

		vrDisplays = displays;

		if ( displays.length > 0 ) {

			vrDisplay = displays[ 0 ];

		} else {

			if ( onError ) onError( 'HMD not available' );

		}

	}

	if ( navigator.getVRDisplays ) {

		navigator.getVRDisplays().then( gotVRDisplays ).catch( function () {

			console.warn( 'THREE.VREffect: Unable to get VR Displays' );

		} );

	}

	//

	this.isPresenting = false;

	var scope = this;

	var rendererSize = renderer.getSize();
	var rendererUpdateStyle = false;
	var rendererPixelRatio = renderer.getPixelRatio();

	this.getVRDisplay = function () {

		return vrDisplay;

	};

	this.setVRDisplay = function ( value ) {

		vrDisplay = value;

	};

	this.getVRDisplays = function () {

		console.warn( 'THREE.VREffect: getVRDisplays() is being deprecated.' );
		return vrDisplays;

	};

	this.setSize = function ( width, height, updateStyle ) {

		rendererSize = { width: width, height: height };
		rendererUpdateStyle = updateStyle;

		if ( scope.isPresenting ) {

			var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
			renderer.setPixelRatio( 1 );
			renderer.setSize( eyeParamsL.renderWidth * 2, eyeParamsL.renderHeight, false );

		} else {

			renderer.setPixelRatio( rendererPixelRatio );
			renderer.setSize( width, height, updateStyle );

		}

	};

	// VR presentation

	var canvas = renderer.domElement;
	var defaultLeftBounds = [ 0.0, 0.0, 0.5, 1.0 ];
	var defaultRightBounds = [ 0.5, 0.0, 0.5, 1.0 ];

	function onVRDisplayPresentChange() {

		var wasPresenting = scope.isPresenting;
		scope.isPresenting = vrDisplay !== undefined && vrDisplay.isPresenting;

		if ( scope.isPresenting ) {

			var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
			var eyeWidth = eyeParamsL.renderWidth;
			var eyeHeight = eyeParamsL.renderHeight;

			if ( ! wasPresenting ) {

				rendererPixelRatio = renderer.getPixelRatio();
				rendererSize = renderer.getSize();

				renderer.setPixelRatio( 1 );
				renderer.setSize( eyeWidth * 2, eyeHeight, false );

			}

		} else if ( wasPresenting ) {

			renderer.setPixelRatio( rendererPixelRatio );
			renderer.setSize( rendererSize.width, rendererSize.height, rendererUpdateStyle );

		}

	}

	window.addEventListener( 'vrdisplaypresentchange', onVRDisplayPresentChange, false );

	this.setFullScreen = function ( boolean ) {

		return new Promise( function ( resolve, reject ) {

			if ( vrDisplay === undefined ) {

				reject( new Error( 'No VR hardware found.' ) );
				return;

			}

			if ( scope.isPresenting === boolean ) {

				resolve();
				return;

			}

			if ( boolean ) {

				resolve( vrDisplay.requestPresent( [ { source: canvas } ] ) );

			} else {

				resolve( vrDisplay.exitPresent() );

			}

		} );

	};

	this.requestPresent = function () {

		return this.setFullScreen( true );

	};

	this.exitPresent = function () {

		return this.setFullScreen( false );

	};

	this.requestAnimationFrame = function ( f ) {

		if ( vrDisplay !== undefined ) {

			return vrDisplay.requestAnimationFrame( f );

		} else {

			return window.requestAnimationFrame( f );

		}

	};

	this.cancelAnimationFrame = function ( h ) {

		if ( vrDisplay !== undefined ) {

			vrDisplay.cancelAnimationFrame( h );

		} else {

			window.cancelAnimationFrame( h );

		}

	};

	this.submitFrame = function () {

		if ( vrDisplay !== undefined && scope.isPresenting ) {

			vrDisplay.submitFrame();

		}

	};

	this.autoSubmitFrame = true;

	// render

	var cameraL = new THREE.PerspectiveCamera();
	cameraL.layers.enable( 1 );

	var cameraR = new THREE.PerspectiveCamera();
	cameraR.layers.enable( 2 );

	this.render = function ( scene, camera, renderTarget, forceClear ) {

		if ( vrDisplay && scope.isPresenting ) {

			var autoUpdate = scene.autoUpdate;

			if ( autoUpdate ) {

				scene.updateMatrixWorld();
				scene.autoUpdate = false;

			}

			if ( Array.isArray( scene ) ) {

				console.warn( 'THREE.VREffect.render() no longer supports arrays. Use object.layers instead.' );
				scene = scene[ 0 ];

			}

			// When rendering we don't care what the recommended size is, only what the actual size
			// of the backbuffer is.
			var size = renderer.getSize();
			var layers = vrDisplay.getLayers();
			var leftBounds;
			var rightBounds;

			if ( layers.length ) {

				var layer = layers[ 0 ];

				leftBounds = layer.leftBounds !== null && layer.leftBounds.length === 4 ? layer.leftBounds : defaultLeftBounds;
				rightBounds = layer.rightBounds !== null && layer.rightBounds.length === 4 ? layer.rightBounds : defaultRightBounds;

			} else {

				leftBounds = defaultLeftBounds;
				rightBounds = defaultRightBounds;

			}

			renderRectL = {
				x: Math.round( size.width * leftBounds[ 0 ] ),
				y: Math.round( size.height * leftBounds[ 1 ] ),
				width: Math.round( size.width * leftBounds[ 2 ] ),
				height: Math.round( size.height * leftBounds[ 3 ] )
			};
			renderRectR = {
				x: Math.round( size.width * rightBounds[ 0 ] ),
				y: Math.round( size.height * rightBounds[ 1 ] ),
				width: Math.round( size.width * rightBounds[ 2 ] ),
				height: Math.round( size.height * rightBounds[ 3 ] )
			};

			if ( renderTarget ) {

				renderer.setRenderTarget( renderTarget );
				renderTarget.scissorTest = true;

			} else {

				renderer.setRenderTarget( null );
				renderer.setScissorTest( true );

			}

			if ( renderer.autoClear || forceClear ) renderer.clear();

			if ( camera.parent === null ) camera.updateMatrixWorld();

			camera.matrixWorld.decompose( cameraL.position, cameraL.quaternion, cameraL.scale );

			cameraR.position.copy( cameraL.position );
			cameraR.quaternion.copy( cameraL.quaternion );
			cameraR.scale.copy( cameraL.scale );

			if ( vrDisplay.getFrameData ) {

				vrDisplay.depthNear = camera.near;
				vrDisplay.depthFar = camera.far;

				vrDisplay.getFrameData( frameData );

				cameraL.projectionMatrix.elements = frameData.leftProjectionMatrix;
				cameraR.projectionMatrix.elements = frameData.rightProjectionMatrix;

				getEyeMatrices( frameData );

				cameraL.updateMatrix();
				cameraL.matrix.multiply( eyeMatrixL );
				cameraL.matrix.decompose( cameraL.position, cameraL.quaternion, cameraL.scale );

				cameraR.updateMatrix();
				cameraR.matrix.multiply( eyeMatrixR );
				cameraR.matrix.decompose( cameraR.position, cameraR.quaternion, cameraR.scale );

			} else {

				var eyeParamsL = vrDisplay.getEyeParameters( 'left' );
				var eyeParamsR = vrDisplay.getEyeParameters( 'right' );

				cameraL.projectionMatrix = fovToProjection( eyeParamsL.fieldOfView, true, camera.near, camera.far );
				cameraR.projectionMatrix = fovToProjection( eyeParamsR.fieldOfView, true, camera.near, camera.far );

				eyeTranslationL.fromArray( eyeParamsL.offset );
				eyeTranslationR.fromArray( eyeParamsR.offset );

				cameraL.translateOnAxis( eyeTranslationL, cameraL.scale.x );
				cameraR.translateOnAxis( eyeTranslationR, cameraR.scale.x );

			}

			// render left eye
			if ( renderTarget ) {

				renderTarget.viewport.set( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );
				renderTarget.scissor.set( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );

			} else {

				renderer.setViewport( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );
				renderer.setScissor( renderRectL.x, renderRectL.y, renderRectL.width, renderRectL.height );

			}
			renderer.render( scene, cameraL, renderTarget, forceClear );

			// render right eye
			if ( renderTarget ) {

				renderTarget.viewport.set( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );
				renderTarget.scissor.set( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );

			} else {

				renderer.setViewport( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );
				renderer.setScissor( renderRectR.x, renderRectR.y, renderRectR.width, renderRectR.height );

			}
			renderer.render( scene, cameraR, renderTarget, forceClear );

			if ( renderTarget ) {

				renderTarget.viewport.set( 0, 0, size.width, size.height );
				renderTarget.scissor.set( 0, 0, size.width, size.height );
				renderTarget.scissorTest = false;
				renderer.setRenderTarget( null );

			} else {

				renderer.setViewport( 0, 0, size.width, size.height );
				renderer.setScissorTest( false );

			}

			if ( autoUpdate ) {

				scene.autoUpdate = true;

			}

			if ( scope.autoSubmitFrame ) {

				scope.submitFrame();

			}

			return;

		}

		// Regular render mode if not HMD

		renderer.render( scene, camera, renderTarget, forceClear );

	};

	this.dispose = function () {

		window.removeEventListener( 'vrdisplaypresentchange', onVRDisplayPresentChange, false );

	};

	//

	var poseOrientation = new THREE.Quaternion();
	var posePosition = new THREE.Vector3();

	// Compute model matrices of the eyes with respect to the head.
	function getEyeMatrices( frameData ) {

		// Compute the matrix for the position of the head based on the pose
		if ( frameData.pose.orientation ) {

			poseOrientation.fromArray( frameData.pose.orientation );
			headMatrix.makeRotationFromQuaternion( poseOrientation );

		}	else {

			headMatrix.identity();

		}

		if ( frameData.pose.position ) {

			posePosition.fromArray( frameData.pose.position );
			headMatrix.setPosition( posePosition );

		}

		// The view matrix transforms vertices from sitting space to eye space. As such, the view matrix can be thought of as a product of two matrices:
		// headToEyeMatrix * sittingToHeadMatrix

		// The headMatrix that we've calculated above is the model matrix of the head in sitting space, which is the inverse of sittingToHeadMatrix.
		// So when we multiply the view matrix with headMatrix, we're left with headToEyeMatrix:
		// viewMatrix * headMatrix = headToEyeMatrix * sittingToHeadMatrix * headMatrix = headToEyeMatrix

		eyeMatrixL.fromArray( frameData.leftViewMatrix );
		eyeMatrixL.multiply( headMatrix );
		eyeMatrixR.fromArray( frameData.rightViewMatrix );
		eyeMatrixR.multiply( headMatrix );

		// The eye's model matrix in head space is the inverse of headToEyeMatrix we calculated above.

		eyeMatrixL.getInverse( eyeMatrixL );
		eyeMatrixR.getInverse( eyeMatrixR );

	}

	function fovToNDCScaleOffset( fov ) {

		var pxscale = 2.0 / ( fov.leftTan + fov.rightTan );
		var pxoffset = ( fov.leftTan - fov.rightTan ) * pxscale * 0.5;
		var pyscale = 2.0 / ( fov.upTan + fov.downTan );
		var pyoffset = ( fov.upTan - fov.downTan ) * pyscale * 0.5;
		return { scale: [ pxscale, pyscale ], offset: [ pxoffset, pyoffset ] };

	}

	function fovPortToProjection( fov, rightHanded, zNear, zFar ) {

		rightHanded = rightHanded === undefined ? true : rightHanded;
		zNear = zNear === undefined ? 0.01 : zNear;
		zFar = zFar === undefined ? 10000.0 : zFar;

		var handednessScale = rightHanded ? - 1.0 : 1.0;

		// start with an identity matrix
		var mobj = new THREE.Matrix4();
		var m = mobj.elements;

		// and with scale/offset info for normalized device coords
		var scaleAndOffset = fovToNDCScaleOffset( fov );

		// X result, map clip edges to [-w,+w]
		m[ 0 * 4 + 0 ] = scaleAndOffset.scale[ 0 ];
		m[ 0 * 4 + 1 ] = 0.0;
		m[ 0 * 4 + 2 ] = scaleAndOffset.offset[ 0 ] * handednessScale;
		m[ 0 * 4 + 3 ] = 0.0;

		// Y result, map clip edges to [-w,+w]
		// Y offset is negated because this proj matrix transforms from world coords with Y=up,
		// but the NDC scaling has Y=down (thanks D3D?)
		m[ 1 * 4 + 0 ] = 0.0;
		m[ 1 * 4 + 1 ] = scaleAndOffset.scale[ 1 ];
		m[ 1 * 4 + 2 ] = - scaleAndOffset.offset[ 1 ] * handednessScale;
		m[ 1 * 4 + 3 ] = 0.0;

		// Z result (up to the app)
		m[ 2 * 4 + 0 ] = 0.0;
		m[ 2 * 4 + 1 ] = 0.0;
		m[ 2 * 4 + 2 ] = zFar / ( zNear - zFar ) * - handednessScale;
		m[ 2 * 4 + 3 ] = ( zFar * zNear ) / ( zNear - zFar );

		// W result (= Z in)
		m[ 3 * 4 + 0 ] = 0.0;
		m[ 3 * 4 + 1 ] = 0.0;
		m[ 3 * 4 + 2 ] = handednessScale;
		m[ 3 * 4 + 3 ] = 0.0;

		mobj.transpose();
		return mobj;

	}

	function fovToProjection( fov, rightHanded, zNear, zFar ) {

		var DEG2RAD = Math.PI / 180.0;

		var fovPort = {
			upTan: Math.tan( fov.upDegrees * DEG2RAD ),
			downTan: Math.tan( fov.downDegrees * DEG2RAD ),
			leftTan: Math.tan( fov.leftDegrees * DEG2RAD ),
			rightTan: Math.tan( fov.rightDegrees * DEG2RAD )
		};

		return fovPortToProjection( fovPort, rightHanded, zNear, zFar );

	}

};

    const VREffect = THREE.VREffect;
    
  

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebVR; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_examples_effects_VREffect__ = __webpack_require__(49);

    
    const THREE = {
      VREffect: __WEBPACK_IMPORTED_MODULE_0_three_examples_effects_VREffect__["a" /* VREffect */],
    };

    /**
 * @author mrdoob / http://mrdoob.com
 * @author Mugen87 / https://github.com/Mugen87
 *
 * Based on @tojiro's vr-samples-utils.js
 */

var WEBVR = {

	isAvailable: function () {

		console.warn( 'WEBVR: isAvailable() is being deprecated. Use .checkAvailability() instead.' );
		return navigator.getVRDisplays !== undefined;

	},

	checkAvailability: function () {

		return new Promise( function( resolve, reject ) {

			if ( navigator.getVRDisplays !== undefined ) {

				navigator.getVRDisplays().then( function ( displays ) {

					if ( displays.length === 0 ) {

						reject( 'WebVR supported, but no VRDisplays found.' );

					} else {

						resolve();

					}

				} );

			} else {

				reject( 'Your browser does not support WebVR. See <a href="https://webvr.info">webvr.info</a> for assistance.' );

			}

		} );

	},

	getVRDisplay: function ( onDisplay ) {

		if ( 'getVRDisplays' in navigator ) {

			navigator.getVRDisplays()
				.then( function ( displays ) {
					onDisplay( displays[ 0 ] );
				} );

		}

	},

	getMessage: function () {

		console.warn( 'WEBVR: getMessage() is being deprecated. Use .getMessageContainer( message ) instead.' );

		var message;

		if ( navigator.getVRDisplays ) {

			navigator.getVRDisplays().then( function ( displays ) {

				if ( displays.length === 0 ) message = 'WebVR supported, but no VRDisplays found.';

			} );

		} else {

			message = 'Your browser does not support WebVR. See <a href="http://webvr.info">webvr.info</a> for assistance.';

		}

		if ( message !== undefined ) {

			var container = document.createElement( 'div' );
			container.style.position = 'absolute';
			container.style.left = '0';
			container.style.top = '0';
			container.style.right = '0';
			container.style.zIndex = '999';
			container.align = 'center';

			var error = document.createElement( 'div' );
			error.style.fontFamily = 'sans-serif';
			error.style.fontSize = '16px';
			error.style.fontStyle = 'normal';
			error.style.lineHeight = '26px';
			error.style.backgroundColor = '#fff';
			error.style.color = '#000';
			error.style.padding = '10px 20px';
			error.style.margin = '50px';
			error.style.display = 'inline-block';
			error.innerHTML = message;
			container.appendChild( error );

			return container;

		}

	},

	getMessageContainer: function ( message ) {

		var container = document.createElement( 'div' );
		container.style.position = 'absolute';
		container.style.left = '0';
		container.style.top = '0';
		container.style.right = '0';
		container.style.zIndex = '999';
		container.align = 'center';

		var error = document.createElement( 'div' );
		error.style.fontFamily = 'sans-serif';
		error.style.fontSize = '16px';
		error.style.fontStyle = 'normal';
		error.style.lineHeight = '26px';
		error.style.backgroundColor = '#fff';
		error.style.color = '#000';
		error.style.padding = '10px 20px';
		error.style.margin = '50px';
		error.style.display = 'inline-block';
		error.innerHTML = message;
		container.appendChild( error );

		return container;

	},

	getButton: function ( display, canvas ) {

		if ( 'VREffect' in THREE && display instanceof THREE.VREffect ) {

			console.error( 'WebVR.getButton() now expects a VRDisplay.' );
			return document.createElement( 'button' );

		}

		var button = document.createElement( 'button' );
		button.style.position = 'absolute';
		button.style.left = 'calc(50% - 50px)';
		button.style.bottom = '20px';
		button.style.width = '100px';
		button.style.border = '0';
		button.style.padding = '8px';
		button.style.cursor = 'pointer';
		button.style.backgroundColor = '#000';
		button.style.color = '#fff';
		button.style.fontFamily = 'sans-serif';
		button.style.fontSize = '13px';
		button.style.fontStyle = 'normal';
		button.style.textAlign = 'center';
		button.style.zIndex = '999';

		if ( display ) {

			button.textContent = 'ENTER VR';
			button.onclick = function () {

				display.isPresenting ? display.exitPresent() : display.requestPresent( [ { source: canvas } ] );

			};

			window.addEventListener( 'vrdisplaypresentchange', function () {

				button.textContent = display.isPresenting ? 'EXIT VR' : 'ENTER VR';

			}, false );

		} else {

			button.textContent = 'NO VR DISPLAY';

		}

		return button;

	}

};


    const WebVR = WEBVR;
    
  

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d9b2f9599b4c7b18010ad937667c39d2.png";

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayCamera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PerspectiveCamera__ = __webpack_require__(15);
/**
 * @author mrdoob / http://mrdoob.com/
 */



function ArrayCamera( array ) {

	__WEBPACK_IMPORTED_MODULE_0__PerspectiveCamera__["a" /* PerspectiveCamera */].call( this );

	this.cameras = array || [];

}

ArrayCamera.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__PerspectiveCamera__["a" /* PerspectiveCamera */].prototype ), {

	constructor: ArrayCamera,

	isArrayCamera: true

} );





/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clock; });
/**
 * @author alteredq / http://alteredqualia.com/
 */

function Clock( autoStart ) {

	this.autoStart = ( autoStart !== undefined ) ? autoStart : true;

	this.startTime = 0;
	this.oldTime = 0;
	this.elapsedTime = 0;

	this.running = false;

}

Object.assign( Clock.prototype, {

	start: function () {

		this.startTime = ( typeof performance === 'undefined' ? Date : performance ).now(); // see #10732

		this.oldTime = this.startTime;
		this.elapsedTime = 0;
		this.running = true;

	},

	stop: function () {

		this.getElapsedTime();
		this.running = false;
		this.autoStart = false;

	},

	getElapsedTime: function () {

		this.getDelta();
		return this.elapsedTime;

	},

	getDelta: function () {

		var diff = 0;

		if ( this.autoStart && ! this.running ) {

			this.start();
			return 0;

		}

		if ( this.running ) {

			var newTime = ( typeof performance === 'undefined' ? Date : performance ).now();

			diff = ( newTime - this.oldTime ) / 1000;
			this.oldTime = newTime;

			this.elapsedTime += diff;

		}

		return diff;

	}

} );





/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectGeometry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Vector2__ = __webpack_require__(6);
/**
 * @author mrdoob / http://mrdoob.com/
 */



function DirectGeometry() {

	this.indices = [];
	this.vertices = [];
	this.normals = [];
	this.colors = [];
	this.uvs = [];
	this.uvs2 = [];

	this.groups = [];

	this.morphTargets = {};

	this.skinWeights = [];
	this.skinIndices = [];

	// this.lineDistances = [];

	this.boundingBox = null;
	this.boundingSphere = null;

	// update flags

	this.verticesNeedUpdate = false;
	this.normalsNeedUpdate = false;
	this.colorsNeedUpdate = false;
	this.uvsNeedUpdate = false;
	this.groupsNeedUpdate = false;

}

Object.assign( DirectGeometry.prototype, {

	computeGroups: function ( geometry ) {

		var group;
		var groups = [];
		var materialIndex = undefined;

		var faces = geometry.faces;

		for ( var i = 0; i < faces.length; i ++ ) {

			var face = faces[ i ];

			// materials

			if ( face.materialIndex !== materialIndex ) {

				materialIndex = face.materialIndex;

				if ( group !== undefined ) {

					group.count = ( i * 3 ) - group.start;
					groups.push( group );

				}

				group = {
					start: i * 3,
					materialIndex: materialIndex
				};

			}

		}

		if ( group !== undefined ) {

			group.count = ( i * 3 ) - group.start;
			groups.push( group );

		}

		this.groups = groups;

	},

	fromGeometry: function ( geometry ) {

		var faces = geometry.faces;
		var vertices = geometry.vertices;
		var faceVertexUvs = geometry.faceVertexUvs;

		var hasFaceVertexUv = faceVertexUvs[ 0 ] && faceVertexUvs[ 0 ].length > 0;
		var hasFaceVertexUv2 = faceVertexUvs[ 1 ] && faceVertexUvs[ 1 ].length > 0;

		// morphs

		var morphTargets = geometry.morphTargets;
		var morphTargetsLength = morphTargets.length;

		var morphTargetsPosition;

		if ( morphTargetsLength > 0 ) {

			morphTargetsPosition = [];

			for ( var i = 0; i < morphTargetsLength; i ++ ) {

				morphTargetsPosition[ i ] = [];

			}

			this.morphTargets.position = morphTargetsPosition;

		}

		var morphNormals = geometry.morphNormals;
		var morphNormalsLength = morphNormals.length;

		var morphTargetsNormal;

		if ( morphNormalsLength > 0 ) {

			morphTargetsNormal = [];

			for ( var i = 0; i < morphNormalsLength; i ++ ) {

				morphTargetsNormal[ i ] = [];

			}

			this.morphTargets.normal = morphTargetsNormal;

		}

		// skins

		var skinIndices = geometry.skinIndices;
		var skinWeights = geometry.skinWeights;

		var hasSkinIndices = skinIndices.length === vertices.length;
		var hasSkinWeights = skinWeights.length === vertices.length;

		//

		for ( var i = 0; i < faces.length; i ++ ) {

			var face = faces[ i ];

			this.vertices.push( vertices[ face.a ], vertices[ face.b ], vertices[ face.c ] );

			var vertexNormals = face.vertexNormals;

			if ( vertexNormals.length === 3 ) {

				this.normals.push( vertexNormals[ 0 ], vertexNormals[ 1 ], vertexNormals[ 2 ] );

			} else {

				var normal = face.normal;

				this.normals.push( normal, normal, normal );

			}

			var vertexColors = face.vertexColors;

			if ( vertexColors.length === 3 ) {

				this.colors.push( vertexColors[ 0 ], vertexColors[ 1 ], vertexColors[ 2 ] );

			} else {

				var color = face.color;

				this.colors.push( color, color, color );

			}

			if ( hasFaceVertexUv === true ) {

				var vertexUvs = faceVertexUvs[ 0 ][ i ];

				if ( vertexUvs !== undefined ) {

					this.uvs.push( vertexUvs[ 0 ], vertexUvs[ 1 ], vertexUvs[ 2 ] );

				} else {

					console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ', i );

					this.uvs.push( new __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* Vector2 */](), new __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* Vector2 */](), new __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* Vector2 */]() );

				}

			}

			if ( hasFaceVertexUv2 === true ) {

				var vertexUvs = faceVertexUvs[ 1 ][ i ];

				if ( vertexUvs !== undefined ) {

					this.uvs2.push( vertexUvs[ 0 ], vertexUvs[ 1 ], vertexUvs[ 2 ] );

				} else {

					console.warn( 'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ', i );

					this.uvs2.push( new __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* Vector2 */](), new __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* Vector2 */](), new __WEBPACK_IMPORTED_MODULE_0__math_Vector2__["a" /* Vector2 */]() );

				}

			}

			// morphs

			for ( var j = 0; j < morphTargetsLength; j ++ ) {

				var morphTarget = morphTargets[ j ].vertices;

				morphTargetsPosition[ j ].push( morphTarget[ face.a ], morphTarget[ face.b ], morphTarget[ face.c ] );

			}

			for ( var j = 0; j < morphNormalsLength; j ++ ) {

				var morphNormal = morphNormals[ j ].vertexNormals[ i ];

				morphTargetsNormal[ j ].push( morphNormal.a, morphNormal.b, morphNormal.c );

			}

			// skins

			if ( hasSkinIndices ) {

				this.skinIndices.push( skinIndices[ face.a ], skinIndices[ face.b ], skinIndices[ face.c ] );

			}

			if ( hasSkinWeights ) {

				this.skinWeights.push( skinWeights[ face.a ], skinWeights[ face.b ], skinWeights[ face.c ] );

			}

		}

		this.computeGroups( geometry );

		this.verticesNeedUpdate = geometry.verticesNeedUpdate;
		this.normalsNeedUpdate = geometry.normalsNeedUpdate;
		this.colorsNeedUpdate = geometry.colorsNeedUpdate;
		this.uvsNeedUpdate = geometry.uvsNeedUpdate;
		this.groupsNeedUpdate = geometry.groupsNeedUpdate;

		return this;

	}

} );





/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layers; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function Layers() {

	this.mask = 1 | 0;

}

Object.assign( Layers.prototype, {

	set: function ( channel ) {

		this.mask = 1 << channel | 0;

	},

	enable: function ( channel ) {

		this.mask |= 1 << channel | 0;

	},

	toggle: function ( channel ) {

		this.mask ^= 1 << channel | 0;

	},

	disable: function ( channel ) {

		this.mask &= ~ ( 1 << channel | 0 );

	},

	test: function ( layers ) {

		return ( this.mask & layers.mask ) !== 0;

	}

} );





/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Raycaster; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Ray__ = __webpack_require__(19);


/**
 * @author mrdoob / http://mrdoob.com/
 * @author bhouston / http://clara.io/
 * @author stephomi / http://stephaneginier.com/
 */

function Raycaster( origin, direction, near, far ) {

	this.ray = new __WEBPACK_IMPORTED_MODULE_0__math_Ray__["a" /* Ray */]( origin, direction );
	// direction is assumed to be normalized (for accurate distance calculations)

	this.near = near || 0;
	this.far = far || Infinity;

	this.params = {
		Mesh: {},
		Line: {},
		LOD: {},
		Points: { threshold: 1 },
		Sprite: {}
	};

	Object.defineProperties( this.params, {
		PointCloud: {
			get: function () {
				console.warn( 'THREE.Raycaster: params.PointCloud has been renamed to params.Points.' );
				return this.Points;
			}
		}
	} );

}

function ascSort( a, b ) {

	return a.distance - b.distance;

}

function intersectObject( object, raycaster, intersects, recursive ) {

	if ( object.visible === false ) return;

	object.raycast( raycaster, intersects );

	if ( recursive === true ) {

		var children = object.children;

		for ( var i = 0, l = children.length; i < l; i ++ ) {

			intersectObject( children[ i ], raycaster, intersects, true );

		}

	}

}

Object.assign( Raycaster.prototype, {

	linePrecision: 1,

	set: function ( origin, direction ) {

		// direction is assumed to be normalized (for accurate distance calculations)

		this.ray.set( origin, direction );

	},

	setFromCamera: function ( coords, camera ) {

		if ( ( camera && camera.isPerspectiveCamera ) ) {

			this.ray.origin.setFromMatrixPosition( camera.matrixWorld );
			this.ray.direction.set( coords.x, coords.y, 0.5 ).unproject( camera ).sub( this.ray.origin ).normalize();

		} else if ( ( camera && camera.isOrthographicCamera ) ) {

			this.ray.origin.set( coords.x, coords.y, ( camera.near + camera.far ) / ( camera.near - camera.far ) ).unproject( camera ); // set origin in plane of camera
			this.ray.direction.set( 0, 0, - 1 ).transformDirection( camera.matrixWorld );

		} else {

			console.error( 'THREE.Raycaster: Unsupported camera type.' );

		}

	},

	intersectObject: function ( object, recursive ) {

		var intersects = [];

		intersectObject( object, this, intersects, recursive );

		intersects.sort( ascSort );

		return intersects;

	},

	intersectObjects: function ( objects, recursive ) {

		var intersects = [];

		if ( Array.isArray( objects ) === false ) {

			console.warn( 'THREE.Raycaster.intersectObjects: objects is not an Array.' );
			return intersects;

		}

		for ( var i = 0, l = objects.length; i < l; i ++ ) {

			intersectObject( objects[ i ], this, intersects, recursive );

		}

		intersects.sort( ascSort );

		return intersects;

	}

} );





/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BoxGeometry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxBufferGeometry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Geometry__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Vector3__ = __webpack_require__(0);
/**
 * @author mrdoob / http://mrdoob.com/
 * @author Mugen87 / https://github.com/Mugen87
 */






// BoxGeometry

function BoxGeometry( width, height, depth, widthSegments, heightSegments, depthSegments ) {

	__WEBPACK_IMPORTED_MODULE_0__core_Geometry__["a" /* Geometry */].call( this );

	this.type = 'BoxGeometry';

	this.parameters = {
		width: width,
		height: height,
		depth: depth,
		widthSegments: widthSegments,
		heightSegments: heightSegments,
		depthSegments: depthSegments
	};

	this.fromBufferGeometry( new BoxBufferGeometry( width, height, depth, widthSegments, heightSegments, depthSegments ) );
	this.mergeVertices();

}

BoxGeometry.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__core_Geometry__["a" /* Geometry */].prototype );
BoxGeometry.prototype.constructor = BoxGeometry;

// BoxBufferGeometry

function BoxBufferGeometry( width, height, depth, widthSegments, heightSegments, depthSegments ) {

	__WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__["a" /* BufferGeometry */].call( this );

	this.type = 'BoxBufferGeometry';

	this.parameters = {
		width: width,
		height: height,
		depth: depth,
		widthSegments: widthSegments,
		heightSegments: heightSegments,
		depthSegments: depthSegments
	};

	var scope = this;

	// segments

	widthSegments = Math.floor( widthSegments ) || 1;
	heightSegments = Math.floor( heightSegments ) || 1;
	depthSegments = Math.floor( depthSegments ) || 1;

	// buffers

	var indices = [];
	var vertices = [];
	var normals = [];
	var uvs = [];

	// helper variables

	var numberOfVertices = 0;
	var groupStart = 0;

	// build each side of the box geometry

	buildPlane( 'z', 'y', 'x', - 1, - 1, depth, height,   width,  depthSegments, heightSegments, 0 ); // px
	buildPlane( 'z', 'y', 'x',   1, - 1, depth, height, - width,  depthSegments, heightSegments, 1 ); // nx
	buildPlane( 'x', 'z', 'y',   1,   1, width, depth,    height, widthSegments, depthSegments,  2 ); // py
	buildPlane( 'x', 'z', 'y',   1, - 1, width, depth,  - height, widthSegments, depthSegments,  3 ); // ny
	buildPlane( 'x', 'y', 'z',   1, - 1, width, height,   depth,  widthSegments, heightSegments, 4 ); // pz
	buildPlane( 'x', 'y', 'z', - 1, - 1, width, height, - depth,  widthSegments, heightSegments, 5 ); // nz

	// build geometry

	this.setIndex( indices );
	this.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( vertices, 3 ) );
	this.addAttribute( 'normal', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( normals, 3 ) );
	this.addAttribute( 'uv', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( uvs, 2 ) );

	function buildPlane( u, v, w, udir, vdir, width, height, depth, gridX, gridY, materialIndex ) {

		var segmentWidth = width / gridX;
		var segmentHeight = height / gridY;

		var widthHalf = width / 2;
		var heightHalf = height / 2;
		var depthHalf = depth / 2;

		var gridX1 = gridX + 1;
		var gridY1 = gridY + 1;

		var vertexCounter = 0;
		var groupCount = 0;

		var ix, iy;

		var vector = new __WEBPACK_IMPORTED_MODULE_3__math_Vector3__["a" /* Vector3 */]();

		// generate vertices, normals and uvs

		for ( iy = 0; iy < gridY1; iy ++ ) {

			var y = iy * segmentHeight - heightHalf;

			for ( ix = 0; ix < gridX1; ix ++ ) {

				var x = ix * segmentWidth - widthHalf;

				// set values to correct vector component

				vector[ u ] = x * udir;
				vector[ v ] = y * vdir;
				vector[ w ] = depthHalf;

				// now apply vector to vertex buffer

				vertices.push( vector.x, vector.y, vector.z );

				// set values to correct vector component

				vector[ u ] = 0;
				vector[ v ] = 0;
				vector[ w ] = depth > 0 ? 1 : - 1;

				// now apply vector to normal buffer

				normals.push( vector.x, vector.y, vector.z );

				// uvs

				uvs.push( ix / gridX );
				uvs.push( 1 - ( iy / gridY ) );

				// counters

				vertexCounter += 1;

			}

		}

		// indices

		// 1. you need three indices to draw a single face
		// 2. a single segment consists of two faces
		// 3. so we need to generate six (2*3) indices per segment

		for ( iy = 0; iy < gridY; iy ++ ) {

			for ( ix = 0; ix < gridX; ix ++ ) {

				var a = numberOfVertices + ix + gridX1 * iy;
				var b = numberOfVertices + ix + gridX1 * ( iy + 1 );
				var c = numberOfVertices + ( ix + 1 ) + gridX1 * ( iy + 1 );
				var d = numberOfVertices + ( ix + 1 ) + gridX1 * iy;

				// faces

				indices.push( a, b, d );
				indices.push( b, c, d );

				// increase counter

				groupCount += 6;

			}

		}

		// add a group to the geometry. this will ensure multi material support

		scope.addGroup( groupStart, groupCount, materialIndex );

		// calculate new start value for groups

		groupStart += groupCount;

		// update total number of vertices

		numberOfVertices += vertexCounter;

	}

}

BoxBufferGeometry.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__["a" /* BufferGeometry */].prototype );
BoxBufferGeometry.prototype.constructor = BoxBufferGeometry;





/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SphereGeometry; });
/* unused harmony export SphereBufferGeometry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Geometry__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Vector3__ = __webpack_require__(0);
/**
 * @author mrdoob / http://mrdoob.com/
 * @author benaadams / https://twitter.com/ben_a_adams
 * @author Mugen87 / https://github.com/Mugen87
 */






// SphereGeometry

function SphereGeometry( radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength ) {

	__WEBPACK_IMPORTED_MODULE_0__core_Geometry__["a" /* Geometry */].call( this );

	this.type = 'SphereGeometry';

	this.parameters = {
		radius: radius,
		widthSegments: widthSegments,
		heightSegments: heightSegments,
		phiStart: phiStart,
		phiLength: phiLength,
		thetaStart: thetaStart,
		thetaLength: thetaLength
	};

	this.fromBufferGeometry( new SphereBufferGeometry( radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength ) );
	this.mergeVertices();

}

SphereGeometry.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__core_Geometry__["a" /* Geometry */].prototype );
SphereGeometry.prototype.constructor = SphereGeometry;

// SphereBufferGeometry

function SphereBufferGeometry( radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength ) {

	__WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__["a" /* BufferGeometry */].call( this );

	this.type = 'SphereBufferGeometry';

	this.parameters = {
		radius: radius,
		widthSegments: widthSegments,
		heightSegments: heightSegments,
		phiStart: phiStart,
		phiLength: phiLength,
		thetaStart: thetaStart,
		thetaLength: thetaLength
	};

	radius = radius || 50;

	widthSegments = Math.max( 3, Math.floor( widthSegments ) || 8 );
	heightSegments = Math.max( 2, Math.floor( heightSegments ) || 6 );

	phiStart = phiStart !== undefined ? phiStart : 0;
	phiLength = phiLength !== undefined ? phiLength : Math.PI * 2;

	thetaStart = thetaStart !== undefined ? thetaStart : 0;
	thetaLength = thetaLength !== undefined ? thetaLength : Math.PI;

	var thetaEnd = thetaStart + thetaLength;

	var ix, iy;

	var index = 0;
	var grid = [];

	var vertex = new __WEBPACK_IMPORTED_MODULE_3__math_Vector3__["a" /* Vector3 */]();
	var normal = new __WEBPACK_IMPORTED_MODULE_3__math_Vector3__["a" /* Vector3 */]();

	// buffers

	var indices = [];
	var vertices = [];
	var normals = [];
	var uvs = [];

	// generate vertices, normals and uvs

	for ( iy = 0; iy <= heightSegments; iy ++ ) {

		var verticesRow = [];

		var v = iy / heightSegments;

		for ( ix = 0; ix <= widthSegments; ix ++ ) {

			var u = ix / widthSegments;

			// vertex

			vertex.x = - radius * Math.cos( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );
			vertex.y = radius * Math.cos( thetaStart + v * thetaLength );
			vertex.z = radius * Math.sin( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );

			vertices.push( vertex.x, vertex.y, vertex.z );

			// normal

			normal.set( vertex.x, vertex.y, vertex.z ).normalize();
			normals.push( normal.x, normal.y, normal.z );

			// uv

			uvs.push( u, 1 - v );

			verticesRow.push( index ++ );

		}

		grid.push( verticesRow );

	}

	// indices

	for ( iy = 0; iy < heightSegments; iy ++ ) {

		for ( ix = 0; ix < widthSegments; ix ++ ) {

			var a = grid[ iy ][ ix + 1 ];
			var b = grid[ iy ][ ix ];
			var c = grid[ iy + 1 ][ ix ];
			var d = grid[ iy + 1 ][ ix + 1 ];

			if ( iy !== 0 || thetaStart > 0 ) indices.push( a, b, d );
			if ( iy !== heightSegments - 1 || thetaEnd < Math.PI ) indices.push( b, c, d );

		}

	}

	// build geometry

	this.setIndex( indices );
	this.addAttribute( 'position', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( vertices, 3 ) );
	this.addAttribute( 'normal', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( normals, 3 ) );
	this.addAttribute( 'uv', new __WEBPACK_IMPORTED_MODULE_2__core_BufferAttribute__["d" /* Float32BufferAttribute */]( uvs, 2 ) );

}

SphereBufferGeometry.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__["a" /* BufferGeometry */].prototype );
SphereBufferGeometry.prototype.constructor = SphereBufferGeometry;





/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmbientLight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Light__ = __webpack_require__(30);


/**
 * @author mrdoob / http://mrdoob.com/
 */

function AmbientLight( color, intensity ) {

	__WEBPACK_IMPORTED_MODULE_0__Light__["a" /* Light */].call( this, color, intensity );

	this.type = 'AmbientLight';

	this.castShadow = undefined;

}

AmbientLight.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__Light__["a" /* Light */].prototype ), {

	constructor: AmbientLight,

	isAmbientLight: true

} );





/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionalLight; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Light__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DirectionalLightShadow__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_Object3D__ = __webpack_require__(2);




/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function DirectionalLight( color, intensity ) {

	__WEBPACK_IMPORTED_MODULE_0__Light__["a" /* Light */].call( this, color, intensity );

	this.type = 'DirectionalLight';

	this.position.copy( __WEBPACK_IMPORTED_MODULE_2__core_Object3D__["a" /* Object3D */].DefaultUp );
	this.updateMatrix();

	this.target = new __WEBPACK_IMPORTED_MODULE_2__core_Object3D__["a" /* Object3D */]();

	this.shadow = new __WEBPACK_IMPORTED_MODULE_1__DirectionalLightShadow__["a" /* DirectionalLightShadow */]();

}

DirectionalLight.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__Light__["a" /* Light */].prototype ), {

	constructor: DirectionalLight,

	isDirectionalLight: true,

	copy: function ( source ) {

		__WEBPACK_IMPORTED_MODULE_0__Light__["a" /* Light */].prototype.copy.call( this, source );

		this.target = source.target.clone();

		this.shadow = source.shadow.clone();

		return this;

	}

} );





/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectionalLightShadow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LightShadow__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cameras_OrthographicCamera__ = __webpack_require__(28);



/**
 * @author mrdoob / http://mrdoob.com/
 */

function DirectionalLightShadow( ) {

	__WEBPACK_IMPORTED_MODULE_0__LightShadow__["a" /* LightShadow */].call( this, new __WEBPACK_IMPORTED_MODULE_1__cameras_OrthographicCamera__["a" /* OrthographicCamera */]( - 5, 5, 5, - 5, 0.5, 500 ) );

}

DirectionalLightShadow.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__LightShadow__["a" /* LightShadow */].prototype ), {

	constructor: DirectionalLightShadow

} );





/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightShadow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector2__ = __webpack_require__(6);



/**
 * @author mrdoob / http://mrdoob.com/
 */

function LightShadow( camera ) {

	this.camera = camera;

	this.bias = 0;
	this.radius = 1;

	this.mapSize = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* Vector2 */]( 512, 512 );

	this.map = null;
	this.matrix = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* Matrix4 */]();

}

Object.assign( LightShadow.prototype, {

	copy: function ( source ) {

		this.camera = source.camera.clone();

		this.bias = source.bias;
		this.radius = source.radius;

		this.mapSize.copy( source.mapSize );

		return this;

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	toJSON: function () {

		var object = {};

		if ( this.bias !== 0 ) object.bias = this.bias;
		if ( this.radius !== 1 ) object.radius = this.radius;
		if ( this.mapSize.x !== 512 || this.mapSize.y !== 512 ) object.mapSize = this.mapSize.toArray();

		object.camera = this.camera.toJSON( false ).object;
		delete object.camera.matrix;

		return object;

	}

} );





/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cache; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

var Cache = {

	enabled: false,

	files: {},

	add: function ( key, file ) {

		if ( this.enabled === false ) return;

		// console.log( 'THREE.Cache', 'Adding key:', key );

		this.files[ key ] = file;

	},

	get: function ( key ) {

		if ( this.enabled === false ) return;

		// console.log( 'THREE.Cache', 'Checking key:', key );

		return this.files[ key ];

	},

	remove: function ( key ) {

		delete this.files[ key ];

	},

	clear: function () {

		this.files = {};

	}

};





/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cache__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingManager__ = __webpack_require__(31);
/**
 * @author mrdoob / http://mrdoob.com/
 */





function ImageLoader( manager ) {

	this.manager = ( manager !== undefined ) ? manager : __WEBPACK_IMPORTED_MODULE_1__LoadingManager__["a" /* DefaultLoadingManager */];

}

Object.assign( ImageLoader.prototype, {

	load: function ( url, onLoad, onProgress, onError ) {

		if ( url === undefined ) url = '';

		if ( this.path !== undefined ) url = this.path + url;

		var scope = this;

		var cached = __WEBPACK_IMPORTED_MODULE_0__Cache__["a" /* Cache */].get( url );

		if ( cached !== undefined ) {

			scope.manager.itemStart( url );

			setTimeout( function () {

				if ( onLoad ) onLoad( cached );

				scope.manager.itemEnd( url );

			}, 0 );

			return cached;

		}

		var image = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'img' );

		image.addEventListener( 'load', function () {

			__WEBPACK_IMPORTED_MODULE_0__Cache__["a" /* Cache */].add( url, this );

			if ( onLoad ) onLoad( this );

			scope.manager.itemEnd( url );

		}, false );

		/*
		image.addEventListener( 'progress', function ( event ) {

			if ( onProgress ) onProgress( event );

		}, false );
		*/

		image.addEventListener( 'error', function ( event ) {

			if ( onError ) onError( event );

			scope.manager.itemEnd( url );
			scope.manager.itemError( url );

		}, false );

		if ( url.substr( 0, 5 ) !== 'data:' ) {

			if ( this.crossOrigin !== undefined ) image.crossOrigin = this.crossOrigin;

		}

		scope.manager.itemStart( url );

		image.src = url;

		return image;

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;
		return this;

	},

	setPath: function ( value ) {

		this.path = value;
		return this;

	}

} );





/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextureLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ImageLoader__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__textures_Texture__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LoadingManager__ = __webpack_require__(31);
/**
 * @author mrdoob / http://mrdoob.com/
 */







function TextureLoader( manager ) {

	this.manager = ( manager !== undefined ) ? manager : __WEBPACK_IMPORTED_MODULE_3__LoadingManager__["a" /* DefaultLoadingManager */];

}

Object.assign( TextureLoader.prototype, {

	load: function ( url, onLoad, onProgress, onError ) {

		var loader = new __WEBPACK_IMPORTED_MODULE_1__ImageLoader__["a" /* ImageLoader */]( this.manager );
		loader.setCrossOrigin( this.crossOrigin );
		loader.setPath( this.path );

		var texture = new __WEBPACK_IMPORTED_MODULE_2__textures_Texture__["a" /* Texture */]();
		texture.image = loader.load( url, function () {

			// JPEGs can't have an alpha channel, so memory can be saved by storing them as RGB.
			var isJPEG = url.search( /\.(jpg|jpeg)$/ ) > 0 || url.search( /^data\:image\/jpeg/ ) === 0;

			texture.format = isJPEG ? __WEBPACK_IMPORTED_MODULE_0__constants__["L" /* RGBFormat */] : __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* RGBAFormat */];
			texture.needsUpdate = true;

			if ( onLoad !== undefined ) {

				onLoad( texture );

			}

		}, onProgress, onError );

		return texture;

	},

	setCrossOrigin: function ( value ) {

		this.crossOrigin = value;
		return this;

	},

	setPath: function ( value ) {

		this.path = value;
		return this;

	}

} );





/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshDepthMaterial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);



/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author bhouston / https://clara.io
 * @author WestLangley / http://github.com/WestLangley
 *
 * parameters = {
 *
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  displacementMap: new THREE.Texture( <Image> ),
 *  displacementScale: <float>,
 *  displacementBias: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>
 * }
 */

function MeshDepthMaterial( parameters ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].call( this );

	this.type = 'MeshDepthMaterial';

	this.depthPacking = __WEBPACK_IMPORTED_MODULE_1__constants__["_20" /* BasicDepthPacking */];

	this.skinning = false;
	this.morphTargets = false;

	this.map = null;

	this.alphaMap = null;

	this.displacementMap = null;
	this.displacementScale = 1;
	this.displacementBias = 0;

	this.wireframe = false;
	this.wireframeLinewidth = 1;

	this.fog = false;
	this.lights = false;

	this.setValues( parameters );

}

MeshDepthMaterial.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype );
MeshDepthMaterial.prototype.constructor = MeshDepthMaterial;

MeshDepthMaterial.prototype.isMeshDepthMaterial = true;

MeshDepthMaterial.prototype.copy = function ( source ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype.copy.call( this, source );

	this.depthPacking = source.depthPacking;

	this.skinning = source.skinning;
	this.morphTargets = source.morphTargets;

	this.map = source.map;

	this.alphaMap = source.alphaMap;

	this.displacementMap = source.displacementMap;
	this.displacementScale = source.displacementScale;
	this.displacementBias = source.displacementBias;

	this.wireframe = source.wireframe;
	this.wireframeLinewidth = source.wireframeLinewidth;

	return this;

};





/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeshLambertMaterial; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Color__ = __webpack_require__(4);




/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *
 *  map: new THREE.Texture( <Image> ),
 *
 *  lightMap: new THREE.Texture( <Image> ),
 *  lightMapIntensity: <float>
 *
 *  aoMap: new THREE.Texture( <Image> ),
 *  aoMapIntensity: <float>
 *
 *  emissive: <hex>,
 *  emissiveIntensity: <float>
 *  emissiveMap: new THREE.Texture( <Image> ),
 *
 *  specularMap: new THREE.Texture( <Image> ),
 *
 *  alphaMap: new THREE.Texture( <Image> ),
 *
 *  envMap: new THREE.TextureCube( [posx, negx, posy, negy, posz, negz] ),
 *  combine: THREE.Multiply,
 *  reflectivity: <float>,
 *  refractionRatio: <float>,
 *
 *  wireframe: <boolean>,
 *  wireframeLinewidth: <float>,
 *
 *  skinning: <bool>,
 *  morphTargets: <bool>,
 *  morphNormals: <bool>
 * }
 */

function MeshLambertMaterial( parameters ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].call( this );

	this.type = 'MeshLambertMaterial';

	this.color = new __WEBPACK_IMPORTED_MODULE_2__math_Color__["a" /* Color */]( 0xffffff ); // diffuse

	this.map = null;

	this.lightMap = null;
	this.lightMapIntensity = 1.0;

	this.aoMap = null;
	this.aoMapIntensity = 1.0;

	this.emissive = new __WEBPACK_IMPORTED_MODULE_2__math_Color__["a" /* Color */]( 0x000000 );
	this.emissiveIntensity = 1.0;
	this.emissiveMap = null;

	this.specularMap = null;

	this.alphaMap = null;

	this.envMap = null;
	this.combine = __WEBPACK_IMPORTED_MODULE_1__constants__["_21" /* MultiplyOperation */];
	this.reflectivity = 1;
	this.refractionRatio = 0.98;

	this.wireframe = false;
	this.wireframeLinewidth = 1;
	this.wireframeLinecap = 'round';
	this.wireframeLinejoin = 'round';

	this.skinning = false;
	this.morphTargets = false;
	this.morphNormals = false;

	this.setValues( parameters );

}

MeshLambertMaterial.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype );
MeshLambertMaterial.prototype.constructor = MeshLambertMaterial;

MeshLambertMaterial.prototype.isMeshLambertMaterial = true;

MeshLambertMaterial.prototype.copy = function ( source ) {

	__WEBPACK_IMPORTED_MODULE_0__Material__["a" /* Material */].prototype.copy.call( this, source );

	this.color.copy( source.color );

	this.map = source.map;

	this.lightMap = source.lightMap;
	this.lightMapIntensity = source.lightMapIntensity;

	this.aoMap = source.aoMap;
	this.aoMapIntensity = source.aoMapIntensity;

	this.emissive.copy( source.emissive );
	this.emissiveMap = source.emissiveMap;
	this.emissiveIntensity = source.emissiveIntensity;

	this.specularMap = source.specularMap;

	this.alphaMap = source.alphaMap;

	this.envMap = source.envMap;
	this.combine = source.combine;
	this.reflectivity = source.reflectivity;
	this.refractionRatio = source.refractionRatio;

	this.wireframe = source.wireframe;
	this.wireframeLinewidth = source.wireframeLinewidth;
	this.wireframeLinecap = source.wireframeLinecap;
	this.wireframeLinejoin = source.wireframeLinejoin;

	this.skinning = source.skinning;
	this.morphTargets = source.morphTargets;
	this.morphNormals = source.morphNormals;

	return this;

};





/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector2__ = __webpack_require__(6);


/**
 * @author bhouston / http://clara.io
 */

function Box2( min, max ) {

	this.min = ( min !== undefined ) ? min : new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* Vector2 */]( + Infinity, + Infinity );
	this.max = ( max !== undefined ) ? max : new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* Vector2 */]( - Infinity, - Infinity );

}

Object.assign( Box2.prototype, {

	set: function ( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	},

	setFromPoints: function ( points ) {

		this.makeEmpty();

		for ( var i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	},

	setFromCenterAndSize: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* Vector2 */]();

		return function setFromCenterAndSize( center, size ) {

			var halfSize = v1.copy( size ).multiplyScalar( 0.5 );
			this.min.copy( center ).sub( halfSize );
			this.max.copy( center ).add( halfSize );

			return this;

		};

	}(),

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	},

	makeEmpty: function () {

		this.min.x = this.min.y = + Infinity;
		this.max.x = this.max.y = - Infinity;

		return this;

	},

	isEmpty: function () {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y );

	},

	getCenter: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* Vector2 */]();
		return this.isEmpty() ? result.set( 0, 0 ) : result.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	},

	getSize: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* Vector2 */]();
		return this.isEmpty() ? result.set( 0, 0 ) : result.subVectors( this.max, this.min );

	},

	expandByPoint: function ( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	},

	expandByVector: function ( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	},

	expandByScalar: function ( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	},

	containsPoint: function ( point ) {

		return point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y ? false : true;

	},

	containsBox: function ( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y;

	},

	getParameter: function ( point, optionalTarget ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* Vector2 */]();

		return result.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y )
		);

	},

	intersectsBox: function ( box ) {

		// using 4 splitting planes to rule out intersections

		return box.max.x < this.min.x || box.min.x > this.max.x ||
			box.max.y < this.min.y || box.min.y > this.max.y ? false : true;

	},

	clampPoint: function ( point, optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* Vector2 */]();
		return result.copy( point ).clamp( this.min, this.max );

	},

	distanceToPoint: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector2__["a" /* Vector2 */]();

		return function distanceToPoint( point ) {

			var clampedPoint = v1.copy( point ).clamp( this.min, this.max );
			return clampedPoint.sub( point ).length();

		};

	}(),

	intersect: function ( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		return this;

	},

	union: function ( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	},

	translate: function ( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	},

	equals: function ( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

} );





/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Euler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Quaternion__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Math__ = __webpack_require__(5);





/**
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */

function Euler( x, y, z, order ) {

	this._x = x || 0;
	this._y = y || 0;
	this._z = z || 0;
	this._order = order || Euler.DefaultOrder;

}

Euler.RotationOrders = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];

Euler.DefaultOrder = 'XYZ';

Object.defineProperties( Euler.prototype, {

	x: {

		get: function () {

			return this._x;

		},

		set: function ( value ) {

			this._x = value;
			this.onChangeCallback();

		}

	},

	y: {

		get: function () {

			return this._y;

		},

		set: function ( value ) {

			this._y = value;
			this.onChangeCallback();

		}

	},

	z: {

		get: function () {

			return this._z;

		},

		set: function ( value ) {

			this._z = value;
			this.onChangeCallback();

		}

	},

	order: {

		get: function () {

			return this._order;

		},

		set: function ( value ) {

			this._order = value;
			this.onChangeCallback();

		}

	}

} );

Object.assign( Euler.prototype, {

	isEuler: true,

	set: function ( x, y, z, order ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order || this._order;

		this.onChangeCallback();

		return this;

	},

	clone: function () {

		return new this.constructor( this._x, this._y, this._z, this._order );

	},

	copy: function ( euler ) {

		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this.onChangeCallback();

		return this;

	},

	setFromRotationMatrix: function ( m, order, update ) {

		var clamp = __WEBPACK_IMPORTED_MODULE_3__Math__["a" /* _Math */].clamp;

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		var te = m.elements;
		var m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
		var m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
		var m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		order = order || this._order;

		if ( order === 'XYZ' ) {

			this._y = Math.asin( clamp( m13, - 1, 1 ) );

			if ( Math.abs( m13 ) < 0.99999 ) {

				this._x = Math.atan2( - m23, m33 );
				this._z = Math.atan2( - m12, m11 );

			} else {

				this._x = Math.atan2( m32, m22 );
				this._z = 0;

			}

		} else if ( order === 'YXZ' ) {

			this._x = Math.asin( - clamp( m23, - 1, 1 ) );

			if ( Math.abs( m23 ) < 0.99999 ) {

				this._y = Math.atan2( m13, m33 );
				this._z = Math.atan2( m21, m22 );

			} else {

				this._y = Math.atan2( - m31, m11 );
				this._z = 0;

			}

		} else if ( order === 'ZXY' ) {

			this._x = Math.asin( clamp( m32, - 1, 1 ) );

			if ( Math.abs( m32 ) < 0.99999 ) {

				this._y = Math.atan2( - m31, m33 );
				this._z = Math.atan2( - m12, m22 );

			} else {

				this._y = 0;
				this._z = Math.atan2( m21, m11 );

			}

		} else if ( order === 'ZYX' ) {

			this._y = Math.asin( - clamp( m31, - 1, 1 ) );

			if ( Math.abs( m31 ) < 0.99999 ) {

				this._x = Math.atan2( m32, m33 );
				this._z = Math.atan2( m21, m11 );

			} else {

				this._x = 0;
				this._z = Math.atan2( - m12, m22 );

			}

		} else if ( order === 'YZX' ) {

			this._z = Math.asin( clamp( m21, - 1, 1 ) );

			if ( Math.abs( m21 ) < 0.99999 ) {

				this._x = Math.atan2( - m23, m22 );
				this._y = Math.atan2( - m31, m11 );

			} else {

				this._x = 0;
				this._y = Math.atan2( m13, m33 );

			}

		} else if ( order === 'XZY' ) {

			this._z = Math.asin( - clamp( m12, - 1, 1 ) );

			if ( Math.abs( m12 ) < 0.99999 ) {

				this._x = Math.atan2( m32, m22 );
				this._y = Math.atan2( m13, m11 );

			} else {

				this._x = Math.atan2( - m23, m33 );
				this._y = 0;

			}

		} else {

			console.warn( 'THREE.Euler: .setFromRotationMatrix() given unsupported order: ' + order );

		}

		this._order = order;

		if ( update !== false ) this.onChangeCallback();

		return this;

	},

	setFromQuaternion: function () {

		var matrix = new __WEBPACK_IMPORTED_MODULE_2__Matrix4__["a" /* Matrix4 */]();

		return function setFromQuaternion( q, order, update ) {

			matrix.makeRotationFromQuaternion( q );

			return this.setFromRotationMatrix( matrix, order, update );

		};

	}(),

	setFromVector3: function ( v, order ) {

		return this.set( v.x, v.y, v.z, order || this._order );

	},

	reorder: function () {

		// WARNING: this discards revolution information -bhouston

		var q = new __WEBPACK_IMPORTED_MODULE_0__Quaternion__["a" /* Quaternion */]();

		return function reorder( newOrder ) {

			q.setFromEuler( this );

			return this.setFromQuaternion( q, newOrder );

		};

	}(),

	equals: function ( euler ) {

		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

	},

	fromArray: function ( array ) {

		this._x = array[ 0 ];
		this._y = array[ 1 ];
		this._z = array[ 2 ];
		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

		this.onChangeCallback();

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._order;

		return array;

	},

	toVector3: function ( optionalResult ) {

		if ( optionalResult ) {

			return optionalResult.set( this._x, this._y, this._z );

		} else {

			return new __WEBPACK_IMPORTED_MODULE_1__Vector3__["a" /* Vector3 */]( this._x, this._y, this._z );

		}

	},

	onChange: function ( callback ) {

		this.onChangeCallback = callback;

		return this;

	},

	onChangeCallback: function () {}

} );





/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Math__ = __webpack_require__(5);



/**
 * @author bhouston / http://clara.io
 */

function Line3( start, end ) {

	this.start = ( start !== undefined ) ? start : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
	this.end = ( end !== undefined ) ? end : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

}

Object.assign( Line3.prototype, {

	set: function ( start, end ) {

		this.start.copy( start );
		this.end.copy( end );

		return this;

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( line ) {

		this.start.copy( line.start );
		this.end.copy( line.end );

		return this;

	},

	getCenter: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		return result.addVectors( this.start, this.end ).multiplyScalar( 0.5 );

	},

	delta: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		return result.subVectors( this.end, this.start );

	},

	distanceSq: function () {

		return this.start.distanceToSquared( this.end );

	},

	distance: function () {

		return this.start.distanceTo( this.end );

	},

	at: function ( t, optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return this.delta( result ).multiplyScalar( t ).add( this.start );

	},

	closestPointToPointParameter: function () {

		var startP = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var startEnd = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function closestPointToPointParameter( point, clampToLine ) {

			startP.subVectors( point, this.start );
			startEnd.subVectors( this.end, this.start );

			var startEnd2 = startEnd.dot( startEnd );
			var startEnd_startP = startEnd.dot( startP );

			var t = startEnd_startP / startEnd2;

			if ( clampToLine ) {

				t = __WEBPACK_IMPORTED_MODULE_1__Math__["a" /* _Math */].clamp( t, 0, 1 );

			}

			return t;

		};

	}(),

	closestPointToPoint: function ( point, clampToLine, optionalTarget ) {

		var t = this.closestPointToPointParameter( point, clampToLine );

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return this.delta( result ).multiplyScalar( t ).add( this.start );

	},

	applyMatrix4: function ( matrix ) {

		this.start.applyMatrix4( matrix );
		this.end.applyMatrix4( matrix );

		return this;

	},

	equals: function ( line ) {

		return line.start.equals( this.start ) && line.end.equals( this.end );

	}

} );





/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Triangle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Line3__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Plane__ = __webpack_require__(25);




/**
 * @author bhouston / http://clara.io
 * @author mrdoob / http://mrdoob.com/
 */

function Triangle( a, b, c ) {

	this.a = ( a !== undefined ) ? a : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
	this.b = ( b !== undefined ) ? b : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
	this.c = ( c !== undefined ) ? c : new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

}

Object.assign( Triangle, {

	normal: function () {

		var v0 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function normal( a, b, c, optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

			result.subVectors( c, b );
			v0.subVectors( a, b );
			result.cross( v0 );

			var resultLengthSq = result.lengthSq();
			if ( resultLengthSq > 0 ) {

				return result.multiplyScalar( 1 / Math.sqrt( resultLengthSq ) );

			}

			return result.set( 0, 0, 0 );

		};

	}(),

	// static/instance method to calculate barycentric coordinates
	// based on: http://www.blackpawn.com/texts/pointinpoly/default.html
	barycoordFromPoint: function () {

		var v0 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var v2 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function barycoordFromPoint( point, a, b, c, optionalTarget ) {

			v0.subVectors( c, a );
			v1.subVectors( b, a );
			v2.subVectors( point, a );

			var dot00 = v0.dot( v0 );
			var dot01 = v0.dot( v1 );
			var dot02 = v0.dot( v2 );
			var dot11 = v1.dot( v1 );
			var dot12 = v1.dot( v2 );

			var denom = ( dot00 * dot11 - dot01 * dot01 );

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

			// collinear or singular triangle
			if ( denom === 0 ) {

				// arbitrary location outside of triangle?
				// not sure if this is the best idea, maybe should be returning undefined
				return result.set( - 2, - 1, - 1 );

			}

			var invDenom = 1 / denom;
			var u = ( dot11 * dot02 - dot01 * dot12 ) * invDenom;
			var v = ( dot00 * dot12 - dot01 * dot02 ) * invDenom;

			// barycentric coordinates must always sum to 1
			return result.set( 1 - u - v, v, u );

		};

	}(),

	containsPoint: function () {

		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function containsPoint( point, a, b, c ) {

			var result = Triangle.barycoordFromPoint( point, a, b, c, v1 );

			return ( result.x >= 0 ) && ( result.y >= 0 ) && ( ( result.x + result.y ) <= 1 );

		};

	}()

} );

Object.assign( Triangle.prototype, {

	set: function ( a, b, c ) {

		this.a.copy( a );
		this.b.copy( b );
		this.c.copy( c );

		return this;

	},

	setFromPointsAndIndices: function ( points, i0, i1, i2 ) {

		this.a.copy( points[ i0 ] );
		this.b.copy( points[ i1 ] );
		this.c.copy( points[ i2 ] );

		return this;

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( triangle ) {

		this.a.copy( triangle.a );
		this.b.copy( triangle.b );
		this.c.copy( triangle.c );

		return this;

	},

	area: function () {

		var v0 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var v1 = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function area() {

			v0.subVectors( this.c, this.b );
			v1.subVectors( this.a, this.b );

			return v0.cross( v1 ).length() * 0.5;

		};

	}(),

	midpoint: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		return result.addVectors( this.a, this.b ).add( this.c ).multiplyScalar( 1 / 3 );

	},

	normal: function ( optionalTarget ) {

		return Triangle.normal( this.a, this.b, this.c, optionalTarget );

	},

	plane: function ( optionalTarget ) {

		var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_2__Plane__["a" /* Plane */]();

		return result.setFromCoplanarPoints( this.a, this.b, this.c );

	},

	barycoordFromPoint: function ( point, optionalTarget ) {

		return Triangle.barycoordFromPoint( point, this.a, this.b, this.c, optionalTarget );

	},

	containsPoint: function ( point ) {

		return Triangle.containsPoint( point, this.a, this.b, this.c );

	},

	closestPointToPoint: function () {

		var plane = new __WEBPACK_IMPORTED_MODULE_2__Plane__["a" /* Plane */]();
		var edgeList = [ new __WEBPACK_IMPORTED_MODULE_1__Line3__["a" /* Line3 */](), new __WEBPACK_IMPORTED_MODULE_1__Line3__["a" /* Line3 */](), new __WEBPACK_IMPORTED_MODULE_1__Line3__["a" /* Line3 */]() ];
		var projectedPoint = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
		var closestPoint = new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();

		return function closestPointToPoint( point, optionalTarget ) {

			var result = optionalTarget || new __WEBPACK_IMPORTED_MODULE_0__Vector3__["a" /* Vector3 */]();
			var minDistance = Infinity;

			// project the point onto the plane of the triangle

			plane.setFromCoplanarPoints( this.a, this.b, this.c );
			plane.projectPoint( point, projectedPoint );

			// check if the projection lies within the triangle

			if( this.containsPoint( projectedPoint ) === true ) {

				// if so, this is the closest point

				result.copy( projectedPoint );

			} else {

				// if not, the point falls outside the triangle. the result is the closest point to the triangle's edges or vertices

				edgeList[ 0 ].set( this.a, this.b );
				edgeList[ 1 ].set( this.b, this.c );
				edgeList[ 2 ].set( this.c, this.a );

				for( var i = 0; i < edgeList.length; i ++ ) {

					edgeList[ i ].closestPointToPoint( projectedPoint, true, closestPoint );

					var distance = projectedPoint.distanceToSquared( closestPoint );

					if( distance < minDistance ) {

						minDistance = distance;

						result.copy( closestPoint );

					}

				}

			}

			return result;

		};

	}(),

	equals: function ( triangle ) {

		return triangle.a.equals( this.a ) && triangle.b.equals( this.b ) && triangle.c.equals( this.c );

	}

} );





/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Sphere__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Ray__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materials_LineBasicMaterial__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_BufferGeometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__LineSegments__ = __webpack_require__(35);









/**
 * @author mrdoob / http://mrdoob.com/
 */

function Line( geometry, material, mode ) {

	if ( mode === 1 ) {

		console.warn( 'THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead.' );
		return new __WEBPACK_IMPORTED_MODULE_7__LineSegments__["a" /* LineSegments */]( geometry, material );

	}

	__WEBPACK_IMPORTED_MODULE_3__core_Object3D__["a" /* Object3D */].call( this );

	this.type = 'Line';

	this.geometry = geometry !== undefined ? geometry : new __WEBPACK_IMPORTED_MODULE_6__core_BufferGeometry__["a" /* BufferGeometry */]();
	this.material = material !== undefined ? material : new __WEBPACK_IMPORTED_MODULE_5__materials_LineBasicMaterial__["a" /* LineBasicMaterial */]( { color: Math.random() * 0xffffff } );

}

Line.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_3__core_Object3D__["a" /* Object3D */].prototype ), {

	constructor: Line,

	isLine: true,

	raycast: ( function () {

		var inverseMatrix = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */]();
		var ray = new __WEBPACK_IMPORTED_MODULE_1__math_Ray__["a" /* Ray */]();
		var sphere = new __WEBPACK_IMPORTED_MODULE_0__math_Sphere__["a" /* Sphere */]();

		return function raycast( raycaster, intersects ) {

			var precision = raycaster.linePrecision;
			var precisionSq = precision * precision;

			var geometry = this.geometry;
			var matrixWorld = this.matrixWorld;

			// Checking boundingSphere distance to ray

			if ( geometry.boundingSphere === null ) geometry.computeBoundingSphere();

			sphere.copy( geometry.boundingSphere );
			sphere.applyMatrix4( matrixWorld );

			if ( raycaster.ray.intersectsSphere( sphere ) === false ) return;

			//

			inverseMatrix.getInverse( matrixWorld );
			ray.copy( raycaster.ray ).applyMatrix4( inverseMatrix );

			var vStart = new __WEBPACK_IMPORTED_MODULE_4__math_Vector3__["a" /* Vector3 */]();
			var vEnd = new __WEBPACK_IMPORTED_MODULE_4__math_Vector3__["a" /* Vector3 */]();
			var interSegment = new __WEBPACK_IMPORTED_MODULE_4__math_Vector3__["a" /* Vector3 */]();
			var interRay = new __WEBPACK_IMPORTED_MODULE_4__math_Vector3__["a" /* Vector3 */]();
			var step = (this && this.isLineSegments) ? 2 : 1;

			if ( geometry.isBufferGeometry ) {

				var index = geometry.index;
				var attributes = geometry.attributes;
				var positions = attributes.position.array;

				if ( index !== null ) {

					var indices = index.array;

					for ( var i = 0, l = indices.length - 1; i < l; i += step ) {

						var a = indices[ i ];
						var b = indices[ i + 1 ];

						vStart.fromArray( positions, a * 3 );
						vEnd.fromArray( positions, b * 3 );

						var distSq = ray.distanceSqToSegment( vStart, vEnd, interRay, interSegment );

						if ( distSq > precisionSq ) continue;

						interRay.applyMatrix4( this.matrixWorld ); //Move back to world space for distance calculation

						var distance = raycaster.ray.origin.distanceTo( interRay );

						if ( distance < raycaster.near || distance > raycaster.far ) continue;

						intersects.push( {

							distance: distance,
							// What do we want? intersection point on the ray or on the segment??
							// point: raycaster.ray.at( distance ),
							point: interSegment.clone().applyMatrix4( this.matrixWorld ),
							index: i,
							face: null,
							faceIndex: null,
							object: this

						} );

					}

				} else {

					for ( var i = 0, l = positions.length / 3 - 1; i < l; i += step ) {

						vStart.fromArray( positions, 3 * i );
						vEnd.fromArray( positions, 3 * i + 3 );

						var distSq = ray.distanceSqToSegment( vStart, vEnd, interRay, interSegment );

						if ( distSq > precisionSq ) continue;

						interRay.applyMatrix4( this.matrixWorld ); //Move back to world space for distance calculation

						var distance = raycaster.ray.origin.distanceTo( interRay );

						if ( distance < raycaster.near || distance > raycaster.far ) continue;

						intersects.push( {

							distance: distance,
							// What do we want? intersection point on the ray or on the segment??
							// point: raycaster.ray.at( distance ),
							point: interSegment.clone().applyMatrix4( this.matrixWorld ),
							index: i,
							face: null,
							faceIndex: null,
							object: this

						} );

					}

				}

			} else if ( geometry.isGeometry ) {

				var vertices = geometry.vertices;
				var nbVertices = vertices.length;

				for ( var i = 0; i < nbVertices - 1; i += step ) {

					var distSq = ray.distanceSqToSegment( vertices[ i ], vertices[ i + 1 ], interRay, interSegment );

					if ( distSq > precisionSq ) continue;

					interRay.applyMatrix4( this.matrixWorld ); //Move back to world space for distance calculation

					var distance = raycaster.ray.origin.distanceTo( interRay );

					if ( distance < raycaster.near || distance > raycaster.far ) continue;

					intersects.push( {

						distance: distance,
						// What do we want? intersection point on the ray or on the segment??
						// point: raycaster.ray.at( distance ),
						point: interSegment.clone().applyMatrix4( this.matrixWorld ),
						index: i,
						face: null,
						faceIndex: null,
						object: this

					} );

				}

			}

		};

	}() ),

	clone: function () {

		return new this.constructor( this.geometry, this.material ).copy( this );

	}

} );





/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLRenderTarget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textures_Texture__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_Vector4__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_Math__ = __webpack_require__(5);






/**
 * @author szimek / https://github.com/szimek/
 * @author alteredq / http://alteredqualia.com/
 * @author Marius Kintel / https://github.com/kintel
 */

/*
 In options, we can specify:
 * Texture parameters for an auto-generated target texture
 * depthBuffer/stencilBuffer: Booleans to indicate if we should generate these buffers
*/
function WebGLRenderTarget( width, height, options ) {

	this.uuid = __WEBPACK_IMPORTED_MODULE_4__math_Math__["a" /* _Math */].generateUUID();

	this.width = width;
	this.height = height;

	this.scissor = new __WEBPACK_IMPORTED_MODULE_3__math_Vector4__["a" /* Vector4 */]( 0, 0, width, height );
	this.scissorTest = false;

	this.viewport = new __WEBPACK_IMPORTED_MODULE_3__math_Vector4__["a" /* Vector4 */]( 0, 0, width, height );

	options = options || {};

	if ( options.minFilter === undefined ) options.minFilter = __WEBPACK_IMPORTED_MODULE_2__constants__["z" /* LinearFilter */];

	this.texture = new __WEBPACK_IMPORTED_MODULE_1__textures_Texture__["a" /* Texture */]( undefined, undefined, options.wrapS, options.wrapT, options.magFilter, options.minFilter, options.format, options.type, options.anisotropy, options.encoding );

	this.depthBuffer = options.depthBuffer !== undefined ? options.depthBuffer : true;
	this.stencilBuffer = options.stencilBuffer !== undefined ? options.stencilBuffer : true;
	this.depthTexture = options.depthTexture !== undefined ? options.depthTexture : null;

}

Object.assign( WebGLRenderTarget.prototype, __WEBPACK_IMPORTED_MODULE_0__core_EventDispatcher__["a" /* EventDispatcher */].prototype, {

	isWebGLRenderTarget: true,

	setSize: function ( width, height ) {

		if ( this.width !== width || this.height !== height ) {

			this.width = width;
			this.height = height;

			this.dispose();

		}

		this.viewport.set( 0, 0, width, height );
		this.scissor.set( 0, 0, width, height );

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.width = source.width;
		this.height = source.height;

		this.viewport.copy( source.viewport );

		this.texture = source.texture.clone();

		this.depthBuffer = source.depthBuffer;
		this.stencilBuffer = source.stencilBuffer;
		this.depthTexture = source.depthTexture;

		return this;

	},

	dispose: function () {

		this.dispatchEvent( { type: 'dispose' } );

	}

} );





/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLRenderer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Math__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__textures_DataTexture__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__webgl_WebGLUniforms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shaders_UniformsLib__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shaders_UniformsUtils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shaders_ShaderLib__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__webgl_plugins_LensFlarePlugin__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__webgl_plugins_SpritePlugin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__webgl_WebGLShadowMap__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__webgl_WebGLAttributes__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__webgl_WebGLBackground__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__webgl_WebGLRenderLists__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__webgl_WebGLIndexedBufferRenderer__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__webgl_WebGLBufferRenderer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__webgl_WebGLGeometries__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__webgl_WebGLLights__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__webgl_WebGLObjects__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__webgl_WebGLPrograms__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__webgl_WebGLTextures__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__webgl_WebGLProperties__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__webgl_WebGLState__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__webgl_WebGLCapabilities__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__webvr_WebVRManager__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__core_BufferGeometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__webgl_WebGLExtensions__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__webgl_WebGLClipping__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__math_Frustum__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__math_Vector4__ = __webpack_require__(10);




























// import { Sphere } from '../math/Sphere';




/**
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 * @author szimek / https://github.com/szimek/
 * @author tschw
 */

function WebGLRenderer( parameters ) {

	console.log( 'THREE.WebGLRenderer', __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* REVISION */] );

	parameters = parameters || {};

	var _canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' ),
		_context = parameters.context !== undefined ? parameters.context : null,

		_alpha = parameters.alpha !== undefined ? parameters.alpha : false,
		_depth = parameters.depth !== undefined ? parameters.depth : true,
		_stencil = parameters.stencil !== undefined ? parameters.stencil : true,
		_antialias = parameters.antialias !== undefined ? parameters.antialias : false,
		_premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true,
		_preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false;

	var lights = [];

	var currentRenderList = null;

	var morphInfluences = new Float32Array( 8 );

	var sprites = [];
	var lensFlares = [];

	// public properties

	this.domElement = _canvas;
	this.context = null;

	// clearing

	this.autoClear = true;
	this.autoClearColor = true;
	this.autoClearDepth = true;
	this.autoClearStencil = true;

	// scene graph

	this.sortObjects = true;

	// user-defined clipping

	this.clippingPlanes = [];
	this.localClippingEnabled = false;

	// physically based shading

	this.gammaFactor = 2.0;	// for backwards compatibility
	this.gammaInput = false;
	this.gammaOutput = false;

	// physical lights

	this.physicallyCorrectLights = false;

	// tone mapping

	this.toneMapping = __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* LinearToneMapping */];
	this.toneMappingExposure = 1.0;
	this.toneMappingWhitePoint = 1.0;

	// morphs

	this.maxMorphTargets = 8;
	this.maxMorphNormals = 4;

	// internal properties

	var _this = this,

		// internal state cache

		_currentProgram = null,
		_currentRenderTarget = null,
		_currentFramebuffer = null,
		_currentMaterialId = - 1,
		_currentGeometryProgram = '',

		_currentCamera = null,
		_currentArrayCamera = null,

		_currentScissor = new __WEBPACK_IMPORTED_MODULE_30__math_Vector4__["a" /* Vector4 */](),
		_currentScissorTest = null,

		_currentViewport = new __WEBPACK_IMPORTED_MODULE_30__math_Vector4__["a" /* Vector4 */](),

		//

		_usedTextureUnits = 0,

		//

		_width = _canvas.width,
		_height = _canvas.height,

		_pixelRatio = 1,

		_scissor = new __WEBPACK_IMPORTED_MODULE_30__math_Vector4__["a" /* Vector4 */]( 0, 0, _width, _height ),
		_scissorTest = false,

		_viewport = new __WEBPACK_IMPORTED_MODULE_30__math_Vector4__["a" /* Vector4 */]( 0, 0, _width, _height ),

		// frustum

		_frustum = new __WEBPACK_IMPORTED_MODULE_29__math_Frustum__["a" /* Frustum */](),

		// clipping

		_clipping = new __WEBPACK_IMPORTED_MODULE_28__webgl_WebGLClipping__["a" /* WebGLClipping */](),
		_clippingEnabled = false,
		_localClippingEnabled = false,

		// camera matrices cache

		_projScreenMatrix = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */](),

		_vector3 = new __WEBPACK_IMPORTED_MODULE_27__math_Vector3__["a" /* Vector3 */](),
		_matrix4 = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */](),
		_matrix42 = new __WEBPACK_IMPORTED_MODULE_2__math_Matrix4__["a" /* Matrix4 */](),

		// light arrays cache

		_lights = {

			hash: '',

			ambient: [ 0, 0, 0 ],
			directional: [],
			directionalShadowMap: [],
			directionalShadowMatrix: [],
			spot: [],
			spotShadowMap: [],
			spotShadowMatrix: [],
			rectArea: [],
			point: [],
			pointShadowMap: [],
			pointShadowMatrix: [],
			hemi: [],

			shadows: []

		},

		// info

		_infoMemory = {
			geometries: 0,
			textures: 0
		},

		_infoRender = {

			frame: 0,
			calls: 0,
			vertices: 0,
			faces: 0,
			points: 0

		};

	this.info = {

		render: _infoRender,
		memory: _infoMemory,
		programs: null

	};


	// initialize

	var _gl;

	try {

		var contextAttributes = {
			alpha: _alpha,
			depth: _depth,
			stencil: _stencil,
			antialias: _antialias,
			premultipliedAlpha: _premultipliedAlpha,
			preserveDrawingBuffer: _preserveDrawingBuffer
		};

		_gl = _context || _canvas.getContext( 'webgl', contextAttributes ) || _canvas.getContext( 'experimental-webgl', contextAttributes );

		if ( _gl === null ) {

			if ( _canvas.getContext( 'webgl' ) !== null ) {

				throw 'Error creating WebGL context with your selected attributes.';

			} else {

				throw 'Error creating WebGL context.';

			}

		}

		// Some experimental-webgl implementations do not have getShaderPrecisionFormat

		if ( _gl.getShaderPrecisionFormat === undefined ) {

			_gl.getShaderPrecisionFormat = function () {

				return { 'rangeMin': 1, 'rangeMax': 1, 'precision': 1 };

			};

		}

		_canvas.addEventListener( 'webglcontextlost', onContextLost, false );

	} catch ( error ) {

		console.error( 'THREE.WebGLRenderer: ' + error );

	}

	var extensions = new __WEBPACK_IMPORTED_MODULE_26__webgl_WebGLExtensions__["a" /* WebGLExtensions */]( _gl );

	extensions.get( 'WEBGL_depth_texture' );
	extensions.get( 'OES_texture_float' );
	extensions.get( 'OES_texture_float_linear' );
	extensions.get( 'OES_texture_half_float' );
	extensions.get( 'OES_texture_half_float_linear' );
	extensions.get( 'OES_standard_derivatives' );
	extensions.get( 'ANGLE_instanced_arrays' );

	if ( extensions.get( 'OES_element_index_uint' ) ) {

		__WEBPACK_IMPORTED_MODULE_25__core_BufferGeometry__["a" /* BufferGeometry */].MaxIndex = 4294967296;

	}

	var capabilities = new __WEBPACK_IMPORTED_MODULE_23__webgl_WebGLCapabilities__["a" /* WebGLCapabilities */]( _gl, extensions, parameters );

	var state = new __WEBPACK_IMPORTED_MODULE_22__webgl_WebGLState__["a" /* WebGLState */]( _gl, extensions, paramThreeToGL );

	var properties = new __WEBPACK_IMPORTED_MODULE_21__webgl_WebGLProperties__["a" /* WebGLProperties */]();
	var textures = new __WEBPACK_IMPORTED_MODULE_20__webgl_WebGLTextures__["a" /* WebGLTextures */]( _gl, extensions, state, properties, capabilities, paramThreeToGL, _infoMemory );
	var attributes = new __WEBPACK_IMPORTED_MODULE_11__webgl_WebGLAttributes__["a" /* WebGLAttributes */]( _gl );
	var geometries = new __WEBPACK_IMPORTED_MODULE_16__webgl_WebGLGeometries__["a" /* WebGLGeometries */]( _gl, attributes, _infoMemory );
	var objects = new __WEBPACK_IMPORTED_MODULE_18__webgl_WebGLObjects__["a" /* WebGLObjects */]( _gl, geometries, _infoRender );
	var programCache = new __WEBPACK_IMPORTED_MODULE_19__webgl_WebGLPrograms__["a" /* WebGLPrograms */]( this, capabilities );
	var lightCache = new __WEBPACK_IMPORTED_MODULE_17__webgl_WebGLLights__["a" /* WebGLLights */]();
	var renderLists = new __WEBPACK_IMPORTED_MODULE_13__webgl_WebGLRenderLists__["a" /* WebGLRenderLists */]();

	var background = new __WEBPACK_IMPORTED_MODULE_12__webgl_WebGLBackground__["a" /* WebGLBackground */]( this, state, objects, _premultipliedAlpha );
	var vr = new __WEBPACK_IMPORTED_MODULE_24__webvr_WebVRManager__["a" /* WebVRManager */]( this );

	this.info.programs = programCache.programs;

	var bufferRenderer = new __WEBPACK_IMPORTED_MODULE_15__webgl_WebGLBufferRenderer__["a" /* WebGLBufferRenderer */]( _gl, extensions, _infoRender );
	var indexedBufferRenderer = new __WEBPACK_IMPORTED_MODULE_14__webgl_WebGLIndexedBufferRenderer__["a" /* WebGLIndexedBufferRenderer */]( _gl, extensions, _infoRender );

	//

	function getTargetPixelRatio() {

		return _currentRenderTarget === null ? _pixelRatio : 1;

	}

	function setDefaultGLState() {

		state.init();

		state.scissor( _currentScissor.copy( _scissor ).multiplyScalar( _pixelRatio ) );
		state.viewport( _currentViewport.copy( _viewport ).multiplyScalar( _pixelRatio ) );

	}

	function resetGLState() {

		_currentProgram = null;
		_currentCamera = null;

		_currentGeometryProgram = '';
		_currentMaterialId = - 1;

		state.reset();

	}

	setDefaultGLState();

	this.context = _gl;
	this.capabilities = capabilities;
	this.extensions = extensions;
	this.properties = properties;
	this.renderLists = renderLists;
	this.state = state;
	this.vr = vr;

	// shadow map

	var shadowMap = new __WEBPACK_IMPORTED_MODULE_10__webgl_WebGLShadowMap__["a" /* WebGLShadowMap */]( this, _lights, objects, capabilities );

	this.shadowMap = shadowMap;


	// Plugins

	var spritePlugin = new __WEBPACK_IMPORTED_MODULE_9__webgl_plugins_SpritePlugin__["a" /* SpritePlugin */]( this, sprites );
	var lensFlarePlugin = new __WEBPACK_IMPORTED_MODULE_8__webgl_plugins_LensFlarePlugin__["a" /* LensFlarePlugin */]( this, lensFlares );

	// API

	this.getContext = function () {

		return _gl;

	};

	this.getContextAttributes = function () {

		return _gl.getContextAttributes();

	};

	this.forceContextLoss = function () {

		var extension = extensions.get( 'WEBGL_lose_context' );
		if ( extension ) extension.loseContext();

	};

	this.getMaxAnisotropy = function () {

		return capabilities.getMaxAnisotropy();

	};

	this.getPrecision = function () {

		return capabilities.precision;

	};

	this.getPixelRatio = function () {

		return _pixelRatio;

	};

	this.setPixelRatio = function ( value ) {

		if ( value === undefined ) return;

		_pixelRatio = value;

		this.setSize( _width, _height, false );

	};

	this.getSize = function () {

		return {
			width: _width,
			height: _height
		};

	};

	this.setSize = function ( width, height, updateStyle ) {

		var device = vr.getDevice();

		if ( device && device.isPresenting ) {

			console.warn( 'THREE.WebGLRenderer: Can\'t change size while VR device is presenting.' );
			return;

		}

		_width = width;
		_height = height;

		_canvas.width = width * _pixelRatio;
		_canvas.height = height * _pixelRatio;

		if ( updateStyle !== false ) {

			_canvas.style.width = width + 'px';
			_canvas.style.height = height + 'px';

		}

		this.setViewport( 0, 0, width, height );

	};

	this.getDrawingBufferSize = function () {

		return {
			width: _width * _pixelRatio,
			height: _height * _pixelRatio
		};

	};

	this.setDrawingBufferSize = function ( width, height, pixelRatio ) {

		_width = width;
		_height = height;

		_pixelRatio = pixelRatio;

		_canvas.width = width * pixelRatio;
		_canvas.height = height * pixelRatio;

		this.setViewport( 0, 0, width, height );

	};

	this.setViewport = function ( x, y, width, height ) {

		_viewport.set( x, _height - y - height, width, height )
		state.viewport( _currentViewport.copy( _viewport ).multiplyScalar( _pixelRatio ) );

	};

	this.setScissor = function ( x, y, width, height ) {

		_scissor.set( x, _height - y - height, width, height )
		state.scissor( _currentScissor.copy( _scissor ).multiplyScalar( _pixelRatio ) );

	};

	this.setScissorTest = function ( boolean ) {

		state.setScissorTest( _scissorTest = boolean );

	};

	// Clearing

	this.getClearColor = background.getClearColor;
	this.setClearColor = background.setClearColor;
	this.getClearAlpha = background.getClearAlpha;
	this.setClearAlpha = background.setClearAlpha;

	this.clear = function ( color, depth, stencil ) {

		var bits = 0;

		if ( color === undefined || color ) bits |= _gl.COLOR_BUFFER_BIT;
		if ( depth === undefined || depth ) bits |= _gl.DEPTH_BUFFER_BIT;
		if ( stencil === undefined || stencil ) bits |= _gl.STENCIL_BUFFER_BIT;

		_gl.clear( bits );

	};

	this.clearColor = function () {

		this.clear( true, false, false );

	};

	this.clearDepth = function () {

		this.clear( false, true, false );

	};

	this.clearStencil = function () {

		this.clear( false, false, true );

	};

	this.clearTarget = function ( renderTarget, color, depth, stencil ) {

		this.setRenderTarget( renderTarget );
		this.clear( color, depth, stencil );

	};

	// Reset

	this.resetGLState = resetGLState;

	this.dispose = function () {

		_canvas.removeEventListener( 'webglcontextlost', onContextLost, false );

		renderLists.dispose();

	};

	// Events

	function onContextLost( event ) {

		event.preventDefault();

		resetGLState();
		setDefaultGLState();

		properties.clear();
		objects.clear();

	}

	function onMaterialDispose( event ) {

		var material = event.target;

		material.removeEventListener( 'dispose', onMaterialDispose );

		deallocateMaterial( material );

	}

	// Buffer deallocation

	function deallocateMaterial( material ) {

		releaseMaterialProgramReference( material );

		properties.remove( material );

	}


	function releaseMaterialProgramReference( material ) {

		var programInfo = properties.get( material ).program;

		material.program = undefined;

		if ( programInfo !== undefined ) {

			programCache.releaseProgram( programInfo );

		}

	}

	// Buffer rendering

	function renderObjectImmediate( object, program, material ) {

		object.render( function ( object ) {

			_this.renderBufferImmediate( object, program, material );

		} );

	}

	this.renderBufferImmediate = function ( object, program, material ) {

		state.initAttributes();

		var buffers = properties.get( object );

		if ( object.hasPositions && ! buffers.position ) buffers.position = _gl.createBuffer();
		if ( object.hasNormals && ! buffers.normal ) buffers.normal = _gl.createBuffer();
		if ( object.hasUvs && ! buffers.uv ) buffers.uv = _gl.createBuffer();
		if ( object.hasColors && ! buffers.color ) buffers.color = _gl.createBuffer();

		var programAttributes = program.getAttributes();

		if ( object.hasPositions ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, buffers.position );
			_gl.bufferData( _gl.ARRAY_BUFFER, object.positionArray, _gl.DYNAMIC_DRAW );

			state.enableAttribute( programAttributes.position );
			_gl.vertexAttribPointer( programAttributes.position, 3, _gl.FLOAT, false, 0, 0 );

		}

		if ( object.hasNormals ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, buffers.normal );

			if ( ! material.isMeshPhongMaterial &&
				! material.isMeshStandardMaterial &&
				! material.isMeshNormalMaterial &&
				material.shading === __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* FlatShading */] ) {

				for ( var i = 0, l = object.count * 3; i < l; i += 9 ) {

					var array = object.normalArray;

					var nx = ( array[ i + 0 ] + array[ i + 3 ] + array[ i + 6 ] ) / 3;
					var ny = ( array[ i + 1 ] + array[ i + 4 ] + array[ i + 7 ] ) / 3;
					var nz = ( array[ i + 2 ] + array[ i + 5 ] + array[ i + 8 ] ) / 3;

					array[ i + 0 ] = nx;
					array[ i + 1 ] = ny;
					array[ i + 2 ] = nz;

					array[ i + 3 ] = nx;
					array[ i + 4 ] = ny;
					array[ i + 5 ] = nz;

					array[ i + 6 ] = nx;
					array[ i + 7 ] = ny;
					array[ i + 8 ] = nz;

				}

			}

			_gl.bufferData( _gl.ARRAY_BUFFER, object.normalArray, _gl.DYNAMIC_DRAW );

			state.enableAttribute( programAttributes.normal );

			_gl.vertexAttribPointer( programAttributes.normal, 3, _gl.FLOAT, false, 0, 0 );

		}

		if ( object.hasUvs && material.map ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, buffers.uv );
			_gl.bufferData( _gl.ARRAY_BUFFER, object.uvArray, _gl.DYNAMIC_DRAW );

			state.enableAttribute( programAttributes.uv );

			_gl.vertexAttribPointer( attributes.uv, 2, _gl.FLOAT, false, 0, 0 );

		}

		if ( object.hasColors && material.vertexColors !== __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* NoColors */] ) {

			_gl.bindBuffer( _gl.ARRAY_BUFFER, buffers.color );
			_gl.bufferData( _gl.ARRAY_BUFFER, object.colorArray, _gl.DYNAMIC_DRAW );

			state.enableAttribute( programAttributes.color );

			_gl.vertexAttribPointer( programAttributes.color, 3, _gl.FLOAT, false, 0, 0 );

		}

		state.disableUnusedAttributes();

		_gl.drawArrays( _gl.TRIANGLES, 0, object.count );

		object.count = 0;

	};

	function absNumericalSort( a, b ) {

		return Math.abs( b[ 0 ] ) - Math.abs( a[ 0 ] );

	}

	this.renderBufferDirect = function ( camera, fog, geometry, material, object, group ) {

		state.setMaterial( material );

		var program = setProgram( camera, fog, material, object );
		var geometryProgram = geometry.id + '_' + program.id + '_' + ( material.wireframe === true );

		var updateBuffers = false;

		if ( geometryProgram !== _currentGeometryProgram ) {

			_currentGeometryProgram = geometryProgram;
			updateBuffers = true;

		}

		// morph targets

		var morphTargetInfluences = object.morphTargetInfluences;

		if ( morphTargetInfluences !== undefined ) {

			// TODO Remove allocations

			var activeInfluences = [];

			for ( var i = 0, l = morphTargetInfluences.length; i < l; i ++ ) {

				var influence = morphTargetInfluences[ i ];
				activeInfluences.push( [ influence, i ] );

			}

			activeInfluences.sort( absNumericalSort );

			if ( activeInfluences.length > 8 ) {

				activeInfluences.length = 8;

			}

			var morphAttributes = geometry.morphAttributes;

			for ( var i = 0, l = activeInfluences.length; i < l; i ++ ) {

				var influence = activeInfluences[ i ];
				morphInfluences[ i ] = influence[ 0 ];

				if ( influence[ 0 ] !== 0 ) {

					var index = influence[ 1 ];

					if ( material.morphTargets === true && morphAttributes.position ) geometry.addAttribute( 'morphTarget' + i, morphAttributes.position[ index ] );
					if ( material.morphNormals === true && morphAttributes.normal ) geometry.addAttribute( 'morphNormal' + i, morphAttributes.normal[ index ] );

				} else {

					if ( material.morphTargets === true ) geometry.removeAttribute( 'morphTarget' + i );
					if ( material.morphNormals === true ) geometry.removeAttribute( 'morphNormal' + i );

				}

			}

			for ( var i = activeInfluences.length, il = morphInfluences.length; i < il; i ++ ) {

				morphInfluences[ i ] = 0.0;

			}

			program.getUniforms().setValue( _gl, 'morphTargetInfluences', morphInfluences );

			updateBuffers = true;

		}

		//

		var index = geometry.index;
		var position = geometry.attributes.position;
		var rangeFactor = 1;

		if ( material.wireframe === true ) {

			index = geometries.getWireframeAttribute( geometry );
			rangeFactor = 2;

		}

		var attribute;
		var renderer = bufferRenderer;

		if ( index !== null ) {

			attribute = attributes.get( index );

			renderer = indexedBufferRenderer;
			renderer.setIndex( attribute );

		}

		if ( updateBuffers ) {

			setupVertexAttributes( material, program, geometry );

			if ( index !== null ) {

				_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, attribute.buffer );

			}

		}

		//

		var dataCount = 0;

		if ( index !== null ) {

			dataCount = index.count;

		} else if ( position !== undefined ) {

			dataCount = position.count;

		}

		var rangeStart = geometry.drawRange.start * rangeFactor;
		var rangeCount = geometry.drawRange.count * rangeFactor;

		var groupStart = group !== null ? group.start * rangeFactor : 0;
		var groupCount = group !== null ? group.count * rangeFactor : Infinity;

		var drawStart = Math.max( rangeStart, groupStart );
		var drawEnd = Math.min( dataCount, rangeStart + rangeCount, groupStart + groupCount ) - 1;

		var drawCount = Math.max( 0, drawEnd - drawStart + 1 );

		if ( drawCount === 0 ) return;

		//

		if ( object.isMesh ) {

			if ( material.wireframe === true ) {

				state.setLineWidth( material.wireframeLinewidth * getTargetPixelRatio() );
				renderer.setMode( _gl.LINES );

			} else {

				switch ( object.drawMode ) {

					case __WEBPACK_IMPORTED_MODULE_0__constants__["l" /* TrianglesDrawMode */]:
						renderer.setMode( _gl.TRIANGLES );
						break;

					case __WEBPACK_IMPORTED_MODULE_0__constants__["m" /* TriangleStripDrawMode */]:
						renderer.setMode( _gl.TRIANGLE_STRIP );
						break;

					case __WEBPACK_IMPORTED_MODULE_0__constants__["n" /* TriangleFanDrawMode */]:
						renderer.setMode( _gl.TRIANGLE_FAN );
						break;

				}

			}


		} else if ( object.isLine ) {

			var lineWidth = material.linewidth;

			if ( lineWidth === undefined ) lineWidth = 1; // Not using Line*Material

			state.setLineWidth( lineWidth * getTargetPixelRatio() );

			if ( object.isLineSegments ) {

				renderer.setMode( _gl.LINES );

			} else if ( object.isLineLoop ) {

				renderer.setMode( _gl.LINE_LOOP );

			} else {

				renderer.setMode( _gl.LINE_STRIP );

			}

		} else if ( object.isPoints ) {

			renderer.setMode( _gl.POINTS );

		}

		if ( geometry && geometry.isInstancedBufferGeometry ) {

			if ( geometry.maxInstancedCount > 0 ) {

				renderer.renderInstances( geometry, drawStart, drawCount );

			}

		} else {

			renderer.render( drawStart, drawCount );

		}

	};

	function setupVertexAttributes( material, program, geometry, startIndex ) {

		if ( geometry && geometry.isInstancedBufferGeometry ) {

			if ( extensions.get( 'ANGLE_instanced_arrays' ) === null ) {

				console.error( 'THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
				return;

			}

		}

		if ( startIndex === undefined ) startIndex = 0;

		state.initAttributes();

		var geometryAttributes = geometry.attributes;

		var programAttributes = program.getAttributes();

		var materialDefaultAttributeValues = material.defaultAttributeValues;

		for ( var name in programAttributes ) {

			var programAttribute = programAttributes[ name ];

			if ( programAttribute >= 0 ) {

				var geometryAttribute = geometryAttributes[ name ];

				if ( geometryAttribute !== undefined ) {

					var normalized = geometryAttribute.normalized;
					var size = geometryAttribute.itemSize;

					var attribute = attributes.get( geometryAttribute );

					var buffer = attribute.buffer;
					var type = attribute.type;
					var bytesPerElement = attribute.bytesPerElement;

					if ( geometryAttribute.isInterleavedBufferAttribute ) {

						var data = geometryAttribute.data;
						var stride = data.stride;
						var offset = geometryAttribute.offset;

						if ( data && data.isInstancedInterleavedBuffer ) {

							state.enableAttributeAndDivisor( programAttribute, data.meshPerAttribute );

							if ( geometry.maxInstancedCount === undefined ) {

								geometry.maxInstancedCount = data.meshPerAttribute * data.count;

							}

						} else {

							state.enableAttribute( programAttribute );

						}

						_gl.bindBuffer( _gl.ARRAY_BUFFER, buffer );
						_gl.vertexAttribPointer( programAttribute, size, type, normalized, stride * bytesPerElement, ( startIndex * stride + offset ) * bytesPerElement );

					} else {

						if ( geometryAttribute.isInstancedBufferAttribute ) {

							state.enableAttributeAndDivisor( programAttribute, geometryAttribute.meshPerAttribute );

							if ( geometry.maxInstancedCount === undefined ) {

								geometry.maxInstancedCount = geometryAttribute.meshPerAttribute * geometryAttribute.count;

							}

						} else {

							state.enableAttribute( programAttribute );

						}

						_gl.bindBuffer( _gl.ARRAY_BUFFER, buffer );
						_gl.vertexAttribPointer( programAttribute, size, type, normalized, 0, startIndex * size * bytesPerElement );

					}

				} else if ( materialDefaultAttributeValues !== undefined ) {

					var value = materialDefaultAttributeValues[ name ];

					if ( value !== undefined ) {

						switch ( value.length ) {

							case 2:
								_gl.vertexAttrib2fv( programAttribute, value );
								break;

							case 3:
								_gl.vertexAttrib3fv( programAttribute, value );
								break;

							case 4:
								_gl.vertexAttrib4fv( programAttribute, value );
								break;

							default:
								_gl.vertexAttrib1fv( programAttribute, value );

						}

					}

				}

			}

		}

		state.disableUnusedAttributes();

	}

	// Compile

	this.compile = function ( scene, camera ) {

		lights = [];

		scene.traverse( function ( object ) {

			if ( object.isLight ) {

				lights.push( object );

			}

		} );

		setupLights( lights, camera );

		scene.traverse( function ( object ) {

			if ( object.material ) {

				if ( Array.isArray( object.material ) ) {

					for ( var i = 0; i < object.material.length; i ++ ) {

						initMaterial( object.material[ i ], scene.fog, object );

					}

				} else {

					initMaterial( object.material, scene.fog, object );

				}

			}

		} );

	};

	// Rendering

	this.animate = function ( callback ) {

		function onFrame() {

			callback();

			( vr.getDevice() || window ).requestAnimationFrame( onFrame );

		}

		( vr.getDevice() || window ).requestAnimationFrame( onFrame );

	};

	this.render = function ( scene, camera, renderTarget, forceClear ) {

		if ( ! ( camera && camera.isCamera ) ) {

			console.error( 'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.' );
			return;

		}

		// reset caching for this frame

		_currentGeometryProgram = '';
		_currentMaterialId = - 1;
		_currentCamera = null;

		// update scene graph

		if ( scene.autoUpdate === true ) scene.updateMatrixWorld();

		// update camera matrices and frustum

		if ( camera.parent === null ) camera.updateMatrixWorld();

		if ( vr.enabled ) {

			camera = vr.getCamera( camera );

		}

		_projScreenMatrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
		_frustum.setFromMatrix( _projScreenMatrix );

		lights.length = 0;
		sprites.length = 0;
		lensFlares.length = 0;

		_localClippingEnabled = this.localClippingEnabled;
		_clippingEnabled = _clipping.init( this.clippingPlanes, _localClippingEnabled, camera );

		currentRenderList = renderLists.get( scene, camera );
		currentRenderList.init();

		projectObject( scene, camera, _this.sortObjects );

		currentRenderList.finish();

		if ( _this.sortObjects === true ) {

			currentRenderList.sort();

		}

		//

		if ( _clippingEnabled ) _clipping.beginShadows();

		setupShadows( lights );

		shadowMap.render( scene, camera );

		setupLights( lights, camera );

		if ( _clippingEnabled ) _clipping.endShadows();

		//

		_infoRender.frame ++;
		_infoRender.calls = 0;
		_infoRender.vertices = 0;
		_infoRender.faces = 0;
		_infoRender.points = 0;

		if ( renderTarget === undefined ) {

			renderTarget = null;

		}

		this.setRenderTarget( renderTarget );

		//

		background.render( scene, camera, forceClear );

		// render scene

		var opaqueObjects = currentRenderList.opaque;
		var transparentObjects = currentRenderList.transparent;

		if ( scene.overrideMaterial ) {

			var overrideMaterial = scene.overrideMaterial;

			if ( opaqueObjects.length ) renderObjects( opaqueObjects, scene, camera, overrideMaterial );
			if ( transparentObjects.length ) renderObjects( transparentObjects, scene, camera, overrideMaterial );

		} else {

			// opaque pass (front-to-back order)

			if ( opaqueObjects.length ) renderObjects( opaqueObjects, scene, camera );

			// transparent pass (back-to-front order)

			if ( transparentObjects.length ) renderObjects( transparentObjects, scene, camera );

		}

		// custom render plugins (post pass)

		spritePlugin.render( scene, camera );
		lensFlarePlugin.render( scene, camera, _currentViewport );

		// Generate mipmap if we're using any kind of mipmap filtering

		if ( renderTarget ) {

			textures.updateRenderTargetMipmap( renderTarget );

		}

		// Ensure depth buffer writing is enabled so it can be cleared on next render

		state.buffers.depth.setTest( true );
		state.buffers.depth.setMask( true );
		state.buffers.color.setMask( true );

		if ( camera.isArrayCamera ) {

			_this.setScissorTest( false );

		}

		if ( vr.enabled ) {

			vr.submitFrame();

		}

		// _gl.finish();

	};

	/*
	// TODO Duplicated code (Frustum)

	var _sphere = new Sphere();

	function isObjectViewable( object ) {

		var geometry = object.geometry;

		if ( geometry.boundingSphere === null )
			geometry.computeBoundingSphere();

		_sphere.copy( geometry.boundingSphere ).
		applyMatrix4( object.matrixWorld );

		return isSphereViewable( _sphere );

	}

	function isSpriteViewable( sprite ) {

		_sphere.center.set( 0, 0, 0 );
		_sphere.radius = 0.7071067811865476;
		_sphere.applyMatrix4( sprite.matrixWorld );

		return isSphereViewable( _sphere );

	}

	function isSphereViewable( sphere ) {

		if ( ! _frustum.intersectsSphere( sphere ) ) return false;

		var numPlanes = _clipping.numPlanes;

		if ( numPlanes === 0 ) return true;

		var planes = _this.clippingPlanes,

			center = sphere.center,
			negRad = - sphere.radius,
			i = 0;

		do {

			// out when deeper than radius in the negative halfspace
			if ( planes[ i ].distanceToPoint( center ) < negRad ) return false;

		} while ( ++ i !== numPlanes );

		return true;

	}
	*/

	function projectObject( object, camera, sortObjects ) {

		if ( ! object.visible ) return;

		var visible = object.layers.test( camera.layers );

		if ( visible ) {

			if ( object.isLight ) {

				lights.push( object );

			} else if ( object.isSprite ) {

				if ( ! object.frustumCulled || _frustum.intersectsSprite( object ) ) {

					sprites.push( object );

				}

			} else if ( object.isLensFlare ) {

				lensFlares.push( object );

			} else if ( object.isImmediateRenderObject ) {

				if ( sortObjects ) {

					_vector3.setFromMatrixPosition( object.matrixWorld )
						.applyMatrix4( _projScreenMatrix );

				}

				currentRenderList.push( object, null, object.material, _vector3.z, null );

			} else if ( object.isMesh || object.isLine || object.isPoints ) {

				if ( object.isSkinnedMesh ) {

					object.skeleton.update();

				}

				if ( ! object.frustumCulled || _frustum.intersectsObject( object ) ) {

					if ( sortObjects ) {

						_vector3.setFromMatrixPosition( object.matrixWorld )
							.applyMatrix4( _projScreenMatrix );

					}

					var geometry = objects.update( object );
					var material = object.material;

					if ( Array.isArray( material ) ) {

						var groups = geometry.groups;

						for ( var i = 0, l = groups.length; i < l; i ++ ) {

							var group = groups[ i ];
							var groupMaterial = material[ group.materialIndex ];

							if ( groupMaterial && groupMaterial.visible ) {

								currentRenderList.push( object, geometry, groupMaterial, _vector3.z, group );

							}

						}

					} else if ( material.visible ) {

						currentRenderList.push( object, geometry, material, _vector3.z, null );

					}

				}

			}

		}

		var children = object.children;

		for ( var i = 0, l = children.length; i < l; i ++ ) {

			projectObject( children[ i ], camera, sortObjects );

		}

	}

	function renderObjects( renderList, scene, camera, overrideMaterial ) {

		for ( var i = 0, l = renderList.length; i < l; i ++ ) {

			var renderItem = renderList[ i ];

			var object = renderItem.object;
			var geometry = renderItem.geometry;
			var material = overrideMaterial === undefined ? renderItem.material : overrideMaterial;
			var group = renderItem.group;

			if ( camera.isArrayCamera ) {

				_currentArrayCamera = camera;

				var cameras = camera.cameras;

				for ( var j = 0, jl = cameras.length; j < jl; j ++ ) {

					var camera2 = cameras[ j ];

					if ( object.layers.test( camera2.layers ) ) {

						var bounds = camera2.bounds;

						var x = bounds.x * _width;
						var y = bounds.y * _height;
						var width = bounds.z * _width;
						var height = bounds.w * _height;

						_this.setViewport( x, y, width, height );
						_this.setScissor( x, y, width, height );
						_this.setScissorTest( true );

						renderObject( object, scene, camera2, geometry, material, group );

					}

				}

			} else {

				_currentArrayCamera = null;

				renderObject( object, scene, camera, geometry, material, group );

			}

		}

	}

	function renderObject( object, scene, camera, geometry, material, group ) {

		object.modelViewMatrix.multiplyMatrices( camera.matrixWorldInverse, object.matrixWorld );
		object.normalMatrix.getNormalMatrix( object.modelViewMatrix );

		object.onBeforeRender( _this, scene, camera, geometry, material, group );

		if ( object.isImmediateRenderObject ) {

			state.setMaterial( material );

			var program = setProgram( camera, scene.fog, material, object );

			_currentGeometryProgram = '';

			renderObjectImmediate( object, program, material );

		} else {

			_this.renderBufferDirect( camera, scene.fog, geometry, material, object, group );

		}

		object.onAfterRender( _this, scene, camera, geometry, material, group );

	}

	function initMaterial( material, fog, object ) {

		var materialProperties = properties.get( material );

		var parameters = programCache.getParameters(
			material, _lights, fog, _clipping.numPlanes, _clipping.numIntersection, object );

		var code = programCache.getProgramCode( material, parameters );

		var program = materialProperties.program;
		var programChange = true;

		if ( program === undefined ) {

			// new material
			material.addEventListener( 'dispose', onMaterialDispose );

		} else if ( program.code !== code ) {

			// changed glsl or parameters
			releaseMaterialProgramReference( material );

		} else if ( parameters.shaderID !== undefined ) {

			// same glsl and uniform list
			return;

		} else {

			// only rebuild uniform list
			programChange = false;

		}

		if ( programChange ) {

			if ( parameters.shaderID ) {

				var shader = __WEBPACK_IMPORTED_MODULE_7__shaders_ShaderLib__["a" /* ShaderLib */][ parameters.shaderID ];

				materialProperties.shader = {
					name: material.type,
					uniforms: __WEBPACK_IMPORTED_MODULE_6__shaders_UniformsUtils__["a" /* UniformsUtils */].clone( shader.uniforms ),
					vertexShader: shader.vertexShader,
					fragmentShader: shader.fragmentShader
				};

			} else {

				materialProperties.shader = {
					name: material.type,
					uniforms: material.uniforms,
					vertexShader: material.vertexShader,
					fragmentShader: material.fragmentShader
				};

			}

			material.onBeforeCompile( materialProperties.shader );

			program = programCache.acquireProgram( material, materialProperties.shader, parameters, code );

			materialProperties.program = program;
			material.program = program;

		}

		var programAttributes = program.getAttributes();

		if ( material.morphTargets ) {

			material.numSupportedMorphTargets = 0;

			for ( var i = 0; i < _this.maxMorphTargets; i ++ ) {

				if ( programAttributes[ 'morphTarget' + i ] >= 0 ) {

					material.numSupportedMorphTargets ++;

				}

			}

		}

		if ( material.morphNormals ) {

			material.numSupportedMorphNormals = 0;

			for ( var i = 0; i < _this.maxMorphNormals; i ++ ) {

				if ( programAttributes[ 'morphNormal' + i ] >= 0 ) {

					material.numSupportedMorphNormals ++;

				}

			}

		}

		var uniforms = materialProperties.shader.uniforms;

		if ( ! material.isShaderMaterial &&
			! material.isRawShaderMaterial ||
			material.clipping === true ) {

			materialProperties.numClippingPlanes = _clipping.numPlanes;
			materialProperties.numIntersection = _clipping.numIntersection;
			uniforms.clippingPlanes = _clipping.uniform;

		}

		materialProperties.fog = fog;

		// store the light setup it was created for

		materialProperties.lightsHash = _lights.hash;

		if ( material.lights ) {

			// wire up the material to this renderer's lighting state

			uniforms.ambientLightColor.value = _lights.ambient;
			uniforms.directionalLights.value = _lights.directional;
			uniforms.spotLights.value = _lights.spot;
			uniforms.rectAreaLights.value = _lights.rectArea;
			uniforms.pointLights.value = _lights.point;
			uniforms.hemisphereLights.value = _lights.hemi;

			uniforms.directionalShadowMap.value = _lights.directionalShadowMap;
			uniforms.directionalShadowMatrix.value = _lights.directionalShadowMatrix;
			uniforms.spotShadowMap.value = _lights.spotShadowMap;
			uniforms.spotShadowMatrix.value = _lights.spotShadowMatrix;
			uniforms.pointShadowMap.value = _lights.pointShadowMap;
			uniforms.pointShadowMatrix.value = _lights.pointShadowMatrix;
			// TODO (abelnation): add area lights shadow info to uniforms

		}

		var progUniforms = materialProperties.program.getUniforms(),
			uniformsList =
				__WEBPACK_IMPORTED_MODULE_4__webgl_WebGLUniforms__["a" /* WebGLUniforms */].seqWithValue( progUniforms.seq, uniforms );

		materialProperties.uniformsList = uniformsList;

	}

	function setProgram( camera, fog, material, object ) {

		_usedTextureUnits = 0;

		var materialProperties = properties.get( material );

		if ( _clippingEnabled ) {

			if ( _localClippingEnabled || camera !== _currentCamera ) {

				var useCache =
					camera === _currentCamera &&
					material.id === _currentMaterialId;

				// we might want to call this function with some ClippingGroup
				// object instead of the material, once it becomes feasible
				// (#8465, #8379)
				_clipping.setState(
					material.clippingPlanes, material.clipIntersection, material.clipShadows,
					camera, materialProperties, useCache );

			}

		}

		if ( material.needsUpdate === false ) {

			if ( materialProperties.program === undefined ) {

				material.needsUpdate = true;

			} else if ( material.fog && materialProperties.fog !== fog ) {

				material.needsUpdate = true;

			} else if ( material.lights && materialProperties.lightsHash !== _lights.hash ) {

				material.needsUpdate = true;

			} else if ( materialProperties.numClippingPlanes !== undefined &&
				( materialProperties.numClippingPlanes !== _clipping.numPlanes ||
				materialProperties.numIntersection !== _clipping.numIntersection ) ) {

				material.needsUpdate = true;

			}

		}

		if ( material.needsUpdate ) {

			initMaterial( material, fog, object );
			material.needsUpdate = false;

		}

		var refreshProgram = false;
		var refreshMaterial = false;
		var refreshLights = false;

		var program = materialProperties.program,
			p_uniforms = program.getUniforms(),
			m_uniforms = materialProperties.shader.uniforms;

		if ( program.id !== _currentProgram ) {

			_gl.useProgram( program.program );
			_currentProgram = program.id;

			refreshProgram = true;
			refreshMaterial = true;
			refreshLights = true;

		}

		if ( material.id !== _currentMaterialId ) {

			_currentMaterialId = material.id;

			refreshMaterial = true;

		}

		if ( refreshProgram || camera !== _currentCamera ) {

			p_uniforms.setValue( _gl, 'projectionMatrix', camera.projectionMatrix );

			if ( capabilities.logarithmicDepthBuffer ) {

				p_uniforms.setValue( _gl, 'logDepthBufFC',
					2.0 / ( Math.log( camera.far + 1.0 ) / Math.LN2 ) );

			}

			// Avoid unneeded uniform updates per ArrayCamera's sub-camera

			if ( _currentCamera !== ( _currentArrayCamera || camera ) ) {

				_currentCamera = ( _currentArrayCamera || camera );

				// lighting uniforms depend on the camera so enforce an update
				// now, in case this material supports lights - or later, when
				// the next material that does gets activated:

				refreshMaterial = true;		// set to true on material change
				refreshLights = true;		// remains set until update done

			}

			// load material specific uniforms
			// (shader material also gets them for the sake of genericity)

			if ( material.isShaderMaterial ||
				material.isMeshPhongMaterial ||
				material.isMeshStandardMaterial ||
				material.envMap ) {

				var uCamPos = p_uniforms.map.cameraPosition;

				if ( uCamPos !== undefined ) {

					uCamPos.setValue( _gl,
						_vector3.setFromMatrixPosition( camera.matrixWorld ) );

				}

			}

			if ( material.isMeshPhongMaterial ||
				material.isMeshLambertMaterial ||
				material.isMeshBasicMaterial ||
				material.isMeshStandardMaterial ||
				material.isShaderMaterial ||
				material.skinning ) {

				p_uniforms.setValue( _gl, 'viewMatrix', camera.matrixWorldInverse );

			}

		}

		// skinning uniforms must be set even if material didn't change
		// auto-setting of texture unit for bone texture must go before other textures
		// not sure why, but otherwise weird things happen

		if ( material.skinning ) {

			p_uniforms.setOptional( _gl, object, 'bindMatrix' );
			p_uniforms.setOptional( _gl, object, 'bindMatrixInverse' );

			var skeleton = object.skeleton;

			if ( skeleton ) {

				var bones = skeleton.bones;

				if ( capabilities.floatVertexTextures ) {

					if ( skeleton.boneTexture === undefined ) {

						// layout (1 matrix = 4 pixels)
						//      RGBA RGBA RGBA RGBA (=> column1, column2, column3, column4)
						//  with  8x8  pixel texture max   16 bones * 4 pixels =  (8 * 8)
						//       16x16 pixel texture max   64 bones * 4 pixels = (16 * 16)
						//       32x32 pixel texture max  256 bones * 4 pixels = (32 * 32)
						//       64x64 pixel texture max 1024 bones * 4 pixels = (64 * 64)


						var size = Math.sqrt( bones.length * 4 ); // 4 pixels needed for 1 matrix
						size = __WEBPACK_IMPORTED_MODULE_1__math_Math__["a" /* _Math */].nextPowerOfTwo( Math.ceil( size ) );
						size = Math.max( size, 4 );

						var boneMatrices = new Float32Array( size * size * 4 ); // 4 floats per RGBA pixel
						boneMatrices.set( skeleton.boneMatrices ); // copy current values

						var boneTexture = new __WEBPACK_IMPORTED_MODULE_3__textures_DataTexture__["a" /* DataTexture */]( boneMatrices, size, size, __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* RGBAFormat */], __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* FloatType */] );

						skeleton.boneMatrices = boneMatrices;
						skeleton.boneTexture = boneTexture;
						skeleton.boneTextureSize = size;

					}

					p_uniforms.setValue( _gl, 'boneTexture', skeleton.boneTexture );
					p_uniforms.setValue( _gl, 'boneTextureSize', skeleton.boneTextureSize );

				} else {

					p_uniforms.setOptional( _gl, skeleton, 'boneMatrices' );

				}

			}

		}

		if ( refreshMaterial ) {

			p_uniforms.setValue( _gl, 'toneMappingExposure', _this.toneMappingExposure );
			p_uniforms.setValue( _gl, 'toneMappingWhitePoint', _this.toneMappingWhitePoint );

			if ( material.lights ) {

				// the current material requires lighting info

				// note: all lighting uniforms are always set correctly
				// they simply reference the renderer's state for their
				// values
				//
				// use the current material's .needsUpdate flags to set
				// the GL state when required

				markUniformsLightsNeedsUpdate( m_uniforms, refreshLights );

			}

			// refresh uniforms common to several materials

			if ( fog && material.fog ) {

				refreshUniformsFog( m_uniforms, fog );

			}

			if ( material.isMeshBasicMaterial ||
				material.isMeshLambertMaterial ||
				material.isMeshPhongMaterial ||
				material.isMeshStandardMaterial ||
				material.isMeshNormalMaterial ||
				material.isMeshDepthMaterial ) {

				refreshUniformsCommon( m_uniforms, material );

			}

			// refresh single material specific uniforms

			if ( material.isLineBasicMaterial ) {

				refreshUniformsLine( m_uniforms, material );

			} else if ( material.isLineDashedMaterial ) {

				refreshUniformsLine( m_uniforms, material );
				refreshUniformsDash( m_uniforms, material );

			} else if ( material.isPointsMaterial ) {

				refreshUniformsPoints( m_uniforms, material );

			} else if ( material.isMeshLambertMaterial ) {

				refreshUniformsLambert( m_uniforms, material );

			} else if ( material.isMeshToonMaterial ) {

				refreshUniformsToon( m_uniforms, material );

			} else if ( material.isMeshPhongMaterial ) {

				refreshUniformsPhong( m_uniforms, material );

			} else if ( material.isMeshPhysicalMaterial ) {

				refreshUniformsPhysical( m_uniforms, material );

			} else if ( material.isMeshStandardMaterial ) {

				refreshUniformsStandard( m_uniforms, material );

			} else if ( material.isMeshDepthMaterial ) {

				if ( material.displacementMap ) {

					m_uniforms.displacementMap.value = material.displacementMap;
					m_uniforms.displacementScale.value = material.displacementScale;
					m_uniforms.displacementBias.value = material.displacementBias;

				}

			} else if ( material.isMeshNormalMaterial ) {

				refreshUniformsNormal( m_uniforms, material );

			}

			// RectAreaLight Texture
			// TODO (mrdoob): Find a nicer implementation

			if ( m_uniforms.ltcMat !== undefined ) m_uniforms.ltcMat.value = __WEBPACK_IMPORTED_MODULE_5__shaders_UniformsLib__["a" /* UniformsLib */].LTC_MAT_TEXTURE;
			if ( m_uniforms.ltcMag !== undefined ) m_uniforms.ltcMag.value = __WEBPACK_IMPORTED_MODULE_5__shaders_UniformsLib__["a" /* UniformsLib */].LTC_MAG_TEXTURE;

			__WEBPACK_IMPORTED_MODULE_4__webgl_WebGLUniforms__["a" /* WebGLUniforms */].upload(
				_gl, materialProperties.uniformsList, m_uniforms, _this );

		}


		// common matrices

		p_uniforms.setValue( _gl, 'modelViewMatrix', object.modelViewMatrix );
		p_uniforms.setValue( _gl, 'normalMatrix', object.normalMatrix );
		p_uniforms.setValue( _gl, 'modelMatrix', object.matrixWorld );

		return program;

	}

	// Uniforms (refresh uniforms objects)

	function refreshUniformsCommon( uniforms, material ) {

		uniforms.opacity.value = material.opacity;

		uniforms.diffuse.value = material.color;

		if ( material.emissive ) {

			uniforms.emissive.value.copy( material.emissive ).multiplyScalar( material.emissiveIntensity );

		}

		uniforms.map.value = material.map;
		uniforms.specularMap.value = material.specularMap;
		uniforms.alphaMap.value = material.alphaMap;

		if ( material.lightMap ) {

			uniforms.lightMap.value = material.lightMap;
			uniforms.lightMapIntensity.value = material.lightMapIntensity;

		}

		if ( material.aoMap ) {

			uniforms.aoMap.value = material.aoMap;
			uniforms.aoMapIntensity.value = material.aoMapIntensity;

		}

		// uv repeat and offset setting priorities
		// 1. color map
		// 2. specular map
		// 3. normal map
		// 4. bump map
		// 5. alpha map
		// 6. emissive map

		var uvScaleMap;

		if ( material.map ) {

			uvScaleMap = material.map;

		} else if ( material.specularMap ) {

			uvScaleMap = material.specularMap;

		} else if ( material.displacementMap ) {

			uvScaleMap = material.displacementMap;

		} else if ( material.normalMap ) {

			uvScaleMap = material.normalMap;

		} else if ( material.bumpMap ) {

			uvScaleMap = material.bumpMap;

		} else if ( material.roughnessMap ) {

			uvScaleMap = material.roughnessMap;

		} else if ( material.metalnessMap ) {

			uvScaleMap = material.metalnessMap;

		} else if ( material.alphaMap ) {

			uvScaleMap = material.alphaMap;

		} else if ( material.emissiveMap ) {

			uvScaleMap = material.emissiveMap;

		}

		if ( uvScaleMap !== undefined ) {

			// backwards compatibility
			if ( uvScaleMap.isWebGLRenderTarget ) {

				uvScaleMap = uvScaleMap.texture;

			}

			var offset = uvScaleMap.offset;
			var repeat = uvScaleMap.repeat;

			uniforms.offsetRepeat.value.set( offset.x, offset.y, repeat.x, repeat.y );

		}

		uniforms.envMap.value = material.envMap;

		// don't flip CubeTexture envMaps, flip everything else:
		//  WebGLRenderTargetCube will be flipped for backwards compatibility
		//  WebGLRenderTargetCube.texture will be flipped because it's a Texture and NOT a CubeTexture
		// this check must be handled differently, or removed entirely, if WebGLRenderTargetCube uses a CubeTexture in the future
		uniforms.flipEnvMap.value = ( ! ( material.envMap && material.envMap.isCubeTexture ) ) ? 1 : - 1;

		uniforms.reflectivity.value = material.reflectivity;
		uniforms.refractionRatio.value = material.refractionRatio;

	}

	function refreshUniformsLine( uniforms, material ) {

		uniforms.diffuse.value = material.color;
		uniforms.opacity.value = material.opacity;

	}

	function refreshUniformsDash( uniforms, material ) {

		uniforms.dashSize.value = material.dashSize;
		uniforms.totalSize.value = material.dashSize + material.gapSize;
		uniforms.scale.value = material.scale;

	}

	function refreshUniformsPoints( uniforms, material ) {

		uniforms.diffuse.value = material.color;
		uniforms.opacity.value = material.opacity;
		uniforms.size.value = material.size * _pixelRatio;
		uniforms.scale.value = _height * 0.5;

		uniforms.map.value = material.map;

		if ( material.map !== null ) {

			var offset = material.map.offset;
			var repeat = material.map.repeat;

			uniforms.offsetRepeat.value.set( offset.x, offset.y, repeat.x, repeat.y );

		}

	}

	function refreshUniformsFog( uniforms, fog ) {

		uniforms.fogColor.value = fog.color;

		if ( fog.isFog ) {

			uniforms.fogNear.value = fog.near;
			uniforms.fogFar.value = fog.far;

		} else if ( fog.isFogExp2 ) {

			uniforms.fogDensity.value = fog.density;

		}

	}

	function refreshUniformsLambert( uniforms, material ) {

		if ( material.emissiveMap ) {

			uniforms.emissiveMap.value = material.emissiveMap;

		}

	}

	function refreshUniformsPhong( uniforms, material ) {

		uniforms.specular.value = material.specular;
		uniforms.shininess.value = Math.max( material.shininess, 1e-4 ); // to prevent pow( 0.0, 0.0 )

		if ( material.emissiveMap ) {

			uniforms.emissiveMap.value = material.emissiveMap;

		}

		if ( material.bumpMap ) {

			uniforms.bumpMap.value = material.bumpMap;
			uniforms.bumpScale.value = material.bumpScale;

		}

		if ( material.normalMap ) {

			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy( material.normalScale );

		}

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

	}

	function refreshUniformsToon( uniforms, material ) {

		refreshUniformsPhong( uniforms, material );

		if ( material.gradientMap ) {

			uniforms.gradientMap.value = material.gradientMap;

		}

	}

	function refreshUniformsStandard( uniforms, material ) {

		uniforms.roughness.value = material.roughness;
		uniforms.metalness.value = material.metalness;

		if ( material.roughnessMap ) {

			uniforms.roughnessMap.value = material.roughnessMap;

		}

		if ( material.metalnessMap ) {

			uniforms.metalnessMap.value = material.metalnessMap;

		}

		if ( material.emissiveMap ) {

			uniforms.emissiveMap.value = material.emissiveMap;

		}

		if ( material.bumpMap ) {

			uniforms.bumpMap.value = material.bumpMap;
			uniforms.bumpScale.value = material.bumpScale;

		}

		if ( material.normalMap ) {

			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy( material.normalScale );

		}

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

		if ( material.envMap ) {

			//uniforms.envMap.value = material.envMap; // part of uniforms common
			uniforms.envMapIntensity.value = material.envMapIntensity;

		}

	}

	function refreshUniformsPhysical( uniforms, material ) {

		uniforms.clearCoat.value = material.clearCoat;
		uniforms.clearCoatRoughness.value = material.clearCoatRoughness;

		refreshUniformsStandard( uniforms, material );

	}

	function refreshUniformsNormal( uniforms, material ) {

		if ( material.bumpMap ) {

			uniforms.bumpMap.value = material.bumpMap;
			uniforms.bumpScale.value = material.bumpScale;

		}

		if ( material.normalMap ) {

			uniforms.normalMap.value = material.normalMap;
			uniforms.normalScale.value.copy( material.normalScale );

		}

		if ( material.displacementMap ) {

			uniforms.displacementMap.value = material.displacementMap;
			uniforms.displacementScale.value = material.displacementScale;
			uniforms.displacementBias.value = material.displacementBias;

		}

	}

	// If uniforms are marked as clean, they don't need to be loaded to the GPU.

	function markUniformsLightsNeedsUpdate( uniforms, value ) {

		uniforms.ambientLightColor.needsUpdate = value;

		uniforms.directionalLights.needsUpdate = value;
		uniforms.pointLights.needsUpdate = value;
		uniforms.spotLights.needsUpdate = value;
		uniforms.rectAreaLights.needsUpdate = value;
		uniforms.hemisphereLights.needsUpdate = value;

	}

	// Lighting

	function setupShadows( lights ) {

		var lightShadowsLength = 0;

		for ( var i = 0, l = lights.length; i < l; i ++ ) {

			var light = lights[ i ];

			if ( light.castShadow ) {

				_lights.shadows[ lightShadowsLength ] = light;
				lightShadowsLength ++;

			}

		}

		_lights.shadows.length = lightShadowsLength;

	}

	function setupLights( lights, camera ) {

		var l, ll, light, shadow,
			r = 0, g = 0, b = 0,
			color,
			intensity,
			distance,
			shadowMap,

			viewMatrix = camera.matrixWorldInverse,

			directionalLength = 0,
			pointLength = 0,
			spotLength = 0,
			rectAreaLength = 0,
			hemiLength = 0;

		for ( l = 0, ll = lights.length; l < ll; l ++ ) {

			light = lights[ l ];

			color = light.color;
			intensity = light.intensity;
			distance = light.distance;

			shadowMap = ( light.shadow && light.shadow.map ) ? light.shadow.map.texture : null;

			if ( light.isAmbientLight ) {

				r += color.r * intensity;
				g += color.g * intensity;
				b += color.b * intensity;

			} else if ( light.isDirectionalLight ) {

				var uniforms = lightCache.get( light );

				uniforms.color.copy( light.color ).multiplyScalar( light.intensity );
				uniforms.direction.setFromMatrixPosition( light.matrixWorld );
				_vector3.setFromMatrixPosition( light.target.matrixWorld );
				uniforms.direction.sub( _vector3 );
				uniforms.direction.transformDirection( viewMatrix );

				uniforms.shadow = light.castShadow;

				if ( light.castShadow ) {

					shadow = light.shadow;

					uniforms.shadowBias = shadow.bias;
					uniforms.shadowRadius = shadow.radius;
					uniforms.shadowMapSize = shadow.mapSize;

				}

				_lights.directionalShadowMap[ directionalLength ] = shadowMap;
				_lights.directionalShadowMatrix[ directionalLength ] = light.shadow.matrix;
				_lights.directional[ directionalLength ] = uniforms;

				directionalLength ++;

			} else if ( light.isSpotLight ) {

				var uniforms = lightCache.get( light );

				uniforms.position.setFromMatrixPosition( light.matrixWorld );
				uniforms.position.applyMatrix4( viewMatrix );

				uniforms.color.copy( color ).multiplyScalar( intensity );
				uniforms.distance = distance;

				uniforms.direction.setFromMatrixPosition( light.matrixWorld );
				_vector3.setFromMatrixPosition( light.target.matrixWorld );
				uniforms.direction.sub( _vector3 );
				uniforms.direction.transformDirection( viewMatrix );

				uniforms.coneCos = Math.cos( light.angle );
				uniforms.penumbraCos = Math.cos( light.angle * ( 1 - light.penumbra ) );
				uniforms.decay = ( light.distance === 0 ) ? 0.0 : light.decay;

				uniforms.shadow = light.castShadow;

				if ( light.castShadow ) {

					shadow = light.shadow;

					uniforms.shadowBias = shadow.bias;
					uniforms.shadowRadius = shadow.radius;
					uniforms.shadowMapSize = shadow.mapSize;

				}

				_lights.spotShadowMap[ spotLength ] = shadowMap;
				_lights.spotShadowMatrix[ spotLength ] = light.shadow.matrix;
				_lights.spot[ spotLength ] = uniforms;

				spotLength ++;

			} else if ( light.isRectAreaLight ) {

				var uniforms = lightCache.get( light );

				// (a) intensity controls irradiance of entire light
				uniforms.color
					.copy( color )
					.multiplyScalar( intensity / ( light.width * light.height ) );

				// (b) intensity controls the radiance per light area
				// uniforms.color.copy( color ).multiplyScalar( intensity );

				uniforms.position.setFromMatrixPosition( light.matrixWorld );
				uniforms.position.applyMatrix4( viewMatrix );

				// extract local rotation of light to derive width/height half vectors
				_matrix42.identity();
				_matrix4.copy( light.matrixWorld );
				_matrix4.premultiply( viewMatrix );
				_matrix42.extractRotation( _matrix4 );

				uniforms.halfWidth.set( light.width * 0.5,                0.0, 0.0 );
				uniforms.halfHeight.set(              0.0, light.height * 0.5, 0.0 );

				uniforms.halfWidth.applyMatrix4( _matrix42 );
				uniforms.halfHeight.applyMatrix4( _matrix42 );

				// TODO (abelnation): RectAreaLight distance?
				// uniforms.distance = distance;

				_lights.rectArea[ rectAreaLength ] = uniforms;

				rectAreaLength ++;

			} else if ( light.isPointLight ) {

				var uniforms = lightCache.get( light );

				uniforms.position.setFromMatrixPosition( light.matrixWorld );
				uniforms.position.applyMatrix4( viewMatrix );

				uniforms.color.copy( light.color ).multiplyScalar( light.intensity );
				uniforms.distance = light.distance;
				uniforms.decay = ( light.distance === 0 ) ? 0.0 : light.decay;

				uniforms.shadow = light.castShadow;

				if ( light.castShadow ) {

					shadow = light.shadow;

					uniforms.shadowBias = shadow.bias;
					uniforms.shadowRadius = shadow.radius;
					uniforms.shadowMapSize = shadow.mapSize;

				}

				_lights.pointShadowMap[ pointLength ] = shadowMap;
				_lights.pointShadowMatrix[ pointLength ] = light.shadow.matrix;
				_lights.point[ pointLength ] = uniforms;

				pointLength ++;

			} else if ( light.isHemisphereLight ) {

				var uniforms = lightCache.get( light );

				uniforms.direction.setFromMatrixPosition( light.matrixWorld );
				uniforms.direction.transformDirection( viewMatrix );
				uniforms.direction.normalize();

				uniforms.skyColor.copy( light.color ).multiplyScalar( intensity );
				uniforms.groundColor.copy( light.groundColor ).multiplyScalar( intensity );

				_lights.hemi[ hemiLength ] = uniforms;

				hemiLength ++;

			}

		}

		_lights.ambient[ 0 ] = r;
		_lights.ambient[ 1 ] = g;
		_lights.ambient[ 2 ] = b;

		_lights.directional.length = directionalLength;
		_lights.spot.length = spotLength;
		_lights.rectArea.length = rectAreaLength;
		_lights.point.length = pointLength;
		_lights.hemi.length = hemiLength;

		// TODO (sam-g-steel) why aren't we using join
		_lights.hash = directionalLength + ',' + pointLength + ',' + spotLength + ',' + rectAreaLength + ',' + hemiLength + ',' + _lights.shadows.length;

	}

	// GL state setting

	this.setFaceCulling = function ( cullFace, frontFaceDirection ) {

		state.setCullFace( cullFace );
		state.setFlipSided( frontFaceDirection === __WEBPACK_IMPORTED_MODULE_0__constants__["q" /* FrontFaceDirectionCW */] );

	};

	// Textures

	function allocTextureUnit() {

		var textureUnit = _usedTextureUnits;

		if ( textureUnit >= capabilities.maxTextures ) {

			console.warn( 'THREE.WebGLRenderer: Trying to use ' + textureUnit + ' texture units while this GPU supports only ' + capabilities.maxTextures );

		}

		_usedTextureUnits += 1;

		return textureUnit;

	}

	this.allocTextureUnit = allocTextureUnit;

	// this.setTexture2D = setTexture2D;
	this.setTexture2D = ( function () {

		var warned = false;

		// backwards compatibility: peel texture.texture
		return function setTexture2D( texture, slot ) {

			if ( texture && texture.isWebGLRenderTarget ) {

				if ( ! warned ) {

					console.warn( "THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead." );
					warned = true;

				}

				texture = texture.texture;

			}

			textures.setTexture2D( texture, slot );

		};

	}() );

	this.setTexture = ( function () {

		var warned = false;

		return function setTexture( texture, slot ) {

			if ( ! warned ) {

				console.warn( "THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead." );
				warned = true;

			}

			textures.setTexture2D( texture, slot );

		};

	}() );

	this.setTextureCube = ( function () {

		var warned = false;

		return function setTextureCube( texture, slot ) {

			// backwards compatibility: peel texture.texture
			if ( texture && texture.isWebGLRenderTargetCube ) {

				if ( ! warned ) {

					console.warn( "THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead." );
					warned = true;

				}

				texture = texture.texture;

			}

			// currently relying on the fact that WebGLRenderTargetCube.texture is a Texture and NOT a CubeTexture
			// TODO: unify these code paths
			if ( ( texture && texture.isCubeTexture ) ||
				( Array.isArray( texture.image ) && texture.image.length === 6 ) ) {

				// CompressedTexture can have Array in image :/

				// this function alone should take care of cube textures
				textures.setTextureCube( texture, slot );

			} else {

				// assumed: texture property of THREE.WebGLRenderTargetCube

				textures.setTextureCubeDynamic( texture, slot );

			}

		};

	}() );

	this.getRenderTarget = function () {

		return _currentRenderTarget;

	};

	this.setRenderTarget = function ( renderTarget ) {

		_currentRenderTarget = renderTarget;

		if ( renderTarget && properties.get( renderTarget ).__webglFramebuffer === undefined ) {

			textures.setupRenderTarget( renderTarget );

		}

		var isCube = ( renderTarget && renderTarget.isWebGLRenderTargetCube );
		var framebuffer;

		if ( renderTarget ) {

			var renderTargetProperties = properties.get( renderTarget );

			if ( isCube ) {

				framebuffer = renderTargetProperties.__webglFramebuffer[ renderTarget.activeCubeFace ];

			} else {

				framebuffer = renderTargetProperties.__webglFramebuffer;

			}

			_currentScissor.copy( renderTarget.scissor );
			_currentScissorTest = renderTarget.scissorTest;

			_currentViewport.copy( renderTarget.viewport );

		} else {

			framebuffer = null;

			_currentScissor.copy( _scissor ).multiplyScalar( _pixelRatio );
			_currentScissorTest = _scissorTest;

			_currentViewport.copy( _viewport ).multiplyScalar( _pixelRatio );

		}

		if ( _currentFramebuffer !== framebuffer ) {

			_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );
			_currentFramebuffer = framebuffer;

		}

		state.scissor( _currentScissor );
		state.setScissorTest( _currentScissorTest );

		state.viewport( _currentViewport );

		if ( isCube ) {

			var textureProperties = properties.get( renderTarget.texture );
			_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + renderTarget.activeCubeFace, textureProperties.__webglTexture, renderTarget.activeMipMapLevel );

		}

	};

	this.readRenderTargetPixels = function ( renderTarget, x, y, width, height, buffer ) {

		if ( ! ( renderTarget && renderTarget.isWebGLRenderTarget ) ) {

			console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.' );
			return;

		}

		var framebuffer = properties.get( renderTarget ).__webglFramebuffer;

		if ( framebuffer ) {

			var restore = false;

			if ( framebuffer !== _currentFramebuffer ) {

				_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );

				restore = true;

			}

			try {

				var texture = renderTarget.texture;
				var textureFormat = texture.format;
				var textureType = texture.type;

				if ( textureFormat !== __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* RGBAFormat */] && paramThreeToGL( textureFormat ) !== _gl.getParameter( _gl.IMPLEMENTATION_COLOR_READ_FORMAT ) ) {

					console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.' );
					return;

				}

				if ( textureType !== __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* UnsignedByteType */] && paramThreeToGL( textureType ) !== _gl.getParameter( _gl.IMPLEMENTATION_COLOR_READ_TYPE ) && // IE11, Edge and Chrome Mac < 52 (#9513)
					! ( textureType === __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* FloatType */] && ( extensions.get( 'OES_texture_float' ) || extensions.get( 'WEBGL_color_buffer_float' ) ) ) && // Chrome Mac >= 52 and Firefox
					! ( textureType === __WEBPACK_IMPORTED_MODULE_0__constants__["s" /* HalfFloatType */] && extensions.get( 'EXT_color_buffer_half_float' ) ) ) {

					console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.' );
					return;

				}

				if ( _gl.checkFramebufferStatus( _gl.FRAMEBUFFER ) === _gl.FRAMEBUFFER_COMPLETE ) {

					// the following if statement ensures valid read requests (no out-of-bounds pixels, see #8604)

					if ( ( x >= 0 && x <= ( renderTarget.width - width ) ) && ( y >= 0 && y <= ( renderTarget.height - height ) ) ) {

						_gl.readPixels( x, y, width, height, paramThreeToGL( textureFormat ), paramThreeToGL( textureType ), buffer );

					}

				} else {

					console.error( 'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.' );

				}

			} finally {

				if ( restore ) {

					_gl.bindFramebuffer( _gl.FRAMEBUFFER, _currentFramebuffer );

				}

			}

		}

	};

	// Map three.js constants to WebGL constants

	function paramThreeToGL( p ) {

		var extension;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["t" /* RepeatWrapping */] ) return _gl.REPEAT;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* ClampToEdgeWrapping */] ) return _gl.CLAMP_TO_EDGE;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["v" /* MirroredRepeatWrapping */] ) return _gl.MIRRORED_REPEAT;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* NearestFilter */] ) return _gl.NEAREST;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["x" /* NearestMipMapNearestFilter */] ) return _gl.NEAREST_MIPMAP_NEAREST;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["y" /* NearestMipMapLinearFilter */] ) return _gl.NEAREST_MIPMAP_LINEAR;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["z" /* LinearFilter */] ) return _gl.LINEAR;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["A" /* LinearMipMapNearestFilter */] ) return _gl.LINEAR_MIPMAP_NEAREST;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* LinearMipMapLinearFilter */] ) return _gl.LINEAR_MIPMAP_LINEAR;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* UnsignedByteType */] ) return _gl.UNSIGNED_BYTE;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["C" /* UnsignedShort4444Type */] ) return _gl.UNSIGNED_SHORT_4_4_4_4;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["D" /* UnsignedShort5551Type */] ) return _gl.UNSIGNED_SHORT_5_5_5_1;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["E" /* UnsignedShort565Type */] ) return _gl.UNSIGNED_SHORT_5_6_5;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["F" /* ByteType */] ) return _gl.BYTE;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["G" /* ShortType */] ) return _gl.SHORT;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["H" /* UnsignedShortType */] ) return _gl.UNSIGNED_SHORT;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["I" /* IntType */] ) return _gl.INT;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["J" /* UnsignedIntType */] ) return _gl.UNSIGNED_INT;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* FloatType */] ) return _gl.FLOAT;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["s" /* HalfFloatType */] ) {

			extension = extensions.get( 'OES_texture_half_float' );

			if ( extension !== null ) return extension.HALF_FLOAT_OES;

		}

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["K" /* AlphaFormat */] ) return _gl.ALPHA;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["L" /* RGBFormat */] ) return _gl.RGB;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* RGBAFormat */] ) return _gl.RGBA;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["M" /* LuminanceFormat */] ) return _gl.LUMINANCE;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["N" /* LuminanceAlphaFormat */] ) return _gl.LUMINANCE_ALPHA;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["O" /* DepthFormat */] ) return _gl.DEPTH_COMPONENT;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["P" /* DepthStencilFormat */] ) return _gl.DEPTH_STENCIL;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* AddEquation */] ) return _gl.FUNC_ADD;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["Q" /* SubtractEquation */] ) return _gl.FUNC_SUBTRACT;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["R" /* ReverseSubtractEquation */] ) return _gl.FUNC_REVERSE_SUBTRACT;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["S" /* ZeroFactor */] ) return _gl.ZERO;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["T" /* OneFactor */] ) return _gl.ONE;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["U" /* SrcColorFactor */] ) return _gl.SRC_COLOR;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["V" /* OneMinusSrcColorFactor */] ) return _gl.ONE_MINUS_SRC_COLOR;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* SrcAlphaFactor */] ) return _gl.SRC_ALPHA;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* OneMinusSrcAlphaFactor */] ) return _gl.ONE_MINUS_SRC_ALPHA;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["W" /* DstAlphaFactor */] ) return _gl.DST_ALPHA;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["X" /* OneMinusDstAlphaFactor */] ) return _gl.ONE_MINUS_DST_ALPHA;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["Y" /* DstColorFactor */] ) return _gl.DST_COLOR;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["Z" /* OneMinusDstColorFactor */] ) return _gl.ONE_MINUS_DST_COLOR;
		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_0" /* SrcAlphaSaturateFactor */] ) return _gl.SRC_ALPHA_SATURATE;

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_1" /* RGB_S3TC_DXT1_Format */] || p === __WEBPACK_IMPORTED_MODULE_0__constants__["_2" /* RGBA_S3TC_DXT1_Format */] ||
			p === __WEBPACK_IMPORTED_MODULE_0__constants__["_3" /* RGBA_S3TC_DXT3_Format */] || p === __WEBPACK_IMPORTED_MODULE_0__constants__["_4" /* RGBA_S3TC_DXT5_Format */] ) {

			extension = extensions.get( 'WEBGL_compressed_texture_s3tc' );

			if ( extension !== null ) {

				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_1" /* RGB_S3TC_DXT1_Format */] ) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_2" /* RGBA_S3TC_DXT1_Format */] ) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_3" /* RGBA_S3TC_DXT3_Format */] ) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_4" /* RGBA_S3TC_DXT5_Format */] ) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;

			}

		}

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_5" /* RGB_PVRTC_4BPPV1_Format */] || p === __WEBPACK_IMPORTED_MODULE_0__constants__["_6" /* RGB_PVRTC_2BPPV1_Format */] ||
			p === __WEBPACK_IMPORTED_MODULE_0__constants__["_7" /* RGBA_PVRTC_4BPPV1_Format */] || p === __WEBPACK_IMPORTED_MODULE_0__constants__["_8" /* RGBA_PVRTC_2BPPV1_Format */] ) {

			extension = extensions.get( 'WEBGL_compressed_texture_pvrtc' );

			if ( extension !== null ) {

				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_5" /* RGB_PVRTC_4BPPV1_Format */] ) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_6" /* RGB_PVRTC_2BPPV1_Format */] ) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_7" /* RGBA_PVRTC_4BPPV1_Format */] ) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_8" /* RGBA_PVRTC_2BPPV1_Format */] ) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

			}

		}

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_9" /* RGB_ETC1_Format */] ) {

			extension = extensions.get( 'WEBGL_compressed_texture_etc1' );

			if ( extension !== null ) return extension.COMPRESSED_RGB_ETC1_WEBGL;

		}

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_10" /* MinEquation */] || p === __WEBPACK_IMPORTED_MODULE_0__constants__["_11" /* MaxEquation */] ) {

			extension = extensions.get( 'EXT_blend_minmax' );

			if ( extension !== null ) {

				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_10" /* MinEquation */] ) return extension.MIN_EXT;
				if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_11" /* MaxEquation */] ) return extension.MAX_EXT;

			}

		}

		if ( p === __WEBPACK_IMPORTED_MODULE_0__constants__["_12" /* UnsignedInt248Type */] ) {

			extension = extensions.get( 'WEBGL_depth_texture' );

			if ( extension !== null ) return extension.UNSIGNED_INT_24_8_WEBGL;

		}

		return 0;

	}

}





/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLAttributes; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function WebGLAttributes( gl ) {

	var buffers = {};

	function createBuffer( attribute, bufferType ) {

		var array = attribute.array;
		var usage = attribute.dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;

		var buffer = gl.createBuffer();

		gl.bindBuffer( bufferType, buffer );
		gl.bufferData( bufferType, array, usage );

		attribute.onUploadCallback();

		var type = gl.FLOAT;

		if ( array instanceof Float32Array ) {

			type = gl.FLOAT;

		} else if ( array instanceof Float64Array ) {

			console.warn( 'THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.' );

		} else if ( array instanceof Uint16Array ) {

			type = gl.UNSIGNED_SHORT;

		} else if ( array instanceof Int16Array ) {

			type = gl.SHORT;

		} else if ( array instanceof Uint32Array ) {

			type = gl.UNSIGNED_INT;

		} else if ( array instanceof Int32Array ) {

			type = gl.INT;

		} else if ( array instanceof Int8Array ) {

			type = gl.BYTE;

		} else if ( array instanceof Uint8Array ) {

			type = gl.UNSIGNED_BYTE;

		}

		return {
			buffer: buffer,
			type: type,
			bytesPerElement: array.BYTES_PER_ELEMENT,
			version: attribute.version
		};

	}

	function updateBuffer( buffer, attribute, bufferType ) {

		var array = attribute.array;
		var updateRange = attribute.updateRange;

		gl.bindBuffer( bufferType, buffer );

		if ( attribute.dynamic === false ) {

			gl.bufferData( bufferType, array, gl.STATIC_DRAW );

		} else if ( updateRange.count === - 1 ) {

			// Not using update ranges

			gl.bufferSubData( bufferType, 0, array );

		} else if ( updateRange.count === 0 ) {

			console.error( 'THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.' );

		} else {

			gl.bufferSubData( bufferType, updateRange.offset * array.BYTES_PER_ELEMENT,
				array.subarray( updateRange.offset, updateRange.offset + updateRange.count ) );

			updateRange.count = -1; // reset range

		}

	}

	//

	function get( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		return buffers[ attribute.uuid ];

	}

	function remove( attribute ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;
		
		var data = buffers[ attribute.uuid ];

		if ( data ) {

			gl.deleteBuffer( data.buffer );

			delete buffers[ attribute.uuid ];

		}

	}

	function update( attribute, bufferType ) {

		if ( attribute.isInterleavedBufferAttribute ) attribute = attribute.data;

		var data = buffers[ attribute.uuid ];

		if ( data === undefined ) {

			buffers[ attribute.uuid ] = createBuffer( attribute, bufferType );

		} else if ( data.version < attribute.version ) {

			updateBuffer( data.buffer, attribute, bufferType );

			data.version = attribute.version;

		}

	}

	return {

		get: get,
		remove: remove,
		update: update

	};

}





/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLBackground; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cameras_OrthographicCamera__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cameras_PerspectiveCamera__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__geometries_BoxGeometry__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__geometries_PlaneGeometry__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materials_MeshBasicMaterial__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__materials_ShaderMaterial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_Color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__objects_Mesh__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shaders_ShaderLib__ = __webpack_require__(26);
/**
 * @author mrdoob / http://mrdoob.com/
 */












function WebGLBackground( renderer, state, objects, premultipliedAlpha ) {

	var clearColor = new __WEBPACK_IMPORTED_MODULE_7__math_Color__["a" /* Color */]( 0x000000 );
	var clearAlpha = 0;

	var planeCamera, planeMesh;
	var boxCamera, boxMesh;

	function render( scene, camera, forceClear ) {

		var background = scene.background;

		if ( background === null ) {

			setClear( clearColor, clearAlpha );

		} else if ( background && background.isColor ) {

			setClear( background, 1 );
			forceClear = true;

		}

		if ( renderer.autoClear || forceClear ) {

			renderer.clear( renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil );

		}

		if ( background && background.isCubeTexture ) {

			if ( boxCamera === undefined ) {

				boxCamera = new __WEBPACK_IMPORTED_MODULE_2__cameras_PerspectiveCamera__["a" /* PerspectiveCamera */]();

				boxMesh = new __WEBPACK_IMPORTED_MODULE_8__objects_Mesh__["a" /* Mesh */](
					new __WEBPACK_IMPORTED_MODULE_3__geometries_BoxGeometry__["a" /* BoxBufferGeometry */]( 5, 5, 5 ),
					new __WEBPACK_IMPORTED_MODULE_6__materials_ShaderMaterial__["a" /* ShaderMaterial */]( {
						uniforms: __WEBPACK_IMPORTED_MODULE_9__shaders_ShaderLib__["a" /* ShaderLib */].cube.uniforms,
						vertexShader: __WEBPACK_IMPORTED_MODULE_9__shaders_ShaderLib__["a" /* ShaderLib */].cube.vertexShader,
						fragmentShader: __WEBPACK_IMPORTED_MODULE_9__shaders_ShaderLib__["a" /* ShaderLib */].cube.fragmentShader,
						side: __WEBPACK_IMPORTED_MODULE_0__constants__["_19" /* BackSide */],
						depthTest: false,
						depthWrite: false,
						fog: false
					} )
				);

			}

			boxCamera.projectionMatrix.copy( camera.projectionMatrix );

			boxCamera.matrixWorld.extractRotation( camera.matrixWorld );
			boxCamera.matrixWorldInverse.getInverse( boxCamera.matrixWorld );

			boxMesh.material.uniforms[ "tCube" ].value = background;
			boxMesh.modelViewMatrix.multiplyMatrices( boxCamera.matrixWorldInverse, boxMesh.matrixWorld );

			objects.update( boxMesh );

			renderer.renderBufferDirect( boxCamera, null, boxMesh.geometry, boxMesh.material, boxMesh, null );

		} else if ( background && background.isTexture ) {

			if ( planeCamera === undefined ) {

				planeCamera = new __WEBPACK_IMPORTED_MODULE_1__cameras_OrthographicCamera__["a" /* OrthographicCamera */]( - 1, 1, 1, - 1, 0, 1 );

				planeMesh = new __WEBPACK_IMPORTED_MODULE_8__objects_Mesh__["a" /* Mesh */](
					new __WEBPACK_IMPORTED_MODULE_4__geometries_PlaneGeometry__["a" /* PlaneBufferGeometry */]( 2, 2 ),
					new __WEBPACK_IMPORTED_MODULE_5__materials_MeshBasicMaterial__["a" /* MeshBasicMaterial */]( { depthTest: false, depthWrite: false, fog: false } )
				);

			}

			planeMesh.material.map = background;

			objects.update( planeMesh );

			renderer.renderBufferDirect( planeCamera, null, planeMesh.geometry, planeMesh.material, planeMesh, null );

		}

	}

	function setClear( color, alpha ) {

		state.buffers.color.setClear( color.r, color.g, color.b, alpha, premultipliedAlpha );

	}

	return {

		getClearColor: function () {

			return clearColor;

		},
		setClearColor: function ( color, alpha ) {

			clearColor.set( color );
			clearAlpha = alpha !== undefined ? alpha : 1;
			setClear( clearColor, clearAlpha );

		},
		getClearAlpha: function () {

			return clearAlpha;

		},
		setClearAlpha: function ( alpha ) {

			clearAlpha = alpha;
			setClear( clearColor, clearAlpha );

		},
		render: render

	};

}





/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLBufferRenderer; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function WebGLBufferRenderer( gl, extensions, infoRender ) {

	var mode;

	function setMode( value ) {

		mode = value;

	}

	function render( start, count ) {

		gl.drawArrays( mode, start, count );

		infoRender.calls ++;
		infoRender.vertices += count;

		if ( mode === gl.TRIANGLES ) infoRender.faces += count / 3;

	}

	function renderInstances( geometry, start, count ) {

		var extension = extensions.get( 'ANGLE_instanced_arrays' );

		if ( extension === null ) {

			console.error( 'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
			return;

		}

		var position = geometry.attributes.position;

		if ( position.isInterleavedBufferAttribute ) {

			count = position.data.count;

			extension.drawArraysInstancedANGLE( mode, 0, count, geometry.maxInstancedCount );

		} else {

			extension.drawArraysInstancedANGLE( mode, start, count, geometry.maxInstancedCount );

		}

		infoRender.calls ++;
		infoRender.vertices += count * geometry.maxInstancedCount;

		if ( mode === gl.TRIANGLES ) infoRender.faces += geometry.maxInstancedCount * count / 3;

	}

	//

	this.setMode = setMode;
	this.render = render;
	this.renderInstances = renderInstances;

}





/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLCapabilities; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function WebGLCapabilities( gl, extensions, parameters ) {

	var maxAnisotropy;

	function getMaxAnisotropy() {

		if ( maxAnisotropy !== undefined ) return maxAnisotropy;

		var extension = extensions.get( 'EXT_texture_filter_anisotropic' );

		if ( extension !== null ) {

			maxAnisotropy = gl.getParameter( extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT );

		} else {

			maxAnisotropy = 0;

		}

		return maxAnisotropy;

	}

	function getMaxPrecision( precision ) {

		if ( precision === 'highp' ) {

			if ( gl.getShaderPrecisionFormat( gl.VERTEX_SHADER, gl.HIGH_FLOAT ).precision > 0 &&
			     gl.getShaderPrecisionFormat( gl.FRAGMENT_SHADER, gl.HIGH_FLOAT ).precision > 0 ) {

				return 'highp';

			}

			precision = 'mediump';

		}

		if ( precision === 'mediump' ) {

			if ( gl.getShaderPrecisionFormat( gl.VERTEX_SHADER, gl.MEDIUM_FLOAT ).precision > 0 &&
			     gl.getShaderPrecisionFormat( gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT ).precision > 0 ) {

				return 'mediump';

			}

		}

		return 'lowp';

	}

	var precision = parameters.precision !== undefined ? parameters.precision : 'highp';
	var maxPrecision = getMaxPrecision( precision );

	if ( maxPrecision !== precision ) {

		console.warn( 'THREE.WebGLRenderer:', precision, 'not supported, using', maxPrecision, 'instead.' );
		precision = maxPrecision;

	}

	var logarithmicDepthBuffer = parameters.logarithmicDepthBuffer === true && !! extensions.get( 'EXT_frag_depth' );

	var maxTextures = gl.getParameter( gl.MAX_TEXTURE_IMAGE_UNITS );
	var maxVertexTextures = gl.getParameter( gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS );
	var maxTextureSize = gl.getParameter( gl.MAX_TEXTURE_SIZE );
	var maxCubemapSize = gl.getParameter( gl.MAX_CUBE_MAP_TEXTURE_SIZE );

	var maxAttributes = gl.getParameter( gl.MAX_VERTEX_ATTRIBS );
	var maxVertexUniforms = gl.getParameter( gl.MAX_VERTEX_UNIFORM_VECTORS );
	var maxVaryings = gl.getParameter( gl.MAX_VARYING_VECTORS );
	var maxFragmentUniforms = gl.getParameter( gl.MAX_FRAGMENT_UNIFORM_VECTORS );

	var vertexTextures = maxVertexTextures > 0;
	var floatFragmentTextures = !! extensions.get( 'OES_texture_float' );
	var floatVertexTextures = vertexTextures && floatFragmentTextures;

	return {

		getMaxAnisotropy: getMaxAnisotropy,
		getMaxPrecision: getMaxPrecision,

		precision: precision,
		logarithmicDepthBuffer: logarithmicDepthBuffer,

		maxTextures: maxTextures,
		maxVertexTextures: maxVertexTextures,
		maxTextureSize: maxTextureSize,
		maxCubemapSize: maxCubemapSize,

		maxAttributes: maxAttributes,
		maxVertexUniforms: maxVertexUniforms,
		maxVaryings: maxVaryings,
		maxFragmentUniforms: maxFragmentUniforms,

		vertexTextures: vertexTextures,
		floatFragmentTextures: floatFragmentTextures,
		floatVertexTextures: floatVertexTextures

	};

}





/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLClipping; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix3__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Plane__ = __webpack_require__(25);
/**
 * @author tschw
 */




function WebGLClipping() {

	var scope = this,

		globalState = null,
		numGlobalPlanes = 0,
		localClippingEnabled = false,
		renderingShadows = false,

		plane = new __WEBPACK_IMPORTED_MODULE_1__math_Plane__["a" /* Plane */](),
		viewNormalMatrix = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix3__["a" /* Matrix3 */](),

		uniform = { value: null, needsUpdate: false };

	this.uniform = uniform;
	this.numPlanes = 0;
	this.numIntersection = 0;

	this.init = function( planes, enableLocalClipping, camera ) {

		var enabled =
			planes.length !== 0 ||
			enableLocalClipping ||
			// enable state of previous frame - the clipping code has to
			// run another frame in order to reset the state:
			numGlobalPlanes !== 0 ||
			localClippingEnabled;

		localClippingEnabled = enableLocalClipping;

		globalState = projectPlanes( planes, camera, 0 );
		numGlobalPlanes = planes.length;

		return enabled;

	};

	this.beginShadows = function() {

		renderingShadows = true;
		projectPlanes( null );

	};

	this.endShadows = function() {

		renderingShadows = false;
		resetGlobalState();

	};

	this.setState = function( planes, clipIntersection, clipShadows, camera, cache, fromCache ) {

		if ( ! localClippingEnabled ||
				planes === null || planes.length === 0 ||
				renderingShadows && ! clipShadows ) {
			// there's no local clipping

			if ( renderingShadows ) {
				// there's no global clipping

				projectPlanes( null );

			} else {

				resetGlobalState();
			}

		} else {

			var nGlobal = renderingShadows ? 0 : numGlobalPlanes,
				lGlobal = nGlobal * 4,

				dstArray = cache.clippingState || null;

			uniform.value = dstArray; // ensure unique state

			dstArray = projectPlanes( planes, camera, lGlobal, fromCache );

			for ( var i = 0; i !== lGlobal; ++ i ) {

				dstArray[ i ] = globalState[ i ];

			}

			cache.clippingState = dstArray;
			this.numIntersection = clipIntersection ? this.numPlanes : 0;
			this.numPlanes += nGlobal;

		}


	};

	function resetGlobalState() {

		if ( uniform.value !== globalState ) {

			uniform.value = globalState;
			uniform.needsUpdate = numGlobalPlanes > 0;

		}

		scope.numPlanes = numGlobalPlanes;
		scope.numIntersection = 0;

	}

	function projectPlanes( planes, camera, dstOffset, skipTransform ) {

		var nPlanes = planes !== null ? planes.length : 0,
			dstArray = null;

		if ( nPlanes !== 0 ) {

			dstArray = uniform.value;

			if ( skipTransform !== true || dstArray === null ) {

				var flatSize = dstOffset + nPlanes * 4,
					viewMatrix = camera.matrixWorldInverse;

				viewNormalMatrix.getNormalMatrix( viewMatrix );

				if ( dstArray === null || dstArray.length < flatSize ) {

					dstArray = new Float32Array( flatSize );

				}

				for ( var i = 0, i4 = dstOffset;
									i !== nPlanes; ++ i, i4 += 4 ) {

					plane.copy( planes[ i ] ).
							applyMatrix4( viewMatrix, viewNormalMatrix );

					plane.normal.toArray( dstArray, i4 );
					dstArray[ i4 + 3 ] = plane.constant;

				}

			}

			uniform.value = dstArray;
			uniform.needsUpdate = true;

		}

		scope.numPlanes = nPlanes;
		
		return dstArray;

	}

}





/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLExtensions; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function WebGLExtensions( gl ) {

	var extensions = {};

	return {

		get: function ( name ) {

			if ( extensions[ name ] !== undefined ) {

				return extensions[ name ];

			}

			var extension;

			switch ( name ) {

				case 'WEBGL_depth_texture':
					extension = gl.getExtension( 'WEBGL_depth_texture' ) || gl.getExtension( 'MOZ_WEBGL_depth_texture' ) || gl.getExtension( 'WEBKIT_WEBGL_depth_texture' );
					break;

				case 'EXT_texture_filter_anisotropic':
					extension = gl.getExtension( 'EXT_texture_filter_anisotropic' ) || gl.getExtension( 'MOZ_EXT_texture_filter_anisotropic' ) || gl.getExtension( 'WEBKIT_EXT_texture_filter_anisotropic' );
					break;

				case 'WEBGL_compressed_texture_s3tc':
					extension = gl.getExtension( 'WEBGL_compressed_texture_s3tc' ) || gl.getExtension( 'MOZ_WEBGL_compressed_texture_s3tc' ) || gl.getExtension( 'WEBKIT_WEBGL_compressed_texture_s3tc' );
					break;

				case 'WEBGL_compressed_texture_pvrtc':
					extension = gl.getExtension( 'WEBGL_compressed_texture_pvrtc' ) || gl.getExtension( 'WEBKIT_WEBGL_compressed_texture_pvrtc' );
					break;

				case 'WEBGL_compressed_texture_etc1':
					extension = gl.getExtension( 'WEBGL_compressed_texture_etc1' );
					break;

				default:
					extension = gl.getExtension( name );

			}

			if ( extension === null ) {

				console.warn( 'THREE.WebGLRenderer: ' + name + ' extension not supported.' );

			}

			extensions[ name ] = extension;

			return extension;

		}

	};

}





/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLGeometries; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_BufferAttribute__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(41);
/**
 * @author mrdoob / http://mrdoob.com/
 */





function WebGLGeometries( gl, attributes, infoMemory ) {

	var geometries = {};
	var wireframeAttributes = {};

	function onGeometryDispose( event ) {

		var geometry = event.target;
		var buffergeometry = geometries[ geometry.id ];

		if ( buffergeometry.index !== null ) {

			attributes.remove( buffergeometry.index );

		}

		for ( var name in buffergeometry.attributes ) {

			attributes.remove( buffergeometry.attributes[ name ] );

		}

		geometry.removeEventListener( 'dispose', onGeometryDispose );

		delete geometries[ geometry.id ];

		// TODO Remove duplicate code

		var attribute = wireframeAttributes[ geometry.id ];

		if ( attribute ) {

			attributes.remove( attribute );
			delete wireframeAttributes[ geometry.id ];

		}

		attribute = wireframeAttributes[ buffergeometry.id ];

		if ( attribute ) {

			attributes.remove( attribute );
			delete wireframeAttributes[ buffergeometry.id ];

		}

		//

		infoMemory.geometries --;

	}

	function get( object, geometry ) {

		var buffergeometry = geometries[ geometry.id ];

		if ( buffergeometry ) return buffergeometry;

		geometry.addEventListener( 'dispose', onGeometryDispose );

		if ( geometry.isBufferGeometry ) {

			buffergeometry = geometry;

		} else if ( geometry.isGeometry ) {

			if ( geometry._bufferGeometry === undefined ) {

				geometry._bufferGeometry = new __WEBPACK_IMPORTED_MODULE_1__core_BufferGeometry__["a" /* BufferGeometry */]().setFromObject( object );

			}

			buffergeometry = geometry._bufferGeometry;

		}

		geometries[ geometry.id ] = buffergeometry;

		infoMemory.geometries ++;

		return buffergeometry;

	}

	function update( geometry ) {

		var index = geometry.index;
		var geometryAttributes = geometry.attributes;

		if ( index !== null ) {

			attributes.update( index, gl.ELEMENT_ARRAY_BUFFER );

		}

		for ( var name in geometryAttributes ) {

			attributes.update( geometryAttributes[ name ], gl.ARRAY_BUFFER );

		}

		// morph targets

		var morphAttributes = geometry.morphAttributes;

		for ( var name in morphAttributes ) {

			var array = morphAttributes[ name ];

			for ( var i = 0, l = array.length; i < l; i ++ ) {

				attributes.update( array[ i ], gl.ARRAY_BUFFER );

			}

		}

	}

	function getWireframeAttribute( geometry ) {

		var attribute = wireframeAttributes[ geometry.id ];

		if ( attribute ) return attribute;

		var indices = [];

		var geometryIndex = geometry.index;
		var geometryAttributes = geometry.attributes;

		// console.time( 'wireframe' );

		if ( geometryIndex !== null ) {

			var array = geometryIndex.array;

			for ( var i = 0, l = array.length; i < l; i += 3 ) {

				var a = array[ i + 0 ];
				var b = array[ i + 1 ];
				var c = array[ i + 2 ];

				indices.push( a, b, b, c, c, a );

			}

		} else {

			var array = geometryAttributes.position.array;

			for ( var i = 0, l = ( array.length / 3 ) - 1; i < l; i += 3 ) {

				var a = i + 0;
				var b = i + 1;
				var c = i + 2;

				indices.push( a, b, b, c, c, a );

			}

		}

		// console.timeEnd( 'wireframe' );

		attribute = new ( __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* arrayMax */])( indices ) > 65535 ? __WEBPACK_IMPORTED_MODULE_0__core_BufferAttribute__["a" /* Uint32BufferAttribute */] : __WEBPACK_IMPORTED_MODULE_0__core_BufferAttribute__["b" /* Uint16BufferAttribute */] )( indices, 1 );

		attributes.update( attribute, gl.ELEMENT_ARRAY_BUFFER );

		wireframeAttributes[ geometry.id ] = attribute;

		return attribute;

	}

	return {

		get: get,
		update: update,

		getWireframeAttribute: getWireframeAttribute

	};

}





/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLIndexedBufferRenderer; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function WebGLIndexedBufferRenderer( gl, extensions, infoRender ) {

	var mode;

	function setMode( value ) {

		mode = value;

	}

	var type, bytesPerElement;

	function setIndex( value ) {

		type = value.type;
		bytesPerElement = value.bytesPerElement;

	}

	function render( start, count ) {

		gl.drawElements( mode, count, type, start * bytesPerElement );

		infoRender.calls ++;
		infoRender.vertices += count;

		if ( mode === gl.TRIANGLES ) infoRender.faces += count / 3;

	}

	function renderInstances( geometry, start, count ) {

		var extension = extensions.get( 'ANGLE_instanced_arrays' );

		if ( extension === null ) {

			console.error( 'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.' );
			return;

		}

		extension.drawElementsInstancedANGLE( mode, count, type, start * bytesPerElement, geometry.maxInstancedCount );

		infoRender.calls ++;
		infoRender.vertices += count * geometry.maxInstancedCount;

		if ( mode === gl.TRIANGLES ) infoRender.faces += geometry.maxInstancedCount * count / 3;

	}

	//

	this.setMode = setMode;
	this.setIndex = setIndex;
	this.render = render;
	this.renderInstances = renderInstances;

}





/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLLights; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector2__ = __webpack_require__(6);
/**
 * @author mrdoob / http://mrdoob.com/
 */





function WebGLLights() {

	var lights = {};

	return {

		get: function ( light ) {

			if ( lights[ light.id ] !== undefined ) {

				return lights[ light.id ];

			}

			var uniforms;

			switch ( light.type ) {

				case 'DirectionalLight':
					uniforms = {
						direction: new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */](),
						color: new __WEBPACK_IMPORTED_MODULE_0__math_Color__["a" /* Color */](),

						shadow: false,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new __WEBPACK_IMPORTED_MODULE_2__math_Vector2__["a" /* Vector2 */]()
					};
					break;

				case 'SpotLight':
					uniforms = {
						position: new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */](),
						direction: new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */](),
						color: new __WEBPACK_IMPORTED_MODULE_0__math_Color__["a" /* Color */](),
						distance: 0,
						coneCos: 0,
						penumbraCos: 0,
						decay: 0,

						shadow: false,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new __WEBPACK_IMPORTED_MODULE_2__math_Vector2__["a" /* Vector2 */]()
					};
					break;

				case 'PointLight':
					uniforms = {
						position: new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */](),
						color: new __WEBPACK_IMPORTED_MODULE_0__math_Color__["a" /* Color */](),
						distance: 0,
						decay: 0,

						shadow: false,
						shadowBias: 0,
						shadowRadius: 1,
						shadowMapSize: new __WEBPACK_IMPORTED_MODULE_2__math_Vector2__["a" /* Vector2 */]()
					};
					break;

				case 'HemisphereLight':
					uniforms = {
						direction: new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */](),
						skyColor: new __WEBPACK_IMPORTED_MODULE_0__math_Color__["a" /* Color */](),
						groundColor: new __WEBPACK_IMPORTED_MODULE_0__math_Color__["a" /* Color */]()
					};
					break;

				case 'RectAreaLight':
					uniforms = {
						color: new __WEBPACK_IMPORTED_MODULE_0__math_Color__["a" /* Color */](),
						position: new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */](),
						halfWidth: new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */](),
						halfHeight: new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]()
						// TODO (abelnation): set RectAreaLight shadow uniforms
					};
					break;

			}

			lights[ light.id ] = uniforms;

			return uniforms;

		}

	};

}





/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLObjects; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function WebGLObjects( gl, geometries, infoRender ) {

	var updateList = {};

	function update( object ) {

		var frame = infoRender.frame;

		var geometry = object.geometry;
		var buffergeometry = geometries.get( object, geometry );

		// Update once per frame

		if ( updateList[ buffergeometry.id ] !== frame ) {

			if ( geometry.isGeometry ) {

				buffergeometry.updateFromObject( object );

			}

			geometries.update( buffergeometry );

			updateList[ buffergeometry.id ] = frame;

		}

		return buffergeometry;

	}

	function clear() {

		updateList = {};

	}

	return {

		update: update,
		clear: clear

	};

}





/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLProgram; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__WebGLUniforms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WebGLShader__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shaders_ShaderChunk__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(1);
/**
 * @author mrdoob / http://mrdoob.com/
 */






var programIdCount = 0;

function getEncodingComponents( encoding ) {

	switch ( encoding ) {

		case __WEBPACK_IMPORTED_MODULE_3__constants__["_13" /* LinearEncoding */]:
			return [ 'Linear','( value )' ];
		case __WEBPACK_IMPORTED_MODULE_3__constants__["_25" /* sRGBEncoding */]:
			return [ 'sRGB','( value )' ];
		case __WEBPACK_IMPORTED_MODULE_3__constants__["_26" /* RGBEEncoding */]:
			return [ 'RGBE','( value )' ];
		case __WEBPACK_IMPORTED_MODULE_3__constants__["_27" /* RGBM7Encoding */]:
			return [ 'RGBM','( value, 7.0 )' ];
		case __WEBPACK_IMPORTED_MODULE_3__constants__["_28" /* RGBM16Encoding */]:
			return [ 'RGBM','( value, 16.0 )' ];
		case __WEBPACK_IMPORTED_MODULE_3__constants__["_29" /* RGBDEncoding */]:
			return [ 'RGBD','( value, 256.0 )' ];
		case __WEBPACK_IMPORTED_MODULE_3__constants__["_22" /* GammaEncoding */]:
			return [ 'Gamma','( value, float( GAMMA_FACTOR ) )' ];
		default:
			throw new Error( 'unsupported encoding: ' + encoding );

	}

}

function getTexelDecodingFunction( functionName, encoding ) {

	var components = getEncodingComponents( encoding );
	return "vec4 " + functionName + "( vec4 value ) { return " + components[ 0 ] + "ToLinear" + components[ 1 ] + "; }";

}

function getTexelEncodingFunction( functionName, encoding ) {

	var components = getEncodingComponents( encoding );
	return "vec4 " + functionName + "( vec4 value ) { return LinearTo" + components[ 0 ] + components[ 1 ] + "; }";

}

function getToneMappingFunction( functionName, toneMapping ) {

	var toneMappingName;

	switch ( toneMapping ) {

		case __WEBPACK_IMPORTED_MODULE_3__constants__["j" /* LinearToneMapping */]:
			toneMappingName = "Linear";
			break;

		case __WEBPACK_IMPORTED_MODULE_3__constants__["_30" /* ReinhardToneMapping */]:
			toneMappingName = "Reinhard";
			break;

		case __WEBPACK_IMPORTED_MODULE_3__constants__["_31" /* Uncharted2ToneMapping */]:
			toneMappingName = "Uncharted2";
			break;

		case __WEBPACK_IMPORTED_MODULE_3__constants__["_32" /* CineonToneMapping */]:
			toneMappingName = "OptimizedCineon";
			break;

		default:
			throw new Error( 'unsupported toneMapping: ' + toneMapping );

	}

	return "vec3 " + functionName + "( vec3 color ) { return " + toneMappingName + "ToneMapping( color ); }";

}

function generateExtensions( extensions, parameters, rendererExtensions ) {

	extensions = extensions || {};

	var chunks = [
		( extensions.derivatives || parameters.envMapCubeUV || parameters.bumpMap || parameters.normalMap || parameters.flatShading ) ? '#extension GL_OES_standard_derivatives : enable' : '',
		( extensions.fragDepth || parameters.logarithmicDepthBuffer ) && rendererExtensions.get( 'EXT_frag_depth' ) ? '#extension GL_EXT_frag_depth : enable' : '',
		( extensions.drawBuffers ) && rendererExtensions.get( 'WEBGL_draw_buffers' ) ? '#extension GL_EXT_draw_buffers : require' : '',
		( extensions.shaderTextureLOD || parameters.envMap ) && rendererExtensions.get( 'EXT_shader_texture_lod' ) ? '#extension GL_EXT_shader_texture_lod : enable' : ''
	];

	return chunks.filter( filterEmptyLine ).join( '\n' );

}

function generateDefines( defines ) {

	var chunks = [];

	for ( var name in defines ) {

		var value = defines[ name ];

		if ( value === false ) continue;

		chunks.push( '#define ' + name + ' ' + value );

	}

	return chunks.join( '\n' );

}

function fetchAttributeLocations( gl, program, identifiers ) {

	var attributes = {};

	var n = gl.getProgramParameter( program, gl.ACTIVE_ATTRIBUTES );

	for ( var i = 0; i < n; i ++ ) {

		var info = gl.getActiveAttrib( program, i );
		var name = info.name;

		// console.log("THREE.WebGLProgram: ACTIVE VERTEX ATTRIBUTE:", name, i );

		attributes[ name ] = gl.getAttribLocation( program, name );

	}

	return attributes;

}

function filterEmptyLine( string ) {

	return string !== '';

}

function replaceLightNums( string, parameters ) {

	return string
		.replace( /NUM_DIR_LIGHTS/g, parameters.numDirLights )
		.replace( /NUM_SPOT_LIGHTS/g, parameters.numSpotLights )
		.replace( /NUM_RECT_AREA_LIGHTS/g, parameters.numRectAreaLights )
		.replace( /NUM_POINT_LIGHTS/g, parameters.numPointLights )
		.replace( /NUM_HEMI_LIGHTS/g, parameters.numHemiLights );

}

function parseIncludes( string ) {

	var pattern = /^[ \t]*#include +<([\w\d.]+)>/gm;

	function replace( match, include ) {

		var replace = __WEBPACK_IMPORTED_MODULE_2__shaders_ShaderChunk__["a" /* ShaderChunk */][ include ];

		if ( replace === undefined ) {

			throw new Error( 'Can not resolve #include <' + include + '>' );

		}

		return parseIncludes( replace );

	}

	return string.replace( pattern, replace );

}

function unrollLoops( string ) {

	var pattern = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;

	function replace( match, start, end, snippet ) {

		var unroll = '';

		for ( var i = parseInt( start ); i < parseInt( end ); i ++ ) {

			unroll += snippet.replace( /\[ i \]/g, '[ ' + i + ' ]' );

		}

		return unroll;

	}

	return string.replace( pattern, replace );

}

function WebGLProgram( renderer, code, material, shader, parameters ) {

	var gl = renderer.context;

	var extensions = material.extensions;
	var defines = material.defines;

	var vertexShader = shader.vertexShader;
	var fragmentShader = shader.fragmentShader;

	var shadowMapTypeDefine = 'SHADOWMAP_TYPE_BASIC';

	if ( parameters.shadowMapType === __WEBPACK_IMPORTED_MODULE_3__constants__["_17" /* PCFShadowMap */] ) {

		shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF';

	} else if ( parameters.shadowMapType === __WEBPACK_IMPORTED_MODULE_3__constants__["_33" /* PCFSoftShadowMap */] ) {

		shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF_SOFT';

	}

	var envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
	var envMapModeDefine = 'ENVMAP_MODE_REFLECTION';
	var envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';

	if ( parameters.envMap ) {

		switch ( material.envMap.mapping ) {

			case __WEBPACK_IMPORTED_MODULE_3__constants__["_15" /* CubeReflectionMapping */]:
			case __WEBPACK_IMPORTED_MODULE_3__constants__["_34" /* CubeRefractionMapping */]:
				envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
				break;

			case __WEBPACK_IMPORTED_MODULE_3__constants__["_23" /* CubeUVReflectionMapping */]:
			case __WEBPACK_IMPORTED_MODULE_3__constants__["_24" /* CubeUVRefractionMapping */]:
				envMapTypeDefine = 'ENVMAP_TYPE_CUBE_UV';
				break;

			case __WEBPACK_IMPORTED_MODULE_3__constants__["_35" /* EquirectangularReflectionMapping */]:
			case __WEBPACK_IMPORTED_MODULE_3__constants__["_36" /* EquirectangularRefractionMapping */]:
				envMapTypeDefine = 'ENVMAP_TYPE_EQUIREC';
				break;

			case __WEBPACK_IMPORTED_MODULE_3__constants__["_37" /* SphericalReflectionMapping */]:
				envMapTypeDefine = 'ENVMAP_TYPE_SPHERE';
				break;

		}

		switch ( material.envMap.mapping ) {

			case __WEBPACK_IMPORTED_MODULE_3__constants__["_34" /* CubeRefractionMapping */]:
			case __WEBPACK_IMPORTED_MODULE_3__constants__["_36" /* EquirectangularRefractionMapping */]:
				envMapModeDefine = 'ENVMAP_MODE_REFRACTION';
				break;

		}

		switch ( material.combine ) {

			case __WEBPACK_IMPORTED_MODULE_3__constants__["_21" /* MultiplyOperation */]:
				envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';
				break;

			case __WEBPACK_IMPORTED_MODULE_3__constants__["_38" /* MixOperation */]:
				envMapBlendingDefine = 'ENVMAP_BLENDING_MIX';
				break;

			case __WEBPACK_IMPORTED_MODULE_3__constants__["_39" /* AddOperation */]:
				envMapBlendingDefine = 'ENVMAP_BLENDING_ADD';
				break;

		}

	}

	var gammaFactorDefine = ( renderer.gammaFactor > 0 ) ? renderer.gammaFactor : 1.0;

	// console.log( 'building new program ' );

	//

	var customExtensions = generateExtensions( extensions, parameters, renderer.extensions );

	var customDefines = generateDefines( defines );

	//

	var program = gl.createProgram();

	var prefixVertex, prefixFragment;

	if ( material.isRawShaderMaterial ) {

		prefixVertex = [

			customDefines,

			'\n'

		].filter( filterEmptyLine ).join( '\n' );

		prefixFragment = [

			customExtensions,
			customDefines,

			'\n'

		].filter( filterEmptyLine ).join( '\n' );

	} else {

		prefixVertex = [

			'precision ' + parameters.precision + ' float;',
			'precision ' + parameters.precision + ' int;',

			'#define SHADER_NAME ' + shader.name,

			customDefines,

			parameters.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',

			'#define GAMMA_FACTOR ' + gammaFactorDefine,

			'#define MAX_BONES ' + parameters.maxBones,
			( parameters.useFog && parameters.fog ) ? '#define USE_FOG' : '',
			( parameters.useFog && parameters.fogExp ) ? '#define FOG_EXP2' : '',

			parameters.map ? '#define USE_MAP' : '',
			parameters.envMap ? '#define USE_ENVMAP' : '',
			parameters.envMap ? '#define ' + envMapModeDefine : '',
			parameters.lightMap ? '#define USE_LIGHTMAP' : '',
			parameters.aoMap ? '#define USE_AOMAP' : '',
			parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
			parameters.bumpMap ? '#define USE_BUMPMAP' : '',
			parameters.normalMap ? '#define USE_NORMALMAP' : '',
			parameters.displacementMap && parameters.supportsVertexTextures ? '#define USE_DISPLACEMENTMAP' : '',
			parameters.specularMap ? '#define USE_SPECULARMAP' : '',
			parameters.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
			parameters.metalnessMap ? '#define USE_METALNESSMAP' : '',
			parameters.alphaMap ? '#define USE_ALPHAMAP' : '',
			parameters.vertexColors ? '#define USE_COLOR' : '',

			parameters.flatShading ? '#define FLAT_SHADED' : '',

			parameters.skinning ? '#define USE_SKINNING' : '',
			parameters.useVertexTexture ? '#define BONE_TEXTURE' : '',

			parameters.morphTargets ? '#define USE_MORPHTARGETS' : '',
			parameters.morphNormals && parameters.flatShading === false ? '#define USE_MORPHNORMALS' : '',
			parameters.doubleSided ? '#define DOUBLE_SIDED' : '',
			parameters.flipSided ? '#define FLIP_SIDED' : '',

			'#define NUM_CLIPPING_PLANES ' + parameters.numClippingPlanes,

			parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
			parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '',

			parameters.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',

			parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
			parameters.logarithmicDepthBuffer && renderer.extensions.get( 'EXT_frag_depth' ) ? '#define USE_LOGDEPTHBUF_EXT' : '',

			'uniform mat4 modelMatrix;',
			'uniform mat4 modelViewMatrix;',
			'uniform mat4 projectionMatrix;',
			'uniform mat4 viewMatrix;',
			'uniform mat3 normalMatrix;',
			'uniform vec3 cameraPosition;',

			'attribute vec3 position;',
			'attribute vec3 normal;',
			'attribute vec2 uv;',

			'#ifdef USE_COLOR',

			'	attribute vec3 color;',

			'#endif',

			'#ifdef USE_MORPHTARGETS',

			'	attribute vec3 morphTarget0;',
			'	attribute vec3 morphTarget1;',
			'	attribute vec3 morphTarget2;',
			'	attribute vec3 morphTarget3;',

			'	#ifdef USE_MORPHNORMALS',

			'		attribute vec3 morphNormal0;',
			'		attribute vec3 morphNormal1;',
			'		attribute vec3 morphNormal2;',
			'		attribute vec3 morphNormal3;',

			'	#else',

			'		attribute vec3 morphTarget4;',
			'		attribute vec3 morphTarget5;',
			'		attribute vec3 morphTarget6;',
			'		attribute vec3 morphTarget7;',

			'	#endif',

			'#endif',

			'#ifdef USE_SKINNING',

			'	attribute vec4 skinIndex;',
			'	attribute vec4 skinWeight;',

			'#endif',

			'\n'

		].filter( filterEmptyLine ).join( '\n' );

		prefixFragment = [

			customExtensions,

			'precision ' + parameters.precision + ' float;',
			'precision ' + parameters.precision + ' int;',

			'#define SHADER_NAME ' + shader.name,

			customDefines,

			parameters.alphaTest ? '#define ALPHATEST ' + parameters.alphaTest : '',

			'#define GAMMA_FACTOR ' + gammaFactorDefine,

			( parameters.useFog && parameters.fog ) ? '#define USE_FOG' : '',
			( parameters.useFog && parameters.fogExp ) ? '#define FOG_EXP2' : '',

			parameters.map ? '#define USE_MAP' : '',
			parameters.envMap ? '#define USE_ENVMAP' : '',
			parameters.envMap ? '#define ' + envMapTypeDefine : '',
			parameters.envMap ? '#define ' + envMapModeDefine : '',
			parameters.envMap ? '#define ' + envMapBlendingDefine : '',
			parameters.lightMap ? '#define USE_LIGHTMAP' : '',
			parameters.aoMap ? '#define USE_AOMAP' : '',
			parameters.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
			parameters.bumpMap ? '#define USE_BUMPMAP' : '',
			parameters.normalMap ? '#define USE_NORMALMAP' : '',
			parameters.specularMap ? '#define USE_SPECULARMAP' : '',
			parameters.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
			parameters.metalnessMap ? '#define USE_METALNESSMAP' : '',
			parameters.alphaMap ? '#define USE_ALPHAMAP' : '',
			parameters.vertexColors ? '#define USE_COLOR' : '',

			parameters.gradientMap ? '#define USE_GRADIENTMAP' : '',

			parameters.flatShading ? '#define FLAT_SHADED' : '',

			parameters.doubleSided ? '#define DOUBLE_SIDED' : '',
			parameters.flipSided ? '#define FLIP_SIDED' : '',

			'#define NUM_CLIPPING_PLANES ' + parameters.numClippingPlanes,
			'#define UNION_CLIPPING_PLANES ' + (parameters.numClippingPlanes - parameters.numClipIntersection),

			parameters.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
			parameters.shadowMapEnabled ? '#define ' + shadowMapTypeDefine : '',

			parameters.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : '',

			parameters.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : '',

			parameters.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
			parameters.logarithmicDepthBuffer && renderer.extensions.get( 'EXT_frag_depth' ) ? '#define USE_LOGDEPTHBUF_EXT' : '',

			parameters.envMap && renderer.extensions.get( 'EXT_shader_texture_lod' ) ? '#define TEXTURE_LOD_EXT' : '',

			'uniform mat4 viewMatrix;',
			'uniform vec3 cameraPosition;',

			( parameters.toneMapping !== __WEBPACK_IMPORTED_MODULE_3__constants__["_40" /* NoToneMapping */] ) ? "#define TONE_MAPPING" : '',
			( parameters.toneMapping !== __WEBPACK_IMPORTED_MODULE_3__constants__["_40" /* NoToneMapping */] ) ? __WEBPACK_IMPORTED_MODULE_2__shaders_ShaderChunk__["a" /* ShaderChunk */][ 'tonemapping_pars_fragment' ] : '',  // this code is required here because it is used by the toneMapping() function defined below
			( parameters.toneMapping !== __WEBPACK_IMPORTED_MODULE_3__constants__["_40" /* NoToneMapping */] ) ? getToneMappingFunction( "toneMapping", parameters.toneMapping ) : '',

			parameters.dithering ? '#define DITHERING' : '',

			( parameters.outputEncoding || parameters.mapEncoding || parameters.envMapEncoding || parameters.emissiveMapEncoding ) ? __WEBPACK_IMPORTED_MODULE_2__shaders_ShaderChunk__["a" /* ShaderChunk */][ 'encodings_pars_fragment' ] : '', // this code is required here because it is used by the various encoding/decoding function defined below
			parameters.mapEncoding ? getTexelDecodingFunction( 'mapTexelToLinear', parameters.mapEncoding ) : '',
			parameters.envMapEncoding ? getTexelDecodingFunction( 'envMapTexelToLinear', parameters.envMapEncoding ) : '',
			parameters.emissiveMapEncoding ? getTexelDecodingFunction( 'emissiveMapTexelToLinear', parameters.emissiveMapEncoding ) : '',
			parameters.outputEncoding ? getTexelEncodingFunction( "linearToOutputTexel", parameters.outputEncoding ) : '',

			parameters.depthPacking ? "#define DEPTH_PACKING " + material.depthPacking : '',

			'\n'

		].filter( filterEmptyLine ).join( '\n' );

	}

	vertexShader = parseIncludes( vertexShader );
	vertexShader = replaceLightNums( vertexShader, parameters );

	fragmentShader = parseIncludes( fragmentShader );
	fragmentShader = replaceLightNums( fragmentShader, parameters );

	if ( ! material.isShaderMaterial ) {

		vertexShader = unrollLoops( vertexShader );
		fragmentShader = unrollLoops( fragmentShader );

	}

	var vertexGlsl = prefixVertex + vertexShader;
	var fragmentGlsl = prefixFragment + fragmentShader;

	// console.log( '*VERTEX*', vertexGlsl );
	// console.log( '*FRAGMENT*', fragmentGlsl );

	var glVertexShader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__WebGLShader__["a" /* WebGLShader */])( gl, gl.VERTEX_SHADER, vertexGlsl );
	var glFragmentShader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__WebGLShader__["a" /* WebGLShader */])( gl, gl.FRAGMENT_SHADER, fragmentGlsl );

	gl.attachShader( program, glVertexShader );
	gl.attachShader( program, glFragmentShader );

	// Force a particular attribute to index 0.

	if ( material.index0AttributeName !== undefined ) {

		gl.bindAttribLocation( program, 0, material.index0AttributeName );

	} else if ( parameters.morphTargets === true ) {

		// programs with morphTargets displace position out of attribute 0
		gl.bindAttribLocation( program, 0, 'position' );

	}

	gl.linkProgram( program );

	var programLog = gl.getProgramInfoLog( program );
	var vertexLog = gl.getShaderInfoLog( glVertexShader );
	var fragmentLog = gl.getShaderInfoLog( glFragmentShader );

	var runnable = true;
	var haveDiagnostics = true;

	// console.log( '**VERTEX**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glVertexShader ) );
	// console.log( '**FRAGMENT**', gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( glFragmentShader ) );

	if ( gl.getProgramParameter( program, gl.LINK_STATUS ) === false ) {

		runnable = false;

		console.error( 'THREE.WebGLProgram: shader error: ', gl.getError(), 'gl.VALIDATE_STATUS', gl.getProgramParameter( program, gl.VALIDATE_STATUS ), 'gl.getProgramInfoLog', programLog, vertexLog, fragmentLog );

	} else if ( programLog !== '' ) {

		console.warn( 'THREE.WebGLProgram: gl.getProgramInfoLog()', programLog );

	} else if ( vertexLog === '' || fragmentLog === '' ) {

		haveDiagnostics = false;

	}

	if ( haveDiagnostics ) {

		this.diagnostics = {

			runnable: runnable,
			material: material,

			programLog: programLog,

			vertexShader: {

				log: vertexLog,
				prefix: prefixVertex

			},

			fragmentShader: {

				log: fragmentLog,
				prefix: prefixFragment

			}

		};

	}

	// clean up

	gl.deleteShader( glVertexShader );
	gl.deleteShader( glFragmentShader );

	// set up caching for uniform locations

	var cachedUniforms;

	this.getUniforms = function() {

		if ( cachedUniforms === undefined ) {

			cachedUniforms =
				new __WEBPACK_IMPORTED_MODULE_0__WebGLUniforms__["a" /* WebGLUniforms */]( gl, program, renderer );

		}

		return cachedUniforms;

	};

	// set up caching for attribute locations

	var cachedAttributes;

	this.getAttributes = function() {

		if ( cachedAttributes === undefined ) {

			cachedAttributes = fetchAttributeLocations( gl, program );

		}

		return cachedAttributes;

	};

	// free resource

	this.destroy = function() {

		gl.deleteProgram( program );
		this.program = undefined;

	};

	// DEPRECATED

	Object.defineProperties( this, {

		uniforms: {
			get: function() {

				console.warn( 'THREE.WebGLProgram: .uniforms is now .getUniforms().' );
				return this.getUniforms();

			}
		},

		attributes: {
			get: function() {

				console.warn( 'THREE.WebGLProgram: .attributes is now .getAttributes().' );
				return this.getAttributes();

			}
		}

	} );


	//

	this.id = programIdCount ++;
	this.code = code;
	this.usedTimes = 1;
	this.program = program;
	this.vertexShader = glVertexShader;
	this.fragmentShader = glFragmentShader;

	return this;

}




/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLPrograms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WebGLProgram__ = __webpack_require__(86);
/**
 * @author mrdoob / http://mrdoob.com/
 */




function WebGLPrograms( renderer, capabilities ) {

	var programs = [];

	var shaderIDs = {
		MeshDepthMaterial: 'depth',
		MeshNormalMaterial: 'normal',
		MeshBasicMaterial: 'basic',
		MeshLambertMaterial: 'lambert',
		MeshPhongMaterial: 'phong',
		MeshToonMaterial: 'phong',
		MeshStandardMaterial: 'physical',
		MeshPhysicalMaterial: 'physical',
		LineBasicMaterial: 'basic',
		LineDashedMaterial: 'dashed',
		PointsMaterial: 'points'
	};

	var parameterNames = [
		"precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding",
		"lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap",
		"roughnessMap", "metalnessMap", "gradientMap",
		"alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp",
		"flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning",
		"maxBones", "useVertexTexture", "morphTargets", "morphNormals",
		"maxMorphTargets", "maxMorphNormals", "premultipliedAlpha",
		"numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights",
		"shadowMapEnabled", "shadowMapType", "toneMapping", 'physicallyCorrectLights',
		"alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"
	];


	function allocateBones( object ) {

		var skeleton = object.skeleton;
		var bones = skeleton.bones;

		if ( capabilities.floatVertexTextures ) {

			return 1024;

		} else {

			// default for when object is not specified
			// ( for example when prebuilding shader to be used with multiple objects )
			//
			//  - leave some extra space for other uniforms
			//  - limit here is ANGLE's 254 max uniform vectors
			//    (up to 54 should be safe)

			var nVertexUniforms = capabilities.maxVertexUniforms;
			var nVertexMatrices = Math.floor( ( nVertexUniforms - 20 ) / 4 );

			var maxBones = Math.min( nVertexMatrices, bones.length );

			if ( maxBones < bones.length ) {

				console.warn( 'THREE.WebGLRenderer: Skeleton has ' + bones.length + ' bones. This GPU supports ' + maxBones + '.' );
				return 0;

			}

			return maxBones;

		}

	}

	function getTextureEncodingFromMap( map, gammaOverrideLinear ) {

		var encoding;

		if ( ! map ) {

			encoding = __WEBPACK_IMPORTED_MODULE_0__constants__["_13" /* LinearEncoding */];

		} else if ( map.isTexture ) {

			encoding = map.encoding;

		} else if ( map.isWebGLRenderTarget ) {

			console.warn( "THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead." );
			encoding = map.texture.encoding;

		}

		// add backwards compatibility for WebGLRenderer.gammaInput/gammaOutput parameter, should probably be removed at some point.
		if ( encoding === __WEBPACK_IMPORTED_MODULE_0__constants__["_13" /* LinearEncoding */] && gammaOverrideLinear ) {

			encoding = __WEBPACK_IMPORTED_MODULE_0__constants__["_22" /* GammaEncoding */];

		}

		return encoding;

	}

	this.getParameters = function ( material, lights, fog, nClipPlanes, nClipIntersection, object ) {

		var shaderID = shaderIDs[ material.type ];

		// heuristics to create shader parameters according to lights in the scene
		// (not to blow over maxLights budget)

		var maxBones = object.isSkinnedMesh ? allocateBones( object ) : 0;
		var precision = renderer.getPrecision();

		if ( material.precision !== null ) {

			precision = capabilities.getMaxPrecision( material.precision );

			if ( precision !== material.precision ) {

				console.warn( 'THREE.WebGLProgram.getParameters:', material.precision, 'not supported, using', precision, 'instead.' );

			}

		}

		var currentRenderTarget = renderer.getRenderTarget();

		var parameters = {

			shaderID: shaderID,

			precision: precision,
			supportsVertexTextures: capabilities.vertexTextures,
			outputEncoding: getTextureEncodingFromMap( ( ! currentRenderTarget ) ? null : currentRenderTarget.texture, renderer.gammaOutput ),
			map: !! material.map,
			mapEncoding: getTextureEncodingFromMap( material.map, renderer.gammaInput ),
			envMap: !! material.envMap,
			envMapMode: material.envMap && material.envMap.mapping,
			envMapEncoding: getTextureEncodingFromMap( material.envMap, renderer.gammaInput ),
			envMapCubeUV: ( !! material.envMap ) && ( ( material.envMap.mapping === __WEBPACK_IMPORTED_MODULE_0__constants__["_23" /* CubeUVReflectionMapping */] ) || ( material.envMap.mapping === __WEBPACK_IMPORTED_MODULE_0__constants__["_24" /* CubeUVRefractionMapping */] ) ),
			lightMap: !! material.lightMap,
			aoMap: !! material.aoMap,
			emissiveMap: !! material.emissiveMap,
			emissiveMapEncoding: getTextureEncodingFromMap( material.emissiveMap, renderer.gammaInput ),
			bumpMap: !! material.bumpMap,
			normalMap: !! material.normalMap,
			displacementMap: !! material.displacementMap,
			roughnessMap: !! material.roughnessMap,
			metalnessMap: !! material.metalnessMap,
			specularMap: !! material.specularMap,
			alphaMap: !! material.alphaMap,

			gradientMap: !! material.gradientMap,

			combine: material.combine,

			vertexColors: material.vertexColors,

			fog: !! fog,
			useFog: material.fog,
			fogExp: ( fog && fog.isFogExp2 ),

			flatShading: material.shading === __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* FlatShading */],

			sizeAttenuation: material.sizeAttenuation,
			logarithmicDepthBuffer: capabilities.logarithmicDepthBuffer,

			skinning: material.skinning && maxBones > 0,
			maxBones: maxBones,
			useVertexTexture: capabilities.floatVertexTextures,

			morphTargets: material.morphTargets,
			morphNormals: material.morphNormals,
			maxMorphTargets: renderer.maxMorphTargets,
			maxMorphNormals: renderer.maxMorphNormals,

			numDirLights: lights.directional.length,
			numPointLights: lights.point.length,
			numSpotLights: lights.spot.length,
			numRectAreaLights: lights.rectArea.length,
			numHemiLights: lights.hemi.length,

			numClippingPlanes: nClipPlanes,
			numClipIntersection: nClipIntersection,

			dithering: material.dithering,

			shadowMapEnabled: renderer.shadowMap.enabled && object.receiveShadow && lights.shadows.length > 0,
			shadowMapType: renderer.shadowMap.type,

			toneMapping: renderer.toneMapping,
			physicallyCorrectLights: renderer.physicallyCorrectLights,

			premultipliedAlpha: material.premultipliedAlpha,

			alphaTest: material.alphaTest,
			doubleSided: material.side === __WEBPACK_IMPORTED_MODULE_0__constants__["_18" /* DoubleSide */],
			flipSided: material.side === __WEBPACK_IMPORTED_MODULE_0__constants__["_19" /* BackSide */],

			depthPacking: ( material.depthPacking !== undefined ) ? material.depthPacking : false

		};

		return parameters;

	};

	this.getProgramCode = function ( material, parameters ) {

		var array = [];

		if ( parameters.shaderID ) {

			array.push( parameters.shaderID );

		} else {

			array.push( material.fragmentShader );
			array.push( material.vertexShader );

		}

		if ( material.defines !== undefined ) {

			for ( var name in material.defines ) {

				array.push( name );
				array.push( material.defines[ name ] );

			}

		}

		for ( var i = 0; i < parameterNames.length; i ++ ) {

			array.push( parameters[ parameterNames[ i ] ] );

		}

		array.push( material.onBeforeCompile.toString() );

		array.push( renderer.gammaOutput );

		return array.join();

	};

	this.acquireProgram = function ( material, shader, parameters, code ) {

		var program;

		// Check if code has been already compiled
		for ( var p = 0, pl = programs.length; p < pl; p ++ ) {

			var programInfo = programs[ p ];

			if ( programInfo.code === code ) {

				program = programInfo;
				++ program.usedTimes;

				break;

			}

		}

		if ( program === undefined ) {

			program = new __WEBPACK_IMPORTED_MODULE_1__WebGLProgram__["a" /* WebGLProgram */]( renderer, code, material, shader, parameters );
			programs.push( program );

		}

		return program;

	};

	this.releaseProgram = function ( program ) {

		if ( -- program.usedTimes === 0 ) {

			// Remove from unordered set
			var i = programs.indexOf( program );
			programs[ i ] = programs[ programs.length - 1 ];
			programs.pop();

			// Free WebGL resources
			program.destroy();

		}

	};

	// Exposed for resource monitoring & error feedback via renderer.info:
	this.programs = programs;

}





/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLProperties; });
/**
 * @author fordacious / fordacious.github.io
 */

function WebGLProperties() {

	var properties = {};

	function get( object ) {

		var uuid = object.uuid;
		var map = properties[ uuid ];

		if ( map === undefined ) {

			map = {};
			properties[ uuid ] = map;

		}

		return map;

	}

	function remove( object ) {

		delete properties[ object.uuid ];

	}

	function clear() {

		properties = {};

	}

	return {
		get: get,
		remove: remove,
		clear: clear
	};

}





/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLRenderLists; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function painterSortStable( a, b ) {

	if ( a.renderOrder !== b.renderOrder ) {

		return a.renderOrder - b.renderOrder;

	} else if ( a.program && b.program && a.program !== b.program ) {

		return a.program.id - b.program.id;

	} else if ( a.material.id !== b.material.id ) {

		return a.material.id - b.material.id;

	} else if ( a.z !== b.z ) {

		return a.z - b.z;

	} else {

		return a.id - b.id;

	}

}

function reversePainterSortStable( a, b ) {

	if ( a.renderOrder !== b.renderOrder ) {

		return a.renderOrder - b.renderOrder;

	} if ( a.z !== b.z ) {

		return b.z - a.z;

	} else {

		return a.id - b.id;

	}

}

function WebGLRenderList() {

	var opaque = [];
	var opaqueLastIndex = - 1;

	var transparent = [];
	var transparentLastIndex = - 1;

	function init() {

		opaqueLastIndex = - 1;
		transparentLastIndex = - 1;

	}

	function push( object, geometry, material, z, group ) {

		var array, index;

		// allocate the next position in the appropriate array

		if ( material.transparent ) {

			array = transparent;
			index = ++ transparentLastIndex;

		} else {

			array = opaque;
			index = ++ opaqueLastIndex;

		}

		// recycle existing render item or grow the array

		var renderItem = array[ index ];

		if ( renderItem ) {

			renderItem.id = object.id;
			renderItem.object = object;
			renderItem.geometry = geometry;
			renderItem.material = material;
			renderItem.program = material.program;
			renderItem.renderOrder = object.renderOrder;
			renderItem.z = z;
			renderItem.group = group;

		} else {

			renderItem = {
				id: object.id,
				object: object,
				geometry: geometry,
				material: material,
				program: material.program,
				renderOrder: object.renderOrder,
				z: z,
				group: group
			};

			// assert( index === array.length );
			array.push( renderItem );

		}

	}

	function finish() {

		opaque.length = opaqueLastIndex + 1;
		transparent.length = transparentLastIndex + 1;

	}

	function sort() {

		opaque.sort( painterSortStable );
		transparent.sort( reversePainterSortStable );

	}

	return {
		opaque: opaque,
		transparent: transparent,

		init: init,
		push: push,
		finish: finish,

		sort: sort
	};

}

function WebGLRenderLists() {

	var lists = {};

	function get( scene, camera ) {

		var hash = scene.id + ',' + camera.id;
		var list = lists[ hash ];

		if ( list === undefined ) {

			// console.log( 'THREE.WebGLRenderLists:', hash );

			list = new WebGLRenderList();
			lists[ hash ] = list;

		}

		return list;

	}

	function dispose() {

		lists = {};

	}

	return {
		get: get,
		dispose: dispose
	};

}





/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLShader; });
/**
 * @author mrdoob / http://mrdoob.com/
 */

function addLineNumbers( string ) {

	var lines = string.split( '\n' );

	for ( var i = 0; i < lines.length; i ++ ) {

		lines[ i ] = ( i + 1 ) + ': ' + lines[ i ];

	}

	return lines.join( '\n' );

}

function WebGLShader( gl, type, string ) {

	var shader = gl.createShader( type );

	gl.shaderSource( shader, string );
	gl.compileShader( shader );

	if ( gl.getShaderParameter( shader, gl.COMPILE_STATUS ) === false ) {

		console.error( 'THREE.WebGLShader: Shader couldn\'t compile.' );

	}

	if ( gl.getShaderInfoLog( shader ) !== '' ) {

		console.warn( 'THREE.WebGLShader: gl.getShaderInfoLog()', type === gl.VERTEX_SHADER ? 'vertex' : 'fragment', gl.getShaderInfoLog( shader ), addLineNumbers( string ) );

	}

	// --enable-privileged-webgl-extension
	// console.log( type, gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );

	return shader;

}





/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLShadowMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WebGLRenderTarget__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materials_ShaderMaterial__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shaders_UniformsUtils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shaders_ShaderLib__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__materials_MeshDepthMaterial__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__math_Vector4__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__math_Vector2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__math_Frustum__ = __webpack_require__(34);
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 */













function WebGLShadowMap( _renderer, _lights, _objects, capabilities ) {

	var _gl = _renderer.context,
		_state = _renderer.state,
		_frustum = new __WEBPACK_IMPORTED_MODULE_10__math_Frustum__["a" /* Frustum */](),
		_projScreenMatrix = new __WEBPACK_IMPORTED_MODULE_9__math_Matrix4__["a" /* Matrix4 */](),

		_lightShadows = _lights.shadows,

		_shadowMapSize = new __WEBPACK_IMPORTED_MODULE_8__math_Vector2__["a" /* Vector2 */](),
		_maxShadowMapSize = new __WEBPACK_IMPORTED_MODULE_8__math_Vector2__["a" /* Vector2 */]( capabilities.maxTextureSize, capabilities.maxTextureSize ),

		_lookTarget = new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */](),
		_lightPositionWorld = new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */](),

		_MorphingFlag = 1,
		_SkinningFlag = 2,

		_NumberOfMaterialVariants = ( _MorphingFlag | _SkinningFlag ) + 1,

		_depthMaterials = new Array( _NumberOfMaterialVariants ),
		_distanceMaterials = new Array( _NumberOfMaterialVariants ),

		_materialCache = {};

	var cubeDirections = [
		new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 1, 0, 0 ), new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( - 1, 0, 0 ), new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 0, 1 ),
		new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 0, - 1 ), new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 1, 0 ), new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, - 1, 0 )
	];

	var cubeUps = [
		new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 1, 0 ), new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 1, 0 ), new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 1, 0 ),
		new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 1, 0 ), new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 0, 1 ),	new __WEBPACK_IMPORTED_MODULE_7__math_Vector3__["a" /* Vector3 */]( 0, 0, - 1 )
	];

	var cube2DViewPorts = [
		new __WEBPACK_IMPORTED_MODULE_6__math_Vector4__["a" /* Vector4 */](), new __WEBPACK_IMPORTED_MODULE_6__math_Vector4__["a" /* Vector4 */](), new __WEBPACK_IMPORTED_MODULE_6__math_Vector4__["a" /* Vector4 */](),
		new __WEBPACK_IMPORTED_MODULE_6__math_Vector4__["a" /* Vector4 */](), new __WEBPACK_IMPORTED_MODULE_6__math_Vector4__["a" /* Vector4 */](), new __WEBPACK_IMPORTED_MODULE_6__math_Vector4__["a" /* Vector4 */]()
	];

	// init

	var depthMaterialTemplate = new __WEBPACK_IMPORTED_MODULE_5__materials_MeshDepthMaterial__["a" /* MeshDepthMaterial */]();
	depthMaterialTemplate.depthPacking = __WEBPACK_IMPORTED_MODULE_0__constants__["_16" /* RGBADepthPacking */];
	depthMaterialTemplate.clipping = true;

	var distanceShader = __WEBPACK_IMPORTED_MODULE_4__shaders_ShaderLib__["a" /* ShaderLib */][ "distanceRGBA" ];
	var distanceUniforms = __WEBPACK_IMPORTED_MODULE_3__shaders_UniformsUtils__["a" /* UniformsUtils */].clone( distanceShader.uniforms );

	for ( var i = 0; i !== _NumberOfMaterialVariants; ++ i ) {

		var useMorphing = ( i & _MorphingFlag ) !== 0;
		var useSkinning = ( i & _SkinningFlag ) !== 0;

		var depthMaterial = depthMaterialTemplate.clone();
		depthMaterial.morphTargets = useMorphing;
		depthMaterial.skinning = useSkinning;

		_depthMaterials[ i ] = depthMaterial;

		var distanceMaterial = new __WEBPACK_IMPORTED_MODULE_2__materials_ShaderMaterial__["a" /* ShaderMaterial */]( {
			defines: {
				'USE_SHADOWMAP': ''
			},
			uniforms: distanceUniforms,
			vertexShader: distanceShader.vertexShader,
			fragmentShader: distanceShader.fragmentShader,
			morphTargets: useMorphing,
			skinning: useSkinning,
			clipping: true
		} );

		_distanceMaterials[ i ] = distanceMaterial;

	}

	//

	var scope = this;

	this.enabled = false;

	this.autoUpdate = true;
	this.needsUpdate = false;

	this.type = __WEBPACK_IMPORTED_MODULE_0__constants__["_17" /* PCFShadowMap */];

	this.renderReverseSided = true;
	this.renderSingleSided = true;

	this.render = function ( scene, camera ) {

		if ( scope.enabled === false ) return;
		if ( scope.autoUpdate === false && scope.needsUpdate === false ) return;

		if ( _lightShadows.length === 0 ) return;

		// Set GL state for depth map.
		_state.disable( _gl.BLEND );
		_state.buffers.color.setClear( 1, 1, 1, 1 );
		_state.buffers.depth.setTest( true );
		_state.setScissorTest( false );

		// render depth map

		var faceCount;

		for ( var i = 0, il = _lightShadows.length; i < il; i ++ ) {

			var light = _lightShadows[ i ];
			var shadow = light.shadow;
			var isPointLight = light && light.isPointLight;

			if ( shadow === undefined ) {

				console.warn( 'THREE.WebGLShadowMap:', light, 'has no shadow.' );
				continue;

			}

			var shadowCamera = shadow.camera;

			_shadowMapSize.copy( shadow.mapSize );
			_shadowMapSize.min( _maxShadowMapSize );

			if ( isPointLight ) {

				var vpWidth = _shadowMapSize.x;
				var vpHeight = _shadowMapSize.y;

				// These viewports map a cube-map onto a 2D texture with the
				// following orientation:
				//
				//  xzXZ
				//   y Y
				//
				// X - Positive x direction
				// x - Negative x direction
				// Y - Positive y direction
				// y - Negative y direction
				// Z - Positive z direction
				// z - Negative z direction

				// positive X
				cube2DViewPorts[ 0 ].set( vpWidth * 2, vpHeight, vpWidth, vpHeight );
				// negative X
				cube2DViewPorts[ 1 ].set( 0, vpHeight, vpWidth, vpHeight );
				// positive Z
				cube2DViewPorts[ 2 ].set( vpWidth * 3, vpHeight, vpWidth, vpHeight );
				// negative Z
				cube2DViewPorts[ 3 ].set( vpWidth, vpHeight, vpWidth, vpHeight );
				// positive Y
				cube2DViewPorts[ 4 ].set( vpWidth * 3, 0, vpWidth, vpHeight );
				// negative Y
				cube2DViewPorts[ 5 ].set( vpWidth, 0, vpWidth, vpHeight );

				_shadowMapSize.x *= 4.0;
				_shadowMapSize.y *= 2.0;

			}

			if ( shadow.map === null ) {

				var pars = { minFilter: __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* NearestFilter */], magFilter: __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* NearestFilter */], format: __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* RGBAFormat */] };

				shadow.map = new __WEBPACK_IMPORTED_MODULE_1__WebGLRenderTarget__["a" /* WebGLRenderTarget */]( _shadowMapSize.x, _shadowMapSize.y, pars );
				shadow.map.texture.name = light.name + ".shadowMap";

				shadowCamera.updateProjectionMatrix();

			}

			if ( shadow.isSpotLightShadow ) {

				shadow.update( light );

			}

			var shadowMap = shadow.map;
			var shadowMatrix = shadow.matrix;

			_lightPositionWorld.setFromMatrixPosition( light.matrixWorld );
			shadowCamera.position.copy( _lightPositionWorld );

			if ( isPointLight ) {

				faceCount = 6;

				// for point lights we set the shadow matrix to be a translation-only matrix
				// equal to inverse of the light's position

				shadowMatrix.makeTranslation( - _lightPositionWorld.x, - _lightPositionWorld.y, - _lightPositionWorld.z );

			} else {

				faceCount = 1;

				_lookTarget.setFromMatrixPosition( light.target.matrixWorld );
				shadowCamera.lookAt( _lookTarget );
				shadowCamera.updateMatrixWorld();

				// compute shadow matrix

				shadowMatrix.set(
					0.5, 0.0, 0.0, 0.5,
					0.0, 0.5, 0.0, 0.5,
					0.0, 0.0, 0.5, 0.5,
					0.0, 0.0, 0.0, 1.0
				);

				shadowMatrix.multiply( shadowCamera.projectionMatrix );
				shadowMatrix.multiply( shadowCamera.matrixWorldInverse );

			}

			_renderer.setRenderTarget( shadowMap );
			_renderer.clear();

			// render shadow map for each cube face (if omni-directional) or
			// run a single pass if not

			for ( var face = 0; face < faceCount; face ++ ) {

				if ( isPointLight ) {

					_lookTarget.copy( shadowCamera.position );
					_lookTarget.add( cubeDirections[ face ] );
					shadowCamera.up.copy( cubeUps[ face ] );
					shadowCamera.lookAt( _lookTarget );
					shadowCamera.updateMatrixWorld();

					var vpDimensions = cube2DViewPorts[ face ];
					_state.viewport( vpDimensions );

				}

				// update camera matrices and frustum

				_projScreenMatrix.multiplyMatrices( shadowCamera.projectionMatrix, shadowCamera.matrixWorldInverse );
				_frustum.setFromMatrix( _projScreenMatrix );

				// set object matrices & frustum culling

				renderObject( scene, camera, shadowCamera, isPointLight );

			}

		}

		// Restore GL state.
		var clearColor = _renderer.getClearColor();
		var clearAlpha = _renderer.getClearAlpha();
		_renderer.setClearColor( clearColor, clearAlpha );

		scope.needsUpdate = false;

	};

	function getDepthMaterial( object, material, isPointLight, lightPositionWorld ) {

		var geometry = object.geometry;

		var result = null;

		var materialVariants = _depthMaterials;
		var customMaterial = object.customDepthMaterial;

		if ( isPointLight ) {

			materialVariants = _distanceMaterials;
			customMaterial = object.customDistanceMaterial;

		}

		if ( ! customMaterial ) {

			var useMorphing = false;

			if ( material.morphTargets ) {

				if ( geometry && geometry.isBufferGeometry ) {

					useMorphing = geometry.morphAttributes && geometry.morphAttributes.position && geometry.morphAttributes.position.length > 0;

				} else if ( geometry && geometry.isGeometry ) {

					useMorphing = geometry.morphTargets && geometry.morphTargets.length > 0;

				}

			}

			if ( object.isSkinnedMesh && material.skinning === false ) {

				console.warn( 'THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:', object );

			}

			var useSkinning = object.isSkinnedMesh && material.skinning;

			var variantIndex = 0;

			if ( useMorphing ) variantIndex |= _MorphingFlag;
			if ( useSkinning ) variantIndex |= _SkinningFlag;

			result = materialVariants[ variantIndex ];

		} else {

			result = customMaterial;

		}

		if ( _renderer.localClippingEnabled &&
				material.clipShadows === true &&
				material.clippingPlanes.length !== 0 ) {

			// in this case we need a unique material instance reflecting the
			// appropriate state

			var keyA = result.uuid, keyB = material.uuid;

			var materialsForVariant = _materialCache[ keyA ];

			if ( materialsForVariant === undefined ) {

				materialsForVariant = {};
				_materialCache[ keyA ] = materialsForVariant;

			}

			var cachedMaterial = materialsForVariant[ keyB ];

			if ( cachedMaterial === undefined ) {

				cachedMaterial = result.clone();
				materialsForVariant[ keyB ] = cachedMaterial;

			}

			result = cachedMaterial;

		}

		result.visible = material.visible;
		result.wireframe = material.wireframe;

		var side = material.side;

		if ( scope.renderSingleSided && side == __WEBPACK_IMPORTED_MODULE_0__constants__["_18" /* DoubleSide */] ) {

			side = __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FrontSide */];

		}

		if ( scope.renderReverseSided ) {

			if ( side === __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FrontSide */] ) side = __WEBPACK_IMPORTED_MODULE_0__constants__["_19" /* BackSide */];
			else if ( side === __WEBPACK_IMPORTED_MODULE_0__constants__["_19" /* BackSide */] ) side = __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FrontSide */];

		}

		result.side = side;

		result.clipShadows = material.clipShadows;
		result.clippingPlanes = material.clippingPlanes;

		result.wireframeLinewidth = material.wireframeLinewidth;
		result.linewidth = material.linewidth;

		if ( isPointLight && result.uniforms.lightPos !== undefined ) {

			result.uniforms.lightPos.value.copy( lightPositionWorld );

		}

		return result;

	}

	function renderObject( object, camera, shadowCamera, isPointLight ) {

		if ( object.visible === false ) return;

		var visible = object.layers.test( camera.layers );

		if ( visible && ( object.isMesh || object.isLine || object.isPoints ) ) {

			if ( object.castShadow && ( ! object.frustumCulled || _frustum.intersectsObject( object ) ) ) {

				object.modelViewMatrix.multiplyMatrices( shadowCamera.matrixWorldInverse, object.matrixWorld );

				var geometry = _objects.update( object );
				var material = object.material;

				if ( Array.isArray( material ) ) {

					var groups = geometry.groups;

					for ( var k = 0, kl = groups.length; k < kl; k ++ ) {

						var group = groups[ k ];
						var groupMaterial = material[ group.materialIndex ];

						if ( groupMaterial && groupMaterial.visible ) {

							var depthMaterial = getDepthMaterial( object, groupMaterial, isPointLight, _lightPositionWorld );
							_renderer.renderBufferDirect( shadowCamera, null, geometry, depthMaterial, object, group );

						}

					}

				} else if ( material.visible ) {

					var depthMaterial = getDepthMaterial( object, material, isPointLight, _lightPositionWorld );
					_renderer.renderBufferDirect( shadowCamera, null, geometry, depthMaterial, object, null );

				}

			}

		}

		var children = object.children;

		for ( var i = 0, l = children.length; i < l; i ++ ) {

			renderObject( children[ i ], camera, shadowCamera, isPointLight );

		}

	}

}





/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector4__ = __webpack_require__(10);
/**
 * @author mrdoob / http://mrdoob.com/
 */




function WebGLState( gl, extensions, paramThreeToGL ) {

	function ColorBuffer() {

		var locked = false;

		var color = new __WEBPACK_IMPORTED_MODULE_1__math_Vector4__["a" /* Vector4 */]();
		var currentColorMask = null;
		var currentColorClear = new __WEBPACK_IMPORTED_MODULE_1__math_Vector4__["a" /* Vector4 */]();

		return {

			setMask: function ( colorMask ) {

				if ( currentColorMask !== colorMask && ! locked ) {

					gl.colorMask( colorMask, colorMask, colorMask, colorMask );
					currentColorMask = colorMask;

				}

			},

			setLocked: function ( lock ) {

				locked = lock;

			},

			setClear: function ( r, g, b, a, premultipliedAlpha ) {

				if ( premultipliedAlpha === true ) {

					r *= a; g *= a; b *= a;

				}

				color.set( r, g, b, a );

				if ( currentColorClear.equals( color ) === false ) {

					gl.clearColor( r, g, b, a );
					currentColorClear.copy( color );

				}

			},

			reset: function () {

				locked = false;

				currentColorMask = null;
				currentColorClear.set( 0, 0, 0, 1 );

			}

		};

	}

	function DepthBuffer() {

		var locked = false;

		var currentDepthMask = null;
		var currentDepthFunc = null;
		var currentDepthClear = null;

		return {

			setTest: function ( depthTest ) {

				if ( depthTest ) {

					enable( gl.DEPTH_TEST );

				} else {

					disable( gl.DEPTH_TEST );

				}

			},

			setMask: function ( depthMask ) {

				if ( currentDepthMask !== depthMask && ! locked ) {

					gl.depthMask( depthMask );
					currentDepthMask = depthMask;

				}

			},

			setFunc: function ( depthFunc ) {

				if ( currentDepthFunc !== depthFunc ) {

					if ( depthFunc ) {

						switch ( depthFunc ) {

							case __WEBPACK_IMPORTED_MODULE_0__constants__["_41" /* NeverDepth */]:

								gl.depthFunc( gl.NEVER );
								break;

							case __WEBPACK_IMPORTED_MODULE_0__constants__["_42" /* AlwaysDepth */]:

								gl.depthFunc( gl.ALWAYS );
								break;

							case __WEBPACK_IMPORTED_MODULE_0__constants__["_43" /* LessDepth */]:

								gl.depthFunc( gl.LESS );
								break;

							case __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* LessEqualDepth */]:

								gl.depthFunc( gl.LEQUAL );
								break;

							case __WEBPACK_IMPORTED_MODULE_0__constants__["_44" /* EqualDepth */]:

								gl.depthFunc( gl.EQUAL );
								break;

							case __WEBPACK_IMPORTED_MODULE_0__constants__["_45" /* GreaterEqualDepth */]:

								gl.depthFunc( gl.GEQUAL );
								break;

							case __WEBPACK_IMPORTED_MODULE_0__constants__["_46" /* GreaterDepth */]:

								gl.depthFunc( gl.GREATER );
								break;

							case __WEBPACK_IMPORTED_MODULE_0__constants__["_47" /* NotEqualDepth */]:

								gl.depthFunc( gl.NOTEQUAL );
								break;

							default:

								gl.depthFunc( gl.LEQUAL );

						}

					} else {

						gl.depthFunc( gl.LEQUAL );

					}

					currentDepthFunc = depthFunc;

				}

			},

			setLocked: function ( lock ) {

				locked = lock;

			},

			setClear: function ( depth ) {

				if ( currentDepthClear !== depth ) {

					gl.clearDepth( depth );
					currentDepthClear = depth;

				}

			},

			reset: function () {

				locked = false;

				currentDepthMask = null;
				currentDepthFunc = null;
				currentDepthClear = null;

			}

		};

	}

	function StencilBuffer() {

		var locked = false;

		var currentStencilMask = null;
		var currentStencilFunc = null;
		var currentStencilRef = null;
		var currentStencilFuncMask = null;
		var currentStencilFail = null;
		var currentStencilZFail = null;
		var currentStencilZPass = null;
		var currentStencilClear = null;

		return {

			setTest: function ( stencilTest ) {

				if ( stencilTest ) {

					enable( gl.STENCIL_TEST );

				} else {

					disable( gl.STENCIL_TEST );

				}

			},

			setMask: function ( stencilMask ) {

				if ( currentStencilMask !== stencilMask && ! locked ) {

					gl.stencilMask( stencilMask );
					currentStencilMask = stencilMask;

				}

			},

			setFunc: function ( stencilFunc, stencilRef, stencilMask ) {

				if ( currentStencilFunc !== stencilFunc ||
				     currentStencilRef 	!== stencilRef 	||
				     currentStencilFuncMask !== stencilMask ) {

					gl.stencilFunc( stencilFunc, stencilRef, stencilMask );

					currentStencilFunc = stencilFunc;
					currentStencilRef = stencilRef;
					currentStencilFuncMask = stencilMask;

				}

			},

			setOp: function ( stencilFail, stencilZFail, stencilZPass ) {

				if ( currentStencilFail	 !== stencilFail 	||
				     currentStencilZFail !== stencilZFail ||
				     currentStencilZPass !== stencilZPass ) {

					gl.stencilOp( stencilFail, stencilZFail, stencilZPass );

					currentStencilFail = stencilFail;
					currentStencilZFail = stencilZFail;
					currentStencilZPass = stencilZPass;

				}

			},

			setLocked: function ( lock ) {

				locked = lock;

			},

			setClear: function ( stencil ) {

				if ( currentStencilClear !== stencil ) {

					gl.clearStencil( stencil );
					currentStencilClear = stencil;

				}

			},

			reset: function () {

				locked = false;

				currentStencilMask = null;
				currentStencilFunc = null;
				currentStencilRef = null;
				currentStencilFuncMask = null;
				currentStencilFail = null;
				currentStencilZFail = null;
				currentStencilZPass = null;
				currentStencilClear = null;

			}

		};

	}

	//

	var colorBuffer = new ColorBuffer();
	var depthBuffer = new DepthBuffer();
	var stencilBuffer = new StencilBuffer();

	var maxVertexAttributes = gl.getParameter( gl.MAX_VERTEX_ATTRIBS );
	var newAttributes = new Uint8Array( maxVertexAttributes );
	var enabledAttributes = new Uint8Array( maxVertexAttributes );
	var attributeDivisors = new Uint8Array( maxVertexAttributes );

	var capabilities = {};

	var compressedTextureFormats = null;

	var currentBlending = null;
	var currentBlendEquation = null;
	var currentBlendSrc = null;
	var currentBlendDst = null;
	var currentBlendEquationAlpha = null;
	var currentBlendSrcAlpha = null;
	var currentBlendDstAlpha = null;
	var currentPremultipledAlpha = false;

	var currentFlipSided = null;
	var currentCullFace = null;

	var currentLineWidth = null;

	var currentPolygonOffsetFactor = null;
	var currentPolygonOffsetUnits = null;

	var currentScissorTest = null;

	var maxTextures = gl.getParameter( gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS );

	var version = parseFloat( /^WebGL\ ([0-9])/.exec( gl.getParameter( gl.VERSION ) )[ 1 ] );
	var lineWidthAvailable = parseFloat( version ) >= 1.0;

	var currentTextureSlot = null;
	var currentBoundTextures = {};

	var currentScissor = new __WEBPACK_IMPORTED_MODULE_1__math_Vector4__["a" /* Vector4 */]();
	var currentViewport = new __WEBPACK_IMPORTED_MODULE_1__math_Vector4__["a" /* Vector4 */]();

	function createTexture( type, target, count ) {

		var data = new Uint8Array( 4 ); // 4 is required to match default unpack alignment of 4.
		var texture = gl.createTexture();

		gl.bindTexture( type, texture );
		gl.texParameteri( type, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
		gl.texParameteri( type, gl.TEXTURE_MAG_FILTER, gl.NEAREST );

		for ( var i = 0; i < count; i ++ ) {

			gl.texImage2D( target + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, data );

		}

		return texture;

	}

	var emptyTextures = {};
	emptyTextures[ gl.TEXTURE_2D ] = createTexture( gl.TEXTURE_2D, gl.TEXTURE_2D, 1 );
	emptyTextures[ gl.TEXTURE_CUBE_MAP ] = createTexture( gl.TEXTURE_CUBE_MAP, gl.TEXTURE_CUBE_MAP_POSITIVE_X, 6 );

	//

	function init() {

		colorBuffer.setClear( 0, 0, 0, 1 );
		depthBuffer.setClear( 1 );
		stencilBuffer.setClear( 0 );

		enable( gl.DEPTH_TEST );
		depthBuffer.setFunc( __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* LessEqualDepth */] );

		setFlipSided( false );
		setCullFace( __WEBPACK_IMPORTED_MODULE_0__constants__["_48" /* CullFaceBack */] );
		enable( gl.CULL_FACE );

		enable( gl.BLEND );
		setBlending( __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* NormalBlending */] );

	}

	function initAttributes() {

		for ( var i = 0, l = newAttributes.length; i < l; i ++ ) {

			newAttributes[ i ] = 0;

		}

	}

	function enableAttribute( attribute ) {

		newAttributes[ attribute ] = 1;

		if ( enabledAttributes[ attribute ] === 0 ) {

			gl.enableVertexAttribArray( attribute );
			enabledAttributes[ attribute ] = 1;

		}

		if ( attributeDivisors[ attribute ] !== 0 ) {

			var extension = extensions.get( 'ANGLE_instanced_arrays' );

			extension.vertexAttribDivisorANGLE( attribute, 0 );
			attributeDivisors[ attribute ] = 0;

		}

	}

	function enableAttributeAndDivisor( attribute, meshPerAttribute ) {

		newAttributes[ attribute ] = 1;

		if ( enabledAttributes[ attribute ] === 0 ) {

			gl.enableVertexAttribArray( attribute );
			enabledAttributes[ attribute ] = 1;

		}

		if ( attributeDivisors[ attribute ] !== meshPerAttribute ) {

			var extension = extensions.get( 'ANGLE_instanced_arrays' );

			extension.vertexAttribDivisorANGLE( attribute, meshPerAttribute );
			attributeDivisors[ attribute ] = meshPerAttribute;

		}

	}

	function disableUnusedAttributes() {

		for ( var i = 0, l = enabledAttributes.length; i !== l; ++ i ) {

			if ( enabledAttributes[ i ] !== newAttributes[ i ] ) {

				gl.disableVertexAttribArray( i );
				enabledAttributes[ i ] = 0;

			}

		}

	}

	function enable( id ) {

		if ( capabilities[ id ] !== true ) {

			gl.enable( id );
			capabilities[ id ] = true;

		}

	}

	function disable( id ) {

		if ( capabilities[ id ] !== false ) {

			gl.disable( id );
			capabilities[ id ] = false;

		}

	}

	function getCompressedTextureFormats() {

		if ( compressedTextureFormats === null ) {

			compressedTextureFormats = [];

			if ( extensions.get( 'WEBGL_compressed_texture_pvrtc' ) ||
			     extensions.get( 'WEBGL_compressed_texture_s3tc' ) ||
			     extensions.get( 'WEBGL_compressed_texture_etc1' ) ) {

				var formats = gl.getParameter( gl.COMPRESSED_TEXTURE_FORMATS );

				for ( var i = 0; i < formats.length; i ++ ) {

					compressedTextureFormats.push( formats[ i ] );

				}

			}

		}

		return compressedTextureFormats;

	}

	function setBlending( blending, blendEquation, blendSrc, blendDst, blendEquationAlpha, blendSrcAlpha, blendDstAlpha, premultipliedAlpha ) {

		if ( blending !== __WEBPACK_IMPORTED_MODULE_0__constants__["_49" /* NoBlending */] ) {

			enable( gl.BLEND );

		} else {

			disable( gl.BLEND );

		}

		if ( ( blending !== __WEBPACK_IMPORTED_MODULE_0__constants__["_50" /* CustomBlending */] ) && ( blending !== currentBlending || premultipliedAlpha !== currentPremultipledAlpha ) ) {

			if ( blending === __WEBPACK_IMPORTED_MODULE_0__constants__["_51" /* AdditiveBlending */] ) {

				if ( premultipliedAlpha ) {

					gl.blendEquationSeparate( gl.FUNC_ADD, gl.FUNC_ADD );
					gl.blendFuncSeparate( gl.ONE, gl.ONE, gl.ONE, gl.ONE );

				} else {

					gl.blendEquation( gl.FUNC_ADD );
					gl.blendFunc( gl.SRC_ALPHA, gl.ONE );

				}

			} else if ( blending === __WEBPACK_IMPORTED_MODULE_0__constants__["_52" /* SubtractiveBlending */] ) {

				if ( premultipliedAlpha ) {

					gl.blendEquationSeparate( gl.FUNC_ADD, gl.FUNC_ADD );
					gl.blendFuncSeparate( gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA );

				} else {

					gl.blendEquation( gl.FUNC_ADD );
					gl.blendFunc( gl.ZERO, gl.ONE_MINUS_SRC_COLOR );

				}

			} else if ( blending === __WEBPACK_IMPORTED_MODULE_0__constants__["_53" /* MultiplyBlending */] ) {

				if ( premultipliedAlpha ) {

					gl.blendEquationSeparate( gl.FUNC_ADD, gl.FUNC_ADD );
					gl.blendFuncSeparate( gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA );

				} else {

					gl.blendEquation( gl.FUNC_ADD );
					gl.blendFunc( gl.ZERO, gl.SRC_COLOR );

				}

			} else {

				if ( premultipliedAlpha ) {

					gl.blendEquationSeparate( gl.FUNC_ADD, gl.FUNC_ADD );
					gl.blendFuncSeparate( gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA );

				} else {

					gl.blendEquationSeparate( gl.FUNC_ADD, gl.FUNC_ADD );
					gl.blendFuncSeparate( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA );

				}

			}

			currentBlending = blending;
			currentPremultipledAlpha = premultipliedAlpha;

		}

		if ( blending === __WEBPACK_IMPORTED_MODULE_0__constants__["_50" /* CustomBlending */] ) {

			blendEquationAlpha = blendEquationAlpha || blendEquation;
			blendSrcAlpha = blendSrcAlpha || blendSrc;
			blendDstAlpha = blendDstAlpha || blendDst;

			if ( blendEquation !== currentBlendEquation || blendEquationAlpha !== currentBlendEquationAlpha ) {

				gl.blendEquationSeparate( paramThreeToGL( blendEquation ), paramThreeToGL( blendEquationAlpha ) );

				currentBlendEquation = blendEquation;
				currentBlendEquationAlpha = blendEquationAlpha;

			}

			if ( blendSrc !== currentBlendSrc || blendDst !== currentBlendDst || blendSrcAlpha !== currentBlendSrcAlpha || blendDstAlpha !== currentBlendDstAlpha ) {

				gl.blendFuncSeparate( paramThreeToGL( blendSrc ), paramThreeToGL( blendDst ), paramThreeToGL( blendSrcAlpha ), paramThreeToGL( blendDstAlpha ) );

				currentBlendSrc = blendSrc;
				currentBlendDst = blendDst;
				currentBlendSrcAlpha = blendSrcAlpha;
				currentBlendDstAlpha = blendDstAlpha;

			}

		} else {

			currentBlendEquation = null;
			currentBlendSrc = null;
			currentBlendDst = null;
			currentBlendEquationAlpha = null;
			currentBlendSrcAlpha = null;
			currentBlendDstAlpha = null;

		}

	}

	function setMaterial( material ) {

		material.side === __WEBPACK_IMPORTED_MODULE_0__constants__["_18" /* DoubleSide */]
			? disable( gl.CULL_FACE )
			: enable( gl.CULL_FACE );

		setFlipSided( material.side === __WEBPACK_IMPORTED_MODULE_0__constants__["_19" /* BackSide */] );

		material.transparent === true
			? setBlending( material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha, material.premultipliedAlpha )
			: setBlending( __WEBPACK_IMPORTED_MODULE_0__constants__["_49" /* NoBlending */] );

		depthBuffer.setFunc( material.depthFunc );
		depthBuffer.setTest( material.depthTest );
		depthBuffer.setMask( material.depthWrite );
		colorBuffer.setMask( material.colorWrite );

		setPolygonOffset( material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits );

	}

	//

	function setFlipSided( flipSided ) {

		if ( currentFlipSided !== flipSided ) {

			if ( flipSided ) {

				gl.frontFace( gl.CW );

			} else {

				gl.frontFace( gl.CCW );

			}

			currentFlipSided = flipSided;

		}

	}

	function setCullFace( cullFace ) {

		if ( cullFace !== __WEBPACK_IMPORTED_MODULE_0__constants__["_54" /* CullFaceNone */] ) {

			enable( gl.CULL_FACE );

			if ( cullFace !== currentCullFace ) {

				if ( cullFace === __WEBPACK_IMPORTED_MODULE_0__constants__["_48" /* CullFaceBack */] ) {

					gl.cullFace( gl.BACK );

				} else if ( cullFace === __WEBPACK_IMPORTED_MODULE_0__constants__["_55" /* CullFaceFront */] ) {

					gl.cullFace( gl.FRONT );

				} else {

					gl.cullFace( gl.FRONT_AND_BACK );

				}

			}

		} else {

			disable( gl.CULL_FACE );

		}

		currentCullFace = cullFace;

	}

	function setLineWidth( width ) {

		if ( width !== currentLineWidth ) {

			if ( lineWidthAvailable ) gl.lineWidth( width );

			currentLineWidth = width;

		}

	}

	function setPolygonOffset( polygonOffset, factor, units ) {

		if ( polygonOffset ) {

			enable( gl.POLYGON_OFFSET_FILL );

			if ( currentPolygonOffsetFactor !== factor || currentPolygonOffsetUnits !== units ) {

				gl.polygonOffset( factor, units );

				currentPolygonOffsetFactor = factor;
				currentPolygonOffsetUnits = units;

			}

		} else {

			disable( gl.POLYGON_OFFSET_FILL );

		}

	}

	function getScissorTest() {

		return currentScissorTest;

	}

	function setScissorTest( scissorTest ) {

		currentScissorTest = scissorTest;

		if ( scissorTest ) {

			enable( gl.SCISSOR_TEST );

		} else {

			disable( gl.SCISSOR_TEST );

		}

	}

	// texture

	function activeTexture( webglSlot ) {

		if ( webglSlot === undefined ) webglSlot = gl.TEXTURE0 + maxTextures - 1;

		if ( currentTextureSlot !== webglSlot ) {

			gl.activeTexture( webglSlot );
			currentTextureSlot = webglSlot;

		}

	}

	function bindTexture( webglType, webglTexture ) {

		if ( currentTextureSlot === null ) {

			activeTexture();

		}

		var boundTexture = currentBoundTextures[ currentTextureSlot ];

		if ( boundTexture === undefined ) {

			boundTexture = { type: undefined, texture: undefined };
			currentBoundTextures[ currentTextureSlot ] = boundTexture;

		}

		if ( boundTexture.type !== webglType || boundTexture.texture !== webglTexture ) {

			gl.bindTexture( webglType, webglTexture || emptyTextures[ webglType ] );

			boundTexture.type = webglType;
			boundTexture.texture = webglTexture;

		}

	}

	function compressedTexImage2D() {

		try {

			gl.compressedTexImage2D.apply( gl, arguments );

		} catch ( error ) {

			console.error( 'THREE.WebGLState:', error );

		}

	}

	function texImage2D() {

		try {

			gl.texImage2D.apply( gl, arguments );

		} catch ( error ) {

			console.error( 'THREE.WebGLState:', error );

		}

	}

	//

	function scissor( scissor ) {

		if ( currentScissor.equals( scissor ) === false ) {

			gl.scissor( scissor.x, scissor.y, scissor.z, scissor.w );
			currentScissor.copy( scissor );

		}

	}

	function viewport( viewport ) {

		if ( currentViewport.equals( viewport ) === false ) {

			gl.viewport( viewport.x, viewport.y, viewport.z, viewport.w );
			currentViewport.copy( viewport );

		}

	}

	//

	function reset() {

		for ( var i = 0; i < enabledAttributes.length; i ++ ) {

			if ( enabledAttributes[ i ] === 1 ) {

				gl.disableVertexAttribArray( i );
				enabledAttributes[ i ] = 0;

			}

		}

		capabilities = {};

		compressedTextureFormats = null;

		currentTextureSlot = null;
		currentBoundTextures = {};

		currentBlending = null;

		currentFlipSided = null;
		currentCullFace = null;

		colorBuffer.reset();
		depthBuffer.reset();
		stencilBuffer.reset();

	}

	return {

		buffers: {
			color: colorBuffer,
			depth: depthBuffer,
			stencil: stencilBuffer
		},

		init: init,
		initAttributes: initAttributes,
		enableAttribute: enableAttribute,
		enableAttributeAndDivisor: enableAttributeAndDivisor,
		disableUnusedAttributes: disableUnusedAttributes,
		enable: enable,
		disable: disable,
		getCompressedTextureFormats: getCompressedTextureFormats,

		setBlending: setBlending,
		setMaterial: setMaterial,

		setFlipSided: setFlipSided,
		setCullFace: setCullFace,

		setLineWidth: setLineWidth,
		setPolygonOffset: setPolygonOffset,

		getScissorTest: getScissorTest,
		setScissorTest: setScissorTest,

		activeTexture: activeTexture,
		bindTexture: bindTexture,
		compressedTexImage2D: compressedTexImage2D,
		texImage2D: texImage2D,

		scissor: scissor,
		viewport: viewport,

		reset: reset

	};

}





/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebGLTextures; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Math__ = __webpack_require__(5);
/**
 * @author mrdoob / http://mrdoob.com/
 */




function WebGLTextures( _gl, extensions, state, properties, capabilities, paramThreeToGL, infoMemory ) {

	var _isWebGL2 = ( typeof WebGL2RenderingContext !== 'undefined' && _gl instanceof WebGL2RenderingContext );

	//

	function clampToMaxSize( image, maxSize ) {

		if ( image.width > maxSize || image.height > maxSize ) {

			// Warning: Scaling through the canvas will only work with images that use
			// premultiplied alpha.

			var scale = maxSize / Math.max( image.width, image.height );

			var canvas = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
			canvas.width = Math.floor( image.width * scale );
			canvas.height = Math.floor( image.height * scale );

			var context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height );

			console.warn( 'THREE.WebGLRenderer: image is too big (' + image.width + 'x' + image.height + '). Resized to ' + canvas.width + 'x' + canvas.height, image );

			return canvas;

		}

		return image;

	}

	function isPowerOfTwo( image ) {

		return __WEBPACK_IMPORTED_MODULE_1__math_Math__["a" /* _Math */].isPowerOfTwo( image.width ) && __WEBPACK_IMPORTED_MODULE_1__math_Math__["a" /* _Math */].isPowerOfTwo( image.height );

	}

	function makePowerOfTwo( image ) {

		if ( image instanceof HTMLImageElement || image instanceof HTMLCanvasElement ) {

			var canvas = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
			canvas.width = __WEBPACK_IMPORTED_MODULE_1__math_Math__["a" /* _Math */].nearestPowerOfTwo( image.width );
			canvas.height = __WEBPACK_IMPORTED_MODULE_1__math_Math__["a" /* _Math */].nearestPowerOfTwo( image.height );

			var context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, canvas.width, canvas.height );

			console.warn( 'THREE.WebGLRenderer: image is not power of two (' + image.width + 'x' + image.height + '). Resized to ' + canvas.width + 'x' + canvas.height, image );

			return canvas;

		}

		return image;

	}

	function textureNeedsPowerOfTwo( texture ) {

		return ( texture.wrapS !== __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* ClampToEdgeWrapping */] || texture.wrapT !== __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* ClampToEdgeWrapping */] ) ||
			( texture.minFilter !== __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* NearestFilter */] && texture.minFilter !== __WEBPACK_IMPORTED_MODULE_0__constants__["z" /* LinearFilter */] );

	}

	function textureNeedsGenerateMipmaps( texture, isPowerOfTwo ) {

		return texture.generateMipmaps && isPowerOfTwo &&
			texture.minFilter !== __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* NearestFilter */] && texture.minFilter !== __WEBPACK_IMPORTED_MODULE_0__constants__["z" /* LinearFilter */];

	}

	// Fallback filters for non-power-of-2 textures

	function filterFallback( f ) {

		if ( f === __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* NearestFilter */] || f === __WEBPACK_IMPORTED_MODULE_0__constants__["x" /* NearestMipMapNearestFilter */] || f === __WEBPACK_IMPORTED_MODULE_0__constants__["y" /* NearestMipMapLinearFilter */] ) {

			return _gl.NEAREST;

		}

		return _gl.LINEAR;

	}

	//

	function onTextureDispose( event ) {

		var texture = event.target;

		texture.removeEventListener( 'dispose', onTextureDispose );

		deallocateTexture( texture );

		infoMemory.textures --;


	}

	function onRenderTargetDispose( event ) {

		var renderTarget = event.target;

		renderTarget.removeEventListener( 'dispose', onRenderTargetDispose );

		deallocateRenderTarget( renderTarget );

		infoMemory.textures --;

	}

	//

	function deallocateTexture( texture ) {

		var textureProperties = properties.get( texture );

		if ( texture.image && textureProperties.__image__webglTextureCube ) {

			// cube texture

			_gl.deleteTexture( textureProperties.__image__webglTextureCube );

		} else {

			// 2D texture

			if ( textureProperties.__webglInit === undefined ) return;

			_gl.deleteTexture( textureProperties.__webglTexture );

		}

		// remove all webgl properties
		properties.remove( texture );

	}

	function deallocateRenderTarget( renderTarget ) {

		var renderTargetProperties = properties.get( renderTarget );
		var textureProperties = properties.get( renderTarget.texture );

		if ( ! renderTarget ) return;

		if ( textureProperties.__webglTexture !== undefined ) {

			_gl.deleteTexture( textureProperties.__webglTexture );

		}

		if ( renderTarget.depthTexture ) {

			renderTarget.depthTexture.dispose();

		}

		if ( renderTarget.isWebGLRenderTargetCube ) {

			for ( var i = 0; i < 6; i ++ ) {

				_gl.deleteFramebuffer( renderTargetProperties.__webglFramebuffer[ i ] );
				if ( renderTargetProperties.__webglDepthbuffer ) _gl.deleteRenderbuffer( renderTargetProperties.__webglDepthbuffer[ i ] );

			}

		} else {

			_gl.deleteFramebuffer( renderTargetProperties.__webglFramebuffer );
			if ( renderTargetProperties.__webglDepthbuffer ) _gl.deleteRenderbuffer( renderTargetProperties.__webglDepthbuffer );

		}

		properties.remove( renderTarget.texture );
		properties.remove( renderTarget );

	}

	//



	function setTexture2D( texture, slot ) {

		var textureProperties = properties.get( texture );

		if ( texture.version > 0 && textureProperties.__version !== texture.version ) {

			var image = texture.image;

			if ( image === undefined ) {

				console.warn( 'THREE.WebGLRenderer: Texture marked for update but image is undefined', texture );

			} else if ( image.complete === false ) {

				console.warn( 'THREE.WebGLRenderer: Texture marked for update but image is incomplete', texture );

			} else {

				uploadTexture( textureProperties, texture, slot );
				return;

			}

		}

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( _gl.TEXTURE_2D, textureProperties.__webglTexture );

	}

	function setTextureCube( texture, slot ) {

		var textureProperties = properties.get( texture );

		if ( texture.image.length === 6 ) {

			if ( texture.version > 0 && textureProperties.__version !== texture.version ) {

				if ( ! textureProperties.__image__webglTextureCube ) {

					texture.addEventListener( 'dispose', onTextureDispose );

					textureProperties.__image__webglTextureCube = _gl.createTexture();

					infoMemory.textures ++;

				}

				state.activeTexture( _gl.TEXTURE0 + slot );
				state.bindTexture( _gl.TEXTURE_CUBE_MAP, textureProperties.__image__webglTextureCube );

				_gl.pixelStorei( _gl.UNPACK_FLIP_Y_WEBGL, texture.flipY );

				var isCompressed = ( texture && texture.isCompressedTexture );
				var isDataTexture = ( texture.image[ 0 ] && texture.image[ 0 ].isDataTexture );

				var cubeImage = [];

				for ( var i = 0; i < 6; i ++ ) {

					if ( ! isCompressed && ! isDataTexture ) {

						cubeImage[ i ] = clampToMaxSize( texture.image[ i ], capabilities.maxCubemapSize );

					} else {

						cubeImage[ i ] = isDataTexture ? texture.image[ i ].image : texture.image[ i ];

					}

				}

				var image = cubeImage[ 0 ],
				isPowerOfTwoImage = isPowerOfTwo( image ),
				glFormat = paramThreeToGL( texture.format ),
				glType = paramThreeToGL( texture.type );

				setTextureParameters( _gl.TEXTURE_CUBE_MAP, texture, isPowerOfTwoImage );

				for ( var i = 0; i < 6; i ++ ) {

					if ( ! isCompressed ) {

						if ( isDataTexture ) {

							state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, cubeImage[ i ].width, cubeImage[ i ].height, 0, glFormat, glType, cubeImage[ i ].data );

						} else {

							state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, glFormat, glType, cubeImage[ i ] );

						}

					} else {

						var mipmap, mipmaps = cubeImage[ i ].mipmaps;

						for ( var j = 0, jl = mipmaps.length; j < jl; j ++ ) {

							mipmap = mipmaps[ j ];

							if ( texture.format !== __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* RGBAFormat */] && texture.format !== __WEBPACK_IMPORTED_MODULE_0__constants__["L" /* RGBFormat */] ) {

								if ( state.getCompressedTextureFormats().indexOf( glFormat ) > - 1 ) {

									state.compressedTexImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, mipmap.data );

								} else {

									console.warn( "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()" );

								}

							} else {

								state.texImage2D( _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

							}

						}

					}

				}

				if ( textureNeedsGenerateMipmaps( texture, isPowerOfTwoImage ) ) {

					_gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );

				}

				textureProperties.__version = texture.version;

				if ( texture.onUpdate ) texture.onUpdate( texture );

			} else {

				state.activeTexture( _gl.TEXTURE0 + slot );
				state.bindTexture( _gl.TEXTURE_CUBE_MAP, textureProperties.__image__webglTextureCube );

			}

		}

	}

	function setTextureCubeDynamic( texture, slot ) {

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( _gl.TEXTURE_CUBE_MAP, properties.get( texture ).__webglTexture );

	}

	function setTextureParameters( textureType, texture, isPowerOfTwoImage ) {

		var extension;

		if ( isPowerOfTwoImage ) {

			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_S, paramThreeToGL( texture.wrapS ) );
			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_T, paramThreeToGL( texture.wrapT ) );

			_gl.texParameteri( textureType, _gl.TEXTURE_MAG_FILTER, paramThreeToGL( texture.magFilter ) );
			_gl.texParameteri( textureType, _gl.TEXTURE_MIN_FILTER, paramThreeToGL( texture.minFilter ) );

		} else {

			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE );
			_gl.texParameteri( textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE );

			if ( texture.wrapS !== __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* ClampToEdgeWrapping */] || texture.wrapT !== __WEBPACK_IMPORTED_MODULE_0__constants__["u" /* ClampToEdgeWrapping */] ) {

				console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.', texture );

			}

			_gl.texParameteri( textureType, _gl.TEXTURE_MAG_FILTER, filterFallback( texture.magFilter ) );
			_gl.texParameteri( textureType, _gl.TEXTURE_MIN_FILTER, filterFallback( texture.minFilter ) );

			if ( texture.minFilter !== __WEBPACK_IMPORTED_MODULE_0__constants__["w" /* NearestFilter */] && texture.minFilter !== __WEBPACK_IMPORTED_MODULE_0__constants__["z" /* LinearFilter */] ) {

				console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.', texture );

			}

		}

		extension = extensions.get( 'EXT_texture_filter_anisotropic' );

		if ( extension ) {

			if ( texture.type === __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* FloatType */] && extensions.get( 'OES_texture_float_linear' ) === null ) return;
			if ( texture.type === __WEBPACK_IMPORTED_MODULE_0__constants__["s" /* HalfFloatType */] && extensions.get( 'OES_texture_half_float_linear' ) === null ) return;

			if ( texture.anisotropy > 1 || properties.get( texture ).__currentAnisotropy ) {

				_gl.texParameterf( textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min( texture.anisotropy, capabilities.getMaxAnisotropy() ) );
				properties.get( texture ).__currentAnisotropy = texture.anisotropy;

			}

		}

	}

	function uploadTexture( textureProperties, texture, slot ) {

		if ( textureProperties.__webglInit === undefined ) {

			textureProperties.__webglInit = true;

			texture.addEventListener( 'dispose', onTextureDispose );

			textureProperties.__webglTexture = _gl.createTexture();

			infoMemory.textures ++;

		}

		state.activeTexture( _gl.TEXTURE0 + slot );
		state.bindTexture( _gl.TEXTURE_2D, textureProperties.__webglTexture );

		_gl.pixelStorei( _gl.UNPACK_FLIP_Y_WEBGL, texture.flipY );
		_gl.pixelStorei( _gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha );
		_gl.pixelStorei( _gl.UNPACK_ALIGNMENT, texture.unpackAlignment );

		var image = clampToMaxSize( texture.image, capabilities.maxTextureSize );

		if ( textureNeedsPowerOfTwo( texture ) && isPowerOfTwo( image ) === false ) {

			image = makePowerOfTwo( image );

		}

		var isPowerOfTwoImage = isPowerOfTwo( image ),
		glFormat = paramThreeToGL( texture.format ),
		glType = paramThreeToGL( texture.type );

		setTextureParameters( _gl.TEXTURE_2D, texture, isPowerOfTwoImage );

		var mipmap, mipmaps = texture.mipmaps;

		if ( texture.isDepthTexture ) {

			// populate depth texture with dummy data

			var internalFormat = _gl.DEPTH_COMPONENT;

			if ( texture.type === __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* FloatType */] ) {

				if ( !_isWebGL2 ) throw new Error('Float Depth Texture only supported in WebGL2.0');
				internalFormat = _gl.DEPTH_COMPONENT32F;

			} else if ( _isWebGL2 ) {

				// WebGL 2.0 requires signed internalformat for glTexImage2D
				internalFormat = _gl.DEPTH_COMPONENT16;

			}

			if ( texture.format === __WEBPACK_IMPORTED_MODULE_0__constants__["O" /* DepthFormat */] && internalFormat === _gl.DEPTH_COMPONENT ) {

				// The error INVALID_OPERATION is generated by texImage2D if format and internalformat are
				// DEPTH_COMPONENT and type is not UNSIGNED_SHORT or UNSIGNED_INT
				// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
				if ( texture.type !== __WEBPACK_IMPORTED_MODULE_0__constants__["H" /* UnsignedShortType */] && texture.type !== __WEBPACK_IMPORTED_MODULE_0__constants__["J" /* UnsignedIntType */] ) {

				        console.warn( 'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.' );

					texture.type = __WEBPACK_IMPORTED_MODULE_0__constants__["H" /* UnsignedShortType */];
					glType = paramThreeToGL( texture.type );

				}

			}

			// Depth stencil textures need the DEPTH_STENCIL internal format
			// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
			if ( texture.format === __WEBPACK_IMPORTED_MODULE_0__constants__["P" /* DepthStencilFormat */] ) {

				internalFormat = _gl.DEPTH_STENCIL;

				// The error INVALID_OPERATION is generated by texImage2D if format and internalformat are
				// DEPTH_STENCIL and type is not UNSIGNED_INT_24_8_WEBGL.
				// (https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/)
				if ( texture.type !== __WEBPACK_IMPORTED_MODULE_0__constants__["_12" /* UnsignedInt248Type */] ) {

					console.warn( 'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.' );

					texture.type = __WEBPACK_IMPORTED_MODULE_0__constants__["_12" /* UnsignedInt248Type */];
					glType = paramThreeToGL( texture.type );

				}

			}

			state.texImage2D( _gl.TEXTURE_2D, 0, internalFormat, image.width, image.height, 0, glFormat, glType, null );

		} else if ( texture.isDataTexture ) {

			// use manually created mipmaps if available
			// if there are no manual mipmaps
			// set 0 level mipmap and then use GL to generate other mipmap levels

			if ( mipmaps.length > 0 && isPowerOfTwoImage ) {

				for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

					mipmap = mipmaps[ i ];
					state.texImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

				}

				texture.generateMipmaps = false;

			} else {

				state.texImage2D( _gl.TEXTURE_2D, 0, glFormat, image.width, image.height, 0, glFormat, glType, image.data );

			}

		} else if ( texture.isCompressedTexture ) {

			for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

				mipmap = mipmaps[ i ];

				if ( texture.format !== __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* RGBAFormat */] && texture.format !== __WEBPACK_IMPORTED_MODULE_0__constants__["L" /* RGBFormat */] ) {

					if ( state.getCompressedTextureFormats().indexOf( glFormat ) > - 1 ) {

						state.compressedTexImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, mipmap.data );

					} else {

						console.warn( "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()" );

					}

				} else {

					state.texImage2D( _gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data );

				}

			}

		} else {

			// regular Texture (image, video, canvas)

			// use manually created mipmaps if available
			// if there are no manual mipmaps
			// set 0 level mipmap and then use GL to generate other mipmap levels

			if ( mipmaps.length > 0 && isPowerOfTwoImage ) {

				for ( var i = 0, il = mipmaps.length; i < il; i ++ ) {

					mipmap = mipmaps[ i ];
					state.texImage2D( _gl.TEXTURE_2D, i, glFormat, glFormat, glType, mipmap );

				}

				texture.generateMipmaps = false;

			} else {

				state.texImage2D( _gl.TEXTURE_2D, 0, glFormat, glFormat, glType, image );

			}

		}

		if ( textureNeedsGenerateMipmaps( texture, isPowerOfTwoImage ) ) _gl.generateMipmap( _gl.TEXTURE_2D );

		textureProperties.__version = texture.version;

		if ( texture.onUpdate ) texture.onUpdate( texture );

	}

	// Render targets

	// Setup storage for target texture and bind it to correct framebuffer
	function setupFrameBufferTexture( framebuffer, renderTarget, attachment, textureTarget ) {

		var glFormat = paramThreeToGL( renderTarget.texture.format );
		var glType = paramThreeToGL( renderTarget.texture.type );
		state.texImage2D( textureTarget, 0, glFormat, renderTarget.width, renderTarget.height, 0, glFormat, glType, null );
		_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );
		_gl.framebufferTexture2D( _gl.FRAMEBUFFER, attachment, textureTarget, properties.get( renderTarget.texture ).__webglTexture, 0 );
		_gl.bindFramebuffer( _gl.FRAMEBUFFER, null );

	}

	// Setup storage for internal depth/stencil buffers and bind to correct framebuffer
	function setupRenderBufferStorage( renderbuffer, renderTarget ) {

		_gl.bindRenderbuffer( _gl.RENDERBUFFER, renderbuffer );

		if ( renderTarget.depthBuffer && ! renderTarget.stencilBuffer ) {

			_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.DEPTH_COMPONENT16, renderTarget.width, renderTarget.height );
			_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer );

		} else if ( renderTarget.depthBuffer && renderTarget.stencilBuffer ) {

			_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.DEPTH_STENCIL, renderTarget.width, renderTarget.height );
			_gl.framebufferRenderbuffer( _gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer );

		} else {

			// FIXME: We don't support !depth !stencil
			_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.RGBA4, renderTarget.width, renderTarget.height );

		}

		_gl.bindRenderbuffer( _gl.RENDERBUFFER, null );

	}

	// Setup resources for a Depth Texture for a FBO (needs an extension)
	function setupDepthTexture( framebuffer, renderTarget ) {

		var isCube = ( renderTarget && renderTarget.isWebGLRenderTargetCube );
		if ( isCube ) throw new Error('Depth Texture with cube render targets is not supported!');

		_gl.bindFramebuffer( _gl.FRAMEBUFFER, framebuffer );

		if ( !( renderTarget.depthTexture && renderTarget.depthTexture.isDepthTexture ) ) {

			throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');

		}

		// upload an empty depth texture with framebuffer size
		if ( !properties.get( renderTarget.depthTexture ).__webglTexture ||
				renderTarget.depthTexture.image.width !== renderTarget.width ||
				renderTarget.depthTexture.image.height !== renderTarget.height ) {
			renderTarget.depthTexture.image.width = renderTarget.width;
			renderTarget.depthTexture.image.height = renderTarget.height;
			renderTarget.depthTexture.needsUpdate = true;
		}

		setTexture2D( renderTarget.depthTexture, 0 );

		var webglDepthTexture = properties.get( renderTarget.depthTexture ).__webglTexture;

		if ( renderTarget.depthTexture.format === __WEBPACK_IMPORTED_MODULE_0__constants__["O" /* DepthFormat */] ) {

			_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0 );

		} else if ( renderTarget.depthTexture.format === __WEBPACK_IMPORTED_MODULE_0__constants__["P" /* DepthStencilFormat */] ) {

			_gl.framebufferTexture2D( _gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.TEXTURE_2D, webglDepthTexture, 0 );

		} else {

			throw new Error('Unknown depthTexture format')

		}

	}

	// Setup GL resources for a non-texture depth buffer
	function setupDepthRenderbuffer( renderTarget ) {

		var renderTargetProperties = properties.get( renderTarget );

		var isCube = ( renderTarget.isWebGLRenderTargetCube === true );

		if ( renderTarget.depthTexture ) {

			if ( isCube ) throw new Error('target.depthTexture not supported in Cube render targets');

			setupDepthTexture( renderTargetProperties.__webglFramebuffer, renderTarget );

		} else {

			if ( isCube ) {

				renderTargetProperties.__webglDepthbuffer = [];

				for ( var i = 0; i < 6; i ++ ) {

					_gl.bindFramebuffer( _gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer[ i ] );
					renderTargetProperties.__webglDepthbuffer[ i ] = _gl.createRenderbuffer();
					setupRenderBufferStorage( renderTargetProperties.__webglDepthbuffer[ i ], renderTarget );

				}

			} else {

				_gl.bindFramebuffer( _gl.FRAMEBUFFER, renderTargetProperties.__webglFramebuffer );
				renderTargetProperties.__webglDepthbuffer = _gl.createRenderbuffer();
				setupRenderBufferStorage( renderTargetProperties.__webglDepthbuffer, renderTarget );

			}

		}

		_gl.bindFramebuffer( _gl.FRAMEBUFFER, null );

	}

	// Set up GL resources for the render target
	function setupRenderTarget( renderTarget ) {

		var renderTargetProperties = properties.get( renderTarget );
		var textureProperties = properties.get( renderTarget.texture );

		renderTarget.addEventListener( 'dispose', onRenderTargetDispose );

		textureProperties.__webglTexture = _gl.createTexture();

		infoMemory.textures ++;

		var isCube = ( renderTarget.isWebGLRenderTargetCube === true );
		var isTargetPowerOfTwo = isPowerOfTwo( renderTarget );

		// Setup framebuffer

		if ( isCube ) {

			renderTargetProperties.__webglFramebuffer = [];

			for ( var i = 0; i < 6; i ++ ) {

				renderTargetProperties.__webglFramebuffer[ i ] = _gl.createFramebuffer();

			}

		} else {

			renderTargetProperties.__webglFramebuffer = _gl.createFramebuffer();

		}

		// Setup color buffer

		if ( isCube ) {

			state.bindTexture( _gl.TEXTURE_CUBE_MAP, textureProperties.__webglTexture );
			setTextureParameters( _gl.TEXTURE_CUBE_MAP, renderTarget.texture, isTargetPowerOfTwo );

			for ( var i = 0; i < 6; i ++ ) {

				setupFrameBufferTexture( renderTargetProperties.__webglFramebuffer[ i ], renderTarget, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_CUBE_MAP_POSITIVE_X + i );

			}

			if ( textureNeedsGenerateMipmaps( renderTarget.texture, isTargetPowerOfTwo ) ) _gl.generateMipmap( _gl.TEXTURE_CUBE_MAP );
			state.bindTexture( _gl.TEXTURE_CUBE_MAP, null );

		} else {

			state.bindTexture( _gl.TEXTURE_2D, textureProperties.__webglTexture );
			setTextureParameters( _gl.TEXTURE_2D, renderTarget.texture, isTargetPowerOfTwo );
			setupFrameBufferTexture( renderTargetProperties.__webglFramebuffer, renderTarget, _gl.COLOR_ATTACHMENT0, _gl.TEXTURE_2D );

			if ( textureNeedsGenerateMipmaps( renderTarget.texture, isTargetPowerOfTwo ) ) _gl.generateMipmap( _gl.TEXTURE_2D );
			state.bindTexture( _gl.TEXTURE_2D, null );

		}

		// Setup depth and stencil buffers

		if ( renderTarget.depthBuffer ) {

			setupDepthRenderbuffer( renderTarget );

		}

	}

	function updateRenderTargetMipmap( renderTarget ) {

		var texture = renderTarget.texture;
		var isTargetPowerOfTwo = isPowerOfTwo( renderTarget );

		if ( textureNeedsGenerateMipmaps( texture, isTargetPowerOfTwo ) ) {

			var target = renderTarget.isWebGLRenderTargetCube ? _gl.TEXTURE_CUBE_MAP : _gl.TEXTURE_2D;
			var webglTexture = properties.get( texture ).__webglTexture;

			state.bindTexture( target, webglTexture );
			_gl.generateMipmap( target );
			state.bindTexture( target, null );

		}

	}

	this.setTexture2D = setTexture2D;
	this.setTextureCube = setTextureCube;
	this.setTextureCubeDynamic = setTextureCubeDynamic;
	this.setupRenderTarget = setupRenderTarget;
	this.updateRenderTargetMipmap = updateRenderTargetMipmap;

}





/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LensFlarePlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Box2__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Vector3__ = __webpack_require__(0);




/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

function LensFlarePlugin( renderer, flares ) {

	var gl = renderer.context;
	var state = renderer.state;

	var vertexBuffer, elementBuffer;
	var shader, program, attributes, uniforms;

	var tempTexture, occlusionTexture;

	function init() {

		var vertices = new Float32Array( [
			- 1, - 1,  0, 0,
			 1, - 1,  1, 0,
			 1,  1,  1, 1,
			- 1,  1,  0, 1
		] );

		var faces = new Uint16Array( [
			0, 1, 2,
			0, 2, 3
		] );

		// buffers

		vertexBuffer     = gl.createBuffer();
		elementBuffer    = gl.createBuffer();

		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
		gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );

		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );
		gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, faces, gl.STATIC_DRAW );

		// textures

		tempTexture      = gl.createTexture();
		occlusionTexture = gl.createTexture();

		state.bindTexture( gl.TEXTURE_2D, tempTexture );
		gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGB, 16, 16, 0, gl.RGB, gl.UNSIGNED_BYTE, null );
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );

		state.bindTexture( gl.TEXTURE_2D, occlusionTexture );
		gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, 16, 16, 0, gl.RGBA, gl.UNSIGNED_BYTE, null );
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
		gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );

		shader = {

			vertexShader: [

				"uniform lowp int renderType;",

				"uniform vec3 screenPosition;",
				"uniform vec2 scale;",
				"uniform float rotation;",

				"uniform sampler2D occlusionMap;",

				"attribute vec2 position;",
				"attribute vec2 uv;",

				"varying vec2 vUV;",
				"varying float vVisibility;",

				"void main() {",

					"vUV = uv;",

					"vec2 pos = position;",

					"if ( renderType == 2 ) {",

						"vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );",
						"visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );",
						"visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );",
						"visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );",
						"visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );",
						"visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );",
						"visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );",
						"visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );",
						"visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );",

						"vVisibility =        visibility.r / 9.0;",
						"vVisibility *= 1.0 - visibility.g / 9.0;",
						"vVisibility *=       visibility.b / 9.0;",
						"vVisibility *= 1.0 - visibility.a / 9.0;",

						"pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
						"pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;",

					"}",

					"gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",

				"}"

			].join( "\n" ),

			fragmentShader: [

				"uniform lowp int renderType;",

				"uniform sampler2D map;",
				"uniform float opacity;",
				"uniform vec3 color;",

				"varying vec2 vUV;",
				"varying float vVisibility;",

				"void main() {",

					// pink square

					"if ( renderType == 0 ) {",

						"gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );",

					// restore

					"} else if ( renderType == 1 ) {",

						"gl_FragColor = texture2D( map, vUV );",

					// flare

					"} else {",

						"vec4 texture = texture2D( map, vUV );",
						"texture.a *= opacity * vVisibility;",
						"gl_FragColor = texture;",
						"gl_FragColor.rgb *= color;",

					"}",

				"}"

			].join( "\n" )

		};

		program = createProgram( shader );

		attributes = {
			vertex: gl.getAttribLocation ( program, "position" ),
			uv:     gl.getAttribLocation ( program, "uv" )
		};

		uniforms = {
			renderType:     gl.getUniformLocation( program, "renderType" ),
			map:            gl.getUniformLocation( program, "map" ),
			occlusionMap:   gl.getUniformLocation( program, "occlusionMap" ),
			opacity:        gl.getUniformLocation( program, "opacity" ),
			color:          gl.getUniformLocation( program, "color" ),
			scale:          gl.getUniformLocation( program, "scale" ),
			rotation:       gl.getUniformLocation( program, "rotation" ),
			screenPosition: gl.getUniformLocation( program, "screenPosition" )
		};

	}

	/*
	 * Render lens flares
	 * Method: renders 16x16 0xff00ff-colored points scattered over the light source area,
	 *         reads these back and calculates occlusion.
	 */

	this.render = function ( scene, camera, viewport ) {

		if ( flares.length === 0 ) return;

		var tempPosition = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* Vector3 */]();

		var invAspect = viewport.w / viewport.z,
			halfViewportWidth = viewport.z * 0.5,
			halfViewportHeight = viewport.w * 0.5;

		var size = 16 / viewport.w,
			scale = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* Vector2 */]( size * invAspect, size );

		var screenPosition = new __WEBPACK_IMPORTED_MODULE_2__math_Vector3__["a" /* Vector3 */]( 1, 1, 0 ),
			screenPositionPixels = new __WEBPACK_IMPORTED_MODULE_1__math_Vector2__["a" /* Vector2 */]( 1, 1 );

		var validArea = new __WEBPACK_IMPORTED_MODULE_0__math_Box2__["a" /* Box2 */]();

		validArea.min.set( viewport.x, viewport.y );
		validArea.max.set( viewport.x + ( viewport.z - 16 ), viewport.y + ( viewport.w - 16 ) );

		if ( program === undefined ) {

			init();

		}

		gl.useProgram( program );

		state.initAttributes();
		state.enableAttribute( attributes.vertex );
		state.enableAttribute( attributes.uv );
		state.disableUnusedAttributes();

		// loop through all lens flares to update their occlusion and positions
		// setup gl and common used attribs/uniforms

		gl.uniform1i( uniforms.occlusionMap, 0 );
		gl.uniform1i( uniforms.map, 1 );

		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
		gl.vertexAttribPointer( attributes.vertex, 2, gl.FLOAT, false, 2 * 8, 0 );
		gl.vertexAttribPointer( attributes.uv, 2, gl.FLOAT, false, 2 * 8, 8 );

		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );

		state.disable( gl.CULL_FACE );
		state.buffers.depth.setMask( false );

		for ( var i = 0, l = flares.length; i < l; i ++ ) {

			size = 16 / viewport.w;
			scale.set( size * invAspect, size );

			// calc object screen position

			var flare = flares[ i ];

			tempPosition.set( flare.matrixWorld.elements[ 12 ], flare.matrixWorld.elements[ 13 ], flare.matrixWorld.elements[ 14 ] );

			tempPosition.applyMatrix4( camera.matrixWorldInverse );
			tempPosition.applyMatrix4( camera.projectionMatrix );

			// setup arrays for gl programs

			screenPosition.copy( tempPosition );

			// horizontal and vertical coordinate of the lower left corner of the pixels to copy

			screenPositionPixels.x = viewport.x + ( screenPosition.x * halfViewportWidth ) + halfViewportWidth - 8;
			screenPositionPixels.y = viewport.y + ( screenPosition.y * halfViewportHeight ) + halfViewportHeight - 8;

			// screen cull

			if ( validArea.containsPoint( screenPositionPixels ) === true ) {

				// save current RGB to temp texture

				state.activeTexture( gl.TEXTURE0 );
				state.bindTexture( gl.TEXTURE_2D, null );
				state.activeTexture( gl.TEXTURE1 );
				state.bindTexture( gl.TEXTURE_2D, tempTexture );
				gl.copyTexImage2D( gl.TEXTURE_2D, 0, gl.RGB, screenPositionPixels.x, screenPositionPixels.y, 16, 16, 0 );


				// render pink quad

				gl.uniform1i( uniforms.renderType, 0 );
				gl.uniform2f( uniforms.scale, scale.x, scale.y );
				gl.uniform3f( uniforms.screenPosition, screenPosition.x, screenPosition.y, screenPosition.z );

				state.disable( gl.BLEND );
				state.enable( gl.DEPTH_TEST );

				gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );


				// copy result to occlusionMap

				state.activeTexture( gl.TEXTURE0 );
				state.bindTexture( gl.TEXTURE_2D, occlusionTexture );
				gl.copyTexImage2D( gl.TEXTURE_2D, 0, gl.RGBA, screenPositionPixels.x, screenPositionPixels.y, 16, 16, 0 );


				// restore graphics

				gl.uniform1i( uniforms.renderType, 1 );
				state.disable( gl.DEPTH_TEST );

				state.activeTexture( gl.TEXTURE1 );
				state.bindTexture( gl.TEXTURE_2D, tempTexture );
				gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );


				// update object positions

				flare.positionScreen.copy( screenPosition );

				if ( flare.customUpdateCallback ) {

					flare.customUpdateCallback( flare );

				} else {

					flare.updateLensFlares();

				}

				// render flares

				gl.uniform1i( uniforms.renderType, 2 );
				state.enable( gl.BLEND );

				for ( var j = 0, jl = flare.lensFlares.length; j < jl; j ++ ) {

					var sprite = flare.lensFlares[ j ];

					if ( sprite.opacity > 0.001 && sprite.scale > 0.001 ) {

						screenPosition.x = sprite.x;
						screenPosition.y = sprite.y;
						screenPosition.z = sprite.z;

						size = sprite.size * sprite.scale / viewport.w;

						scale.x = size * invAspect;
						scale.y = size;

						gl.uniform3f( uniforms.screenPosition, screenPosition.x, screenPosition.y, screenPosition.z );
						gl.uniform2f( uniforms.scale, scale.x, scale.y );
						gl.uniform1f( uniforms.rotation, sprite.rotation );

						gl.uniform1f( uniforms.opacity, sprite.opacity );
						gl.uniform3f( uniforms.color, sprite.color.r, sprite.color.g, sprite.color.b );

						state.setBlending( sprite.blending, sprite.blendEquation, sprite.blendSrc, sprite.blendDst );
						renderer.setTexture2D( sprite.texture, 1 );

						gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );

					}

				}

			}

		}

		// restore gl

		state.enable( gl.CULL_FACE );
		state.enable( gl.DEPTH_TEST );
		state.buffers.depth.setMask( true );

		renderer.resetGLState();

	};

	function createProgram( shader ) {

		var program = gl.createProgram();

		var fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );
		var vertexShader = gl.createShader( gl.VERTEX_SHADER );

		var prefix = "precision " + renderer.getPrecision() + " float;\n";

		gl.shaderSource( fragmentShader, prefix + shader.fragmentShader );
		gl.shaderSource( vertexShader, prefix + shader.vertexShader );

		gl.compileShader( fragmentShader );
		gl.compileShader( vertexShader );

		gl.attachShader( program, fragmentShader );
		gl.attachShader( program, vertexShader );

		gl.linkProgram( program );

		return program;

	}

}





/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpritePlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__textures_Texture__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_Quaternion__ = __webpack_require__(17);




/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 */

function SpritePlugin( renderer, sprites ) {

	var gl = renderer.context;
	var state = renderer.state;

	var vertexBuffer, elementBuffer;
	var program, attributes, uniforms;

	var texture;

	// decompose matrixWorld

	var spritePosition = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();
	var spriteRotation = new __WEBPACK_IMPORTED_MODULE_2__math_Quaternion__["a" /* Quaternion */]();
	var spriteScale = new __WEBPACK_IMPORTED_MODULE_1__math_Vector3__["a" /* Vector3 */]();

	function init() {

		var vertices = new Float32Array( [
			- 0.5, - 0.5,  0, 0,
			  0.5, - 0.5,  1, 0,
			  0.5,   0.5,  1, 1,
			- 0.5,   0.5,  0, 1
		] );

		var faces = new Uint16Array( [
			0, 1, 2,
			0, 2, 3
		] );

		vertexBuffer  = gl.createBuffer();
		elementBuffer = gl.createBuffer();

		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
		gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );

		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );
		gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, faces, gl.STATIC_DRAW );

		program = createProgram();

		attributes = {
			position:			gl.getAttribLocation ( program, 'position' ),
			uv:					gl.getAttribLocation ( program, 'uv' )
		};

		uniforms = {
			uvOffset:			gl.getUniformLocation( program, 'uvOffset' ),
			uvScale:			gl.getUniformLocation( program, 'uvScale' ),

			rotation:			gl.getUniformLocation( program, 'rotation' ),
			scale:				gl.getUniformLocation( program, 'scale' ),

			color:				gl.getUniformLocation( program, 'color' ),
			map:				gl.getUniformLocation( program, 'map' ),
			opacity:			gl.getUniformLocation( program, 'opacity' ),

			modelViewMatrix: 	gl.getUniformLocation( program, 'modelViewMatrix' ),
			projectionMatrix:	gl.getUniformLocation( program, 'projectionMatrix' ),

			fogType:			gl.getUniformLocation( program, 'fogType' ),
			fogDensity:			gl.getUniformLocation( program, 'fogDensity' ),
			fogNear:			gl.getUniformLocation( program, 'fogNear' ),
			fogFar:				gl.getUniformLocation( program, 'fogFar' ),
			fogColor:			gl.getUniformLocation( program, 'fogColor' ),

			alphaTest:			gl.getUniformLocation( program, 'alphaTest' )
		};

		var canvas = document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
		canvas.width = 8;
		canvas.height = 8;

		var context = canvas.getContext( '2d' );
		context.fillStyle = 'white';
		context.fillRect( 0, 0, 8, 8 );

		texture = new __WEBPACK_IMPORTED_MODULE_0__textures_Texture__["a" /* Texture */]( canvas );
		texture.needsUpdate = true;

	}

	this.render = function ( scene, camera ) {

		if ( sprites.length === 0 ) return;

		// setup gl

		if ( program === undefined ) {

			init();

		}

		gl.useProgram( program );

		state.initAttributes();
		state.enableAttribute( attributes.position );
		state.enableAttribute( attributes.uv );
		state.disableUnusedAttributes();

		state.disable( gl.CULL_FACE );
		state.enable( gl.BLEND );

		gl.bindBuffer( gl.ARRAY_BUFFER, vertexBuffer );
		gl.vertexAttribPointer( attributes.position, 2, gl.FLOAT, false, 2 * 8, 0 );
		gl.vertexAttribPointer( attributes.uv, 2, gl.FLOAT, false, 2 * 8, 8 );

		gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, elementBuffer );

		gl.uniformMatrix4fv( uniforms.projectionMatrix, false, camera.projectionMatrix.elements );

		state.activeTexture( gl.TEXTURE0 );
		gl.uniform1i( uniforms.map, 0 );

		var oldFogType = 0;
		var sceneFogType = 0;
		var fog = scene.fog;

		if ( fog ) {

			gl.uniform3f( uniforms.fogColor, fog.color.r, fog.color.g, fog.color.b );

			if ( fog.isFog ) {

				gl.uniform1f( uniforms.fogNear, fog.near );
				gl.uniform1f( uniforms.fogFar, fog.far );

				gl.uniform1i( uniforms.fogType, 1 );
				oldFogType = 1;
				sceneFogType = 1;

			} else if ( fog.isFogExp2 ) {

				gl.uniform1f( uniforms.fogDensity, fog.density );

				gl.uniform1i( uniforms.fogType, 2 );
				oldFogType = 2;
				sceneFogType = 2;

			}

		} else {

			gl.uniform1i( uniforms.fogType, 0 );
			oldFogType = 0;
			sceneFogType = 0;

		}


		// update positions and sort

		for ( var i = 0, l = sprites.length; i < l; i ++ ) {

			var sprite = sprites[ i ];

			sprite.modelViewMatrix.multiplyMatrices( camera.matrixWorldInverse, sprite.matrixWorld );
			sprite.z = - sprite.modelViewMatrix.elements[ 14 ];

		}

		sprites.sort( painterSortStable );

		// render all sprites

		var scale = [];

		for ( var i = 0, l = sprites.length; i < l; i ++ ) {

			var sprite = sprites[ i ];
			var material = sprite.material;

			if ( material.visible === false ) continue;

			sprite.onBeforeRender( renderer, scene, camera, undefined, material, undefined );

			gl.uniform1f( uniforms.alphaTest, material.alphaTest );
			gl.uniformMatrix4fv( uniforms.modelViewMatrix, false, sprite.modelViewMatrix.elements );

			sprite.matrixWorld.decompose( spritePosition, spriteRotation, spriteScale );

			scale[ 0 ] = spriteScale.x;
			scale[ 1 ] = spriteScale.y;

			var fogType = 0;

			if ( scene.fog && material.fog ) {

				fogType = sceneFogType;

			}

			if ( oldFogType !== fogType ) {

				gl.uniform1i( uniforms.fogType, fogType );
				oldFogType = fogType;

			}

			if ( material.map !== null ) {

				gl.uniform2f( uniforms.uvOffset, material.map.offset.x, material.map.offset.y );
				gl.uniform2f( uniforms.uvScale, material.map.repeat.x, material.map.repeat.y );

			} else {

				gl.uniform2f( uniforms.uvOffset, 0, 0 );
				gl.uniform2f( uniforms.uvScale, 1, 1 );

			}

			gl.uniform1f( uniforms.opacity, material.opacity );
			gl.uniform3f( uniforms.color, material.color.r, material.color.g, material.color.b );

			gl.uniform1f( uniforms.rotation, material.rotation );
			gl.uniform2fv( uniforms.scale, scale );

			state.setBlending( material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha, material.premultipliedAlpha );
			state.buffers.depth.setTest( material.depthTest );
			state.buffers.depth.setMask( material.depthWrite );

			if ( material.map ) {

				renderer.setTexture2D( material.map, 0 );

			} else {

				renderer.setTexture2D( texture, 0 );

			}

			gl.drawElements( gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );

			sprite.onAfterRender( renderer, scene, camera, undefined, material, undefined );

		}

		// restore gl

		state.enable( gl.CULL_FACE );

		renderer.resetGLState();

	};

	function createProgram() {

		var program = gl.createProgram();

		var vertexShader = gl.createShader( gl.VERTEX_SHADER );
		var fragmentShader = gl.createShader( gl.FRAGMENT_SHADER );

		gl.shaderSource( vertexShader, [

			'precision ' + renderer.getPrecision() + ' float;',

			'#define SHADER_NAME ' + 'SpriteMaterial',

			'uniform mat4 modelViewMatrix;',
			'uniform mat4 projectionMatrix;',
			'uniform float rotation;',
			'uniform vec2 scale;',
			'uniform vec2 uvOffset;',
			'uniform vec2 uvScale;',

			'attribute vec2 position;',
			'attribute vec2 uv;',

			'varying vec2 vUV;',

			'void main() {',

				'vUV = uvOffset + uv * uvScale;',

				'vec2 alignedPosition = position * scale;',

				'vec2 rotatedPosition;',
				'rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;',
				'rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;',

				'vec4 finalPosition;',

				'finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );',
				'finalPosition.xy += rotatedPosition;',
				'finalPosition = projectionMatrix * finalPosition;',

				'gl_Position = finalPosition;',

			'}'

		].join( '\n' ) );

		gl.shaderSource( fragmentShader, [

			'precision ' + renderer.getPrecision() + ' float;',

			'#define SHADER_NAME ' + 'SpriteMaterial',

			'uniform vec3 color;',
			'uniform sampler2D map;',
			'uniform float opacity;',

			'uniform int fogType;',
			'uniform vec3 fogColor;',
			'uniform float fogDensity;',
			'uniform float fogNear;',
			'uniform float fogFar;',
			'uniform float alphaTest;',

			'varying vec2 vUV;',

			'void main() {',

				'vec4 texture = texture2D( map, vUV );',

				'if ( texture.a < alphaTest ) discard;',

				'gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );',

				'if ( fogType > 0 ) {',

					'float depth = gl_FragCoord.z / gl_FragCoord.w;',
					'float fogFactor = 0.0;',

					'if ( fogType == 1 ) {',

						'fogFactor = smoothstep( fogNear, fogFar, depth );',

					'} else {',

						'const float LOG2 = 1.442695;',
						'fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );',
						'fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );',

					'}',

					'gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );',

				'}',

			'}'

		].join( '\n' ) );

		gl.compileShader( vertexShader );
		gl.compileShader( fragmentShader );

		gl.attachShader( program, vertexShader );
		gl.attachShader( program, fragmentShader );

		gl.linkProgram( program );

		return program;

	}

	function painterSortStable( a, b ) {

		if ( a.renderOrder !== b.renderOrder ) {

			return a.renderOrder - b.renderOrder;

		} else if ( a.z !== b.z ) {

			return b.z - a.z;

		} else {

			return b.id - a.id;

		}

	}

}





/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebVRManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_Vector4__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cameras_ArrayCamera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cameras_PerspectiveCamera__ = __webpack_require__(15);
/**
 * @author mrdoob / http://mrdoob.com/
 */






function WebVRManager( renderer ) {

	var scope = this;

	var device = null;
	var frameData = null;

	if ( 'VRFrameData' in window ) {

		frameData = new window.VRFrameData();

	}

	var matrixWorldInverse = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* Matrix4 */]();

	var standingMatrix = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* Matrix4 */]();
	var standingMatrixInverse = new __WEBPACK_IMPORTED_MODULE_0__math_Matrix4__["a" /* Matrix4 */]();

	var cameraL = new __WEBPACK_IMPORTED_MODULE_3__cameras_PerspectiveCamera__["a" /* PerspectiveCamera */]();
	cameraL.bounds = new __WEBPACK_IMPORTED_MODULE_1__math_Vector4__["a" /* Vector4 */]( 0.0, 0.0, 0.5, 1.0 );
	cameraL.layers.enable( 1 );

	var cameraR = new __WEBPACK_IMPORTED_MODULE_3__cameras_PerspectiveCamera__["a" /* PerspectiveCamera */]();
	cameraR.bounds = new __WEBPACK_IMPORTED_MODULE_1__math_Vector4__["a" /* Vector4 */]( 0.5, 0.0, 0.5, 1.0 );
	cameraR.layers.enable( 2 );

	var cameraVR = new __WEBPACK_IMPORTED_MODULE_2__cameras_ArrayCamera__["a" /* ArrayCamera */]( [ cameraL, cameraR ] );
	cameraVR.layers.enable( 1 );
	cameraVR.layers.enable( 2 );

	//

	var currentSize, currentPixelRatio;

	function onVRDisplayPresentChange() {

		if ( device.isPresenting ) {

			var eyeParameters = device.getEyeParameters( 'left' );
			var renderWidth = eyeParameters.renderWidth;
			var renderHeight = eyeParameters.renderHeight;

			currentPixelRatio = renderer.getPixelRatio();
			currentSize = renderer.getSize();

			renderer.setDrawingBufferSize( renderWidth * 2, renderHeight, 1 );

		} else if ( scope.enabled ) {

			renderer.setDrawingBufferSize( currentSize.width, currentSize.height, currentPixelRatio );

		}

	}

	window.addEventListener( 'vrdisplaypresentchange', onVRDisplayPresentChange, false );

	//

	this.enabled = false;
	this.standing = false;

	this.getDevice = function () {

		return device;

	};

	this.setDevice = function ( value ) {

		if ( value !== undefined ) device = value;

	};

	this.getCamera = function ( camera ) {

		if ( device === null ) return camera;

		device.depthNear = camera.near;
		device.depthFar = camera.far;

		device.getFrameData( frameData );

		//

		var pose = frameData.pose;

		if ( pose.position !== null ) {

			camera.position.fromArray( pose.position );

		} else {

			camera.position.set( 0, 0, 0 );

		}

		if ( pose.orientation !== null ) {

			camera.quaternion.fromArray( pose.orientation );

		}

		camera.updateMatrixWorld();

		var stageParameters = device.stageParameters;

		if ( this.standing && stageParameters ) {

			standingMatrix.fromArray( stageParameters.sittingToStandingTransform );
			standingMatrixInverse.getInverse( standingMatrix );

			camera.matrixWorld.multiply( standingMatrix );
			camera.matrixWorldInverse.multiply( standingMatrixInverse );

		}

		if ( device.isPresenting === false ) return camera;

		//

		cameraVR.matrixWorld.copy( camera.matrixWorld );
		cameraVR.matrixWorldInverse.copy( camera.matrixWorldInverse );

		cameraL.matrixWorldInverse.fromArray( frameData.leftViewMatrix );
		cameraR.matrixWorldInverse.fromArray( frameData.rightViewMatrix );

		if ( this.standing && stageParameters ) {

			cameraL.matrixWorldInverse.multiply( standingMatrixInverse );
			cameraR.matrixWorldInverse.multiply( standingMatrixInverse );

		}

		var parent = camera.parent;

		if ( parent !== null ) {

			matrixWorldInverse.getInverse( parent.matrixWorld );

			cameraL.matrixWorldInverse.multiply( matrixWorldInverse );
			cameraR.matrixWorldInverse.multiply( matrixWorldInverse );

		}

		// envMap and Mirror needs camera.matrixWorld

		cameraL.matrixWorld.getInverse( cameraL.matrixWorldInverse );
		cameraR.matrixWorld.getInverse( cameraR.matrixWorldInverse );

		cameraL.projectionMatrix.fromArray( frameData.leftProjectionMatrix );
		cameraR.projectionMatrix.fromArray( frameData.rightProjectionMatrix );

		// HACK @mrdoob
		// https://github.com/w3c/webvr/issues/203

		cameraVR.projectionMatrix.copy( cameraL.projectionMatrix );

		//

		var layers = device.getLayers();

		if ( layers.length ) {

			var layer = layers[ 0 ];

			if ( layer.leftBounds !== null && layer.leftBounds.length === 4 ) {

				cameraL.bounds.fromArray( layer.leftBounds );

			}

			if ( layer.rightBounds !== null && layer.rightBounds.length === 4 ) {

				cameraR.bounds.fromArray( layer.rightBounds );

			}

		}

		return cameraVR;

	};

	this.getStandingMatrix = function () {

		return standingMatrix;

	};

	this.submitFrame = function () {

		if ( device && device.isPresenting ) device.submitFrame();

	};

}




/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FogExp2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_Color__ = __webpack_require__(4);


/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

function FogExp2 ( color, density ) {

	this.name = '';

	this.color = new __WEBPACK_IMPORTED_MODULE_0__math_Color__["a" /* Color */]( color );
	this.density = ( density !== undefined ) ? density : 0.00025;

}

FogExp2.prototype.isFogExp2 = true;

FogExp2.prototype.clone = function () {

	return new FogExp2( this.color.getHex(), this.density );

};

FogExp2.prototype.toJSON = function ( meta ) {

	return {
		type: 'FogExp2',
		color: this.color.getHex(),
		density: this.density
	};

};




/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Object3D__ = __webpack_require__(2);


/**
 * @author mrdoob / http://mrdoob.com/
 */

function Scene () {

	__WEBPACK_IMPORTED_MODULE_0__core_Object3D__["a" /* Object3D */].call( this );

	this.type = 'Scene';

	this.background = null;
	this.fog = null;
	this.overrideMaterial = null;

	this.autoUpdate = true; // checked by the renderer

}

Scene.prototype = Object.assign( Object.create( __WEBPACK_IMPORTED_MODULE_0__core_Object3D__["a" /* Object3D */].prototype ), {

	constructor: Scene,

	copy: function ( source, recursive ) {

		__WEBPACK_IMPORTED_MODULE_0__core_Object3D__["a" /* Object3D */].prototype.copy.call( this, source, recursive );

		if ( source.background !== null ) this.background = source.background.clone();
		if ( source.fog !== null ) this.fog = source.fog.clone();
		if ( source.overrideMaterial !== null ) this.overrideMaterial = source.overrideMaterial.clone();

		this.autoUpdate = source.autoUpdate;
		this.matrixAutoUpdate = source.matrixAutoUpdate;

		return this;

	},

	toJSON: function ( meta ) {

		var data = __WEBPACK_IMPORTED_MODULE_0__core_Object3D__["a" /* Object3D */].prototype.toJSON.call( this, meta );

		if ( this.background !== null ) data.object.background = this.background.toJSON( meta );
		if ( this.fog !== null ) data.object.fog = this.fog.toJSON();

		return data;

	}

} );






/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CubeTexture; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Texture__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);



/**
 * @author mrdoob / http://mrdoob.com/
 */

function CubeTexture( images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding ) {

	images = images !== undefined ? images : [];
	mapping = mapping !== undefined ? mapping : __WEBPACK_IMPORTED_MODULE_1__constants__["_15" /* CubeReflectionMapping */];

	__WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* Texture */].call( this, images, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding );

	this.flipY = false;

}

CubeTexture.prototype = Object.create( __WEBPACK_IMPORTED_MODULE_0__Texture__["a" /* Texture */].prototype );
CubeTexture.prototype.constructor = CubeTexture;

CubeTexture.prototype.isCubeTexture = true;

Object.defineProperty( CubeTexture.prototype, 'images', {

	get: function () {

		return this.image;

	},

	set: function ( value ) {

		this.image = value;

	}

} );





/***/ }),
/* 100 */
/***/ (function(module, exports) {

/**
 * @author sole / http://soledadpenades.com
 * @author mrdoob / http://mrdoob.com
 * @author Robert Eisele / http://www.xarg.org
 * @author Philippe / http://philippe.elsass.me
 * @author Robert Penner / http://www.robertpenner.com/easing_terms_of_use.html
 * @author Paul Lewis / http://www.aerotwist.com/
 * @author lechecacharro
 * @author Josh Faul / http://jocafa.com/
 * @author egraether / http://egraether.com/
 */

if ( Date.now === undefined ) {

  Date.now = function () {

    return new Date().valueOf();

  }

}

var TWEEN = TWEEN || ( function () {

  var _tweens = [];

  return {

    REVISION: '8',

    getAll: function () {

      return _tweens;

    },

    removeAll: function () {

      _tweens = [];

    },

    add: function ( tween ) {

      _tweens.push( tween );

    },

    remove: function ( tween ) {

      var i = _tweens.indexOf( tween );

      if ( i !== -1 ) {

        _tweens.splice( i, 1 );

      }

    },

    update: function ( time ) {

      if ( _tweens.length === 0 ) return false;

      var i = 0, numTweens = _tweens.length;

      time = time !== undefined ? time : Date.now();

      while ( i < numTweens ) {

        if ( _tweens[ i ].update( time ) ) {

          i ++;

        } else {

          _tweens.splice( i, 1 );

          numTweens --;

        }

      }

      return true;

    }

  };

} )();

TWEEN.Tween = function ( object ) {

  var _object = object;
  var _valuesStart = {};
  var _valuesEnd = {};
  var _duration = 1000;
  var _delayTime = 0;
  var _startTime = null;
  var _easingFunction = TWEEN.Easing.Linear.None;
  var _interpolationFunction = TWEEN.Interpolation.Linear;
  var _chainedTweens = [];
  var _onStartCallback = null;
  var _onStartCallbackFired = false;
  var _onUpdateCallback = null;
  var _onCompleteCallback = null;

  this.to = function ( properties, duration ) {

    if ( duration !== undefined ) {

      _duration = duration;

    }

    _valuesEnd = properties;

    return this;

  };

  this.start = function ( time ) {

    TWEEN.add( this );

    _onStartCallbackFired = false;

    _startTime = time !== undefined ? time : Date.now();
    _startTime += _delayTime;

    for ( var property in _valuesEnd ) {

      // This prevents the interpolation of null values or of non-existing properties
      if( _object[ property ] === null || !(property in _object) ) {

        continue;

      }

      // check if an Array was provided as property value
      if ( _valuesEnd[ property ] instanceof Array ) {

        if ( _valuesEnd[ property ].length === 0 ) {

          continue;

        }

        // create a local copy of the Array with the start value at the front
        _valuesEnd[ property ] = [ _object[ property ] ].concat( _valuesEnd[ property ] );

      }

      _valuesStart[ property ] = _object[ property ];

    }

    return this;

  };

  this.stop = function () {

    TWEEN.remove( this );
    return this;

  };

  this.delay = function ( amount ) {

    _delayTime = amount;
    return this;

  };

  this.easing = function ( easing ) {

    _easingFunction = easing;
    return this;

  };

  this.interpolation = function ( interpolation ) {

    _interpolationFunction = interpolation;
    return this;

  };

  this.chain = function () {

    _chainedTweens = arguments;
    return this;

  };

  this.onStart = function ( callback ) {

    _onStartCallback = callback;
    return this;

  };

  this.onUpdate = function ( callback ) {

    _onUpdateCallback = callback;
    return this;

  };

  this.onComplete = function ( callback ) {

    _onCompleteCallback = callback;
    return this;

  };

  this.update = function ( time ) {

    if ( time < _startTime ) {

      return true;

    }

    if ( _onStartCallbackFired === false ) {

      if ( _onStartCallback !== null ) {

        _onStartCallback.call( _object );

      }

      _onStartCallbackFired = true;

    }

    var elapsed = ( time - _startTime ) / _duration;
    elapsed = elapsed > 1 ? 1 : elapsed;

    var value = _easingFunction( elapsed );

    for ( var property in _valuesStart ) {

      var start = _valuesStart[ property ];
      var end = _valuesEnd[ property ];

      if ( end instanceof Array ) {

        _object[ property ] = _interpolationFunction( end, value );

      } else {

        _object[ property ] = start + ( end - start ) * value;

      }

    }

    if ( _onUpdateCallback !== null ) {

      _onUpdateCallback.call( _object, value );

    }

    if ( elapsed == 1 ) {

      if ( _onCompleteCallback !== null ) {

        _onCompleteCallback.call( _object );

      }

      for ( var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i ++ ) {

        _chainedTweens[ i ].start( time );

      }

      return false;

    }

    return true;

  };

};

TWEEN.Easing = {

  Linear: {

    None: function ( k ) {

      return k;

    }

  },

  Quadratic: {

    In: function ( k ) {

      return k * k;

    },

    Out: function ( k ) {

      return k * ( 2 - k );

    },

    InOut: function ( k ) {

      if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
      return - 0.5 * ( --k * ( k - 2 ) - 1 );

    }

  },

  Cubic: {

    In: function ( k ) {

      return k * k * k;

    },

    Out: function ( k ) {

      return --k * k * k + 1;

    },

    InOut: function ( k ) {

      if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
      return 0.5 * ( ( k -= 2 ) * k * k + 2 );

    }

  },

  Quartic: {

    In: function ( k ) {

      return k * k * k * k;

    },

    Out: function ( k ) {

      return 1 - ( --k * k * k * k );

    },

    InOut: function ( k ) {

      if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
      return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

    }

  },

  Quintic: {

    In: function ( k ) {

      return k * k * k * k * k;

    },

    Out: function ( k ) {

      return --k * k * k * k * k + 1;

    },

    InOut: function ( k ) {

      if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
      return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

    }

  },

  Sinusoidal: {

    In: function ( k ) {

      return 1 - Math.cos( k * Math.PI / 2 );

    },

    Out: function ( k ) {

      return Math.sin( k * Math.PI / 2 );

    },

    InOut: function ( k ) {

      return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

    }

  },

  Exponential: {

    In: function ( k ) {

      return k === 0 ? 0 : Math.pow( 1024, k - 1 );

    },

    Out: function ( k ) {

      return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

    },

    InOut: function ( k ) {

      if ( k === 0 ) return 0;
      if ( k === 1 ) return 1;
      if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
      return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

    }

  },

  Circular: {

    In: function ( k ) {

      return 1 - Math.sqrt( 1 - k * k );

    },

    Out: function ( k ) {

      return Math.sqrt( 1 - ( --k * k ) );

    },

    InOut: function ( k ) {

      if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
      return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

    }

  },

  Elastic: {

    In: function ( k ) {

      var s, a = 0.1, p = 0.4;
      if ( k === 0 ) return 0;
      if ( k === 1 ) return 1;
      if ( !a || a < 1 ) { a = 1; s = p / 4; }
      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
      return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

    },

    Out: function ( k ) {

      var s, a = 0.1, p = 0.4;
      if ( k === 0 ) return 0;
      if ( k === 1 ) return 1;
      if ( !a || a < 1 ) { a = 1; s = p / 4; }
      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
      return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

    },

    InOut: function ( k ) {

      var s, a = 0.1, p = 0.4;
      if ( k === 0 ) return 0;
      if ( k === 1 ) return 1;
      if ( !a || a < 1 ) { a = 1; s = p / 4; }
      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
      if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
      return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

    }

  },

  Back: {

    In: function ( k ) {

      var s = 1.70158;
      return k * k * ( ( s + 1 ) * k - s );

    },

    Out: function ( k ) {

      var s = 1.70158;
      return --k * k * ( ( s + 1 ) * k + s ) + 1;

    },

    InOut: function ( k ) {

      var s = 1.70158 * 1.525;
      if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
      return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

    }

  },

  Bounce: {

    In: function ( k ) {

      return 1 - TWEEN.Easing.Bounce.Out( 1 - k );

    },

    Out: function ( k ) {

      if ( k < ( 1 / 2.75 ) ) {

        return 7.5625 * k * k;

      } else if ( k < ( 2 / 2.75 ) ) {

        return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

      } else if ( k < ( 2.5 / 2.75 ) ) {

        return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

      } else {

        return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

      }

    },

    InOut: function ( k ) {

      if ( k < 0.5 ) return TWEEN.Easing.Bounce.In( k * 2 ) * 0.5;
      return TWEEN.Easing.Bounce.Out( k * 2 - 1 ) * 0.5 + 0.5;

    }

  }

};

TWEEN.Interpolation = {

  Linear: function ( v, k ) {

    var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.Linear;

    if ( k < 0 ) return fn( v[ 0 ], v[ 1 ], f );
    if ( k > 1 ) return fn( v[ m ], v[ m - 1 ], m - f );

    return fn( v[ i ], v[ i + 1 > m ? m : i + 1 ], f - i );

  },

  Bezier: function ( v, k ) {

    var b = 0, n = v.length - 1, pw = Math.pow, bn = TWEEN.Interpolation.Utils.Bernstein, i;

    for ( i = 0; i <= n; i++ ) {
      b += pw( 1 - k, n - i ) * pw( k, i ) * v[ i ] * bn( n, i );
    }

    return b;

  },

  CatmullRom: function ( v, k ) {

    var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.CatmullRom;

    if ( v[ 0 ] === v[ m ] ) {

      if ( k < 0 ) i = Math.floor( f = m * ( 1 + k ) );

      return fn( v[ ( i - 1 + m ) % m ], v[ i ], v[ ( i + 1 ) % m ], v[ ( i + 2 ) % m ], f - i );

    } else {

      if ( k < 0 ) return v[ 0 ] - ( fn( v[ 0 ], v[ 0 ], v[ 1 ], v[ 1 ], -f ) - v[ 0 ] );
      if ( k > 1 ) return v[ m ] - ( fn( v[ m ], v[ m ], v[ m - 1 ], v[ m - 1 ], f - m ) - v[ m ] );

      return fn( v[ i ? i - 1 : 0 ], v[ i ], v[ m < i + 1 ? m : i + 1 ], v[ m < i + 2 ? m : i + 2 ], f - i );

    }

  },

  Utils: {

    Linear: function ( p0, p1, t ) {

      return ( p1 - p0 ) * t + p0;

    },

    Bernstein: function ( n , i ) {

      var fc = TWEEN.Interpolation.Utils.Factorial;
      return fc( n ) / fc( i ) / fc( n - i );

    },

    Factorial: ( function () {

      var a = [ 1 ];

      return function ( n ) {

        var s = 1, i;
        if ( a[ n ] ) return a[ n ];
        for ( i = n; i > 1; i-- ) s *= i;
        return a[ n ] = s;

      };

    } )(),

    CatmullRom: function ( p0, p1, p2, p3, t ) {

      var v0 = ( p2 - p0 ) * 0.5, v1 = ( p3 - p1 ) * 0.5, t2 = t * t, t3 = t * t2;
      return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

    }

  }

};

module.exports = TWEEN;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n"

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n"

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n"

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_AOMAP\n\n\t// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif"

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "\nvec3 transformed = vec3( position );\n"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "\nvec3 objectNormal = vec3( normal );\n"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n\tif( decayExponent > 0.0 ) {\n\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\n\t\t// based upon Frostbite 3 Moving to Physically-based Rendering\n\t\t// page 32, equation 26: E[window1]\n\t\t// http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\n\t\t// this is intended to be used on spot and point lights who are represented as luminous intensity\n\t\t// but who must be converted to luminous irradiance for surface lighting calculation\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n\n#else\n\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n#endif\n\n\t}\n\n\treturn 1.0;\n\n}\n\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\n\treturn RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t// float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n\n} // validated\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (34)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is \"roughness squared\" in Disney’s reparameterization\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\t// geometry term = G(l)⋅G(v) / 4(n⋅l)(n⋅v)\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\n\treturn 1.0 / ( gl * gv );\n\n} // validated\n\n// Moving Frostbite to Physically Based Rendering 2.0 - page 12, listing 2\n// http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\n\tfloat a2 = pow2( alpha );\n\n\t// dotNL and dotNV are explicitly swapped. This is not a mistake.\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\n\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\n// alpha is \"roughness squared\" in Disney’s reparameterization\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\n\tfloat a2 = pow2( alpha );\n\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\n\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n\n}\n\n// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\n\tfloat alpha = pow2( roughness ); // UE4's roughness\n\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\n\tfloat D = D_GGX( alpha, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n// Rect Area Light\n\n// Area light computation code adapted from:\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// By: Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt\n// https://drive.google.com/file/d/0BzvWIdpUpRx_d09ndGVjNVJzZjA/view\n// https://eheitzresearch.wordpress.com/415-2/\n// http://blog.selfshadow.com/sandbox/ltc.html\n\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\n\tfloat theta = acos( dot( N, V ) );\n\n\t// Parameterization of texture:\n\t// sqrt(roughness) -> [0,1]\n\t// theta -> [0, PI/2]\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\n\t// Ensure we don't have nonlinearities at the look-up table's edges\n\t// see: http://http.developer.nvidia.com/GPUGems2/gpugems2_chapter24.html\n\t//      \"Shader Analysis\" section\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\n\treturn uv;\n\n}\n\n// Real-Time Area Lighting: a Journey from Research to Production\n// By: Stephen Hill & Eric Heitz\n// http://advances.realtimerendering.com/s2016/s2016_ltc_rnd.pdf\n// An approximation for the form factor of a clipped rectangle.\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\n\tfloat l = length( f );\n\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n\n}\n\n// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines\n// also Real-Time Area Lighting: a Journey from Research to Production\n// http://advances.realtimerendering.com/s2016/s2016_ltc_rnd.pdf\n// Normalization by 2*PI is incorporated in this function itself.\n// theta/sin(theta) is approximated by rational polynomial\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\n\tfloat x = dot( v1, v2 );\n\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\n\treturn cross( v1, v2 ) * theta_sintheta;\n\n}\n\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\n\t// bail if point is on back side of plane of light\n\t// assumes ccw winding order of light vertices\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\n\t// construct orthonormal basis around N\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 ); // negated from paper; possibly due to a different assumed handedness of world coordinate system\n\n\t// compute transform\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\n\t// transform rect\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\n\t// project rect onto sphere\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\n\t// calculate vector form factor\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\n\t// adjust for horizon clipping\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\n\treturn result;\n\n}\n\n// End Rect Area Light\n\n// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\n\tvec4 r = roughness * c0 + c1;\n\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\n\treturn specularColor * AB.x + AB.y;\n\n} // validated\n\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\n\t//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\t//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * ( G * D );\n\n} // validated\n\n// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\n\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n"

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n"

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "#if NUM_CLIPPING_PLANES > 0\n\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n\n#endif\n"

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "#if NUM_CLIPPING_PLANES > 0\n\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n\n#endif\n"

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n"

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n\n"

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif"

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif"

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\n\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nmat3 transpose( const in mat3 v ) {\n\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\n\treturn tmp;\n\n}\n"

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "#ifdef ENVMAP_TYPE_CUBE_UV\n\n#define cubeUV_textureSize (1024.0)\n\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\n\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\t// Clamp the value to the max mip level counts. hard coded to 6 mips\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\n\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\t// float powScale = exp2(roughnessLevel + mipLevel);\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\t// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\t// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\n\tfloat rcpPowScale = 1.0 / powScale;\n\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\n\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\n\t// round to nearest mipmap if we are not interpolating.\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\n\t// Tri linear interpolation.\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\n\tvec4 result = mix(color10, color20, t);\n\n\treturn vec4(result.rgb, 1.0);\n}\n\n#endif\n"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "vec3 transformedNormal = normalMatrix * objectNormal;\n\n#ifdef FLIP_SIDED\n\n\ttransformedNormal = - transformedNormal;\n\n#endif\n"

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n"

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n"

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "#if defined( DITHERING )\n\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n"

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "#if defined( DITHERING )\n\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift acording to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\n#endif\n"

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n"

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n"

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\n\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\n\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\n\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\n\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\n\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\n\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\n\n// M matrix, for encoding\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\n\n// Inverse M matrix, for decoding\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n"

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = asin( flipNormal * reflectVec.y ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\n\t#else\n\n\t\tvec4 envColor = vec4( 0.0 );\n\n\t#endif\n\n\tenvColor = envMapTexelToLinear( envColor );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n\n#ifdef USE_ENVMAP\n\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n\n#endif\n"

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvWorldPosition = worldPosition.xyz;\n\n\t#else\n\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_FOG\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\n\t#endif\n\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n"

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_FOG\n\n  varying float fogDepth;\n\n#endif\n"

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif"

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = "#ifdef TOON\n\n\tuniform sampler2D gradientMap;\n\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n\t\t// dotNL will be from -1.0 to 1.0\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n\t\t#ifdef USE_GRADIENTMAP\n\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\n\t\t#else\n\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\n\t\t#endif\n\n\n\t}\n\n#endif\n"

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_LIGHTMAP\n\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage\n\n#endif\n"

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif"

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = "vec3 diffuse = vec3( 1.0 );\n\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\n\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\n\nvLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\n\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n\n#if NUM_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\t}\n\n#endif\n\n/*\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\t// TODO (abelnation): implement\n\n\t}\n\n#endif\n*/\n\n#if NUM_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\n\t\t#endif\n\n\t}\n\n#endif\n"

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "uniform vec3 ambientLightColor;\n\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\n\tvec3 irradiance = ambientLightColor;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI;\n\n\t#endif\n\n\treturn irradiance;\n\n}\n\n#if NUM_DIR_LIGHTS > 0\n\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\n\t}\n\n#endif\n\n\n#if NUM_POINT_LIGHTS > 0\n\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\n\t}\n\n#endif\n\n\n#if NUM_SPOT_LIGHTS > 0\n\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\n\t\tif ( angleCos > spotLight.coneCos ) {\n\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\n\t\t} else {\n\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\n\t\t}\n\t}\n\n#endif\n\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\n\t// Pre-computed values of LinearTransformedCosine approximation of BRDF\n\t// BRDF approximation Texture is 64x64\n\tuniform sampler2D ltcMat; // RGBA Float\n\tuniform sampler2D ltcMag; // Alpha Float (only has w component)\n\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n\n#endif\n\n\n#if NUM_HEMI_LIGHTS > 0\n\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tirradiance *= PI;\n\n\t\t#endif\n\n\t\treturn irradiance;\n\n\t}\n\n#endif\n\n\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\n\tvec3 getLightProbeIndirectIrradiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in int maxMIPLevel ) {\n\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\n\t\t\t// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level\n\t\t\t// of a specular cubemap, or just the default level of a specially created irradiance cubemap.\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\n\t\t\t#else\n\n\t\t\t\t// force the bias high to get the last LOD level as it is the most blurred.\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\n\t\t#else\n\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\n\t\t#endif\n\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\n\t}\n\n\t// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\n\t\t//float envMapWidth = pow( 2.0, maxMIPLevelScalar );\n\t\t//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\n\t\t// clamp to allowable LOD ranges.\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\n\t}\n\n\tvec3 getLightProbeIndirectRadiance( /*const in SpecularLightProbe specularLightProbe,*/ const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\n\t\t#endif\n\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\n\t\t\t#else\n\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\n\t\t\t#endif\n\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\n\t\t#endif\n\n\t\treturn envMapColor.rgb * envMapIntensity;\n\n\t}\n\n#endif\n"

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n"

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "varying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n\nstruct BlinnPhongMaterial {\n\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n\n};\n\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t#ifdef TOON\n\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\n\t#else\n\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\n\t#endif\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n\n}\n\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n\n#define Material_LightProbeLOD( material )\t(0)\n"

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat ); // Burley clearcoat model\n\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n"

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = "struct PhysicalMaterial {\n\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n\n};\n\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\n\n// Clear coat directional hemishperical reflectance (this approximation should be improved)\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n\n}\n\n#if NUM_RECT_AREA_LIGHTS > 0\n\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight; // counterclockwise\n\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\n\t\tvec4 t = texture2D( ltcMat, uv );\n\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords ); // no fresnel\n\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\n\t}\n\n#endif\n\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;\n\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\tirradiance *= PI; // punctual light\n\n\t#endif\n\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n\t#ifndef STANDARD\n\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\n\t#endif\n\n}\n\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\n\t#ifndef STANDARD\n\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\n\t#endif\n\n}\n\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\n\n// ref: http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n\n}\n"

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = "/**\n * This is a template that can be used to light a material, it uses pluggable\n * RenderEquations (RE)for specific lighting scenarios.\n *\n * Instructions for use:\n * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\n * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\n * - Create a material parameter that is to be passed as the third parameter to your lighting functions.\n *\n * TODO:\n * - Add area light support.\n * - Add sphere light support.\n * - Add diffuse light probe (irradiance cubemap) support.\n */\n\nGeometricContext geometry;\n\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\n\nIncidentLight directLight;\n\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tPointLight pointLight;\n\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tSpotLight spotLight;\n\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\n\tDirectionalLight directionalLight;\n\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\n\tRectAreaLight rectAreaLight;\n\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\n\t}\n\n#endif\n\n#if defined( RE_IndirectDiffuse )\n\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\n\t#ifdef USE_LIGHTMAP\n\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\n\t\t\tlightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage\n\n\t\t#endif\n\n\t\tirradiance += lightMapIrradiance;\n\n\t#endif\n\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\n\t\t}\n\n\t#endif\n\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n\t\t// TODO, replace 8 with the real maxMIPLevel\n\t\tirradiance += getLightProbeIndirectIrradiance( /*lightProbe,*/ geometry, 8 );\n\n\t#endif\n\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n\t// TODO, replace 8 with the real maxMIPLevel\n\tvec3 radiance = getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_BlinnShininessExponent( material ), 8 );\n\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( /*specularLightProbe,*/ geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n\n#endif\n"

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif"

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif"

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n\t#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n\n#endif\n"

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif\n"

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_MAP\n\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n\n#endif\n"

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n"

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = "float metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\n\t// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\tmetalnessFactor *= texelMetalness.b;\n\n#endif\n"

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_METALNESSMAP\n\n\tuniform sampler2D metalnessMap;\n\n#endif"

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_MORPHNORMALS\n\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n"

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif"

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_MORPHTARGETS\n\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n"

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = "#ifdef FLAT_SHADED\n\n\t// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...\n\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n"

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\t// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n"

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\n\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\n\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\n\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\n\nconst float ShiftRight8 = 1. / 256.;\n\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\n\treturn r * PackUpscale;\n}\n\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\n\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\n\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\n\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n"

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = "#ifdef PREMULTIPLIED_ALPHA\n\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n\tgl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n"

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\ngl_Position = projectionMatrix * mvPosition;\n"

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = "float roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\n\t// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\troughnessFactor *= texelRoughness.g;\n\n#endif\n"

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_ROUGHNESSMAP\n\n\tuniform sampler2D roughnessMap;\n\n#endif"

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHTS > 0\n\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHTS > 0\n\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHTS > 0\n\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): create uniforms for area light shadows\n\n\t#endif\n\t*/\n\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\n\t}\n\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\n\t\tvec2 f = fract( uv * size + 0.5 );\n\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\n\t\treturn c;\n\n\t}\n\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tfloat shadow = 1.0;\n\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering:\n\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n\t\t#endif\n\n\t\t}\n\n\t\treturn shadow;\n\n\t}\n\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\n\t// 2D texture:\n\t//\n\t// xzXZ\n\t//  y Y\n\t//\n\t// Y - Positive y direction\n\t// y - Negative y direction\n\t// X - Positive x direction\n\t// x - Negative x direction\n\t// Z - Positive z direction\n\t// z - Negative z direction\n\t//\n\t// Source and test bed:\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\n\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\t\t// Number of texels to avoid at the edge of each square\n\n\t\tvec3 absV = abs( v );\n\n\t\t// Intersect unit cube\n\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\n\t\t// Apply scale to avoid seams\n\n\t\t// two texels less per square (one texel will do for NEAREST)\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\t\t// Unwrap\n\n\t\t// space: -1 ... 1 range for each square\n\t\t//\n\t\t// #X##\t\tdim    := ( 4 , 2 )\n\t\t//  # #\t\tcenter := ( 1 , 1 )\n\n\t\tvec2 planar = v.xy;\n\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\n\t\tif ( absV.z >= almostOne ) {\n\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\n\t\t} else if ( absV.x >= almostOne ) {\n\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\n\t\t} else if ( absV.y >= almostOne ) {\n\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\n\t\t}\n\n\t\t// Transform to UV space\n\n\t\t// scale := 0.5 / dim\n\t\t// translate := ( center + 0.5 ) / dim\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n\t}\n\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\n\t\t// the distance from the light to the world-space position of the fragment.\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\n\t\t// bd3D = base direction 3D\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t// dp = distance from light to fragment position\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\n\t\t#else // no percentage-closer filtering\n\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\n\t\t#endif\n\n\t}\n\n#endif\n"

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHTS > 0\n\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHTS > 0\n\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\n\t#endif\n\n\t#if NUM_POINT_LIGHTS > 0\n\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): uniforms for area light shadows\n\n\t#endif\n\t*/\n\n#endif\n"

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n\t#if NUM_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\n\t}\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update vAreaShadowCoord with area light info\n\n\t#endif\n\t*/\n\n#endif\n"

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = "float getShadowMask() {\n\n\tfloat shadow = 1.0;\n\n\t#ifdef USE_SHADOWMAP\n\n\t#if NUM_DIR_LIGHTS > 0\n\n\tDirectionalLight directionalLight;\n\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t#if NUM_SPOT_LIGHTS > 0\n\n\tSpotLight spotLight;\n\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t#if NUM_POINT_LIGHTS > 0\n\n\tPointLight pointLight;\n\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\n\t}\n\n\t#endif\n\n\t/*\n\t#if NUM_RECT_AREA_LIGHTS > 0\n\n\t\t// TODO (abelnation): update shadow for Area light\n\n\t#endif\n\t*/\n\n\t#endif\n\n\treturn shadow;\n\n}\n"

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif"

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n"

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n"

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n"

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif"

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = "#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif"

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = "#if defined( TONE_MAPPING )\n\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n"

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = "#define saturate(a) clamp( a, 0.0, 1.0 )\n\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n\treturn toneMappingExposure * color;\n\n}\n\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\nvec3 ReinhardToneMapping( vec3 color ) {\n\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\n\t// John Hable's filmic operator from Uncharted 2 video game\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n\n}\n\n// source: http://filmicgames.com/archives/75\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\n\t// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n"

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif"

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif"

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif"

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\n#endif"

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n"

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif"

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n#endif\n"

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n\nvoid main() {\n\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n\n}\n"

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = "varying vec3 vWorldPosition;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n"

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = "#if DEPTH_PACKING == 3200\n\n\tuniform float opacity;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( 1.0 );\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tdiffuseColor.a = opacity;\n\n\t#endif\n\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\n\t#include <logdepthbuf_fragment>\n\n\t#if DEPTH_PACKING == 3200\n\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\n\t#elif DEPTH_PACKING == 3201\n\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\n\t#endif\n\n}\n"

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_DISPLACEMENTMAP\n\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n}\n"

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\n\nvoid main () {\n\n\t#include <clipping_planes_fragment>\n\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n\n}\n"

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "varying vec4 vWorldPosition;\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvWorldPosition = worldPosition;\n\n}\n"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D tEquirect;\nuniform float tFlip;\n\nvarying vec3 vWorldPosition;\n\n#include <common>\n\nvoid main() {\n\n\t// \tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n}\n"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "varying vec3 vWorldPosition;\n\n#include <common>\n\nvoid main() {\n\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n}\n"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "uniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n\t\tdiscard;\n\n\t}\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\n\toutgoingLight = diffuseColor.rgb; // simple shader\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "uniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\n\tvLineDistance = scale * lineDistance;\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\n}\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "uniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n\t// accumulation (baked indirect lighting only)\n\t#ifdef USE_LIGHTMAP\n\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\n\t#endif\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_ENVMAP\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n\n}\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\n\n#ifdef DOUBLE_SIDED\n\n\tvarying vec3 vLightBack;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\n\t#include <lightmap_fragment>\n\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n\t#else\n\n\t\treflectedLight.directDiffuse = vLightFront;\n\n\t#endif\n\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "#define LAMBERT\n\nvarying vec3 vLightFront;\n\n#ifdef DOUBLE_SIDED\n\n\tvarying vec3 vLightBack;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "#define PHONG\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "#define PHYSICAL\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\n\t// accumulation\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n\n}\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "#define PHYSICAL\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\tvViewPosition = - mvPosition.xyz;\n\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "#define NORMAL\n\nuniform float opacity;\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nvoid main() {\n\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\n}\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "#define NORMAL\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\tvarying vec3 vViewPosition;\n\n#endif\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n\nvoid main() {\n\n\t#include <uv_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n\tvNormal = normalize( transformedNormal );\n\n#endif\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\tvViewPosition = - mvPosition.xyz;\n\n#endif\n\n}\n"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "uniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\n\toutgoingLight = diffuseColor.rgb;\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}\n"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "uniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n\n}\n"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "uniform float opacity;\n\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n\nvoid main() {\n\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n\n}\n"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "#include <shadowmap_pars_vertex>\n\nvoid main() {\n\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\n}\n"

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_textures_Texture__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_geometries_PlaneGeometry__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_objects_Mesh__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three_materials_MeshBasicMaterial__ = __webpack_require__(18);







class Billboard extends __WEBPACK_IMPORTED_MODULE_0_three_core_Object3D__["a" /* Object3D */] {
  constructor(text, subtext, height) {
    super();

    const sprite = createPlane(text, subtext);
    const y = height + 0.5;
    sprite.position.set(0, y, 0);
    this.add(sprite);
    this.isBillboard = true;
  }

  update(camera) {
    this.quaternion.copy(camera.quaternion);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Billboard;


function createPlane(text, subtext) {
  const texture = createTexture(text, subtext);
  texture.needsUpdate = true;
  const geometry = new __WEBPACK_IMPORTED_MODULE_2_three_geometries_PlaneGeometry__["b" /* PlaneGeometry */](1, 1, 1);
  const material = new __WEBPACK_IMPORTED_MODULE_5_three_materials_MeshBasicMaterial__["a" /* MeshBasicMaterial */]({
    map: texture,
    side: __WEBPACK_IMPORTED_MODULE_3_three_constants__["_18" /* DoubleSide */],
    transparent: true,
  });
  const plane = new __WEBPACK_IMPORTED_MODULE_4_three_objects_Mesh__["a" /* Mesh */](geometry, material);
  return plane;
}

function createTexture(text, subtext) {
  // These constants can be tweaked to change the styling.
  const fontFace = 'Arial';
  const headerFontSize = 24;
  const infoFontSize = 20;
  const backgroundColor = 'rgba(50,75,75,0.8)';
  const headerTextColor = 'rgba(255,255,255,0.75)';
  const infoTextColor = 'rgba(255,255,255,0.60)';
  const padding = 10;
  const spacing = 18;
  const boxWidth = 256; // Must be a power of 2.
  // Removes some height from the bottom of the box to make the text look more centered.
  const heightReduction = 0.1 * headerFontSize;

  // Calculate the height of a line
  const headerLineHeight = 1.4 * headerFontSize;
  const infoLineHeight = 1.4 * infoFontSize;

  // Setup Canvas
  const canvas = document.createElement('canvas');
  canvas.width = boxWidth;
  canvas.height = boxWidth;
  const context = canvas.getContext('2d');

  // Calculate properties and wrap text
  const contentWidth = boxWidth - (2 * padding);
  context.font = `Normal ${headerFontSize}px ${fontFace}`;
  const headerLines = wrapText(context, text, contentWidth);
  context.font = `Normal ${infoFontSize}px ${fontFace}`;
  const infoLines = wrapText(context, subtext, contentWidth);

  // Calculate the heights of each segment
  const headerTotalLineHeight = (headerLines.length * headerLineHeight);
  const infoHeight = (infoLines.length * infoLineHeight);
  const totalLineHeight = headerTotalLineHeight + infoHeight;

  // Calculate the start of info text segment
  const infoTextStart = spacing + (headerTotalLineHeight + padding);

  const contentHeight = (totalLineHeight + spacing) - heightReduction;
  const boxHeight = contentHeight + (2 * padding);
  const yOffset = canvas.height - boxHeight;

  // Render box.
  context.fillStyle = backgroundColor;
  context.fillRect(0, yOffset, boxWidth, boxHeight);

  // Render header text.
  context.textBaseline = 'top';
  context.font = `Normal ${headerFontSize}px ${fontFace}`;
  context.fillStyle = headerTextColor;

  headerLines.forEach((line, i) => {
    const lineWidth = context.measureText(line).width;
    const lineX = padding + ((contentWidth - lineWidth) / 2);
    const lineY = padding + (i * headerLineHeight) + yOffset;
    context.fillText(line, lineX, lineY, contentWidth);
  });

  // Draws line divider
  context.beginPath();
  context.moveTo(0, ((headerTotalLineHeight + padding) + yOffset) + (spacing / 2));
  context.lineTo(boxWidth, ((headerTotalLineHeight + padding) + yOffset) + (spacing / 2));
  context.strokeStyle = 'rgba(50,75,75,0.8)';
  context.stroke();

  //  Render info text
  context.font = `Normal ${infoFontSize}px ${fontFace}`;
  context.fillStyle = infoTextColor;

  infoLines.forEach((line, i) => {
    const lineWidth = context.measureText(line).width;
    const lineX = padding + ((contentWidth - lineWidth) / 2);
    const lineY = infoTextStart + (i * infoLineHeight) + yOffset;
    context.fillText(line, lineX, lineY, contentWidth);
  });

  return new __WEBPACK_IMPORTED_MODULE_1_three_textures_Texture__["a" /* Texture */](canvas);
}

function wrapText(context, text, maxWidth) {
  const words = text.split(' ');
  if (words.length <= 1) {
    return [text];
  }

  const lines = [];
  let line = words[0];

  for (let i = 1; i < words.length; i += 1) {
    const word = words[i];
    const testLine = `${line} ${word}`;
    const testWidth = context.measureText(testLine).width;
    if (testWidth >= maxWidth) {
      lines.push(line);
      line = word;
    }
    else {
      line = testLine;
    }
  }
  lines.push(line);

  return lines;
}


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_textures_Texture__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_geometries_PlaneGeometry__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three_objects_Mesh__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_three_materials_MeshBasicMaterial__ = __webpack_require__(18);








class Clusters extends __WEBPACK_IMPORTED_MODULE_2_three_core_Object3D__["a" /* Object3D */] {
  constructor() {
    super();
    this.visibleAtDistance = 150;
    this.labels = [];
  }

  load(data) {
    const clustersCount = 30;
    const sums = Array(clustersCount).fill().map(() => new __WEBPACK_IMPORTED_MODULE_0_three_math_Vector3__["a" /* Vector3 */]());
    const names = Array(clustersCount).fill('');
    const counts = Array(clustersCount).fill(0);

    data.forEach(({ cluster, clusterName, position }) => {
      sums[cluster].add(position);
      let name = clusterName;
      if (clusterName.length > 22) {
        // TODO: use text wrapping instead
        name = clusterName.split(' ')[0];
        if (name.slice(-1) === ',') {
          name = name.slice(0, -1);
        }
      }
      names[cluster] = name;
      counts[cluster] += 1;
    });
    this.labels = sums.map((sum, i) => {
      const midpoint = sum.divideScalar(counts[i]);
      const label = createPlane(names[i]);
      label.scale.multiplyScalar(200);
      label.position.copy(midpoint);
      this.add(label);
      return label;
    });
  }

  update(camera) {
    const visibleAtDistance = this.visibleAtDistance;
    const labels = this.labels;
    for (let i = 0; i < labels.length; i += 1) {
      const label = labels[i];
      label.quaternion.copy(camera.quaternion);
      const distanceToCamera = camera.body.position.distanceTo(label.position);
      if (distanceToCamera > visibleAtDistance) {
        const distanceFromLimit = distanceToCamera - visibleAtDistance;
        label.material.opacity = Math.min(distanceFromLimit, 10) / 10;
      }
      else {
        label.material.opacity = 0;
      }
    }
  }

  distanceToNearestCluster(position) {
    let minSquared = Number.MAX_VALUE;
    this.labels.forEach((label) => {
      const distanceSquared = position.distanceToSquared(label.position);
      if (distanceSquared < minSquared) {
        minSquared = distanceSquared;
      }
    });
    return Math.sqrt(minSquared);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Clusters;


// TODO: Provide a general util to create text planes (use also in ui/Popup.js)
function createPlane(text, subtext) {
  const texture = createTexture(text, subtext);
  texture.needsUpdate = true;
  const geometry = new __WEBPACK_IMPORTED_MODULE_3_three_geometries_PlaneGeometry__["b" /* PlaneGeometry */](1, 1, 1);
  const material = new __WEBPACK_IMPORTED_MODULE_6_three_materials_MeshBasicMaterial__["a" /* MeshBasicMaterial */]({
    map: texture,
    side: __WEBPACK_IMPORTED_MODULE_4_three_constants__["_18" /* DoubleSide */],
    transparent: true,
  });
  const plane = new __WEBPACK_IMPORTED_MODULE_5_three_objects_Mesh__["a" /* Mesh */](geometry, material);
  return plane;
}

function createTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024; // 512;
  const context = canvas.getContext('2d');

  context.font = 'Normal 48px Arial';
  context.textAlign = 'center';
  context.fillStyle = 'rgba(245,245,245,0.75)';
  context.fillText(text, 512, 512);

  return new __WEBPACK_IMPORTED_MODULE_1_three_textures_Texture__["a" /* Texture */](canvas);
}


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_cameras_PerspectiveCamera__ = __webpack_require__(15);


class CustomCamera extends __WEBPACK_IMPORTED_MODULE_0_three_cameras_PerspectiveCamera__["a" /* PerspectiveCamera */] {
  constructor() {
    super(25, window.innerWidth / window.innerHeight, 0.1, 1e7);

    this.onResize = this.onResize.bind(this);
  }

  connect() {
    window.addEventListener('resize', this.onResize, false);
  }

  disconnect() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.aspect = window.innerWidth / window.innerHeight;
    this.updateProjectionMatrix();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CustomCamera;



/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_renderers_WebGLRenderer__ = __webpack_require__(75);


class CustomRenderer extends __WEBPACK_IMPORTED_MODULE_0_three_renderers_WebGLRenderer__["a" /* WebGLRenderer */] {
  constructor() {
    super();

    this.onResize = this.onResize.bind(this);

    this.setPixelRatio(window.devicePixelRatio);
    // Set initial size
    this.onResize();
  }

  connect() {
    window.addEventListener('resize', this.onResize, false);
  }

  disconnect() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.setSize(window.innerWidth, window.innerHeight);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CustomRenderer;



/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_scenes_Scene__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_scenes_FogExp2__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_lights_DirectionalLight__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_lights_AmbientLight__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_core_BufferGeometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_three_core_BufferAttribute__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_three_objects_Points__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_three_materials_PointsMaterial__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_three_loaders_TextureLoader__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_three_constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Stars__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__PlanetBuffer__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_colors__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Clusters__ = __webpack_require__(212);















const ballImageUrl = __webpack_require__(52);

class CustomScene extends __WEBPACK_IMPORTED_MODULE_0_three_scenes_Scene__["a" /* Scene */] {
  constructor(camera) {
    super();

    this.camera = camera;
    this.body = camera.body;

    this.fog = new __WEBPACK_IMPORTED_MODULE_1_three_scenes_FogExp2__["a" /* FogExp2 */](0x000000, 0.00000025);

    const sun = new __WEBPACK_IMPORTED_MODULE_2_three_lights_DirectionalLight__["a" /* DirectionalLight */](0xffffff);
    sun.position.set(-1, 0, 1).normalize();
    this.add(sun);

    const ambience = new __WEBPACK_IMPORTED_MODULE_3_three_lights_AmbientLight__["a" /* AmbientLight */](0x202020);
    this.add(ambience);

    const stars = new __WEBPACK_IMPORTED_MODULE_10__Stars__["a" /* default */]();
    this.add(stars);

    this.planetsSet = new Set();
    this.planetBuffer = new __WEBPACK_IMPORTED_MODULE_11__PlanetBuffer__["a" /* default */](this, camera);

    this.clusters = new __WEBPACK_IMPORTED_MODULE_13__Clusters__["a" /* default */]();
    this.add(this.clusters);
  }

  addPlanet(planet) {
    this.add(planet);
    this.planetsSet.add(planet);
  }

  removePlanet(planet) {
    this.remove(planet);
    this.planetsSet.delete(planet);
  }

  getPlanets() {
    return [...this.planetsSet.values()];
  }

  load(data) {
    const positionsArray = new Float32Array(data.length * 3);
    const colorsArray = new Float32Array(data.length * 3);

    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      const i3 = i * 3;

      const position = item.position;
      positionsArray[i3 + 0] = position.x;
      positionsArray[i3 + 1] = position.y;
      positionsArray[i3 + 2] = position.z;

      const color = __WEBPACK_IMPORTED_MODULE_12__utils_colors__["a" /* default */][item.cluster];
      colorsArray[i3 + 0] = color.r;
      colorsArray[i3 + 1] = color.g;
      colorsArray[i3 + 2] = color.b;
    }

    const geometry = new __WEBPACK_IMPORTED_MODULE_4_three_core_BufferGeometry__["a" /* BufferGeometry */]();
    geometry.addAttribute('position', new __WEBPACK_IMPORTED_MODULE_5_three_core_BufferAttribute__["c" /* BufferAttribute */](positionsArray, 3));
    geometry.addAttribute('color', new __WEBPACK_IMPORTED_MODULE_5_three_core_BufferAttribute__["c" /* BufferAttribute */](colorsArray, 3));

    const sprite = new __WEBPACK_IMPORTED_MODULE_8_three_loaders_TextureLoader__["a" /* TextureLoader */]().load(ballImageUrl);
    const material = new __WEBPACK_IMPORTED_MODULE_7_three_materials_PointsMaterial__["a" /* PointsMaterial */]({
      size: 0.8,
      map: sprite,
      alphaTest: 0.5,
      transparent: true,
      vertexColors: __WEBPACK_IMPORTED_MODULE_9_three_constants__["_56" /* VertexColors */],
    });
    const points = new __WEBPACK_IMPORTED_MODULE_6_three_objects_Points__["a" /* Points */](geometry, material);
    this.add(points);

    this.planetBuffer.load(data);
    this.clusters.load(data);

    this.origin = this.clusters.labels[26].position;
  }

  update() {
    this.planetBuffer.update();
    this.clusters.update(this.camera);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CustomScene;



/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_materials_MeshLambertMaterial__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_geometries_SphereGeometry__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_objects_Mesh__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_random__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Billboard__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_colors__ = __webpack_require__(43);








const materials = createMaterials();
const geometries = createGeometries();

class Planet extends __WEBPACK_IMPORTED_MODULE_3_three_core_Object3D__["a" /* Object3D */] {
  constructor(data) {
    super();

    this.position.copy(data.position);
    this.data = data;
    this.isPlanet = true;

    const geometry = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_random__["a" /* pickRandom */])(geometries);
    const material = materials[data.cluster];
    const mesh = new __WEBPACK_IMPORTED_MODULE_2_three_objects_Mesh__["a" /* Mesh */](geometry, material);
    this.add(mesh);

    const radius = geometry.parameters.radius;
    const billboardHeight = radius + 0.15;
    this.billboard = new __WEBPACK_IMPORTED_MODULE_5__Billboard__["a" /* default */](data.title, data.info, billboardHeight);
    this.add(this.billboard);
  }

  update(camera) {
    this.billboard.update(camera);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Planet;


function createMaterials() {
  return __WEBPACK_IMPORTED_MODULE_6__utils_colors__["a" /* default */].map(color => new __WEBPACK_IMPORTED_MODULE_0_three_materials_MeshLambertMaterial__["a" /* MeshLambertMaterial */]({
    color,
    reflectivity: 0.5,
  }));
}

function createGeometries() {
  // const list = [];
  // for (let n = -5; n < 5; n += 1) {
  //   const r = 0.5 * (1.1 ** n);
  //   const geometry = new SphereGeometry(r, 32, 16);
  //   list.push(geometry);
  // }
  // return list;
  return [new __WEBPACK_IMPORTED_MODULE_1_three_geometries_SphereGeometry__["a" /* SphereGeometry */](0.5, 32, 16)];
}


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlanetBufferChunk__ = __webpack_require__(218);


class PlanetBuffer {
  constructor(scene, camera) {
    this.chunkSize = 20; // The size of one chunk
    this.bufferSize = 1; // How many chunks in each direction should be loaded
    this.bufferDistance = this.bufferSize * this.chunkSize;
    this.chunks = {};
    this.chunkIndex = { xi: NaN, yi: NaN, zi: NaN };
    this.scene = scene;
    this.camera = camera;
    this.loadedChunks = [];
  }

  load(data) {
    data.forEach((item) => {
      const chunk = this.getChunkAtPosition(item.position);
      chunk.addPlanetData(item);
    });
    this.update();
  }

  getChunkIndexAtPosition({ x, y, z }) {
    const xi = Math.floor(x / this.chunkSize);
    const yi = Math.floor(y / this.chunkSize);
    const zi = Math.floor(z / this.chunkSize);
    return { xi, yi, zi };
  }

  getChunkAtPosition(position) {
    const index = this.getChunkIndexAtPosition(position);
    return this.getChunk(index);
  }

  getChunk({ xi, yi, zi }) {
    const chunks = this.chunks;
    if (!chunks[xi]) {
      chunks[xi] = {};
    }
    if (!chunks[xi][yi]) {
      chunks[xi][yi] = {};
    }
    if (!chunks[xi][yi][zi]) {
      chunks[xi][yi][zi] = new __WEBPACK_IMPORTED_MODULE_0__PlanetBufferChunk__["a" /* default */](this.scene, this.bufferDistance);
    }
    return chunks[xi][yi][zi];
  }

  getChunksAround(centerChunkIndex) {
    const xiStart = centerChunkIndex.xi - this.bufferSize;
    const yiStart = centerChunkIndex.yi - this.bufferSize;
    const ziStart = centerChunkIndex.zi - this.bufferSize;
    const xiEnd = centerChunkIndex.xi + this.bufferSize;
    const yiEnd = centerChunkIndex.yi + this.bufferSize;
    const ziEnd = centerChunkIndex.zi + this.bufferSize;

    const chunks = [];
    for (let xi = xiStart; xi <= xiEnd; xi += 1) {
      for (let yi = yiStart; yi <= yiEnd; yi += 1) {
        for (let zi = ziStart; zi <= ziEnd; zi += 1) {
          chunks.push(this.getChunk({ xi, yi, zi }));
        }
      }
    }
    return chunks;
  }

  update() {
    const nextIndex = this.getChunkIndexAtPosition(this.camera.body.position);
    if (this.isNewIndex(nextIndex)) {
      const nextLoadedChunks = this.getChunksAround(nextIndex);
      const nextLoadedChunksSet = new Set(nextLoadedChunks);

      const chunksToUnload = this.loadedChunks.filter(chunk => !nextLoadedChunksSet.has(chunk));

      chunksToUnload.forEach(chunk => chunk.free());

      this.chunkIndex = nextIndex;
      this.loadedChunks = nextLoadedChunks;
    }
    this.loadedChunks.forEach(chunk => chunk.update(this.camera));
  }

  isNewIndex({ xi, yi, zi }) {
    const chunkIndex = this.chunkIndex;
    return xi !== chunkIndex.xi || yi !== chunkIndex.yi || zi !== chunkIndex.zi;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlanetBuffer;



/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlanetWrapper__ = __webpack_require__(219);


class PlanetBufferChunk {
  constructor(scene, bufferDistance) {
    this.scene = scene;
    this.bufferDistance = bufferDistance;
    this.planetWrappers = [];
    this.planets = [];
  }

  addPlanetData(data) {
    this.planetWrappers.push(new __WEBPACK_IMPORTED_MODULE_0__PlanetWrapper__["a" /* default */](this.scene, data));
  }

  update(camera) {
    const position = camera.body.position;
    const bufferDistanceSquared = this.bufferDistance ** 2;

    this.planetWrappers.forEach((wrapper) => {
      // We compare the squared distances since this is faster to compute
      const distanceToSquared = position.distanceToSquared(wrapper.position);

      if (wrapper.loaded) {
        if (distanceToSquared > bufferDistanceSquared) {
          wrapper.unload();
        }
        else {
          wrapper.update(camera);
        }
      }
      else if (distanceToSquared <= bufferDistanceSquared) {
        wrapper.load();
        wrapper.update(camera);
      }
    });
  }

  free() {
    this.planetWrappers.forEach(wrapper => wrapper.unload());
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlanetBufferChunk;



/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Planet__ = __webpack_require__(216);


class PlanetWrapper {
  constructor(scene, data) {
    this.scene = scene;
    this.data = data;
    this.position = data.position;
    this.loaded = false;
    this.planet = null;
  }

  load() {
    this.planet = new __WEBPACK_IMPORTED_MODULE_0__Planet__["a" /* default */](this.data);
    this.scene.addPlanet(this.planet);
    this.loaded = true;
  }

  unload() {
    this.scene.removePlanet(this.planet);
    this.planet = null;
    this.loaded = false;
  }

  update(camera) {
    if (this.planet) {
      this.planet.update(camera);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlanetWrapper;



/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_core_Raycaster__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_math_Vector2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socket__ = __webpack_require__(42);




class Selector {
  constructor() {
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.isSelectPressed = false;
    this.oneFramePassed = false;

    this.raycaster = new __WEBPACK_IMPORTED_MODULE_0_three_core_Raycaster__["a" /* Raycaster */]();
    this.selectionDistance = 30;
    this.intersection = null;
    this.selected = null;
  }

  update(scene, camera) {
    const cameraDirection = new __WEBPACK_IMPORTED_MODULE_1_three_math_Vector2__["a" /* Vector2 */](camera.getWorldDirection.x, camera.getWorldDirection.y);
    this.raycaster.setFromCamera(cameraDirection, camera);
    // TODO: Check intersation only when select button is pressed
    const intersection = this.raycaster.intersectObjects(scene.getPlanets(), true)[0];
    if (
      intersection &&
      intersection.distance < this.selectionDistance
    ) {
      this.intersection = intersection;
      this.selected = intersection.object;
    }
    else {
      this.intersection = null;
      this.selected = null;
    }

    if (this.isSelectPressed && !this.oneFramePassed) {
      this.oneFramePassed = true;
    }
    else if (this.isSelectPressed) {
      this.oneFramePassed = false;
      this.isSelectPressed = false;
    }
  }

  connect() {
    window.addEventListener('keypress', this.onKeyPress, false);
    __WEBPACK_IMPORTED_MODULE_2__socket__["a" /* default */].emitter.on('message', this.onMessage);
  }

  disconnect() {
    window.removeEventListener('keypress', this.onKeyPress);
    __WEBPACK_IMPORTED_MODULE_2__socket__["a" /* default */].emitter.removeListener('message', this.onMessage);
  }

  onKeyPress(event) {
    if (!this.isSelectPressed && event.code === 'Space') {
      this.isSelectPressed = true;
      this.select();
    }
  }

  onMessage(message) {
    if (!this.isSelectPressed && message.type === 'a:release') {
      this.isSelectPressed = true;
      this.select();
    }
  }

  select() {
    const selected = this.selected;
    let data;
    if (selected) {
      if (selected.parent.isPlanet) {
        data = selected.parent.data;
      }
      else if (selected.parent.isBillboard) {
        data = selected.parent.parent.data;
      }
    }

    __WEBPACK_IMPORTED_MODULE_2__socket__["a" /* default */].send({
      type: 'selected',
      data,
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Selector;



/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_core_Geometry__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_materials_PointsMaterial__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three_objects_Points__ = __webpack_require__(36);






class Stars extends __WEBPACK_IMPORTED_MODULE_1_three_core_Object3D__["a" /* Object3D */] {
  constructor() {
    super();

    const geometries = [createGeometry(250), createGeometry(1500)];
    const materials = createMaterials();

    for (let i = 10; i < 30; i += 1) {
      const chunk = new __WEBPACK_IMPORTED_MODULE_4_three_objects_Points__["a" /* Points */](geometries[i % 2], materials[i % 6]);

      chunk.rotation.x = Math.random() * 6;
      chunk.rotation.y = Math.random() * 6;
      chunk.rotation.z = Math.random() * 6;

      const s = i * 10;
      chunk.scale.set(s, s, s);

      chunk.matrixAutoUpdate = false;
      chunk.updateMatrix();

      this.add(chunk);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stars;


function createGeometry(numberOfStars) {
  const radius = 6371;
  const geometry = new __WEBPACK_IMPORTED_MODULE_0_three_core_Geometry__["a" /* Geometry */]();
  const vertices = geometry.vertices;
  for (let i = 0; i < numberOfStars; i += 1) {
    const vertex = new __WEBPACK_IMPORTED_MODULE_2_three_math_Vector3__["a" /* Vector3 */]();
    vertex.x = (Math.random() * 2) - 1;
    vertex.y = (Math.random() * 2) - 1;
    vertex.z = (Math.random() * 2) - 1;
    vertex.multiplyScalar(radius);
    vertices.push(vertex);
  }
  return geometry;
}

function createMaterials() {
  return [
    new __WEBPACK_IMPORTED_MODULE_3_three_materials_PointsMaterial__["a" /* PointsMaterial */]({ color: 0x555555, size: 2, sizeAttenuation: false, fog: false }),
    new __WEBPACK_IMPORTED_MODULE_3_three_materials_PointsMaterial__["a" /* PointsMaterial */]({ color: 0x555555, size: 1, sizeAttenuation: false, fog: false }),
    new __WEBPACK_IMPORTED_MODULE_3_three_materials_PointsMaterial__["a" /* PointsMaterial */]({ color: 0x333333, size: 2, sizeAttenuation: false, fog: false }),
    new __WEBPACK_IMPORTED_MODULE_3_three_materials_PointsMaterial__["a" /* PointsMaterial */]({ color: 0x3a3a3a, size: 1, sizeAttenuation: false, fog: false }),
    new __WEBPACK_IMPORTED_MODULE_3_three_materials_PointsMaterial__["a" /* PointsMaterial */]({ color: 0x1a1a1a, size: 2, sizeAttenuation: false, fog: false }),
    new __WEBPACK_IMPORTED_MODULE_3_three_materials_PointsMaterial__["a" /* PointsMaterial */]({ color: 0x1a1a1a, size: 1, sizeAttenuation: false, fog: false }),
  ];
}


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_examples_vr_ViveController__ = __webpack_require__(48);


class ViveControls {
  constructor(body) {
    this.body = body;
    this.controller1 = new __WEBPACK_IMPORTED_MODULE_0_three_examples_vr_ViveController__["a" /* ViveController */](0);
    this.controller2 = new __WEBPACK_IMPORTED_MODULE_0_three_examples_vr_ViveController__["a" /* ViveController */](1);
    this.state = {
      forwards: false,
      backwards: false,
    };
    this.movementSpeed = 10.0;

    this.onRightTriggerDown = this.onRightTriggerDown.bind(this);
    this.onRightTriggerUp = this.onRightTriggerUp.bind(this);
    this.onLeftTriggerDown = this.onLeftTriggerDown.bind(this);
    this.onLeftTriggerUp = this.onLeftTriggerUp.bind(this);
  }

  onRightTriggerDown() {
    this.state.forwards = true;
  }
  onRightTriggerUp() {
    this.state.forwards = false;
  }
  onLeftTriggerDown() {
    this.state.backwards = true;
  }
  onLeftTriggerUp() {
    this.state.backwards = false;
  }

  connect() {
    this.controller1.addEventListener('triggerdown', this.onRightTriggerDown);
    this.controller1.addEventListener('triggerup', this.onRightTriggerUp);
    this.controller2.addEventListener('triggerdown', this.onLeftTriggerDown);
    this.controller2.addEventListener('triggerup', this.onLeftTriggerUp);
  }

  disconnect() {
    this.controller1.removeEventListener('triggerdown', this.onRightTriggerDown);
    this.controller1.removeEventListener('triggerup', this.onRightTriggerUp);
    this.controller2.removeEventListener('triggerdown', this.onLeftTriggerDown);
    this.controller2.removeEventListener('triggerup', this.onLeftTriggerUp);
  }

  update(delta) {
    this.controller1.update();
    this.controller2.update();

    const movement = this.movementSpeed * delta;
    if (this.state.forwards !== this.state.backwards) {
      const direction = this.body.camera.getWorldDirection();
      direction.normalize();
      direction.multiplyScalar(movement);

      if (this.state.backwards) {
        direction.multiplyScalar(-1);
      }
      this.body.position.add(direction);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViveControls;



/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_loadMockData__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_loadBigData__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Game__ = __webpack_require__(45);




const game = new __WEBPACK_IMPORTED_MODULE_2__Game__["a" /* default */]();
game.connect();

const useBigData = true;

function onDataLoad(err, data) {
  if (err) {
    throw err;
  }
  game.start(data);
}

if (useBigData) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_loadBigData__["a" /* default */])(onDataLoad);
}
else {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_loadMockData__["a" /* default */])(onDataLoad);
}


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_core_Geometry__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_materials_LineBasicMaterial__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three_math_Vector3__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three_objects_LineSegments__ = __webpack_require__(35);





class Crosshair extends __WEBPACK_IMPORTED_MODULE_3_three_objects_LineSegments__["a" /* LineSegments */] {
  constructor() {
    const geometry = createGeometry(0.05);
    const material = createMaterial();
    super(geometry, material);

    this.scaleStep = 2.5;
    this.selected = false;
    this.timer = 0;
    this.timeLimit = 0.15;
  }

  update(delta, selector) {
    // TODO: Rewrite this animation using tweens.

    if (!this.selected && selector.isSelectPressed && selector.selected) {
      this.selected = true;
    }
    else if (this.selected && this.timer < this.timeLimit) {
      this.timer += delta;
      this.scale.addScalar(delta * this.scaleStep);
    }
    else if (this.selected) {
      this.scale.set(1, 1, 1);
      this.selected = false;
      this.timer = 0;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Crosshair;


function createMaterial() {
  return new __WEBPACK_IMPORTED_MODULE_1_three_materials_LineBasicMaterial__["a" /* LineBasicMaterial */]({
    color: '#fff',
    linewidth: 2,
    linecap: 'round',
    linejoin: 'round',
    opacity: 0.25,
    transparent: true,
  });
}

function createGeometry(size) {
  const geometry = new __WEBPACK_IMPORTED_MODULE_0_three_core_Geometry__["a" /* Geometry */]();
  const halfSize = size / 2;
  geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three_math_Vector3__["a" /* Vector3 */](0, halfSize, 0));
  geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three_math_Vector3__["a" /* Vector3 */](0, -halfSize, 0));
  geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three_math_Vector3__["a" /* Vector3 */](-halfSize, 0, 0));
  geometry.vertices.push(new __WEBPACK_IMPORTED_MODULE_2_three_math_Vector3__["a" /* Vector3 */](halfSize, 0, 0));
  return geometry;
}



/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three_core_Object3D__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Crosshair__ = __webpack_require__(224);


// import Popup from './Popup';

class UI extends __WEBPACK_IMPORTED_MODULE_0_three_core_Object3D__["a" /* Object3D */] {
  constructor() {
    super();

    this.crosshair = new __WEBPACK_IMPORTED_MODULE_1__Crosshair__["a" /* default */]();
    this.add(this.crosshair);

    // this.popup = new Popup('Job saved!');
    // this.add(this.popup);

    // UI will appear 5 units away from the camera.
    this.position.set(0, 0, -5);
  }

  update(delta, selector) {
    this.crosshair.update(delta, selector);
    // this.popup.update(delta, selector);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UI;



/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export randomInt */
/* harmony export (immutable) */ __webpack_exports__["a"] = pickRandom;
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pickRandom(collection) {
  const i = randomInt(0, collection.length);
  return collection[i];
}


/***/ })
/******/ ]);