import { DomainPrimitive, ValueObject } from '../base-classes/value-object.base';
import { ValueOf } from '../types/value-of.type';
declare const VALUE: {
    readonly DEFAULT: "default";
    readonly MOP: "mop";
    readonly VACUUM: "vacuum";
};
type Value = ValueOf<typeof VALUE>;
export declare class DeviceOperationMode extends ValueObject<Value> {
    get value(): Value;
    protected validate(props: DomainPrimitive<Value>): void;
    static VALUE: {
        readonly DEFAULT: "default";
        readonly MOP: "mop";
        readonly VACUUM: "vacuum";
    };
}
export {};
