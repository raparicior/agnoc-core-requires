"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeviceOperationMode = void 0;
var _valueObject = require("../base-classes/value-object.base");
var _argumentInvalid = require("../exceptions/argument-invalid.exception");
var _argumentNotProvided = require("../exceptions/argument-not-provided.exception");
var _isPresent = require("../utils/is-present.util");
const VALUE = {
  DEFAULT: 'default',
  MOP: 'mop',
  VACUUM: 'vacuum'
};
class DeviceOperationMode extends _valueObject.ValueObject {
  get value() {
    return this.props.value;
  }
  validate(props) {
    if (![props.value].every(_isPresent.isPresent)) {
      throw new _argumentNotProvided.ArgumentNotProvidedException('Missing property in device fan speed constructor');
    }
    if (!Object.values(VALUE).includes(props.value)) {
      throw new _argumentInvalid.ArgumentInvalidException('Invalid property in device fan speed constructor');
    }
  }
}
exports.DeviceOperationMode = DeviceOperationMode;
DeviceOperationMode.VALUE = VALUE;