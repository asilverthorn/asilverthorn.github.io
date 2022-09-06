/**
 * Utilities for interacting with big-endian files specified by u8arrays
 */

readU8=function(_u8array, offset){
    return _u8array[offset]
}

readU16=function(_u8array, offset){
    _lastRead=(_u8array[offset] << 8) + _u8array[offset+1];

    return _lastRead >>> 0
}
readU24 = function(_u8array, offset) {
    _lastRead=(_u8array[offset] << 16) + (_u8array[offset+1] << 8) + _u8array[offset+2];

    return _lastRead >>> 0
}

readU32 = function(_u8Array, offset) {
    _lastRead=(_u8array[offset] << 24) + (_u8array[offset+1] << 16) + (_u8array[offset+2] << 8) + _u8array[offset+3];

    return _lastRead >>> 0
}

readBytes = function(_u8array, offset, len) {
    _lastRead=new Array(len);
    for(var i=0; i<len; i++){
        _lastRead[i]=_u8array[offset+i];
    }

    return _lastRead
}

readString = function(_u8array, offset, len) {
    _lastRead='';
    for(var i=0;i<len && (offset+i)<_u8array.length && _u8array[offset+i]>0;i++)
        _lastRead=_lastRead+String.fromCharCode(_u8array[offset+i]);

    return _lastRead
}