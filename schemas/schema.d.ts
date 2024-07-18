import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a COMMON_ERROR_REPLY. */
export interface ICOMMON_ERROR_REPLY {

    /** COMMON_ERROR_REPLY result */
    result: number;

    /** COMMON_ERROR_REPLY error */
    error: string;

    /** COMMON_ERROR_REPLY opcode */
    opcode?: (number|null);
}

/** Represents a COMMON_ERROR_REPLY. */
export class COMMON_ERROR_REPLY implements ICOMMON_ERROR_REPLY {

    /**
     * Constructs a new COMMON_ERROR_REPLY.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICOMMON_ERROR_REPLY);

    /** COMMON_ERROR_REPLY result. */
    public result: number;

    /** COMMON_ERROR_REPLY error. */
    public error: string;

    /** COMMON_ERROR_REPLY opcode. */
    public opcode: number;

    /**
     * Creates a new COMMON_ERROR_REPLY instance using the specified properties.
     * @param [properties] Properties to set
     * @returns COMMON_ERROR_REPLY instance
     */
    public static create(properties?: ICOMMON_ERROR_REPLY): COMMON_ERROR_REPLY;

    /**
     * Encodes the specified COMMON_ERROR_REPLY message. Does not implicitly {@link COMMON_ERROR_REPLY.verify|verify} messages.
     * @param message COMMON_ERROR_REPLY message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICOMMON_ERROR_REPLY, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified COMMON_ERROR_REPLY message, length delimited. Does not implicitly {@link COMMON_ERROR_REPLY.verify|verify} messages.
     * @param message COMMON_ERROR_REPLY message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICOMMON_ERROR_REPLY, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a COMMON_ERROR_REPLY message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns COMMON_ERROR_REPLY
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): COMMON_ERROR_REPLY;

    /**
     * Decodes a COMMON_ERROR_REPLY message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns COMMON_ERROR_REPLY
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): COMMON_ERROR_REPLY;

    /**
     * Verifies a COMMON_ERROR_REPLY message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a COMMON_ERROR_REPLY message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns COMMON_ERROR_REPLY
     */
    public static fromObject(object: { [k: string]: any }): COMMON_ERROR_REPLY;

    /**
     * Creates a plain object from a COMMON_ERROR_REPLY message. Also converts values to other types if specified.
     * @param message COMMON_ERROR_REPLY
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: COMMON_ERROR_REPLY, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this COMMON_ERROR_REPLY to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for COMMON_ERROR_REPLY
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CLIENT_IDLE_TIMEOUT. */
export interface ICLIENT_IDLE_TIMEOUT {
}

/** Represents a CLIENT_IDLE_TIMEOUT. */
export class CLIENT_IDLE_TIMEOUT implements ICLIENT_IDLE_TIMEOUT {

    /**
     * Constructs a new CLIENT_IDLE_TIMEOUT.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICLIENT_IDLE_TIMEOUT);

    /**
     * Creates a new CLIENT_IDLE_TIMEOUT instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CLIENT_IDLE_TIMEOUT instance
     */
    public static create(properties?: ICLIENT_IDLE_TIMEOUT): CLIENT_IDLE_TIMEOUT;

    /**
     * Encodes the specified CLIENT_IDLE_TIMEOUT message. Does not implicitly {@link CLIENT_IDLE_TIMEOUT.verify|verify} messages.
     * @param message CLIENT_IDLE_TIMEOUT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICLIENT_IDLE_TIMEOUT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CLIENT_IDLE_TIMEOUT message, length delimited. Does not implicitly {@link CLIENT_IDLE_TIMEOUT.verify|verify} messages.
     * @param message CLIENT_IDLE_TIMEOUT message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICLIENT_IDLE_TIMEOUT, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CLIENT_IDLE_TIMEOUT message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CLIENT_IDLE_TIMEOUT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CLIENT_IDLE_TIMEOUT;

    /**
     * Decodes a CLIENT_IDLE_TIMEOUT message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CLIENT_IDLE_TIMEOUT
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CLIENT_IDLE_TIMEOUT;

    /**
     * Verifies a CLIENT_IDLE_TIMEOUT message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CLIENT_IDLE_TIMEOUT message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CLIENT_IDLE_TIMEOUT
     */
    public static fromObject(object: { [k: string]: any }): CLIENT_IDLE_TIMEOUT;

    /**
     * Creates a plain object from a CLIENT_IDLE_TIMEOUT message. Also converts values to other types if specified.
     * @param message CLIENT_IDLE_TIMEOUT
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CLIENT_IDLE_TIMEOUT, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CLIENT_IDLE_TIMEOUT to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CLIENT_IDLE_TIMEOUT
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED. */
export interface IDEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED {

    /** DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED result */
    result: number;
}

/** Represents a DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED. */
export class DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED implements IDEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED {

    /**
     * Constructs a new DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED);

    /** DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED result. */
    public result: number;

    /**
     * Creates a new DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED instance
     */
    public static create(properties?: IDEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED): DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED;

    /**
     * Encodes the specified DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message. Does not implicitly {@link DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED.verify|verify} messages.
     * @param message DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message, length delimited. Does not implicitly {@link DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED.verify|verify} messages.
     * @param message DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED;

    /**
     * Decodes a DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED;

    /**
     * Verifies a DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED;

    /**
     * Creates a plain object from a DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_PUSH_HAS_WAITING_BE_SAVED
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CLIENT_HEARTBEAT_REQ. */
export interface ICLIENT_HEARTBEAT_REQ {
}

/** Represents a CLIENT_HEARTBEAT_REQ. */
export class CLIENT_HEARTBEAT_REQ implements ICLIENT_HEARTBEAT_REQ {

    /**
     * Constructs a new CLIENT_HEARTBEAT_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICLIENT_HEARTBEAT_REQ);

    /**
     * Creates a new CLIENT_HEARTBEAT_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CLIENT_HEARTBEAT_REQ instance
     */
    public static create(properties?: ICLIENT_HEARTBEAT_REQ): CLIENT_HEARTBEAT_REQ;

    /**
     * Encodes the specified CLIENT_HEARTBEAT_REQ message. Does not implicitly {@link CLIENT_HEARTBEAT_REQ.verify|verify} messages.
     * @param message CLIENT_HEARTBEAT_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICLIENT_HEARTBEAT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CLIENT_HEARTBEAT_REQ message, length delimited. Does not implicitly {@link CLIENT_HEARTBEAT_REQ.verify|verify} messages.
     * @param message CLIENT_HEARTBEAT_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICLIENT_HEARTBEAT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CLIENT_HEARTBEAT_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CLIENT_HEARTBEAT_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CLIENT_HEARTBEAT_REQ;

    /**
     * Decodes a CLIENT_HEARTBEAT_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CLIENT_HEARTBEAT_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CLIENT_HEARTBEAT_REQ;

    /**
     * Verifies a CLIENT_HEARTBEAT_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CLIENT_HEARTBEAT_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CLIENT_HEARTBEAT_REQ
     */
    public static fromObject(object: { [k: string]: any }): CLIENT_HEARTBEAT_REQ;

    /**
     * Creates a plain object from a CLIENT_HEARTBEAT_REQ message. Also converts values to other types if specified.
     * @param message CLIENT_HEARTBEAT_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CLIENT_HEARTBEAT_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CLIENT_HEARTBEAT_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CLIENT_HEARTBEAT_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CLIENT_HEARTBEAT_RSP. */
export interface ICLIENT_HEARTBEAT_RSP {
}

/** Represents a CLIENT_HEARTBEAT_RSP. */
export class CLIENT_HEARTBEAT_RSP implements ICLIENT_HEARTBEAT_RSP {

    /**
     * Constructs a new CLIENT_HEARTBEAT_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICLIENT_HEARTBEAT_RSP);

    /**
     * Creates a new CLIENT_HEARTBEAT_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CLIENT_HEARTBEAT_RSP instance
     */
    public static create(properties?: ICLIENT_HEARTBEAT_RSP): CLIENT_HEARTBEAT_RSP;

    /**
     * Encodes the specified CLIENT_HEARTBEAT_RSP message. Does not implicitly {@link CLIENT_HEARTBEAT_RSP.verify|verify} messages.
     * @param message CLIENT_HEARTBEAT_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICLIENT_HEARTBEAT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CLIENT_HEARTBEAT_RSP message, length delimited. Does not implicitly {@link CLIENT_HEARTBEAT_RSP.verify|verify} messages.
     * @param message CLIENT_HEARTBEAT_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICLIENT_HEARTBEAT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CLIENT_HEARTBEAT_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CLIENT_HEARTBEAT_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CLIENT_HEARTBEAT_RSP;

    /**
     * Decodes a CLIENT_HEARTBEAT_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CLIENT_HEARTBEAT_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CLIENT_HEARTBEAT_RSP;

    /**
     * Verifies a CLIENT_HEARTBEAT_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CLIENT_HEARTBEAT_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CLIENT_HEARTBEAT_RSP
     */
    public static fromObject(object: { [k: string]: any }): CLIENT_HEARTBEAT_RSP;

    /**
     * Creates a plain object from a CLIENT_HEARTBEAT_RSP message. Also converts values to other types if specified.
     * @param message CLIENT_HEARTBEAT_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CLIENT_HEARTBEAT_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CLIENT_HEARTBEAT_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CLIENT_HEARTBEAT_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CLIENT_ONLINE_REQ. */
export interface ICLIENT_ONLINE_REQ {

    /** CLIENT_ONLINE_REQ deviceSerialNumber */
    deviceSerialNumber: string;

    /** CLIENT_ONLINE_REQ unk1 */
    unk1: boolean;

    /** CLIENT_ONLINE_REQ unk2 */
    unk2: number;
}

/** Represents a CLIENT_ONLINE_REQ. */
export class CLIENT_ONLINE_REQ implements ICLIENT_ONLINE_REQ {

    /**
     * Constructs a new CLIENT_ONLINE_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICLIENT_ONLINE_REQ);

    /** CLIENT_ONLINE_REQ deviceSerialNumber. */
    public deviceSerialNumber: string;

    /** CLIENT_ONLINE_REQ unk1. */
    public unk1: boolean;

    /** CLIENT_ONLINE_REQ unk2. */
    public unk2: number;

    /**
     * Creates a new CLIENT_ONLINE_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CLIENT_ONLINE_REQ instance
     */
    public static create(properties?: ICLIENT_ONLINE_REQ): CLIENT_ONLINE_REQ;

    /**
     * Encodes the specified CLIENT_ONLINE_REQ message. Does not implicitly {@link CLIENT_ONLINE_REQ.verify|verify} messages.
     * @param message CLIENT_ONLINE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICLIENT_ONLINE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CLIENT_ONLINE_REQ message, length delimited. Does not implicitly {@link CLIENT_ONLINE_REQ.verify|verify} messages.
     * @param message CLIENT_ONLINE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICLIENT_ONLINE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CLIENT_ONLINE_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CLIENT_ONLINE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CLIENT_ONLINE_REQ;

    /**
     * Decodes a CLIENT_ONLINE_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CLIENT_ONLINE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CLIENT_ONLINE_REQ;

    /**
     * Verifies a CLIENT_ONLINE_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CLIENT_ONLINE_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CLIENT_ONLINE_REQ
     */
    public static fromObject(object: { [k: string]: any }): CLIENT_ONLINE_REQ;

    /**
     * Creates a plain object from a CLIENT_ONLINE_REQ message. Also converts values to other types if specified.
     * @param message CLIENT_ONLINE_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CLIENT_ONLINE_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CLIENT_ONLINE_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CLIENT_ONLINE_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CLIENT_ONLINE_RSP. */
export interface ICLIENT_ONLINE_RSP {

    /** CLIENT_ONLINE_RSP result */
    result: number;

    /** CLIENT_ONLINE_RSP reason */
    reason?: (string|null);
}

/** Represents a CLIENT_ONLINE_RSP. */
export class CLIENT_ONLINE_RSP implements ICLIENT_ONLINE_RSP {

    /**
     * Constructs a new CLIENT_ONLINE_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICLIENT_ONLINE_RSP);

    /** CLIENT_ONLINE_RSP result. */
    public result: number;

    /** CLIENT_ONLINE_RSP reason. */
    public reason: string;

    /**
     * Creates a new CLIENT_ONLINE_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CLIENT_ONLINE_RSP instance
     */
    public static create(properties?: ICLIENT_ONLINE_RSP): CLIENT_ONLINE_RSP;

    /**
     * Encodes the specified CLIENT_ONLINE_RSP message. Does not implicitly {@link CLIENT_ONLINE_RSP.verify|verify} messages.
     * @param message CLIENT_ONLINE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICLIENT_ONLINE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CLIENT_ONLINE_RSP message, length delimited. Does not implicitly {@link CLIENT_ONLINE_RSP.verify|verify} messages.
     * @param message CLIENT_ONLINE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICLIENT_ONLINE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CLIENT_ONLINE_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CLIENT_ONLINE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CLIENT_ONLINE_RSP;

    /**
     * Decodes a CLIENT_ONLINE_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CLIENT_ONLINE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CLIENT_ONLINE_RSP;

    /**
     * Verifies a CLIENT_ONLINE_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CLIENT_ONLINE_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CLIENT_ONLINE_RSP
     */
    public static fromObject(object: { [k: string]: any }): CLIENT_ONLINE_RSP;

    /**
     * Creates a plain object from a CLIENT_ONLINE_RSP message. Also converts values to other types if specified.
     * @param message CLIENT_ONLINE_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CLIENT_ONLINE_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CLIENT_ONLINE_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CLIENT_ONLINE_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_REGISTER_REQ. */
export interface IDEVICE_REGISTER_REQ {

    /** DEVICE_REGISTER_REQ softwareVersion */
    softwareVersion: string;

    /** DEVICE_REGISTER_REQ hardwareVersion */
    hardwareVersion: string;

    /** DEVICE_REGISTER_REQ deviceSerialNumber */
    deviceSerialNumber: string;

    /** DEVICE_REGISTER_REQ deviceMac */
    deviceMac: string;

    /** DEVICE_REGISTER_REQ deviceType */
    deviceType: number;

    /** DEVICE_REGISTER_REQ customerFirmwareId */
    customerFirmwareId: number;

    /** DEVICE_REGISTER_REQ ctrlVersion */
    ctrlVersion: string;
}

/** Represents a DEVICE_REGISTER_REQ. */
export class DEVICE_REGISTER_REQ implements IDEVICE_REGISTER_REQ {

    /**
     * Constructs a new DEVICE_REGISTER_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_REGISTER_REQ);

    /** DEVICE_REGISTER_REQ softwareVersion. */
    public softwareVersion: string;

    /** DEVICE_REGISTER_REQ hardwareVersion. */
    public hardwareVersion: string;

    /** DEVICE_REGISTER_REQ deviceSerialNumber. */
    public deviceSerialNumber: string;

    /** DEVICE_REGISTER_REQ deviceMac. */
    public deviceMac: string;

    /** DEVICE_REGISTER_REQ deviceType. */
    public deviceType: number;

    /** DEVICE_REGISTER_REQ customerFirmwareId. */
    public customerFirmwareId: number;

    /** DEVICE_REGISTER_REQ ctrlVersion. */
    public ctrlVersion: string;

    /**
     * Creates a new DEVICE_REGISTER_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_REGISTER_REQ instance
     */
    public static create(properties?: IDEVICE_REGISTER_REQ): DEVICE_REGISTER_REQ;

    /**
     * Encodes the specified DEVICE_REGISTER_REQ message. Does not implicitly {@link DEVICE_REGISTER_REQ.verify|verify} messages.
     * @param message DEVICE_REGISTER_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_REGISTER_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_REGISTER_REQ message, length delimited. Does not implicitly {@link DEVICE_REGISTER_REQ.verify|verify} messages.
     * @param message DEVICE_REGISTER_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_REGISTER_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_REGISTER_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_REGISTER_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_REGISTER_REQ;

    /**
     * Decodes a DEVICE_REGISTER_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_REGISTER_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_REGISTER_REQ;

    /**
     * Verifies a DEVICE_REGISTER_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_REGISTER_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_REGISTER_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_REGISTER_REQ;

    /**
     * Creates a plain object from a DEVICE_REGISTER_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_REGISTER_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_REGISTER_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_REGISTER_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_REGISTER_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_REGISTER_RSP. */
export interface IDEVICE_REGISTER_RSP {

    /** DEVICE_REGISTER_RSP result */
    result: number;

    /** DEVICE_REGISTER_RSP device */
    device: DEVICE_REGISTER_RSP.IDevice;
}

/** Represents a DEVICE_REGISTER_RSP. */
export class DEVICE_REGISTER_RSP implements IDEVICE_REGISTER_RSP {

    /**
     * Constructs a new DEVICE_REGISTER_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_REGISTER_RSP);

    /** DEVICE_REGISTER_RSP result. */
    public result: number;

    /** DEVICE_REGISTER_RSP device. */
    public device: DEVICE_REGISTER_RSP.IDevice;

    /**
     * Creates a new DEVICE_REGISTER_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_REGISTER_RSP instance
     */
    public static create(properties?: IDEVICE_REGISTER_RSP): DEVICE_REGISTER_RSP;

    /**
     * Encodes the specified DEVICE_REGISTER_RSP message. Does not implicitly {@link DEVICE_REGISTER_RSP.verify|verify} messages.
     * @param message DEVICE_REGISTER_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_REGISTER_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_REGISTER_RSP message, length delimited. Does not implicitly {@link DEVICE_REGISTER_RSP.verify|verify} messages.
     * @param message DEVICE_REGISTER_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_REGISTER_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_REGISTER_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_REGISTER_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_REGISTER_RSP;

    /**
     * Decodes a DEVICE_REGISTER_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_REGISTER_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_REGISTER_RSP;

    /**
     * Verifies a DEVICE_REGISTER_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_REGISTER_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_REGISTER_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_REGISTER_RSP;

    /**
     * Creates a plain object from a DEVICE_REGISTER_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_REGISTER_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_REGISTER_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_REGISTER_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_REGISTER_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_REGISTER_RSP {

    /** Properties of a Device. */
    interface IDevice {

        /** Device id */
        id: number;
    }

    /** Represents a Device. */
    class Device implements IDevice {

        /**
         * Constructs a new Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_REGISTER_RSP.IDevice);

        /** Device id. */
        public id: number;

        /**
         * Creates a new Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Device instance
         */
        public static create(properties?: DEVICE_REGISTER_RSP.IDevice): DEVICE_REGISTER_RSP.Device;

        /**
         * Encodes the specified Device message. Does not implicitly {@link DEVICE_REGISTER_RSP.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_REGISTER_RSP.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link DEVICE_REGISTER_RSP.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_REGISTER_RSP.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_REGISTER_RSP.Device;

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_REGISTER_RSP.Device;

        /**
         * Verifies a Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Device
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_REGISTER_RSP.Device;

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @param message Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_REGISTER_RSP.Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Device to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Device
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_VERSION_INFO_UPDATE_REQ. */
export interface IDEVICE_VERSION_INFO_UPDATE_REQ {

    /** DEVICE_VERSION_INFO_UPDATE_REQ softwareVersion */
    softwareVersion: string;

    /** DEVICE_VERSION_INFO_UPDATE_REQ hardwareVersion */
    hardwareVersion: string;
}

/** Represents a DEVICE_VERSION_INFO_UPDATE_REQ. */
export class DEVICE_VERSION_INFO_UPDATE_REQ implements IDEVICE_VERSION_INFO_UPDATE_REQ {

    /**
     * Constructs a new DEVICE_VERSION_INFO_UPDATE_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_VERSION_INFO_UPDATE_REQ);

    /** DEVICE_VERSION_INFO_UPDATE_REQ softwareVersion. */
    public softwareVersion: string;

    /** DEVICE_VERSION_INFO_UPDATE_REQ hardwareVersion. */
    public hardwareVersion: string;

    /**
     * Creates a new DEVICE_VERSION_INFO_UPDATE_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_VERSION_INFO_UPDATE_REQ instance
     */
    public static create(properties?: IDEVICE_VERSION_INFO_UPDATE_REQ): DEVICE_VERSION_INFO_UPDATE_REQ;

    /**
     * Encodes the specified DEVICE_VERSION_INFO_UPDATE_REQ message. Does not implicitly {@link DEVICE_VERSION_INFO_UPDATE_REQ.verify|verify} messages.
     * @param message DEVICE_VERSION_INFO_UPDATE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_VERSION_INFO_UPDATE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_VERSION_INFO_UPDATE_REQ message, length delimited. Does not implicitly {@link DEVICE_VERSION_INFO_UPDATE_REQ.verify|verify} messages.
     * @param message DEVICE_VERSION_INFO_UPDATE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_VERSION_INFO_UPDATE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_VERSION_INFO_UPDATE_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_VERSION_INFO_UPDATE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_VERSION_INFO_UPDATE_REQ;

    /**
     * Decodes a DEVICE_VERSION_INFO_UPDATE_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_VERSION_INFO_UPDATE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_VERSION_INFO_UPDATE_REQ;

    /**
     * Verifies a DEVICE_VERSION_INFO_UPDATE_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_VERSION_INFO_UPDATE_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_VERSION_INFO_UPDATE_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_VERSION_INFO_UPDATE_REQ;

    /**
     * Creates a plain object from a DEVICE_VERSION_INFO_UPDATE_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_VERSION_INFO_UPDATE_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_VERSION_INFO_UPDATE_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_VERSION_INFO_UPDATE_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_VERSION_INFO_UPDATE_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_VERSION_INFO_UPDATE_RSP. */
export interface IDEVICE_VERSION_INFO_UPDATE_RSP {

    /** DEVICE_VERSION_INFO_UPDATE_RSP result */
    result: number;
}

/** Represents a DEVICE_VERSION_INFO_UPDATE_RSP. */
export class DEVICE_VERSION_INFO_UPDATE_RSP implements IDEVICE_VERSION_INFO_UPDATE_RSP {

    /**
     * Constructs a new DEVICE_VERSION_INFO_UPDATE_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_VERSION_INFO_UPDATE_RSP);

    /** DEVICE_VERSION_INFO_UPDATE_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_VERSION_INFO_UPDATE_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_VERSION_INFO_UPDATE_RSP instance
     */
    public static create(properties?: IDEVICE_VERSION_INFO_UPDATE_RSP): DEVICE_VERSION_INFO_UPDATE_RSP;

    /**
     * Encodes the specified DEVICE_VERSION_INFO_UPDATE_RSP message. Does not implicitly {@link DEVICE_VERSION_INFO_UPDATE_RSP.verify|verify} messages.
     * @param message DEVICE_VERSION_INFO_UPDATE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_VERSION_INFO_UPDATE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_VERSION_INFO_UPDATE_RSP message, length delimited. Does not implicitly {@link DEVICE_VERSION_INFO_UPDATE_RSP.verify|verify} messages.
     * @param message DEVICE_VERSION_INFO_UPDATE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_VERSION_INFO_UPDATE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_VERSION_INFO_UPDATE_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_VERSION_INFO_UPDATE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_VERSION_INFO_UPDATE_RSP;

    /**
     * Decodes a DEVICE_VERSION_INFO_UPDATE_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_VERSION_INFO_UPDATE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_VERSION_INFO_UPDATE_RSP;

    /**
     * Verifies a DEVICE_VERSION_INFO_UPDATE_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_VERSION_INFO_UPDATE_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_VERSION_INFO_UPDATE_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_VERSION_INFO_UPDATE_RSP;

    /**
     * Creates a plain object from a DEVICE_VERSION_INFO_UPDATE_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_VERSION_INFO_UPDATE_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_VERSION_INFO_UPDATE_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_VERSION_INFO_UPDATE_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_VERSION_INFO_UPDATE_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PUSH_DEVICE_AGENT_SETTING_REQ. */
export interface IPUSH_DEVICE_AGENT_SETTING_REQ {

    /** PUSH_DEVICE_AGENT_SETTING_REQ deviceId */
    deviceId: number;

    /** PUSH_DEVICE_AGENT_SETTING_REQ voice */
    voice: IUSER_SET_DEVICE_CTRL_SETTING_REQ;

    /** PUSH_DEVICE_AGENT_SETTING_REQ cleanPreference */
    cleanPreference: IUSER_SET_DEVICE_CLEANPREFERENCE_REQ;

    /** PUSH_DEVICE_AGENT_SETTING_REQ taskList */
    taskList?: (IDEVICE_ORDERLIST_SETTING_REQ|null);

    /** PUSH_DEVICE_AGENT_SETTING_REQ ota */
    ota: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ;

    /** PUSH_DEVICE_AGENT_SETTING_REQ quietHours */
    quietHours: IUSER_SET_DEVICE_QUIETHOURS_REQ;
}

/** Represents a PUSH_DEVICE_AGENT_SETTING_REQ. */
export class PUSH_DEVICE_AGENT_SETTING_REQ implements IPUSH_DEVICE_AGENT_SETTING_REQ {

    /**
     * Constructs a new PUSH_DEVICE_AGENT_SETTING_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPUSH_DEVICE_AGENT_SETTING_REQ);

    /** PUSH_DEVICE_AGENT_SETTING_REQ deviceId. */
    public deviceId: number;

    /** PUSH_DEVICE_AGENT_SETTING_REQ voice. */
    public voice: IUSER_SET_DEVICE_CTRL_SETTING_REQ;

    /** PUSH_DEVICE_AGENT_SETTING_REQ cleanPreference. */
    public cleanPreference: IUSER_SET_DEVICE_CLEANPREFERENCE_REQ;

    /** PUSH_DEVICE_AGENT_SETTING_REQ taskList. */
    public taskList?: (IDEVICE_ORDERLIST_SETTING_REQ|null);

    /** PUSH_DEVICE_AGENT_SETTING_REQ ota. */
    public ota: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ;

    /** PUSH_DEVICE_AGENT_SETTING_REQ quietHours. */
    public quietHours: IUSER_SET_DEVICE_QUIETHOURS_REQ;

    /**
     * Creates a new PUSH_DEVICE_AGENT_SETTING_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PUSH_DEVICE_AGENT_SETTING_REQ instance
     */
    public static create(properties?: IPUSH_DEVICE_AGENT_SETTING_REQ): PUSH_DEVICE_AGENT_SETTING_REQ;

    /**
     * Encodes the specified PUSH_DEVICE_AGENT_SETTING_REQ message. Does not implicitly {@link PUSH_DEVICE_AGENT_SETTING_REQ.verify|verify} messages.
     * @param message PUSH_DEVICE_AGENT_SETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPUSH_DEVICE_AGENT_SETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PUSH_DEVICE_AGENT_SETTING_REQ message, length delimited. Does not implicitly {@link PUSH_DEVICE_AGENT_SETTING_REQ.verify|verify} messages.
     * @param message PUSH_DEVICE_AGENT_SETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPUSH_DEVICE_AGENT_SETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PUSH_DEVICE_AGENT_SETTING_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PUSH_DEVICE_AGENT_SETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PUSH_DEVICE_AGENT_SETTING_REQ;

    /**
     * Decodes a PUSH_DEVICE_AGENT_SETTING_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PUSH_DEVICE_AGENT_SETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PUSH_DEVICE_AGENT_SETTING_REQ;

    /**
     * Verifies a PUSH_DEVICE_AGENT_SETTING_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PUSH_DEVICE_AGENT_SETTING_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PUSH_DEVICE_AGENT_SETTING_REQ
     */
    public static fromObject(object: { [k: string]: any }): PUSH_DEVICE_AGENT_SETTING_REQ;

    /**
     * Creates a plain object from a PUSH_DEVICE_AGENT_SETTING_REQ message. Also converts values to other types if specified.
     * @param message PUSH_DEVICE_AGENT_SETTING_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PUSH_DEVICE_AGENT_SETTING_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PUSH_DEVICE_AGENT_SETTING_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PUSH_DEVICE_AGENT_SETTING_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PUSH_DEVICE_AGENT_SETTING_RSP. */
export interface IPUSH_DEVICE_AGENT_SETTING_RSP {

    /** PUSH_DEVICE_AGENT_SETTING_RSP result */
    result: number;
}

/** Represents a PUSH_DEVICE_AGENT_SETTING_RSP. */
export class PUSH_DEVICE_AGENT_SETTING_RSP implements IPUSH_DEVICE_AGENT_SETTING_RSP {

    /**
     * Constructs a new PUSH_DEVICE_AGENT_SETTING_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPUSH_DEVICE_AGENT_SETTING_RSP);

    /** PUSH_DEVICE_AGENT_SETTING_RSP result. */
    public result: number;

    /**
     * Creates a new PUSH_DEVICE_AGENT_SETTING_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PUSH_DEVICE_AGENT_SETTING_RSP instance
     */
    public static create(properties?: IPUSH_DEVICE_AGENT_SETTING_RSP): PUSH_DEVICE_AGENT_SETTING_RSP;

    /**
     * Encodes the specified PUSH_DEVICE_AGENT_SETTING_RSP message. Does not implicitly {@link PUSH_DEVICE_AGENT_SETTING_RSP.verify|verify} messages.
     * @param message PUSH_DEVICE_AGENT_SETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPUSH_DEVICE_AGENT_SETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PUSH_DEVICE_AGENT_SETTING_RSP message, length delimited. Does not implicitly {@link PUSH_DEVICE_AGENT_SETTING_RSP.verify|verify} messages.
     * @param message PUSH_DEVICE_AGENT_SETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPUSH_DEVICE_AGENT_SETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PUSH_DEVICE_AGENT_SETTING_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PUSH_DEVICE_AGENT_SETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PUSH_DEVICE_AGENT_SETTING_RSP;

    /**
     * Decodes a PUSH_DEVICE_AGENT_SETTING_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PUSH_DEVICE_AGENT_SETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PUSH_DEVICE_AGENT_SETTING_RSP;

    /**
     * Verifies a PUSH_DEVICE_AGENT_SETTING_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PUSH_DEVICE_AGENT_SETTING_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PUSH_DEVICE_AGENT_SETTING_RSP
     */
    public static fromObject(object: { [k: string]: any }): PUSH_DEVICE_AGENT_SETTING_RSP;

    /**
     * Creates a plain object from a PUSH_DEVICE_AGENT_SETTING_RSP message. Also converts values to other types if specified.
     * @param message PUSH_DEVICE_AGENT_SETTING_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PUSH_DEVICE_AGENT_SETTING_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PUSH_DEVICE_AGENT_SETTING_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PUSH_DEVICE_AGENT_SETTING_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ. */
export interface IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ {

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ newVersion */
    newVersion: boolean;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ packageSize */
    packageSize: string;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ systemVersion */
    systemVersion: string;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ otaPackageVersion */
    otaPackageVersion: string;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ remoteUrl */
    remoteUrl: string;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ forceupgrade */
    forceupgrade: boolean;
}

/** Represents a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ. */
export class PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ implements IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ {

    /**
     * Constructs a new PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ);

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ newVersion. */
    public newVersion: boolean;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ packageSize. */
    public packageSize: string;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ systemVersion. */
    public systemVersion: string;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ otaPackageVersion. */
    public otaPackageVersion: string;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ remoteUrl. */
    public remoteUrl: string;

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ forceupgrade. */
    public forceupgrade: boolean;

    /**
     * Creates a new PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ instance
     */
    public static create(properties?: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ): PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ;

    /**
     * Encodes the specified PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message. Does not implicitly {@link PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ.verify|verify} messages.
     * @param message PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message, length delimited. Does not implicitly {@link PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ.verify|verify} messages.
     * @param message PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ;

    /**
     * Decodes a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ;

    /**
     * Verifies a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ;

    /**
     * Creates a plain object from a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ message. Also converts values to other types if specified.
     * @param message PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PUSH_DEVICE_PACKAGE_UPGRADE_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP. */
export interface IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP {

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP result */
    result: number;
}

/** Represents a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP. */
export class PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP implements IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP {

    /**
     * Constructs a new PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP);

    /** PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP result. */
    public result: number;

    /**
     * Creates a new PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP instance
     */
    public static create(properties?: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP): PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP;

    /**
     * Encodes the specified PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message. Does not implicitly {@link PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP.verify|verify} messages.
     * @param message PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message, length delimited. Does not implicitly {@link PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP.verify|verify} messages.
     * @param message PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP;

    /**
     * Decodes a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP;

    /**
     * Verifies a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP
     */
    public static fromObject(object: { [k: string]: any }): PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP;

    /**
     * Creates a plain object from a PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP message. Also converts values to other types if specified.
     * @param message PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PUSH_DEVICE_PACKAGE_UPGRADE_INFO_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a PUSH_DEVICE_BATTERY_INFO_REQ. */
export interface IPUSH_DEVICE_BATTERY_INFO_REQ {

    /** PUSH_DEVICE_BATTERY_INFO_REQ battery */
    battery: PUSH_DEVICE_BATTERY_INFO_REQ.IBattery;
}

/** Represents a PUSH_DEVICE_BATTERY_INFO_REQ. */
export class PUSH_DEVICE_BATTERY_INFO_REQ implements IPUSH_DEVICE_BATTERY_INFO_REQ {

    /**
     * Constructs a new PUSH_DEVICE_BATTERY_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPUSH_DEVICE_BATTERY_INFO_REQ);

    /** PUSH_DEVICE_BATTERY_INFO_REQ battery. */
    public battery: PUSH_DEVICE_BATTERY_INFO_REQ.IBattery;

    /**
     * Creates a new PUSH_DEVICE_BATTERY_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PUSH_DEVICE_BATTERY_INFO_REQ instance
     */
    public static create(properties?: IPUSH_DEVICE_BATTERY_INFO_REQ): PUSH_DEVICE_BATTERY_INFO_REQ;

    /**
     * Encodes the specified PUSH_DEVICE_BATTERY_INFO_REQ message. Does not implicitly {@link PUSH_DEVICE_BATTERY_INFO_REQ.verify|verify} messages.
     * @param message PUSH_DEVICE_BATTERY_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPUSH_DEVICE_BATTERY_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PUSH_DEVICE_BATTERY_INFO_REQ message, length delimited. Does not implicitly {@link PUSH_DEVICE_BATTERY_INFO_REQ.verify|verify} messages.
     * @param message PUSH_DEVICE_BATTERY_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPUSH_DEVICE_BATTERY_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PUSH_DEVICE_BATTERY_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PUSH_DEVICE_BATTERY_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PUSH_DEVICE_BATTERY_INFO_REQ;

    /**
     * Decodes a PUSH_DEVICE_BATTERY_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PUSH_DEVICE_BATTERY_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PUSH_DEVICE_BATTERY_INFO_REQ;

    /**
     * Verifies a PUSH_DEVICE_BATTERY_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PUSH_DEVICE_BATTERY_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PUSH_DEVICE_BATTERY_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): PUSH_DEVICE_BATTERY_INFO_REQ;

    /**
     * Creates a plain object from a PUSH_DEVICE_BATTERY_INFO_REQ message. Also converts values to other types if specified.
     * @param message PUSH_DEVICE_BATTERY_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PUSH_DEVICE_BATTERY_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PUSH_DEVICE_BATTERY_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PUSH_DEVICE_BATTERY_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace PUSH_DEVICE_BATTERY_INFO_REQ {

    /** Properties of a Battery. */
    interface IBattery {

        /** Battery level */
        level: number;
    }

    /** Represents a Battery. */
    class Battery implements IBattery {

        /**
         * Constructs a new Battery.
         * @param [properties] Properties to set
         */
        constructor(properties?: PUSH_DEVICE_BATTERY_INFO_REQ.IBattery);

        /** Battery level. */
        public level: number;

        /**
         * Creates a new Battery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Battery instance
         */
        public static create(properties?: PUSH_DEVICE_BATTERY_INFO_REQ.IBattery): PUSH_DEVICE_BATTERY_INFO_REQ.Battery;

        /**
         * Encodes the specified Battery message. Does not implicitly {@link PUSH_DEVICE_BATTERY_INFO_REQ.Battery.verify|verify} messages.
         * @param message Battery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PUSH_DEVICE_BATTERY_INFO_REQ.IBattery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Battery message, length delimited. Does not implicitly {@link PUSH_DEVICE_BATTERY_INFO_REQ.Battery.verify|verify} messages.
         * @param message Battery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PUSH_DEVICE_BATTERY_INFO_REQ.IBattery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Battery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Battery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PUSH_DEVICE_BATTERY_INFO_REQ.Battery;

        /**
         * Decodes a Battery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Battery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PUSH_DEVICE_BATTERY_INFO_REQ.Battery;

        /**
         * Verifies a Battery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Battery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Battery
         */
        public static fromObject(object: { [k: string]: any }): PUSH_DEVICE_BATTERY_INFO_REQ.Battery;

        /**
         * Creates a plain object from a Battery message. Also converts values to other types if specified.
         * @param message Battery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PUSH_DEVICE_BATTERY_INFO_REQ.Battery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Battery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Battery
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a PUSH_DEVICE_BATTERY_INFO_RSP. */
export interface IPUSH_DEVICE_BATTERY_INFO_RSP {

    /** PUSH_DEVICE_BATTERY_INFO_RSP result */
    result: number;
}

/** Represents a PUSH_DEVICE_BATTERY_INFO_RSP. */
export class PUSH_DEVICE_BATTERY_INFO_RSP implements IPUSH_DEVICE_BATTERY_INFO_RSP {

    /**
     * Constructs a new PUSH_DEVICE_BATTERY_INFO_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPUSH_DEVICE_BATTERY_INFO_RSP);

    /** PUSH_DEVICE_BATTERY_INFO_RSP result. */
    public result: number;

    /**
     * Creates a new PUSH_DEVICE_BATTERY_INFO_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PUSH_DEVICE_BATTERY_INFO_RSP instance
     */
    public static create(properties?: IPUSH_DEVICE_BATTERY_INFO_RSP): PUSH_DEVICE_BATTERY_INFO_RSP;

    /**
     * Encodes the specified PUSH_DEVICE_BATTERY_INFO_RSP message. Does not implicitly {@link PUSH_DEVICE_BATTERY_INFO_RSP.verify|verify} messages.
     * @param message PUSH_DEVICE_BATTERY_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPUSH_DEVICE_BATTERY_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PUSH_DEVICE_BATTERY_INFO_RSP message, length delimited. Does not implicitly {@link PUSH_DEVICE_BATTERY_INFO_RSP.verify|verify} messages.
     * @param message PUSH_DEVICE_BATTERY_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPUSH_DEVICE_BATTERY_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PUSH_DEVICE_BATTERY_INFO_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PUSH_DEVICE_BATTERY_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PUSH_DEVICE_BATTERY_INFO_RSP;

    /**
     * Decodes a PUSH_DEVICE_BATTERY_INFO_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PUSH_DEVICE_BATTERY_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PUSH_DEVICE_BATTERY_INFO_RSP;

    /**
     * Verifies a PUSH_DEVICE_BATTERY_INFO_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PUSH_DEVICE_BATTERY_INFO_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PUSH_DEVICE_BATTERY_INFO_RSP
     */
    public static fromObject(object: { [k: string]: any }): PUSH_DEVICE_BATTERY_INFO_RSP;

    /**
     * Creates a plain object from a PUSH_DEVICE_BATTERY_INFO_RSP message. Also converts values to other types if specified.
     * @param message PUSH_DEVICE_BATTERY_INFO_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PUSH_DEVICE_BATTERY_INFO_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PUSH_DEVICE_BATTERY_INFO_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PUSH_DEVICE_BATTERY_INFO_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_SEEK_LOCATION_REQ. */
export interface IDEVICE_SEEK_LOCATION_REQ {
}

/** Represents a DEVICE_SEEK_LOCATION_REQ. */
export class DEVICE_SEEK_LOCATION_REQ implements IDEVICE_SEEK_LOCATION_REQ {

    /**
     * Constructs a new DEVICE_SEEK_LOCATION_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_SEEK_LOCATION_REQ);

    /**
     * Creates a new DEVICE_SEEK_LOCATION_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_SEEK_LOCATION_REQ instance
     */
    public static create(properties?: IDEVICE_SEEK_LOCATION_REQ): DEVICE_SEEK_LOCATION_REQ;

    /**
     * Encodes the specified DEVICE_SEEK_LOCATION_REQ message. Does not implicitly {@link DEVICE_SEEK_LOCATION_REQ.verify|verify} messages.
     * @param message DEVICE_SEEK_LOCATION_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_SEEK_LOCATION_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_SEEK_LOCATION_REQ message, length delimited. Does not implicitly {@link DEVICE_SEEK_LOCATION_REQ.verify|verify} messages.
     * @param message DEVICE_SEEK_LOCATION_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_SEEK_LOCATION_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_SEEK_LOCATION_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_SEEK_LOCATION_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_SEEK_LOCATION_REQ;

    /**
     * Decodes a DEVICE_SEEK_LOCATION_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_SEEK_LOCATION_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_SEEK_LOCATION_REQ;

    /**
     * Verifies a DEVICE_SEEK_LOCATION_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_SEEK_LOCATION_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_SEEK_LOCATION_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_SEEK_LOCATION_REQ;

    /**
     * Creates a plain object from a DEVICE_SEEK_LOCATION_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_SEEK_LOCATION_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_SEEK_LOCATION_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_SEEK_LOCATION_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_SEEK_LOCATION_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_SEEK_LOCATION_RSP. */
export interface IDEVICE_SEEK_LOCATION_RSP {
}

/** Represents a DEVICE_SEEK_LOCATION_RSP. */
export class DEVICE_SEEK_LOCATION_RSP implements IDEVICE_SEEK_LOCATION_RSP {

    /**
     * Constructs a new DEVICE_SEEK_LOCATION_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_SEEK_LOCATION_RSP);

    /**
     * Creates a new DEVICE_SEEK_LOCATION_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_SEEK_LOCATION_RSP instance
     */
    public static create(properties?: IDEVICE_SEEK_LOCATION_RSP): DEVICE_SEEK_LOCATION_RSP;

    /**
     * Encodes the specified DEVICE_SEEK_LOCATION_RSP message. Does not implicitly {@link DEVICE_SEEK_LOCATION_RSP.verify|verify} messages.
     * @param message DEVICE_SEEK_LOCATION_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_SEEK_LOCATION_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_SEEK_LOCATION_RSP message, length delimited. Does not implicitly {@link DEVICE_SEEK_LOCATION_RSP.verify|verify} messages.
     * @param message DEVICE_SEEK_LOCATION_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_SEEK_LOCATION_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_SEEK_LOCATION_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_SEEK_LOCATION_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_SEEK_LOCATION_RSP;

    /**
     * Decodes a DEVICE_SEEK_LOCATION_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_SEEK_LOCATION_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_SEEK_LOCATION_RSP;

    /**
     * Verifies a DEVICE_SEEK_LOCATION_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_SEEK_LOCATION_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_SEEK_LOCATION_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_SEEK_LOCATION_RSP;

    /**
     * Creates a plain object from a DEVICE_SEEK_LOCATION_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_SEEK_LOCATION_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_SEEK_LOCATION_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_SEEK_LOCATION_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_SEEK_LOCATION_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_STATUS_GETTING_REQ. */
export interface IDEVICE_STATUS_GETTING_REQ {
}

/** Represents a DEVICE_STATUS_GETTING_REQ. */
export class DEVICE_STATUS_GETTING_REQ implements IDEVICE_STATUS_GETTING_REQ {

    /**
     * Constructs a new DEVICE_STATUS_GETTING_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_STATUS_GETTING_REQ);

    /**
     * Creates a new DEVICE_STATUS_GETTING_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_STATUS_GETTING_REQ instance
     */
    public static create(properties?: IDEVICE_STATUS_GETTING_REQ): DEVICE_STATUS_GETTING_REQ;

    /**
     * Encodes the specified DEVICE_STATUS_GETTING_REQ message. Does not implicitly {@link DEVICE_STATUS_GETTING_REQ.verify|verify} messages.
     * @param message DEVICE_STATUS_GETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_STATUS_GETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_STATUS_GETTING_REQ message, length delimited. Does not implicitly {@link DEVICE_STATUS_GETTING_REQ.verify|verify} messages.
     * @param message DEVICE_STATUS_GETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_STATUS_GETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_STATUS_GETTING_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_STATUS_GETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_STATUS_GETTING_REQ;

    /**
     * Decodes a DEVICE_STATUS_GETTING_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_STATUS_GETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_STATUS_GETTING_REQ;

    /**
     * Verifies a DEVICE_STATUS_GETTING_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_STATUS_GETTING_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_STATUS_GETTING_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_STATUS_GETTING_REQ;

    /**
     * Creates a plain object from a DEVICE_STATUS_GETTING_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_STATUS_GETTING_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_STATUS_GETTING_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_STATUS_GETTING_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_STATUS_GETTING_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_WORK_STATUS_PUSH_REQ. */
export interface IDEVICE_MAPID_WORK_STATUS_PUSH_REQ {

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ mapHeadId */
    mapHeadId: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ areaCleanFlag */
    areaCleanFlag: boolean;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ workMode */
    workMode: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ battery */
    battery: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ chargeStatus */
    chargeStatus: boolean;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ type */
    type: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ faultCode */
    faultCode: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ cleanPreference */
    cleanPreference: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ repeatClean */
    repeatClean: boolean;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ cleanTime */
    cleanTime: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ cleanSize */
    cleanSize: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ waterLevel */
    waterLevel?: (number|null);

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ dustBoxType */
    dustBoxType?: (number|null);

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ mopType */
    mopType?: (boolean|null);
}

/** Represents a DEVICE_MAPID_WORK_STATUS_PUSH_REQ. */
export class DEVICE_MAPID_WORK_STATUS_PUSH_REQ implements IDEVICE_MAPID_WORK_STATUS_PUSH_REQ {

    /**
     * Constructs a new DEVICE_MAPID_WORK_STATUS_PUSH_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_WORK_STATUS_PUSH_REQ);

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ mapHeadId. */
    public mapHeadId: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ areaCleanFlag. */
    public areaCleanFlag: boolean;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ workMode. */
    public workMode: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ battery. */
    public battery: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ chargeStatus. */
    public chargeStatus: boolean;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ type. */
    public type: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ faultCode. */
    public faultCode: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ cleanPreference. */
    public cleanPreference: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ repeatClean. */
    public repeatClean: boolean;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ cleanTime. */
    public cleanTime: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ cleanSize. */
    public cleanSize: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ waterLevel. */
    public waterLevel: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ dustBoxType. */
    public dustBoxType: number;

    /** DEVICE_MAPID_WORK_STATUS_PUSH_REQ mopType. */
    public mopType: boolean;

    /**
     * Creates a new DEVICE_MAPID_WORK_STATUS_PUSH_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_WORK_STATUS_PUSH_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_WORK_STATUS_PUSH_REQ): DEVICE_MAPID_WORK_STATUS_PUSH_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_WORK_STATUS_PUSH_REQ message. Does not implicitly {@link DEVICE_MAPID_WORK_STATUS_PUSH_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_WORK_STATUS_PUSH_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_WORK_STATUS_PUSH_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_WORK_STATUS_PUSH_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_WORK_STATUS_PUSH_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_WORK_STATUS_PUSH_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_WORK_STATUS_PUSH_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_WORK_STATUS_PUSH_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_WORK_STATUS_PUSH_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_WORK_STATUS_PUSH_REQ;

    /**
     * Decodes a DEVICE_MAPID_WORK_STATUS_PUSH_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_WORK_STATUS_PUSH_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_WORK_STATUS_PUSH_REQ;

    /**
     * Verifies a DEVICE_MAPID_WORK_STATUS_PUSH_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_WORK_STATUS_PUSH_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_WORK_STATUS_PUSH_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_WORK_STATUS_PUSH_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_WORK_STATUS_PUSH_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_WORK_STATUS_PUSH_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_WORK_STATUS_PUSH_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_WORK_STATUS_PUSH_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_WORK_STATUS_PUSH_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_SET_CLEAN_PREFERENCE_REQ. */
export interface IDEVICE_SET_CLEAN_PREFERENCE_REQ {

    /** DEVICE_SET_CLEAN_PREFERENCE_REQ mode */
    mode: number;
}

/** Represents a DEVICE_SET_CLEAN_PREFERENCE_REQ. */
export class DEVICE_SET_CLEAN_PREFERENCE_REQ implements IDEVICE_SET_CLEAN_PREFERENCE_REQ {

    /**
     * Constructs a new DEVICE_SET_CLEAN_PREFERENCE_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_SET_CLEAN_PREFERENCE_REQ);

    /** DEVICE_SET_CLEAN_PREFERENCE_REQ mode. */
    public mode: number;

    /**
     * Creates a new DEVICE_SET_CLEAN_PREFERENCE_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_SET_CLEAN_PREFERENCE_REQ instance
     */
    public static create(properties?: IDEVICE_SET_CLEAN_PREFERENCE_REQ): DEVICE_SET_CLEAN_PREFERENCE_REQ;

    /**
     * Encodes the specified DEVICE_SET_CLEAN_PREFERENCE_REQ message. Does not implicitly {@link DEVICE_SET_CLEAN_PREFERENCE_REQ.verify|verify} messages.
     * @param message DEVICE_SET_CLEAN_PREFERENCE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_SET_CLEAN_PREFERENCE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_SET_CLEAN_PREFERENCE_REQ message, length delimited. Does not implicitly {@link DEVICE_SET_CLEAN_PREFERENCE_REQ.verify|verify} messages.
     * @param message DEVICE_SET_CLEAN_PREFERENCE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_SET_CLEAN_PREFERENCE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_SET_CLEAN_PREFERENCE_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_SET_CLEAN_PREFERENCE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_SET_CLEAN_PREFERENCE_REQ;

    /**
     * Decodes a DEVICE_SET_CLEAN_PREFERENCE_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_SET_CLEAN_PREFERENCE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_SET_CLEAN_PREFERENCE_REQ;

    /**
     * Verifies a DEVICE_SET_CLEAN_PREFERENCE_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_SET_CLEAN_PREFERENCE_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_SET_CLEAN_PREFERENCE_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_SET_CLEAN_PREFERENCE_REQ;

    /**
     * Creates a plain object from a DEVICE_SET_CLEAN_PREFERENCE_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_SET_CLEAN_PREFERENCE_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_SET_CLEAN_PREFERENCE_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_SET_CLEAN_PREFERENCE_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_SET_CLEAN_PREFERENCE_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_SET_CLEAN_PREFERENCE_RSP. */
export interface IDEVICE_SET_CLEAN_PREFERENCE_RSP {

    /** DEVICE_SET_CLEAN_PREFERENCE_RSP result */
    result: number;
}

/** Represents a DEVICE_SET_CLEAN_PREFERENCE_RSP. */
export class DEVICE_SET_CLEAN_PREFERENCE_RSP implements IDEVICE_SET_CLEAN_PREFERENCE_RSP {

    /**
     * Constructs a new DEVICE_SET_CLEAN_PREFERENCE_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_SET_CLEAN_PREFERENCE_RSP);

    /** DEVICE_SET_CLEAN_PREFERENCE_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_SET_CLEAN_PREFERENCE_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_SET_CLEAN_PREFERENCE_RSP instance
     */
    public static create(properties?: IDEVICE_SET_CLEAN_PREFERENCE_RSP): DEVICE_SET_CLEAN_PREFERENCE_RSP;

    /**
     * Encodes the specified DEVICE_SET_CLEAN_PREFERENCE_RSP message. Does not implicitly {@link DEVICE_SET_CLEAN_PREFERENCE_RSP.verify|verify} messages.
     * @param message DEVICE_SET_CLEAN_PREFERENCE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_SET_CLEAN_PREFERENCE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_SET_CLEAN_PREFERENCE_RSP message, length delimited. Does not implicitly {@link DEVICE_SET_CLEAN_PREFERENCE_RSP.verify|verify} messages.
     * @param message DEVICE_SET_CLEAN_PREFERENCE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_SET_CLEAN_PREFERENCE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_SET_CLEAN_PREFERENCE_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_SET_CLEAN_PREFERENCE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_SET_CLEAN_PREFERENCE_RSP;

    /**
     * Decodes a DEVICE_SET_CLEAN_PREFERENCE_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_SET_CLEAN_PREFERENCE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_SET_CLEAN_PREFERENCE_RSP;

    /**
     * Verifies a DEVICE_SET_CLEAN_PREFERENCE_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_SET_CLEAN_PREFERENCE_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_SET_CLEAN_PREFERENCE_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_SET_CLEAN_PREFERENCE_RSP;

    /**
     * Creates a plain object from a DEVICE_SET_CLEAN_PREFERENCE_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_SET_CLEAN_PREFERENCE_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_SET_CLEAN_PREFERENCE_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_SET_CLEAN_PREFERENCE_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_SET_CLEAN_PREFERENCE_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_AUTO_CLEAN_REQ. */
export interface IDEVICE_AUTO_CLEAN_REQ {

    /** DEVICE_AUTO_CLEAN_REQ ctrlValue */
    ctrlValue: number;

    /** DEVICE_AUTO_CLEAN_REQ cleanType */
    cleanType: number;
}

/** Represents a DEVICE_AUTO_CLEAN_REQ. */
export class DEVICE_AUTO_CLEAN_REQ implements IDEVICE_AUTO_CLEAN_REQ {

    /**
     * Constructs a new DEVICE_AUTO_CLEAN_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_AUTO_CLEAN_REQ);

    /** DEVICE_AUTO_CLEAN_REQ ctrlValue. */
    public ctrlValue: number;

    /** DEVICE_AUTO_CLEAN_REQ cleanType. */
    public cleanType: number;

    /**
     * Creates a new DEVICE_AUTO_CLEAN_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_AUTO_CLEAN_REQ instance
     */
    public static create(properties?: IDEVICE_AUTO_CLEAN_REQ): DEVICE_AUTO_CLEAN_REQ;

    /**
     * Encodes the specified DEVICE_AUTO_CLEAN_REQ message. Does not implicitly {@link DEVICE_AUTO_CLEAN_REQ.verify|verify} messages.
     * @param message DEVICE_AUTO_CLEAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_AUTO_CLEAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_AUTO_CLEAN_REQ message, length delimited. Does not implicitly {@link DEVICE_AUTO_CLEAN_REQ.verify|verify} messages.
     * @param message DEVICE_AUTO_CLEAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_AUTO_CLEAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_AUTO_CLEAN_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_AUTO_CLEAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_AUTO_CLEAN_REQ;

    /**
     * Decodes a DEVICE_AUTO_CLEAN_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_AUTO_CLEAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_AUTO_CLEAN_REQ;

    /**
     * Verifies a DEVICE_AUTO_CLEAN_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_AUTO_CLEAN_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_AUTO_CLEAN_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_AUTO_CLEAN_REQ;

    /**
     * Creates a plain object from a DEVICE_AUTO_CLEAN_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_AUTO_CLEAN_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_AUTO_CLEAN_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_AUTO_CLEAN_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_AUTO_CLEAN_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_AUTO_CLEAN_RSP. */
export interface IDEVICE_AUTO_CLEAN_RSP {
}

/** Represents a DEVICE_AUTO_CLEAN_RSP. */
export class DEVICE_AUTO_CLEAN_RSP implements IDEVICE_AUTO_CLEAN_RSP {

    /**
     * Constructs a new DEVICE_AUTO_CLEAN_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_AUTO_CLEAN_RSP);

    /**
     * Creates a new DEVICE_AUTO_CLEAN_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_AUTO_CLEAN_RSP instance
     */
    public static create(properties?: IDEVICE_AUTO_CLEAN_RSP): DEVICE_AUTO_CLEAN_RSP;

    /**
     * Encodes the specified DEVICE_AUTO_CLEAN_RSP message. Does not implicitly {@link DEVICE_AUTO_CLEAN_RSP.verify|verify} messages.
     * @param message DEVICE_AUTO_CLEAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_AUTO_CLEAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_AUTO_CLEAN_RSP message, length delimited. Does not implicitly {@link DEVICE_AUTO_CLEAN_RSP.verify|verify} messages.
     * @param message DEVICE_AUTO_CLEAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_AUTO_CLEAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_AUTO_CLEAN_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_AUTO_CLEAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_AUTO_CLEAN_RSP;

    /**
     * Decodes a DEVICE_AUTO_CLEAN_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_AUTO_CLEAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_AUTO_CLEAN_RSP;

    /**
     * Verifies a DEVICE_AUTO_CLEAN_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_AUTO_CLEAN_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_AUTO_CLEAN_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_AUTO_CLEAN_RSP;

    /**
     * Creates a plain object from a DEVICE_AUTO_CLEAN_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_AUTO_CLEAN_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_AUTO_CLEAN_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_AUTO_CLEAN_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_AUTO_CLEAN_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_CHARGE_REQ. */
export interface IDEVICE_CHARGE_REQ {

    /** DEVICE_CHARGE_REQ enable */
    enable: number;
}

/** Represents a DEVICE_CHARGE_REQ. */
export class DEVICE_CHARGE_REQ implements IDEVICE_CHARGE_REQ {

    /**
     * Constructs a new DEVICE_CHARGE_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_CHARGE_REQ);

    /** DEVICE_CHARGE_REQ enable. */
    public enable: number;

    /**
     * Creates a new DEVICE_CHARGE_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_CHARGE_REQ instance
     */
    public static create(properties?: IDEVICE_CHARGE_REQ): DEVICE_CHARGE_REQ;

    /**
     * Encodes the specified DEVICE_CHARGE_REQ message. Does not implicitly {@link DEVICE_CHARGE_REQ.verify|verify} messages.
     * @param message DEVICE_CHARGE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_CHARGE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_CHARGE_REQ message, length delimited. Does not implicitly {@link DEVICE_CHARGE_REQ.verify|verify} messages.
     * @param message DEVICE_CHARGE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_CHARGE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_CHARGE_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_CHARGE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_CHARGE_REQ;

    /**
     * Decodes a DEVICE_CHARGE_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_CHARGE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_CHARGE_REQ;

    /**
     * Verifies a DEVICE_CHARGE_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_CHARGE_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_CHARGE_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_CHARGE_REQ;

    /**
     * Creates a plain object from a DEVICE_CHARGE_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_CHARGE_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_CHARGE_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_CHARGE_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_CHARGE_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_CHARGE_RSP. */
export interface IDEVICE_CHARGE_RSP {

    /** DEVICE_CHARGE_RSP result */
    result: number;
}

/** Represents a DEVICE_CHARGE_RSP. */
export class DEVICE_CHARGE_RSP implements IDEVICE_CHARGE_RSP {

    /**
     * Constructs a new DEVICE_CHARGE_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_CHARGE_RSP);

    /** DEVICE_CHARGE_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_CHARGE_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_CHARGE_RSP instance
     */
    public static create(properties?: IDEVICE_CHARGE_RSP): DEVICE_CHARGE_RSP;

    /**
     * Encodes the specified DEVICE_CHARGE_RSP message. Does not implicitly {@link DEVICE_CHARGE_RSP.verify|verify} messages.
     * @param message DEVICE_CHARGE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_CHARGE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_CHARGE_RSP message, length delimited. Does not implicitly {@link DEVICE_CHARGE_RSP.verify|verify} messages.
     * @param message DEVICE_CHARGE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_CHARGE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_CHARGE_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_CHARGE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_CHARGE_RSP;

    /**
     * Decodes a DEVICE_CHARGE_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_CHARGE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_CHARGE_RSP;

    /**
     * Verifies a DEVICE_CHARGE_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_CHARGE_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_CHARGE_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_CHARGE_RSP;

    /**
     * Creates a plain object from a DEVICE_CHARGE_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_CHARGE_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_CHARGE_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_CHARGE_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_CHARGE_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_GET_GLOBAL_INFO_REQ. */
export interface IDEVICE_MAPID_GET_GLOBAL_INFO_REQ {

    /** DEVICE_MAPID_GET_GLOBAL_INFO_REQ mask */
    mask: number;
}

/** Represents a DEVICE_MAPID_GET_GLOBAL_INFO_REQ. */
export class DEVICE_MAPID_GET_GLOBAL_INFO_REQ implements IDEVICE_MAPID_GET_GLOBAL_INFO_REQ {

    /**
     * Constructs a new DEVICE_MAPID_GET_GLOBAL_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_GET_GLOBAL_INFO_REQ);

    /** DEVICE_MAPID_GET_GLOBAL_INFO_REQ mask. */
    public mask: number;

    /**
     * Creates a new DEVICE_MAPID_GET_GLOBAL_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_GET_GLOBAL_INFO_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_GET_GLOBAL_INFO_REQ): DEVICE_MAPID_GET_GLOBAL_INFO_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_GET_GLOBAL_INFO_REQ message. Does not implicitly {@link DEVICE_MAPID_GET_GLOBAL_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_GET_GLOBAL_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_GET_GLOBAL_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_GET_GLOBAL_INFO_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_GET_GLOBAL_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_GET_GLOBAL_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_GET_GLOBAL_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_GET_GLOBAL_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_GET_GLOBAL_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_GET_GLOBAL_INFO_REQ;

    /**
     * Decodes a DEVICE_MAPID_GET_GLOBAL_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_GET_GLOBAL_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_GET_GLOBAL_INFO_REQ;

    /**
     * Verifies a DEVICE_MAPID_GET_GLOBAL_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_GET_GLOBAL_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_GET_GLOBAL_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_GET_GLOBAL_INFO_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_GET_GLOBAL_INFO_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_GET_GLOBAL_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_GET_GLOBAL_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_GET_GLOBAL_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_GET_GLOBAL_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_NAVIGATION_REQ. */
export interface IDEVICE_MAPID_SET_NAVIGATION_REQ {

    /** DEVICE_MAPID_SET_NAVIGATION_REQ mapHeadId */
    mapHeadId: number;

    /** DEVICE_MAPID_SET_NAVIGATION_REQ poseX */
    poseX: number;

    /** DEVICE_MAPID_SET_NAVIGATION_REQ poseY */
    poseY: number;

    /** DEVICE_MAPID_SET_NAVIGATION_REQ posePhi */
    posePhi: number;

    /** DEVICE_MAPID_SET_NAVIGATION_REQ ctrlValue */
    ctrlValue: number;
}

/** Represents a DEVICE_MAPID_SET_NAVIGATION_REQ. */
export class DEVICE_MAPID_SET_NAVIGATION_REQ implements IDEVICE_MAPID_SET_NAVIGATION_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SET_NAVIGATION_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_NAVIGATION_REQ);

    /** DEVICE_MAPID_SET_NAVIGATION_REQ mapHeadId. */
    public mapHeadId: number;

    /** DEVICE_MAPID_SET_NAVIGATION_REQ poseX. */
    public poseX: number;

    /** DEVICE_MAPID_SET_NAVIGATION_REQ poseY. */
    public poseY: number;

    /** DEVICE_MAPID_SET_NAVIGATION_REQ posePhi. */
    public posePhi: number;

    /** DEVICE_MAPID_SET_NAVIGATION_REQ ctrlValue. */
    public ctrlValue: number;

    /**
     * Creates a new DEVICE_MAPID_SET_NAVIGATION_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_NAVIGATION_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_NAVIGATION_REQ): DEVICE_MAPID_SET_NAVIGATION_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SET_NAVIGATION_REQ message. Does not implicitly {@link DEVICE_MAPID_SET_NAVIGATION_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_NAVIGATION_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_NAVIGATION_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_NAVIGATION_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_NAVIGATION_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_NAVIGATION_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_NAVIGATION_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_NAVIGATION_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_NAVIGATION_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_NAVIGATION_REQ;

    /**
     * Decodes a DEVICE_MAPID_SET_NAVIGATION_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_NAVIGATION_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_NAVIGATION_REQ;

    /**
     * Verifies a DEVICE_MAPID_SET_NAVIGATION_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_NAVIGATION_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_NAVIGATION_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_NAVIGATION_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_NAVIGATION_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_NAVIGATION_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_NAVIGATION_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_NAVIGATION_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_NAVIGATION_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_NAVIGATION_RSP. */
export interface IDEVICE_MAPID_SET_NAVIGATION_RSP {

    /** DEVICE_MAPID_SET_NAVIGATION_RSP result */
    result: number;

    /** DEVICE_MAPID_SET_NAVIGATION_RSP position */
    position: IDEVICE_MAPID_SET_NAVIGATION_REQ;
}

/** Represents a DEVICE_MAPID_SET_NAVIGATION_RSP. */
export class DEVICE_MAPID_SET_NAVIGATION_RSP implements IDEVICE_MAPID_SET_NAVIGATION_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SET_NAVIGATION_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_NAVIGATION_RSP);

    /** DEVICE_MAPID_SET_NAVIGATION_RSP result. */
    public result: number;

    /** DEVICE_MAPID_SET_NAVIGATION_RSP position. */
    public position: IDEVICE_MAPID_SET_NAVIGATION_REQ;

    /**
     * Creates a new DEVICE_MAPID_SET_NAVIGATION_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_NAVIGATION_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_NAVIGATION_RSP): DEVICE_MAPID_SET_NAVIGATION_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SET_NAVIGATION_RSP message. Does not implicitly {@link DEVICE_MAPID_SET_NAVIGATION_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_NAVIGATION_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_NAVIGATION_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_NAVIGATION_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_NAVIGATION_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_NAVIGATION_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_NAVIGATION_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_NAVIGATION_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_NAVIGATION_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_NAVIGATION_RSP;

    /**
     * Decodes a DEVICE_MAPID_SET_NAVIGATION_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_NAVIGATION_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_NAVIGATION_RSP;

    /**
     * Verifies a DEVICE_MAPID_SET_NAVIGATION_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_NAVIGATION_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_NAVIGATION_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_NAVIGATION_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_NAVIGATION_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_NAVIGATION_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_NAVIGATION_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_NAVIGATION_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_NAVIGATION_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_WORKSTATUS_REPORT_REQ. */
export interface IDEVICE_WORKSTATUS_REPORT_REQ {

    /** DEVICE_WORKSTATUS_REPORT_REQ status */
    status: number;
}

/** Represents a DEVICE_WORKSTATUS_REPORT_REQ. */
export class DEVICE_WORKSTATUS_REPORT_REQ implements IDEVICE_WORKSTATUS_REPORT_REQ {

    /**
     * Constructs a new DEVICE_WORKSTATUS_REPORT_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_WORKSTATUS_REPORT_REQ);

    /** DEVICE_WORKSTATUS_REPORT_REQ status. */
    public status: number;

    /**
     * Creates a new DEVICE_WORKSTATUS_REPORT_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_WORKSTATUS_REPORT_REQ instance
     */
    public static create(properties?: IDEVICE_WORKSTATUS_REPORT_REQ): DEVICE_WORKSTATUS_REPORT_REQ;

    /**
     * Encodes the specified DEVICE_WORKSTATUS_REPORT_REQ message. Does not implicitly {@link DEVICE_WORKSTATUS_REPORT_REQ.verify|verify} messages.
     * @param message DEVICE_WORKSTATUS_REPORT_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_WORKSTATUS_REPORT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_WORKSTATUS_REPORT_REQ message, length delimited. Does not implicitly {@link DEVICE_WORKSTATUS_REPORT_REQ.verify|verify} messages.
     * @param message DEVICE_WORKSTATUS_REPORT_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_WORKSTATUS_REPORT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_WORKSTATUS_REPORT_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_WORKSTATUS_REPORT_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_WORKSTATUS_REPORT_REQ;

    /**
     * Decodes a DEVICE_WORKSTATUS_REPORT_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_WORKSTATUS_REPORT_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_WORKSTATUS_REPORT_REQ;

    /**
     * Verifies a DEVICE_WORKSTATUS_REPORT_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_WORKSTATUS_REPORT_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_WORKSTATUS_REPORT_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_WORKSTATUS_REPORT_REQ;

    /**
     * Creates a plain object from a DEVICE_WORKSTATUS_REPORT_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_WORKSTATUS_REPORT_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_WORKSTATUS_REPORT_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_WORKSTATUS_REPORT_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_WORKSTATUS_REPORT_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_WORKSTATUS_REPORT_RSP. */
export interface IDEVICE_WORKSTATUS_REPORT_RSP {

    /** DEVICE_WORKSTATUS_REPORT_RSP result */
    result: number;
}

/** Represents a DEVICE_WORKSTATUS_REPORT_RSP. */
export class DEVICE_WORKSTATUS_REPORT_RSP implements IDEVICE_WORKSTATUS_REPORT_RSP {

    /**
     * Constructs a new DEVICE_WORKSTATUS_REPORT_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_WORKSTATUS_REPORT_RSP);

    /** DEVICE_WORKSTATUS_REPORT_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_WORKSTATUS_REPORT_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_WORKSTATUS_REPORT_RSP instance
     */
    public static create(properties?: IDEVICE_WORKSTATUS_REPORT_RSP): DEVICE_WORKSTATUS_REPORT_RSP;

    /**
     * Encodes the specified DEVICE_WORKSTATUS_REPORT_RSP message. Does not implicitly {@link DEVICE_WORKSTATUS_REPORT_RSP.verify|verify} messages.
     * @param message DEVICE_WORKSTATUS_REPORT_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_WORKSTATUS_REPORT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_WORKSTATUS_REPORT_RSP message, length delimited. Does not implicitly {@link DEVICE_WORKSTATUS_REPORT_RSP.verify|verify} messages.
     * @param message DEVICE_WORKSTATUS_REPORT_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_WORKSTATUS_REPORT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_WORKSTATUS_REPORT_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_WORKSTATUS_REPORT_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_WORKSTATUS_REPORT_RSP;

    /**
     * Decodes a DEVICE_WORKSTATUS_REPORT_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_WORKSTATUS_REPORT_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_WORKSTATUS_REPORT_RSP;

    /**
     * Verifies a DEVICE_WORKSTATUS_REPORT_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_WORKSTATUS_REPORT_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_WORKSTATUS_REPORT_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_WORKSTATUS_REPORT_RSP;

    /**
     * Creates a plain object from a DEVICE_WORKSTATUS_REPORT_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_WORKSTATUS_REPORT_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_WORKSTATUS_REPORT_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_WORKSTATUS_REPORT_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_WORKSTATUS_REPORT_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ. */
export interface IDEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ {

    /** DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ unk1 */
    unk1: number;

    /** DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ unk2 */
    unk2: string;
}

/** Represents a DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ. */
export class DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ implements IDEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ {

    /**
     * Constructs a new DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ);

    /** DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ unk1. */
    public unk1: number;

    /** DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ unk2. */
    public unk2: string;

    /**
     * Creates a new DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ instance
     */
    public static create(properties?: IDEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ): DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ;

    /**
     * Encodes the specified DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message. Does not implicitly {@link DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message, length delimited. Does not implicitly {@link DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ;

    /**
     * Decodes a DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ;

    /**
     * Verifies a DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ;

    /**
     * Creates a plain object from a DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_GET_ALL_GLOBAL_MAP_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP. */
export interface IDEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP {

    /** DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP result */
    result: number;
}

/** Represents a DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP. */
export class DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP implements IDEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP {

    /**
     * Constructs a new DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP);

    /** DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP instance
     */
    public static create(properties?: IDEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP): DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP;

    /**
     * Encodes the specified DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message. Does not implicitly {@link DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message, length delimited. Does not implicitly {@link DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP;

    /**
     * Decodes a DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP;

    /**
     * Verifies a DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP;

    /**
     * Creates a plain object from a DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_GET_ALL_GLOBAL_MAP_INFO_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_GETTIME_REQ. */
export interface IDEVICE_GETTIME_REQ {
}

/** Represents a DEVICE_GETTIME_REQ. */
export class DEVICE_GETTIME_REQ implements IDEVICE_GETTIME_REQ {

    /**
     * Constructs a new DEVICE_GETTIME_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_GETTIME_REQ);

    /**
     * Creates a new DEVICE_GETTIME_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_GETTIME_REQ instance
     */
    public static create(properties?: IDEVICE_GETTIME_REQ): DEVICE_GETTIME_REQ;

    /**
     * Encodes the specified DEVICE_GETTIME_REQ message. Does not implicitly {@link DEVICE_GETTIME_REQ.verify|verify} messages.
     * @param message DEVICE_GETTIME_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_GETTIME_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_GETTIME_REQ message, length delimited. Does not implicitly {@link DEVICE_GETTIME_REQ.verify|verify} messages.
     * @param message DEVICE_GETTIME_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_GETTIME_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_GETTIME_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_GETTIME_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_GETTIME_REQ;

    /**
     * Decodes a DEVICE_GETTIME_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_GETTIME_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_GETTIME_REQ;

    /**
     * Verifies a DEVICE_GETTIME_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_GETTIME_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_GETTIME_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_GETTIME_REQ;

    /**
     * Creates a plain object from a DEVICE_GETTIME_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_GETTIME_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_GETTIME_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_GETTIME_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_GETTIME_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_GETTIME_RSP. */
export interface IDEVICE_GETTIME_RSP {

    /** DEVICE_GETTIME_RSP result */
    result: number;

    /** DEVICE_GETTIME_RSP body */
    body: DEVICE_GETTIME_RSP.IBody;
}

/** Represents a DEVICE_GETTIME_RSP. */
export class DEVICE_GETTIME_RSP implements IDEVICE_GETTIME_RSP {

    /**
     * Constructs a new DEVICE_GETTIME_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_GETTIME_RSP);

    /** DEVICE_GETTIME_RSP result. */
    public result: number;

    /** DEVICE_GETTIME_RSP body. */
    public body: DEVICE_GETTIME_RSP.IBody;

    /**
     * Creates a new DEVICE_GETTIME_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_GETTIME_RSP instance
     */
    public static create(properties?: IDEVICE_GETTIME_RSP): DEVICE_GETTIME_RSP;

    /**
     * Encodes the specified DEVICE_GETTIME_RSP message. Does not implicitly {@link DEVICE_GETTIME_RSP.verify|verify} messages.
     * @param message DEVICE_GETTIME_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_GETTIME_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_GETTIME_RSP message, length delimited. Does not implicitly {@link DEVICE_GETTIME_RSP.verify|verify} messages.
     * @param message DEVICE_GETTIME_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_GETTIME_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_GETTIME_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_GETTIME_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_GETTIME_RSP;

    /**
     * Decodes a DEVICE_GETTIME_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_GETTIME_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_GETTIME_RSP;

    /**
     * Verifies a DEVICE_GETTIME_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_GETTIME_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_GETTIME_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_GETTIME_RSP;

    /**
     * Creates a plain object from a DEVICE_GETTIME_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_GETTIME_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_GETTIME_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_GETTIME_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_GETTIME_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_GETTIME_RSP {

    /** Properties of a Body. */
    interface IBody {

        /** Body deviceTime */
        deviceTime: number;

        /** Body deviceTimezone */
        deviceTimezone?: (number|null);
    }

    /** Represents a Body. */
    class Body implements IBody {

        /**
         * Constructs a new Body.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_GETTIME_RSP.IBody);

        /** Body deviceTime. */
        public deviceTime: number;

        /** Body deviceTimezone. */
        public deviceTimezone: number;

        /**
         * Creates a new Body instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Body instance
         */
        public static create(properties?: DEVICE_GETTIME_RSP.IBody): DEVICE_GETTIME_RSP.Body;

        /**
         * Encodes the specified Body message. Does not implicitly {@link DEVICE_GETTIME_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_GETTIME_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Body message, length delimited. Does not implicitly {@link DEVICE_GETTIME_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_GETTIME_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Body message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_GETTIME_RSP.Body;

        /**
         * Decodes a Body message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_GETTIME_RSP.Body;

        /**
         * Verifies a Body message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Body message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Body
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_GETTIME_RSP.Body;

        /**
         * Creates a plain object from a Body message. Also converts values to other types if specified.
         * @param message Body
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_GETTIME_RSP.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Body to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Body
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_SETTIME_REQ. */
export interface IDEVICE_SETTIME_REQ {
}

/** Represents a DEVICE_SETTIME_REQ. */
export class DEVICE_SETTIME_REQ implements IDEVICE_SETTIME_REQ {

    /**
     * Constructs a new DEVICE_SETTIME_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_SETTIME_REQ);

    /**
     * Creates a new DEVICE_SETTIME_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_SETTIME_REQ instance
     */
    public static create(properties?: IDEVICE_SETTIME_REQ): DEVICE_SETTIME_REQ;

    /**
     * Encodes the specified DEVICE_SETTIME_REQ message. Does not implicitly {@link DEVICE_SETTIME_REQ.verify|verify} messages.
     * @param message DEVICE_SETTIME_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_SETTIME_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_SETTIME_REQ message, length delimited. Does not implicitly {@link DEVICE_SETTIME_REQ.verify|verify} messages.
     * @param message DEVICE_SETTIME_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_SETTIME_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_SETTIME_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_SETTIME_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_SETTIME_REQ;

    /**
     * Decodes a DEVICE_SETTIME_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_SETTIME_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_SETTIME_REQ;

    /**
     * Verifies a DEVICE_SETTIME_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_SETTIME_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_SETTIME_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_SETTIME_REQ;

    /**
     * Creates a plain object from a DEVICE_SETTIME_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_SETTIME_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_SETTIME_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_SETTIME_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_SETTIME_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_SETTIME_RSP. */
export interface IDEVICE_SETTIME_RSP {

    /** DEVICE_SETTIME_RSP deviceTime */
    deviceTime: number;

    /** DEVICE_SETTIME_RSP deviceTimezone */
    deviceTimezone?: (number|null);
}

/** Represents a DEVICE_SETTIME_RSP. */
export class DEVICE_SETTIME_RSP implements IDEVICE_SETTIME_RSP {

    /**
     * Constructs a new DEVICE_SETTIME_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_SETTIME_RSP);

    /** DEVICE_SETTIME_RSP deviceTime. */
    public deviceTime: number;

    /** DEVICE_SETTIME_RSP deviceTimezone. */
    public deviceTimezone: number;

    /**
     * Creates a new DEVICE_SETTIME_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_SETTIME_RSP instance
     */
    public static create(properties?: IDEVICE_SETTIME_RSP): DEVICE_SETTIME_RSP;

    /**
     * Encodes the specified DEVICE_SETTIME_RSP message. Does not implicitly {@link DEVICE_SETTIME_RSP.verify|verify} messages.
     * @param message DEVICE_SETTIME_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_SETTIME_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_SETTIME_RSP message, length delimited. Does not implicitly {@link DEVICE_SETTIME_RSP.verify|verify} messages.
     * @param message DEVICE_SETTIME_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_SETTIME_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_SETTIME_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_SETTIME_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_SETTIME_RSP;

    /**
     * Decodes a DEVICE_SETTIME_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_SETTIME_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_SETTIME_RSP;

    /**
     * Verifies a DEVICE_SETTIME_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_SETTIME_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_SETTIME_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_SETTIME_RSP;

    /**
     * Creates a plain object from a DEVICE_SETTIME_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_SETTIME_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_SETTIME_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_SETTIME_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_SETTIME_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_CONTROL_LOCK_REQ. */
export interface IDEVICE_CONTROL_LOCK_REQ {
}

/** Represents a DEVICE_CONTROL_LOCK_REQ. */
export class DEVICE_CONTROL_LOCK_REQ implements IDEVICE_CONTROL_LOCK_REQ {

    /**
     * Constructs a new DEVICE_CONTROL_LOCK_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_CONTROL_LOCK_REQ);

    /**
     * Creates a new DEVICE_CONTROL_LOCK_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_CONTROL_LOCK_REQ instance
     */
    public static create(properties?: IDEVICE_CONTROL_LOCK_REQ): DEVICE_CONTROL_LOCK_REQ;

    /**
     * Encodes the specified DEVICE_CONTROL_LOCK_REQ message. Does not implicitly {@link DEVICE_CONTROL_LOCK_REQ.verify|verify} messages.
     * @param message DEVICE_CONTROL_LOCK_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_CONTROL_LOCK_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_CONTROL_LOCK_REQ message, length delimited. Does not implicitly {@link DEVICE_CONTROL_LOCK_REQ.verify|verify} messages.
     * @param message DEVICE_CONTROL_LOCK_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_CONTROL_LOCK_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_CONTROL_LOCK_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_CONTROL_LOCK_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_CONTROL_LOCK_REQ;

    /**
     * Decodes a DEVICE_CONTROL_LOCK_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_CONTROL_LOCK_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_CONTROL_LOCK_REQ;

    /**
     * Verifies a DEVICE_CONTROL_LOCK_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_CONTROL_LOCK_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_CONTROL_LOCK_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_CONTROL_LOCK_REQ;

    /**
     * Creates a plain object from a DEVICE_CONTROL_LOCK_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_CONTROL_LOCK_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_CONTROL_LOCK_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_CONTROL_LOCK_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_CONTROL_LOCK_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_CONTROL_LOCK_RSP. */
export interface IDEVICE_CONTROL_LOCK_RSP {

    /** DEVICE_CONTROL_LOCK_RSP result */
    result: number;
}

/** Represents a DEVICE_CONTROL_LOCK_RSP. */
export class DEVICE_CONTROL_LOCK_RSP implements IDEVICE_CONTROL_LOCK_RSP {

    /**
     * Constructs a new DEVICE_CONTROL_LOCK_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_CONTROL_LOCK_RSP);

    /** DEVICE_CONTROL_LOCK_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_CONTROL_LOCK_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_CONTROL_LOCK_RSP instance
     */
    public static create(properties?: IDEVICE_CONTROL_LOCK_RSP): DEVICE_CONTROL_LOCK_RSP;

    /**
     * Encodes the specified DEVICE_CONTROL_LOCK_RSP message. Does not implicitly {@link DEVICE_CONTROL_LOCK_RSP.verify|verify} messages.
     * @param message DEVICE_CONTROL_LOCK_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_CONTROL_LOCK_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_CONTROL_LOCK_RSP message, length delimited. Does not implicitly {@link DEVICE_CONTROL_LOCK_RSP.verify|verify} messages.
     * @param message DEVICE_CONTROL_LOCK_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_CONTROL_LOCK_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_CONTROL_LOCK_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_CONTROL_LOCK_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_CONTROL_LOCK_RSP;

    /**
     * Decodes a DEVICE_CONTROL_LOCK_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_CONTROL_LOCK_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_CONTROL_LOCK_RSP;

    /**
     * Verifies a DEVICE_CONTROL_LOCK_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_CONTROL_LOCK_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_CONTROL_LOCK_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_CONTROL_LOCK_RSP;

    /**
     * Creates a plain object from a DEVICE_CONTROL_LOCK_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_CONTROL_LOCK_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_CONTROL_LOCK_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_CONTROL_LOCK_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_CONTROL_LOCK_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ. */
export interface IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ {

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ mapHeadId */
    mapHeadId: number;

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ planId */
    planId: number;

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ cleanAreaLength */
    cleanAreaLength: number;

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ cleanAreaList */
    cleanAreaList?: (DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICleanArea[]|null);
}

/** Represents a DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ. */
export class DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ implements IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ);

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ mapHeadId. */
    public mapHeadId: number;

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ planId. */
    public planId: number;

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ cleanAreaLength. */
    public cleanAreaLength: number;

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ cleanAreaList. */
    public cleanAreaList: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICleanArea[];

    /**
     * Creates a new DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message. Does not implicitly {@link DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ;

    /**
     * Decodes a DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ;

    /**
     * Verifies a DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ {

    /** Properties of a Coordinate. */
    interface ICoordinate {

        /** Coordinate x */
        x: number;

        /** Coordinate y */
        y: number;
    }

    /** Represents a Coordinate. */
    class Coordinate implements ICoordinate {

        /**
         * Constructs a new Coordinate.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICoordinate);

        /** Coordinate x. */
        public x: number;

        /** Coordinate y. */
        public y: number;

        /**
         * Creates a new Coordinate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coordinate instance
         */
        public static create(properties?: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICoordinate): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.Coordinate;

        /**
         * Encodes the specified Coordinate message. Does not implicitly {@link DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.Coordinate.verify|verify} messages.
         * @param message Coordinate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Coordinate message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.Coordinate.verify|verify} messages.
         * @param message Coordinate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Coordinate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Coordinate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.Coordinate;

        /**
         * Decodes a Coordinate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Coordinate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.Coordinate;

        /**
         * Verifies a Coordinate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Coordinate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Coordinate
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.Coordinate;

        /**
         * Creates a plain object from a Coordinate message. Also converts values to other types if specified.
         * @param message Coordinate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.Coordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Coordinate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Coordinate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CleanArea. */
    interface ICleanArea {

        /** CleanArea cleanAreaId */
        cleanAreaId: number;

        /** CleanArea type */
        type: number;

        /** CleanArea coordinateLength */
        coordinateLength: number;

        /** CleanArea coordinateList */
        coordinateList?: (DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICoordinate[]|null);
    }

    /** Represents a CleanArea. */
    class CleanArea implements ICleanArea {

        /**
         * Constructs a new CleanArea.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICleanArea);

        /** CleanArea cleanAreaId. */
        public cleanAreaId: number;

        /** CleanArea type. */
        public type: number;

        /** CleanArea coordinateLength. */
        public coordinateLength: number;

        /** CleanArea coordinateList. */
        public coordinateList: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICoordinate[];

        /**
         * Creates a new CleanArea instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CleanArea instance
         */
        public static create(properties?: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICleanArea): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.CleanArea;

        /**
         * Encodes the specified CleanArea message. Does not implicitly {@link DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.CleanArea.verify|verify} messages.
         * @param message CleanArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICleanArea, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CleanArea message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.CleanArea.verify|verify} messages.
         * @param message CleanArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.ICleanArea, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CleanArea message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CleanArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.CleanArea;

        /**
         * Decodes a CleanArea message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CleanArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.CleanArea;

        /**
         * Verifies a CleanArea message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CleanArea message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CleanArea
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.CleanArea;

        /**
         * Creates a plain object from a CleanArea message. Also converts values to other types if specified.
         * @param message CleanArea
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ.CleanArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CleanArea to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CleanArea
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ. */
export interface IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ {

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ mapHeadId */
    mapHeadId: number;

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ planId */
    planId: number;

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ cleanAreaLength */
    cleanAreaLength: number;

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ cleanAreaList */
    cleanAreaList?: (DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICleanArea[]|null);
}

/** Represents a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ. */
export class DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ implements IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ);

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ mapHeadId. */
    public mapHeadId: number;

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ planId. */
    public planId: number;

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ cleanAreaLength. */
    public cleanAreaLength: number;

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ cleanAreaList. */
    public cleanAreaList: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICleanArea[];

    /**
     * Creates a new DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message. Does not implicitly {@link DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ;

    /**
     * Decodes a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ;

    /**
     * Verifies a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ {

    /** Properties of a Coordinate. */
    interface ICoordinate {

        /** Coordinate x */
        x: number;

        /** Coordinate y */
        y: number;
    }

    /** Represents a Coordinate. */
    class Coordinate implements ICoordinate {

        /**
         * Constructs a new Coordinate.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICoordinate);

        /** Coordinate x. */
        public x: number;

        /** Coordinate y. */
        public y: number;

        /**
         * Creates a new Coordinate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coordinate instance
         */
        public static create(properties?: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICoordinate): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.Coordinate;

        /**
         * Encodes the specified Coordinate message. Does not implicitly {@link DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.Coordinate.verify|verify} messages.
         * @param message Coordinate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Coordinate message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.Coordinate.verify|verify} messages.
         * @param message Coordinate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Coordinate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Coordinate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.Coordinate;

        /**
         * Decodes a Coordinate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Coordinate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.Coordinate;

        /**
         * Verifies a Coordinate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Coordinate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Coordinate
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.Coordinate;

        /**
         * Creates a plain object from a Coordinate message. Also converts values to other types if specified.
         * @param message Coordinate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.Coordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Coordinate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Coordinate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CleanArea. */
    interface ICleanArea {

        /** CleanArea cleanAreaId */
        cleanAreaId: number;

        /** CleanArea type */
        type: number;

        /** CleanArea coordinateLength */
        coordinateLength: number;

        /** CleanArea coordinateList */
        coordinateList?: (DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICoordinate[]|null);
    }

    /** Represents a CleanArea. */
    class CleanArea implements ICleanArea {

        /**
         * Constructs a new CleanArea.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICleanArea);

        /** CleanArea cleanAreaId. */
        public cleanAreaId: number;

        /** CleanArea type. */
        public type: number;

        /** CleanArea coordinateLength. */
        public coordinateLength: number;

        /** CleanArea coordinateList. */
        public coordinateList: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICoordinate[];

        /**
         * Creates a new CleanArea instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CleanArea instance
         */
        public static create(properties?: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICleanArea): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.CleanArea;

        /**
         * Encodes the specified CleanArea message. Does not implicitly {@link DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.CleanArea.verify|verify} messages.
         * @param message CleanArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICleanArea, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CleanArea message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.CleanArea.verify|verify} messages.
         * @param message CleanArea message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.ICleanArea, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CleanArea message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CleanArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.CleanArea;

        /**
         * Decodes a CleanArea message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CleanArea
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.CleanArea;

        /**
         * Verifies a CleanArea message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CleanArea message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CleanArea
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.CleanArea;

        /**
         * Creates a plain object from a CleanArea message. Also converts values to other types if specified.
         * @param message CleanArea
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ.CleanArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CleanArea to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CleanArea
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP. */
export interface IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP {

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP result */
    result: number;

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP position */
    position: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ;
}

/** Represents a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP. */
export class DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP implements IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP);

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP result. */
    public result: number;

    /** DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP position. */
    public position: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_REQ;

    /**
     * Creates a new DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message. Does not implicitly {@link DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP;

    /**
     * Decodes a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP;

    /**
     * Verifies a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_AREA_RESTRICTED_INFO_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP. */
export interface IDEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP {

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP result */
    result: number;

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP position */
    position: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ;
}

/** Represents a DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP. */
export class DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP implements IDEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP);

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP result. */
    public result: number;

    /** DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP position. */
    public position: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ;

    /**
     * Creates a new DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP): DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message. Does not implicitly {@link DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP;

    /**
     * Decodes a DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP;

    /**
     * Verifies a DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_AREA_CLEAN_INFO_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_AREA_CLEAN_REQ. */
export interface IDEVICE_AREA_CLEAN_REQ {

    /** DEVICE_AREA_CLEAN_REQ ctrlValue */
    ctrlValue: number;
}

/** Represents a DEVICE_AREA_CLEAN_REQ. */
export class DEVICE_AREA_CLEAN_REQ implements IDEVICE_AREA_CLEAN_REQ {

    /**
     * Constructs a new DEVICE_AREA_CLEAN_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_AREA_CLEAN_REQ);

    /** DEVICE_AREA_CLEAN_REQ ctrlValue. */
    public ctrlValue: number;

    /**
     * Creates a new DEVICE_AREA_CLEAN_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_AREA_CLEAN_REQ instance
     */
    public static create(properties?: IDEVICE_AREA_CLEAN_REQ): DEVICE_AREA_CLEAN_REQ;

    /**
     * Encodes the specified DEVICE_AREA_CLEAN_REQ message. Does not implicitly {@link DEVICE_AREA_CLEAN_REQ.verify|verify} messages.
     * @param message DEVICE_AREA_CLEAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_AREA_CLEAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_AREA_CLEAN_REQ message, length delimited. Does not implicitly {@link DEVICE_AREA_CLEAN_REQ.verify|verify} messages.
     * @param message DEVICE_AREA_CLEAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_AREA_CLEAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_AREA_CLEAN_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_AREA_CLEAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_AREA_CLEAN_REQ;

    /**
     * Decodes a DEVICE_AREA_CLEAN_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_AREA_CLEAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_AREA_CLEAN_REQ;

    /**
     * Verifies a DEVICE_AREA_CLEAN_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_AREA_CLEAN_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_AREA_CLEAN_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_AREA_CLEAN_REQ;

    /**
     * Creates a plain object from a DEVICE_AREA_CLEAN_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_AREA_CLEAN_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_AREA_CLEAN_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_AREA_CLEAN_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_AREA_CLEAN_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_AREA_CLEAN_RSP. */
export interface IDEVICE_AREA_CLEAN_RSP {

    /** DEVICE_AREA_CLEAN_RSP result */
    result: number;
}

/** Represents a DEVICE_AREA_CLEAN_RSP. */
export class DEVICE_AREA_CLEAN_RSP implements IDEVICE_AREA_CLEAN_RSP {

    /**
     * Constructs a new DEVICE_AREA_CLEAN_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_AREA_CLEAN_RSP);

    /** DEVICE_AREA_CLEAN_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_AREA_CLEAN_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_AREA_CLEAN_RSP instance
     */
    public static create(properties?: IDEVICE_AREA_CLEAN_RSP): DEVICE_AREA_CLEAN_RSP;

    /**
     * Encodes the specified DEVICE_AREA_CLEAN_RSP message. Does not implicitly {@link DEVICE_AREA_CLEAN_RSP.verify|verify} messages.
     * @param message DEVICE_AREA_CLEAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_AREA_CLEAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_AREA_CLEAN_RSP message, length delimited. Does not implicitly {@link DEVICE_AREA_CLEAN_RSP.verify|verify} messages.
     * @param message DEVICE_AREA_CLEAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_AREA_CLEAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_AREA_CLEAN_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_AREA_CLEAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_AREA_CLEAN_RSP;

    /**
     * Decodes a DEVICE_AREA_CLEAN_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_AREA_CLEAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_AREA_CLEAN_RSP;

    /**
     * Verifies a DEVICE_AREA_CLEAN_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_AREA_CLEAN_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_AREA_CLEAN_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_AREA_CLEAN_RSP;

    /**
     * Creates a plain object from a DEVICE_AREA_CLEAN_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_AREA_CLEAN_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_AREA_CLEAN_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_AREA_CLEAN_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_AREA_CLEAN_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MANUAL_CTRL_REQ. */
export interface IDEVICE_MANUAL_CTRL_REQ {

    /** DEVICE_MANUAL_CTRL_REQ command */
    command: number;
}

/** Represents a DEVICE_MANUAL_CTRL_REQ. */
export class DEVICE_MANUAL_CTRL_REQ implements IDEVICE_MANUAL_CTRL_REQ {

    /**
     * Constructs a new DEVICE_MANUAL_CTRL_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MANUAL_CTRL_REQ);

    /** DEVICE_MANUAL_CTRL_REQ command. */
    public command: number;

    /**
     * Creates a new DEVICE_MANUAL_CTRL_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MANUAL_CTRL_REQ instance
     */
    public static create(properties?: IDEVICE_MANUAL_CTRL_REQ): DEVICE_MANUAL_CTRL_REQ;

    /**
     * Encodes the specified DEVICE_MANUAL_CTRL_REQ message. Does not implicitly {@link DEVICE_MANUAL_CTRL_REQ.verify|verify} messages.
     * @param message DEVICE_MANUAL_CTRL_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MANUAL_CTRL_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MANUAL_CTRL_REQ message, length delimited. Does not implicitly {@link DEVICE_MANUAL_CTRL_REQ.verify|verify} messages.
     * @param message DEVICE_MANUAL_CTRL_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MANUAL_CTRL_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MANUAL_CTRL_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MANUAL_CTRL_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MANUAL_CTRL_REQ;

    /**
     * Decodes a DEVICE_MANUAL_CTRL_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MANUAL_CTRL_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MANUAL_CTRL_REQ;

    /**
     * Verifies a DEVICE_MANUAL_CTRL_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MANUAL_CTRL_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MANUAL_CTRL_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MANUAL_CTRL_REQ;

    /**
     * Creates a plain object from a DEVICE_MANUAL_CTRL_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MANUAL_CTRL_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MANUAL_CTRL_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MANUAL_CTRL_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MANUAL_CTRL_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MANUAL_CTRL_RSP. */
export interface IDEVICE_MANUAL_CTRL_RSP {

    /** DEVICE_MANUAL_CTRL_RSP result */
    result: number;
}

/** Represents a DEVICE_MANUAL_CTRL_RSP. */
export class DEVICE_MANUAL_CTRL_RSP implements IDEVICE_MANUAL_CTRL_RSP {

    /**
     * Constructs a new DEVICE_MANUAL_CTRL_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MANUAL_CTRL_RSP);

    /** DEVICE_MANUAL_CTRL_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_MANUAL_CTRL_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MANUAL_CTRL_RSP instance
     */
    public static create(properties?: IDEVICE_MANUAL_CTRL_RSP): DEVICE_MANUAL_CTRL_RSP;

    /**
     * Encodes the specified DEVICE_MANUAL_CTRL_RSP message. Does not implicitly {@link DEVICE_MANUAL_CTRL_RSP.verify|verify} messages.
     * @param message DEVICE_MANUAL_CTRL_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MANUAL_CTRL_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MANUAL_CTRL_RSP message, length delimited. Does not implicitly {@link DEVICE_MANUAL_CTRL_RSP.verify|verify} messages.
     * @param message DEVICE_MANUAL_CTRL_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MANUAL_CTRL_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MANUAL_CTRL_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MANUAL_CTRL_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MANUAL_CTRL_RSP;

    /**
     * Decodes a DEVICE_MANUAL_CTRL_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MANUAL_CTRL_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MANUAL_CTRL_RSP;

    /**
     * Verifies a DEVICE_MANUAL_CTRL_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MANUAL_CTRL_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MANUAL_CTRL_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MANUAL_CTRL_RSP;

    /**
     * Creates a plain object from a DEVICE_MANUAL_CTRL_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MANUAL_CTRL_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MANUAL_CTRL_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MANUAL_CTRL_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MANUAL_CTRL_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ. */
export interface IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ {

    /** DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ mode */
    mode: number;
}

/** Represents a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ. */
export class DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ implements IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ);

    /** DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ mode. */
    public mode: number;

    /**
     * Creates a new DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ): DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message. Does not implicitly {@link DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ;

    /**
     * Decodes a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ;

    /**
     * Verifies a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP. */
export interface IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP {

    /** DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP result */
    result: number;
}

/** Represents a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP. */
export class DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP implements IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP);

    /** DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP): DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message. Does not implicitly {@link DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP;

    /**
     * Decodes a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP;

    /**
     * Verifies a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_SAVEWAITINGMAP_INFO_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_ORDERLIST_GETTING_REQ. */
export interface IDEVICE_ORDERLIST_GETTING_REQ {
}

/** Represents a DEVICE_ORDERLIST_GETTING_REQ. */
export class DEVICE_ORDERLIST_GETTING_REQ implements IDEVICE_ORDERLIST_GETTING_REQ {

    /**
     * Constructs a new DEVICE_ORDERLIST_GETTING_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_ORDERLIST_GETTING_REQ);

    /**
     * Creates a new DEVICE_ORDERLIST_GETTING_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_ORDERLIST_GETTING_REQ instance
     */
    public static create(properties?: IDEVICE_ORDERLIST_GETTING_REQ): DEVICE_ORDERLIST_GETTING_REQ;

    /**
     * Encodes the specified DEVICE_ORDERLIST_GETTING_REQ message. Does not implicitly {@link DEVICE_ORDERLIST_GETTING_REQ.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_GETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_ORDERLIST_GETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_ORDERLIST_GETTING_REQ message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_GETTING_REQ.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_GETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_ORDERLIST_GETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_ORDERLIST_GETTING_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_ORDERLIST_GETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_GETTING_REQ;

    /**
     * Decodes a DEVICE_ORDERLIST_GETTING_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_ORDERLIST_GETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_GETTING_REQ;

    /**
     * Verifies a DEVICE_ORDERLIST_GETTING_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_ORDERLIST_GETTING_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_ORDERLIST_GETTING_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_GETTING_REQ;

    /**
     * Creates a plain object from a DEVICE_ORDERLIST_GETTING_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_ORDERLIST_GETTING_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_ORDERLIST_GETTING_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_ORDERLIST_GETTING_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_ORDERLIST_GETTING_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_ORDERLIST_GETTING_RSP. */
export interface IDEVICE_ORDERLIST_GETTING_RSP {

    /** DEVICE_ORDERLIST_GETTING_RSP result */
    result: number;

    /** DEVICE_ORDERLIST_GETTING_RSP orderList */
    orderList?: (IDEVICE_ORDERLIST_SETTING_REQ[]|null);

    /** DEVICE_ORDERLIST_GETTING_RSP mapInfoList */
    mapInfoList?: (DEVICE_ORDERLIST_GETTING_RSP.IMapInfo[]|null);
}

/** Represents a DEVICE_ORDERLIST_GETTING_RSP. */
export class DEVICE_ORDERLIST_GETTING_RSP implements IDEVICE_ORDERLIST_GETTING_RSP {

    /**
     * Constructs a new DEVICE_ORDERLIST_GETTING_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_ORDERLIST_GETTING_RSP);

    /** DEVICE_ORDERLIST_GETTING_RSP result. */
    public result: number;

    /** DEVICE_ORDERLIST_GETTING_RSP orderList. */
    public orderList: IDEVICE_ORDERLIST_SETTING_REQ[];

    /** DEVICE_ORDERLIST_GETTING_RSP mapInfoList. */
    public mapInfoList: DEVICE_ORDERLIST_GETTING_RSP.IMapInfo[];

    /**
     * Creates a new DEVICE_ORDERLIST_GETTING_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_ORDERLIST_GETTING_RSP instance
     */
    public static create(properties?: IDEVICE_ORDERLIST_GETTING_RSP): DEVICE_ORDERLIST_GETTING_RSP;

    /**
     * Encodes the specified DEVICE_ORDERLIST_GETTING_RSP message. Does not implicitly {@link DEVICE_ORDERLIST_GETTING_RSP.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_GETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_ORDERLIST_GETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_ORDERLIST_GETTING_RSP message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_GETTING_RSP.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_GETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_ORDERLIST_GETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_ORDERLIST_GETTING_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_ORDERLIST_GETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_GETTING_RSP;

    /**
     * Decodes a DEVICE_ORDERLIST_GETTING_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_ORDERLIST_GETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_GETTING_RSP;

    /**
     * Verifies a DEVICE_ORDERLIST_GETTING_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_ORDERLIST_GETTING_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_ORDERLIST_GETTING_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_GETTING_RSP;

    /**
     * Creates a plain object from a DEVICE_ORDERLIST_GETTING_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_ORDERLIST_GETTING_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_ORDERLIST_GETTING_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_ORDERLIST_GETTING_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_ORDERLIST_GETTING_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_ORDERLIST_GETTING_RSP {

    /** Properties of a PlanInfo. */
    interface IPlanInfo {

        /** PlanInfo planId */
        planId: number;

        /** PlanInfo planName */
        planName: string;
    }

    /** Represents a PlanInfo. */
    class PlanInfo implements IPlanInfo {

        /**
         * Constructs a new PlanInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_ORDERLIST_GETTING_RSP.IPlanInfo);

        /** PlanInfo planId. */
        public planId: number;

        /** PlanInfo planName. */
        public planName: string;

        /**
         * Creates a new PlanInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlanInfo instance
         */
        public static create(properties?: DEVICE_ORDERLIST_GETTING_RSP.IPlanInfo): DEVICE_ORDERLIST_GETTING_RSP.PlanInfo;

        /**
         * Encodes the specified PlanInfo message. Does not implicitly {@link DEVICE_ORDERLIST_GETTING_RSP.PlanInfo.verify|verify} messages.
         * @param message PlanInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_ORDERLIST_GETTING_RSP.IPlanInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlanInfo message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_GETTING_RSP.PlanInfo.verify|verify} messages.
         * @param message PlanInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_ORDERLIST_GETTING_RSP.IPlanInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlanInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_GETTING_RSP.PlanInfo;

        /**
         * Decodes a PlanInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_GETTING_RSP.PlanInfo;

        /**
         * Verifies a PlanInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlanInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlanInfo
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_GETTING_RSP.PlanInfo;

        /**
         * Creates a plain object from a PlanInfo message. Also converts values to other types if specified.
         * @param message PlanInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_ORDERLIST_GETTING_RSP.PlanInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlanInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PlanInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MapInfo. */
    interface IMapInfo {

        /** MapInfo mapId */
        mapId: number;

        /** MapInfo mapName */
        mapName: string;

        /** MapInfo planInfo */
        planInfo?: (DEVICE_ORDERLIST_GETTING_RSP.IPlanInfo[]|null);
    }

    /** Represents a MapInfo. */
    class MapInfo implements IMapInfo {

        /**
         * Constructs a new MapInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_ORDERLIST_GETTING_RSP.IMapInfo);

        /** MapInfo mapId. */
        public mapId: number;

        /** MapInfo mapName. */
        public mapName: string;

        /** MapInfo planInfo. */
        public planInfo: DEVICE_ORDERLIST_GETTING_RSP.IPlanInfo[];

        /**
         * Creates a new MapInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MapInfo instance
         */
        public static create(properties?: DEVICE_ORDERLIST_GETTING_RSP.IMapInfo): DEVICE_ORDERLIST_GETTING_RSP.MapInfo;

        /**
         * Encodes the specified MapInfo message. Does not implicitly {@link DEVICE_ORDERLIST_GETTING_RSP.MapInfo.verify|verify} messages.
         * @param message MapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_ORDERLIST_GETTING_RSP.IMapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapInfo message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_GETTING_RSP.MapInfo.verify|verify} messages.
         * @param message MapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_ORDERLIST_GETTING_RSP.IMapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_GETTING_RSP.MapInfo;

        /**
         * Decodes a MapInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_GETTING_RSP.MapInfo;

        /**
         * Verifies a MapInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapInfo
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_GETTING_RSP.MapInfo;

        /**
         * Creates a plain object from a MapInfo message. Also converts values to other types if specified.
         * @param message MapInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_ORDERLIST_GETTING_RSP.MapInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MapInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_ORDERLIST_SETTING_REQ. */
export interface IDEVICE_ORDERLIST_SETTING_REQ {

    /** DEVICE_ORDERLIST_SETTING_REQ orderId */
    orderId: number;

    /** DEVICE_ORDERLIST_SETTING_REQ enable */
    enable: boolean;

    /** DEVICE_ORDERLIST_SETTING_REQ repeat */
    repeat: boolean;

    /** DEVICE_ORDERLIST_SETTING_REQ weekDay */
    weekDay: number;

    /** DEVICE_ORDERLIST_SETTING_REQ dayTime */
    dayTime: number;

    /** DEVICE_ORDERLIST_SETTING_REQ cleanInfo */
    cleanInfo?: (DEVICE_ORDERLIST_SETTING_REQ.ICleanInfo|null);
}

/** Represents a DEVICE_ORDERLIST_SETTING_REQ. */
export class DEVICE_ORDERLIST_SETTING_REQ implements IDEVICE_ORDERLIST_SETTING_REQ {

    /**
     * Constructs a new DEVICE_ORDERLIST_SETTING_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_ORDERLIST_SETTING_REQ);

    /** DEVICE_ORDERLIST_SETTING_REQ orderId. */
    public orderId: number;

    /** DEVICE_ORDERLIST_SETTING_REQ enable. */
    public enable: boolean;

    /** DEVICE_ORDERLIST_SETTING_REQ repeat. */
    public repeat: boolean;

    /** DEVICE_ORDERLIST_SETTING_REQ weekDay. */
    public weekDay: number;

    /** DEVICE_ORDERLIST_SETTING_REQ dayTime. */
    public dayTime: number;

    /** DEVICE_ORDERLIST_SETTING_REQ cleanInfo. */
    public cleanInfo?: (DEVICE_ORDERLIST_SETTING_REQ.ICleanInfo|null);

    /**
     * Creates a new DEVICE_ORDERLIST_SETTING_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_ORDERLIST_SETTING_REQ instance
     */
    public static create(properties?: IDEVICE_ORDERLIST_SETTING_REQ): DEVICE_ORDERLIST_SETTING_REQ;

    /**
     * Encodes the specified DEVICE_ORDERLIST_SETTING_REQ message. Does not implicitly {@link DEVICE_ORDERLIST_SETTING_REQ.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_SETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_ORDERLIST_SETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_ORDERLIST_SETTING_REQ message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_SETTING_REQ.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_SETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_ORDERLIST_SETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_ORDERLIST_SETTING_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_ORDERLIST_SETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_SETTING_REQ;

    /**
     * Decodes a DEVICE_ORDERLIST_SETTING_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_ORDERLIST_SETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_SETTING_REQ;

    /**
     * Verifies a DEVICE_ORDERLIST_SETTING_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_ORDERLIST_SETTING_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_ORDERLIST_SETTING_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_SETTING_REQ;

    /**
     * Creates a plain object from a DEVICE_ORDERLIST_SETTING_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_ORDERLIST_SETTING_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_ORDERLIST_SETTING_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_ORDERLIST_SETTING_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_ORDERLIST_SETTING_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_ORDERLIST_SETTING_REQ {

    /** Properties of a CleanInfo. */
    interface ICleanInfo {

        /** CleanInfo mapHeadId */
        mapHeadId: number;

        /** CleanInfo planId */
        planId: number;

        /** CleanInfo cleanMode */
        cleanMode: number;

        /** CleanInfo windPower */
        windPower: number;

        /** CleanInfo waterLevel */
        waterLevel: number;

        /** CleanInfo twiceClean */
        twiceClean: boolean;
    }

    /** Represents a CleanInfo. */
    class CleanInfo implements ICleanInfo {

        /**
         * Constructs a new CleanInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_ORDERLIST_SETTING_REQ.ICleanInfo);

        /** CleanInfo mapHeadId. */
        public mapHeadId: number;

        /** CleanInfo planId. */
        public planId: number;

        /** CleanInfo cleanMode. */
        public cleanMode: number;

        /** CleanInfo windPower. */
        public windPower: number;

        /** CleanInfo waterLevel. */
        public waterLevel: number;

        /** CleanInfo twiceClean. */
        public twiceClean: boolean;

        /**
         * Creates a new CleanInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CleanInfo instance
         */
        public static create(properties?: DEVICE_ORDERLIST_SETTING_REQ.ICleanInfo): DEVICE_ORDERLIST_SETTING_REQ.CleanInfo;

        /**
         * Encodes the specified CleanInfo message. Does not implicitly {@link DEVICE_ORDERLIST_SETTING_REQ.CleanInfo.verify|verify} messages.
         * @param message CleanInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_ORDERLIST_SETTING_REQ.ICleanInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CleanInfo message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_SETTING_REQ.CleanInfo.verify|verify} messages.
         * @param message CleanInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_ORDERLIST_SETTING_REQ.ICleanInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CleanInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CleanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_SETTING_REQ.CleanInfo;

        /**
         * Decodes a CleanInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CleanInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_SETTING_REQ.CleanInfo;

        /**
         * Verifies a CleanInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CleanInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CleanInfo
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_SETTING_REQ.CleanInfo;

        /**
         * Creates a plain object from a CleanInfo message. Also converts values to other types if specified.
         * @param message CleanInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_ORDERLIST_SETTING_REQ.CleanInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CleanInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CleanInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_ORDERLIST_SETTING_RSP. */
export interface IDEVICE_ORDERLIST_SETTING_RSP {

    /** DEVICE_ORDERLIST_SETTING_RSP orderId */
    orderId: number;

    /** DEVICE_ORDERLIST_SETTING_RSP result */
    result: number;
}

/** Represents a DEVICE_ORDERLIST_SETTING_RSP. */
export class DEVICE_ORDERLIST_SETTING_RSP implements IDEVICE_ORDERLIST_SETTING_RSP {

    /**
     * Constructs a new DEVICE_ORDERLIST_SETTING_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_ORDERLIST_SETTING_RSP);

    /** DEVICE_ORDERLIST_SETTING_RSP orderId. */
    public orderId: number;

    /** DEVICE_ORDERLIST_SETTING_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_ORDERLIST_SETTING_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_ORDERLIST_SETTING_RSP instance
     */
    public static create(properties?: IDEVICE_ORDERLIST_SETTING_RSP): DEVICE_ORDERLIST_SETTING_RSP;

    /**
     * Encodes the specified DEVICE_ORDERLIST_SETTING_RSP message. Does not implicitly {@link DEVICE_ORDERLIST_SETTING_RSP.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_SETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_ORDERLIST_SETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_ORDERLIST_SETTING_RSP message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_SETTING_RSP.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_SETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_ORDERLIST_SETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_ORDERLIST_SETTING_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_ORDERLIST_SETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_SETTING_RSP;

    /**
     * Decodes a DEVICE_ORDERLIST_SETTING_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_ORDERLIST_SETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_SETTING_RSP;

    /**
     * Verifies a DEVICE_ORDERLIST_SETTING_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_ORDERLIST_SETTING_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_ORDERLIST_SETTING_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_SETTING_RSP;

    /**
     * Creates a plain object from a DEVICE_ORDERLIST_SETTING_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_ORDERLIST_SETTING_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_ORDERLIST_SETTING_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_ORDERLIST_SETTING_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_ORDERLIST_SETTING_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_ORDERLIST_DELETE_REQ. */
export interface IDEVICE_ORDERLIST_DELETE_REQ {

    /** DEVICE_ORDERLIST_DELETE_REQ orderId */
    orderId: number;

    /** DEVICE_ORDERLIST_DELETE_REQ mode */
    mode: number;
}

/** Represents a DEVICE_ORDERLIST_DELETE_REQ. */
export class DEVICE_ORDERLIST_DELETE_REQ implements IDEVICE_ORDERLIST_DELETE_REQ {

    /**
     * Constructs a new DEVICE_ORDERLIST_DELETE_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_ORDERLIST_DELETE_REQ);

    /** DEVICE_ORDERLIST_DELETE_REQ orderId. */
    public orderId: number;

    /** DEVICE_ORDERLIST_DELETE_REQ mode. */
    public mode: number;

    /**
     * Creates a new DEVICE_ORDERLIST_DELETE_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_ORDERLIST_DELETE_REQ instance
     */
    public static create(properties?: IDEVICE_ORDERLIST_DELETE_REQ): DEVICE_ORDERLIST_DELETE_REQ;

    /**
     * Encodes the specified DEVICE_ORDERLIST_DELETE_REQ message. Does not implicitly {@link DEVICE_ORDERLIST_DELETE_REQ.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_DELETE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_ORDERLIST_DELETE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_ORDERLIST_DELETE_REQ message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_DELETE_REQ.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_DELETE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_ORDERLIST_DELETE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_ORDERLIST_DELETE_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_ORDERLIST_DELETE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_DELETE_REQ;

    /**
     * Decodes a DEVICE_ORDERLIST_DELETE_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_ORDERLIST_DELETE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_DELETE_REQ;

    /**
     * Verifies a DEVICE_ORDERLIST_DELETE_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_ORDERLIST_DELETE_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_ORDERLIST_DELETE_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_DELETE_REQ;

    /**
     * Creates a plain object from a DEVICE_ORDERLIST_DELETE_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_ORDERLIST_DELETE_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_ORDERLIST_DELETE_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_ORDERLIST_DELETE_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_ORDERLIST_DELETE_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_ORDERLIST_DELETE_RSP. */
export interface IDEVICE_ORDERLIST_DELETE_RSP {

    /** DEVICE_ORDERLIST_DELETE_RSP orderId */
    orderId: number;

    /** DEVICE_ORDERLIST_DELETE_RSP result */
    result: number;
}

/** Represents a DEVICE_ORDERLIST_DELETE_RSP. */
export class DEVICE_ORDERLIST_DELETE_RSP implements IDEVICE_ORDERLIST_DELETE_RSP {

    /**
     * Constructs a new DEVICE_ORDERLIST_DELETE_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_ORDERLIST_DELETE_RSP);

    /** DEVICE_ORDERLIST_DELETE_RSP orderId. */
    public orderId: number;

    /** DEVICE_ORDERLIST_DELETE_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_ORDERLIST_DELETE_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_ORDERLIST_DELETE_RSP instance
     */
    public static create(properties?: IDEVICE_ORDERLIST_DELETE_RSP): DEVICE_ORDERLIST_DELETE_RSP;

    /**
     * Encodes the specified DEVICE_ORDERLIST_DELETE_RSP message. Does not implicitly {@link DEVICE_ORDERLIST_DELETE_RSP.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_DELETE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_ORDERLIST_DELETE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_ORDERLIST_DELETE_RSP message, length delimited. Does not implicitly {@link DEVICE_ORDERLIST_DELETE_RSP.verify|verify} messages.
     * @param message DEVICE_ORDERLIST_DELETE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_ORDERLIST_DELETE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_ORDERLIST_DELETE_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_ORDERLIST_DELETE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ORDERLIST_DELETE_RSP;

    /**
     * Decodes a DEVICE_ORDERLIST_DELETE_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_ORDERLIST_DELETE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ORDERLIST_DELETE_RSP;

    /**
     * Verifies a DEVICE_ORDERLIST_DELETE_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_ORDERLIST_DELETE_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_ORDERLIST_DELETE_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_ORDERLIST_DELETE_RSP;

    /**
     * Creates a plain object from a DEVICE_ORDERLIST_DELETE_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_ORDERLIST_DELETE_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_ORDERLIST_DELETE_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_ORDERLIST_DELETE_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_ORDERLIST_DELETE_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ. */
export interface IDEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ {
}

/** Represents a DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ. */
export class DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ implements IDEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ {

    /**
     * Constructs a new DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ);

    /**
     * Creates a new DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ): DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message. Does not implicitly {@link DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ;

    /**
     * Decodes a DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ;

    /**
     * Verifies a DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_GET_CONSUMABLES_PARAM_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP. */
export interface IDEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP {

    /** DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP mainBrushTime */
    mainBrushTime: number;

    /** DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP sideBrushTime */
    sideBrushTime: number;

    /** DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP filterTime */
    filterTime: number;

    /** DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP dishclothTime */
    dishclothTime: number;
}

/** Represents a DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP. */
export class DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP implements IDEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP {

    /**
     * Constructs a new DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP);

    /** DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP mainBrushTime. */
    public mainBrushTime: number;

    /** DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP sideBrushTime. */
    public sideBrushTime: number;

    /** DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP filterTime. */
    public filterTime: number;

    /** DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP dishclothTime. */
    public dishclothTime: number;

    /**
     * Creates a new DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP): DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message. Does not implicitly {@link DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP;

    /**
     * Decodes a DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP;

    /**
     * Verifies a DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_GET_CONSUMABLES_PARAM_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_EVENT_REPORT_CLEANTASK. */
export interface IDEVICE_EVENT_REPORT_CLEANTASK {

    /** DEVICE_EVENT_REPORT_CLEANTASK cleanId */
    cleanId: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK startTime */
    startTime: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK endTime */
    endTime: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk4 */
    unk4: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk5 */
    unk5: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk6 */
    unk6: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk7 */
    unk7: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk8 */
    unk8: DEVICE_EVENT_REPORT_CLEANTASK.IUnk1;

    /** DEVICE_EVENT_REPORT_CLEANTASK mapHeadId */
    mapHeadId?: (number|null);

    /** DEVICE_EVENT_REPORT_CLEANTASK mapName */
    mapName?: (string|null);

    /** DEVICE_EVENT_REPORT_CLEANTASK planName */
    planName?: (string|null);
}

/** Represents a DEVICE_EVENT_REPORT_CLEANTASK. */
export class DEVICE_EVENT_REPORT_CLEANTASK implements IDEVICE_EVENT_REPORT_CLEANTASK {

    /**
     * Constructs a new DEVICE_EVENT_REPORT_CLEANTASK.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_EVENT_REPORT_CLEANTASK);

    /** DEVICE_EVENT_REPORT_CLEANTASK cleanId. */
    public cleanId: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK startTime. */
    public startTime: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK endTime. */
    public endTime: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk4. */
    public unk4: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk5. */
    public unk5: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk6. */
    public unk6: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk7. */
    public unk7: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK unk8. */
    public unk8: DEVICE_EVENT_REPORT_CLEANTASK.IUnk1;

    /** DEVICE_EVENT_REPORT_CLEANTASK mapHeadId. */
    public mapHeadId: number;

    /** DEVICE_EVENT_REPORT_CLEANTASK mapName. */
    public mapName: string;

    /** DEVICE_EVENT_REPORT_CLEANTASK planName. */
    public planName: string;

    /**
     * Creates a new DEVICE_EVENT_REPORT_CLEANTASK instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_EVENT_REPORT_CLEANTASK instance
     */
    public static create(properties?: IDEVICE_EVENT_REPORT_CLEANTASK): DEVICE_EVENT_REPORT_CLEANTASK;

    /**
     * Encodes the specified DEVICE_EVENT_REPORT_CLEANTASK message. Does not implicitly {@link DEVICE_EVENT_REPORT_CLEANTASK.verify|verify} messages.
     * @param message DEVICE_EVENT_REPORT_CLEANTASK message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_EVENT_REPORT_CLEANTASK, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_EVENT_REPORT_CLEANTASK message, length delimited. Does not implicitly {@link DEVICE_EVENT_REPORT_CLEANTASK.verify|verify} messages.
     * @param message DEVICE_EVENT_REPORT_CLEANTASK message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_EVENT_REPORT_CLEANTASK, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_EVENT_REPORT_CLEANTASK message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_EVENT_REPORT_CLEANTASK
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_EVENT_REPORT_CLEANTASK;

    /**
     * Decodes a DEVICE_EVENT_REPORT_CLEANTASK message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_EVENT_REPORT_CLEANTASK
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_EVENT_REPORT_CLEANTASK;

    /**
     * Verifies a DEVICE_EVENT_REPORT_CLEANTASK message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_EVENT_REPORT_CLEANTASK message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_EVENT_REPORT_CLEANTASK
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_EVENT_REPORT_CLEANTASK;

    /**
     * Creates a plain object from a DEVICE_EVENT_REPORT_CLEANTASK message. Also converts values to other types if specified.
     * @param message DEVICE_EVENT_REPORT_CLEANTASK
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_EVENT_REPORT_CLEANTASK, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_EVENT_REPORT_CLEANTASK to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_EVENT_REPORT_CLEANTASK
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_EVENT_REPORT_CLEANTASK {

    /** Properties of an Unk1. */
    interface IUnk1 {

        /** Unk1 unk1Unk1 */
        unk1Unk1: number;

        /** Unk1 unk1Unk2 */
        unk1Unk2: number;

        /** Unk1 unk1Unk6 */
        unk1Unk6?: (number|null);
    }

    /** Represents an Unk1. */
    class Unk1 implements IUnk1 {

        /**
         * Constructs a new Unk1.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_EVENT_REPORT_CLEANTASK.IUnk1);

        /** Unk1 unk1Unk1. */
        public unk1Unk1: number;

        /** Unk1 unk1Unk2. */
        public unk1Unk2: number;

        /** Unk1 unk1Unk6. */
        public unk1Unk6: number;

        /**
         * Creates a new Unk1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Unk1 instance
         */
        public static create(properties?: DEVICE_EVENT_REPORT_CLEANTASK.IUnk1): DEVICE_EVENT_REPORT_CLEANTASK.Unk1;

        /**
         * Encodes the specified Unk1 message. Does not implicitly {@link DEVICE_EVENT_REPORT_CLEANTASK.Unk1.verify|verify} messages.
         * @param message Unk1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_EVENT_REPORT_CLEANTASK.IUnk1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Unk1 message, length delimited. Does not implicitly {@link DEVICE_EVENT_REPORT_CLEANTASK.Unk1.verify|verify} messages.
         * @param message Unk1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_EVENT_REPORT_CLEANTASK.IUnk1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Unk1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Unk1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_EVENT_REPORT_CLEANTASK.Unk1;

        /**
         * Decodes an Unk1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Unk1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_EVENT_REPORT_CLEANTASK.Unk1;

        /**
         * Verifies an Unk1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Unk1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Unk1
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_EVENT_REPORT_CLEANTASK.Unk1;

        /**
         * Creates a plain object from an Unk1 message. Also converts values to other types if specified.
         * @param message Unk1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_EVENT_REPORT_CLEANTASK.Unk1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Unk1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Unk1
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_CLEANMAP_BINDATA_REPORT_REQ. */
export interface IDEVICE_CLEANMAP_BINDATA_REPORT_REQ {

    /** DEVICE_CLEANMAP_BINDATA_REPORT_REQ cleanId */
    cleanId: number;
}

/** Represents a DEVICE_CLEANMAP_BINDATA_REPORT_REQ. */
export class DEVICE_CLEANMAP_BINDATA_REPORT_REQ implements IDEVICE_CLEANMAP_BINDATA_REPORT_REQ {

    /**
     * Constructs a new DEVICE_CLEANMAP_BINDATA_REPORT_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_CLEANMAP_BINDATA_REPORT_REQ);

    /** DEVICE_CLEANMAP_BINDATA_REPORT_REQ cleanId. */
    public cleanId: number;

    /**
     * Creates a new DEVICE_CLEANMAP_BINDATA_REPORT_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_CLEANMAP_BINDATA_REPORT_REQ instance
     */
    public static create(properties?: IDEVICE_CLEANMAP_BINDATA_REPORT_REQ): DEVICE_CLEANMAP_BINDATA_REPORT_REQ;

    /**
     * Encodes the specified DEVICE_CLEANMAP_BINDATA_REPORT_REQ message. Does not implicitly {@link DEVICE_CLEANMAP_BINDATA_REPORT_REQ.verify|verify} messages.
     * @param message DEVICE_CLEANMAP_BINDATA_REPORT_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_CLEANMAP_BINDATA_REPORT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_CLEANMAP_BINDATA_REPORT_REQ message, length delimited. Does not implicitly {@link DEVICE_CLEANMAP_BINDATA_REPORT_REQ.verify|verify} messages.
     * @param message DEVICE_CLEANMAP_BINDATA_REPORT_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_CLEANMAP_BINDATA_REPORT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_CLEANMAP_BINDATA_REPORT_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_CLEANMAP_BINDATA_REPORT_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_CLEANMAP_BINDATA_REPORT_REQ;

    /**
     * Decodes a DEVICE_CLEANMAP_BINDATA_REPORT_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_CLEANMAP_BINDATA_REPORT_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_CLEANMAP_BINDATA_REPORT_REQ;

    /**
     * Verifies a DEVICE_CLEANMAP_BINDATA_REPORT_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_CLEANMAP_BINDATA_REPORT_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_CLEANMAP_BINDATA_REPORT_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_CLEANMAP_BINDATA_REPORT_REQ;

    /**
     * Creates a plain object from a DEVICE_CLEANMAP_BINDATA_REPORT_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_CLEANMAP_BINDATA_REPORT_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_CLEANMAP_BINDATA_REPORT_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_CLEANMAP_BINDATA_REPORT_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_CLEANMAP_BINDATA_REPORT_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_CLEANMAP_BINDATA_REPORT_RSP. */
export interface IDEVICE_CLEANMAP_BINDATA_REPORT_RSP {

    /** DEVICE_CLEANMAP_BINDATA_REPORT_RSP result */
    result: number;

    /** DEVICE_CLEANMAP_BINDATA_REPORT_RSP cleanId */
    cleanId: number;
}

/** Represents a DEVICE_CLEANMAP_BINDATA_REPORT_RSP. */
export class DEVICE_CLEANMAP_BINDATA_REPORT_RSP implements IDEVICE_CLEANMAP_BINDATA_REPORT_RSP {

    /**
     * Constructs a new DEVICE_CLEANMAP_BINDATA_REPORT_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_CLEANMAP_BINDATA_REPORT_RSP);

    /** DEVICE_CLEANMAP_BINDATA_REPORT_RSP result. */
    public result: number;

    /** DEVICE_CLEANMAP_BINDATA_REPORT_RSP cleanId. */
    public cleanId: number;

    /**
     * Creates a new DEVICE_CLEANMAP_BINDATA_REPORT_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_CLEANMAP_BINDATA_REPORT_RSP instance
     */
    public static create(properties?: IDEVICE_CLEANMAP_BINDATA_REPORT_RSP): DEVICE_CLEANMAP_BINDATA_REPORT_RSP;

    /**
     * Encodes the specified DEVICE_CLEANMAP_BINDATA_REPORT_RSP message. Does not implicitly {@link DEVICE_CLEANMAP_BINDATA_REPORT_RSP.verify|verify} messages.
     * @param message DEVICE_CLEANMAP_BINDATA_REPORT_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_CLEANMAP_BINDATA_REPORT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_CLEANMAP_BINDATA_REPORT_RSP message, length delimited. Does not implicitly {@link DEVICE_CLEANMAP_BINDATA_REPORT_RSP.verify|verify} messages.
     * @param message DEVICE_CLEANMAP_BINDATA_REPORT_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_CLEANMAP_BINDATA_REPORT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_CLEANMAP_BINDATA_REPORT_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_CLEANMAP_BINDATA_REPORT_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_CLEANMAP_BINDATA_REPORT_RSP;

    /**
     * Decodes a DEVICE_CLEANMAP_BINDATA_REPORT_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_CLEANMAP_BINDATA_REPORT_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_CLEANMAP_BINDATA_REPORT_RSP;

    /**
     * Verifies a DEVICE_CLEANMAP_BINDATA_REPORT_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_CLEANMAP_BINDATA_REPORT_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_CLEANMAP_BINDATA_REPORT_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_CLEANMAP_BINDATA_REPORT_RSP;

    /**
     * Creates a plain object from a DEVICE_CLEANMAP_BINDATA_REPORT_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_CLEANMAP_BINDATA_REPORT_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_CLEANMAP_BINDATA_REPORT_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_CLEANMAP_BINDATA_REPORT_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_CLEANMAP_BINDATA_REPORT_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_OFFLINE_CMD. */
export interface IDEVICE_OFFLINE_CMD {

    /** DEVICE_OFFLINE_CMD result */
    result: number;
}

/** Represents a DEVICE_OFFLINE_CMD. */
export class DEVICE_OFFLINE_CMD implements IDEVICE_OFFLINE_CMD {

    /**
     * Constructs a new DEVICE_OFFLINE_CMD.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_OFFLINE_CMD);

    /** DEVICE_OFFLINE_CMD result. */
    public result: number;

    /**
     * Creates a new DEVICE_OFFLINE_CMD instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_OFFLINE_CMD instance
     */
    public static create(properties?: IDEVICE_OFFLINE_CMD): DEVICE_OFFLINE_CMD;

    /**
     * Encodes the specified DEVICE_OFFLINE_CMD message. Does not implicitly {@link DEVICE_OFFLINE_CMD.verify|verify} messages.
     * @param message DEVICE_OFFLINE_CMD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_OFFLINE_CMD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_OFFLINE_CMD message, length delimited. Does not implicitly {@link DEVICE_OFFLINE_CMD.verify|verify} messages.
     * @param message DEVICE_OFFLINE_CMD message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_OFFLINE_CMD, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_OFFLINE_CMD message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_OFFLINE_CMD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_OFFLINE_CMD;

    /**
     * Decodes a DEVICE_OFFLINE_CMD message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_OFFLINE_CMD
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_OFFLINE_CMD;

    /**
     * Verifies a DEVICE_OFFLINE_CMD message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_OFFLINE_CMD message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_OFFLINE_CMD
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_OFFLINE_CMD;

    /**
     * Creates a plain object from a DEVICE_OFFLINE_CMD message. Also converts values to other types if specified.
     * @param message DEVICE_OFFLINE_CMD
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_OFFLINE_CMD, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_OFFLINE_CMD to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_OFFLINE_CMD
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_TIME_SYNC_RSP. */
export interface IDEVICE_TIME_SYNC_RSP {

    /** DEVICE_TIME_SYNC_RSP result */
    result: number;

    /** DEVICE_TIME_SYNC_RSP body */
    body: DEVICE_TIME_SYNC_RSP.IBody;
}

/** Represents a DEVICE_TIME_SYNC_RSP. */
export class DEVICE_TIME_SYNC_RSP implements IDEVICE_TIME_SYNC_RSP {

    /**
     * Constructs a new DEVICE_TIME_SYNC_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_TIME_SYNC_RSP);

    /** DEVICE_TIME_SYNC_RSP result. */
    public result: number;

    /** DEVICE_TIME_SYNC_RSP body. */
    public body: DEVICE_TIME_SYNC_RSP.IBody;

    /**
     * Creates a new DEVICE_TIME_SYNC_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_TIME_SYNC_RSP instance
     */
    public static create(properties?: IDEVICE_TIME_SYNC_RSP): DEVICE_TIME_SYNC_RSP;

    /**
     * Encodes the specified DEVICE_TIME_SYNC_RSP message. Does not implicitly {@link DEVICE_TIME_SYNC_RSP.verify|verify} messages.
     * @param message DEVICE_TIME_SYNC_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_TIME_SYNC_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_TIME_SYNC_RSP message, length delimited. Does not implicitly {@link DEVICE_TIME_SYNC_RSP.verify|verify} messages.
     * @param message DEVICE_TIME_SYNC_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_TIME_SYNC_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_TIME_SYNC_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_TIME_SYNC_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_TIME_SYNC_RSP;

    /**
     * Decodes a DEVICE_TIME_SYNC_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_TIME_SYNC_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_TIME_SYNC_RSP;

    /**
     * Verifies a DEVICE_TIME_SYNC_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_TIME_SYNC_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_TIME_SYNC_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_TIME_SYNC_RSP;

    /**
     * Creates a plain object from a DEVICE_TIME_SYNC_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_TIME_SYNC_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_TIME_SYNC_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_TIME_SYNC_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_TIME_SYNC_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_TIME_SYNC_RSP {

    /** Properties of a Body. */
    interface IBody {

        /** Body time */
        time: number;
    }

    /** Represents a Body. */
    class Body implements IBody {

        /**
         * Constructs a new Body.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_TIME_SYNC_RSP.IBody);

        /** Body time. */
        public time: number;

        /**
         * Creates a new Body instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Body instance
         */
        public static create(properties?: DEVICE_TIME_SYNC_RSP.IBody): DEVICE_TIME_SYNC_RSP.Body;

        /**
         * Encodes the specified Body message. Does not implicitly {@link DEVICE_TIME_SYNC_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_TIME_SYNC_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Body message, length delimited. Does not implicitly {@link DEVICE_TIME_SYNC_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_TIME_SYNC_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Body message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_TIME_SYNC_RSP.Body;

        /**
         * Decodes a Body message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_TIME_SYNC_RSP.Body;

        /**
         * Verifies a Body message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Body message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Body
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_TIME_SYNC_RSP.Body;

        /**
         * Creates a plain object from a Body message. Also converts values to other types if specified.
         * @param message Body
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_TIME_SYNC_RSP.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Body to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Body
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_EVENT_REPORT_REQ. */
export interface IDEVICE_EVENT_REPORT_REQ {

    /** DEVICE_EVENT_REPORT_REQ type */
    type: number;

    /** DEVICE_EVENT_REPORT_REQ keyValue */
    keyValue: number;

    /** DEVICE_EVENT_REPORT_REQ reportTime */
    reportTime?: (number|null);
}

/** Represents a DEVICE_EVENT_REPORT_REQ. */
export class DEVICE_EVENT_REPORT_REQ implements IDEVICE_EVENT_REPORT_REQ {

    /**
     * Constructs a new DEVICE_EVENT_REPORT_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_EVENT_REPORT_REQ);

    /** DEVICE_EVENT_REPORT_REQ type. */
    public type: number;

    /** DEVICE_EVENT_REPORT_REQ keyValue. */
    public keyValue: number;

    /** DEVICE_EVENT_REPORT_REQ reportTime. */
    public reportTime: number;

    /**
     * Creates a new DEVICE_EVENT_REPORT_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_EVENT_REPORT_REQ instance
     */
    public static create(properties?: IDEVICE_EVENT_REPORT_REQ): DEVICE_EVENT_REPORT_REQ;

    /**
     * Encodes the specified DEVICE_EVENT_REPORT_REQ message. Does not implicitly {@link DEVICE_EVENT_REPORT_REQ.verify|verify} messages.
     * @param message DEVICE_EVENT_REPORT_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_EVENT_REPORT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_EVENT_REPORT_REQ message, length delimited. Does not implicitly {@link DEVICE_EVENT_REPORT_REQ.verify|verify} messages.
     * @param message DEVICE_EVENT_REPORT_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_EVENT_REPORT_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_EVENT_REPORT_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_EVENT_REPORT_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_EVENT_REPORT_REQ;

    /**
     * Decodes a DEVICE_EVENT_REPORT_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_EVENT_REPORT_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_EVENT_REPORT_REQ;

    /**
     * Verifies a DEVICE_EVENT_REPORT_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_EVENT_REPORT_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_EVENT_REPORT_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_EVENT_REPORT_REQ;

    /**
     * Creates a plain object from a DEVICE_EVENT_REPORT_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_EVENT_REPORT_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_EVENT_REPORT_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_EVENT_REPORT_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_EVENT_REPORT_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_EVENT_REPORT_CLEANMAP. */
export interface IDEVICE_EVENT_REPORT_CLEANMAP {

    /** DEVICE_EVENT_REPORT_CLEANMAP cleanId */
    cleanId: number;
}

/** Represents a DEVICE_EVENT_REPORT_CLEANMAP. */
export class DEVICE_EVENT_REPORT_CLEANMAP implements IDEVICE_EVENT_REPORT_CLEANMAP {

    /**
     * Constructs a new DEVICE_EVENT_REPORT_CLEANMAP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_EVENT_REPORT_CLEANMAP);

    /** DEVICE_EVENT_REPORT_CLEANMAP cleanId. */
    public cleanId: number;

    /**
     * Creates a new DEVICE_EVENT_REPORT_CLEANMAP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_EVENT_REPORT_CLEANMAP instance
     */
    public static create(properties?: IDEVICE_EVENT_REPORT_CLEANMAP): DEVICE_EVENT_REPORT_CLEANMAP;

    /**
     * Encodes the specified DEVICE_EVENT_REPORT_CLEANMAP message. Does not implicitly {@link DEVICE_EVENT_REPORT_CLEANMAP.verify|verify} messages.
     * @param message DEVICE_EVENT_REPORT_CLEANMAP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_EVENT_REPORT_CLEANMAP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_EVENT_REPORT_CLEANMAP message, length delimited. Does not implicitly {@link DEVICE_EVENT_REPORT_CLEANMAP.verify|verify} messages.
     * @param message DEVICE_EVENT_REPORT_CLEANMAP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_EVENT_REPORT_CLEANMAP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_EVENT_REPORT_CLEANMAP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_EVENT_REPORT_CLEANMAP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_EVENT_REPORT_CLEANMAP;

    /**
     * Decodes a DEVICE_EVENT_REPORT_CLEANMAP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_EVENT_REPORT_CLEANMAP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_EVENT_REPORT_CLEANMAP;

    /**
     * Verifies a DEVICE_EVENT_REPORT_CLEANMAP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_EVENT_REPORT_CLEANMAP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_EVENT_REPORT_CLEANMAP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_EVENT_REPORT_CLEANMAP;

    /**
     * Creates a plain object from a DEVICE_EVENT_REPORT_CLEANMAP message. Also converts values to other types if specified.
     * @param message DEVICE_EVENT_REPORT_CLEANMAP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_EVENT_REPORT_CLEANMAP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_EVENT_REPORT_CLEANMAP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_EVENT_REPORT_CLEANMAP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_EVENT_REPORT_RSP. */
export interface IDEVICE_EVENT_REPORT_RSP {

    /** DEVICE_EVENT_REPORT_RSP result */
    result: number;

    /** DEVICE_EVENT_REPORT_RSP body */
    body: DEVICE_EVENT_REPORT_RSP.IBody;
}

/** Represents a DEVICE_EVENT_REPORT_RSP. */
export class DEVICE_EVENT_REPORT_RSP implements IDEVICE_EVENT_REPORT_RSP {

    /**
     * Constructs a new DEVICE_EVENT_REPORT_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_EVENT_REPORT_RSP);

    /** DEVICE_EVENT_REPORT_RSP result. */
    public result: number;

    /** DEVICE_EVENT_REPORT_RSP body. */
    public body: DEVICE_EVENT_REPORT_RSP.IBody;

    /**
     * Creates a new DEVICE_EVENT_REPORT_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_EVENT_REPORT_RSP instance
     */
    public static create(properties?: IDEVICE_EVENT_REPORT_RSP): DEVICE_EVENT_REPORT_RSP;

    /**
     * Encodes the specified DEVICE_EVENT_REPORT_RSP message. Does not implicitly {@link DEVICE_EVENT_REPORT_RSP.verify|verify} messages.
     * @param message DEVICE_EVENT_REPORT_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_EVENT_REPORT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_EVENT_REPORT_RSP message, length delimited. Does not implicitly {@link DEVICE_EVENT_REPORT_RSP.verify|verify} messages.
     * @param message DEVICE_EVENT_REPORT_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_EVENT_REPORT_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_EVENT_REPORT_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_EVENT_REPORT_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_EVENT_REPORT_RSP;

    /**
     * Decodes a DEVICE_EVENT_REPORT_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_EVENT_REPORT_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_EVENT_REPORT_RSP;

    /**
     * Verifies a DEVICE_EVENT_REPORT_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_EVENT_REPORT_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_EVENT_REPORT_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_EVENT_REPORT_RSP;

    /**
     * Creates a plain object from a DEVICE_EVENT_REPORT_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_EVENT_REPORT_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_EVENT_REPORT_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_EVENT_REPORT_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_EVENT_REPORT_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_EVENT_REPORT_RSP {

    /** Properties of a Body. */
    interface IBody {

        /** Body cleanId */
        cleanId: number;
    }

    /** Represents a Body. */
    class Body implements IBody {

        /**
         * Constructs a new Body.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_EVENT_REPORT_RSP.IBody);

        /** Body cleanId. */
        public cleanId: number;

        /**
         * Creates a new Body instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Body instance
         */
        public static create(properties?: DEVICE_EVENT_REPORT_RSP.IBody): DEVICE_EVENT_REPORT_RSP.Body;

        /**
         * Encodes the specified Body message. Does not implicitly {@link DEVICE_EVENT_REPORT_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_EVENT_REPORT_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Body message, length delimited. Does not implicitly {@link DEVICE_EVENT_REPORT_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_EVENT_REPORT_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Body message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_EVENT_REPORT_RSP.Body;

        /**
         * Decodes a Body message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_EVENT_REPORT_RSP.Body;

        /**
         * Verifies a Body message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Body message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Body
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_EVENT_REPORT_RSP.Body;

        /**
         * Creates a plain object from a Body message. Also converts values to other types if specified.
         * @param message Body
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_EVENT_REPORT_RSP.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Body to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Body
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a UNK_11A4. */
export interface IUNK_11A4 {

    /** UNK_11A4 unk1 */
    unk1: number;
}

/** Represents a UNK_11A4. */
export class UNK_11A4 implements IUNK_11A4 {

    /**
     * Constructs a new UNK_11A4.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUNK_11A4);

    /** UNK_11A4 unk1. */
    public unk1: number;

    /**
     * Creates a new UNK_11A4 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UNK_11A4 instance
     */
    public static create(properties?: IUNK_11A4): UNK_11A4;

    /**
     * Encodes the specified UNK_11A4 message. Does not implicitly {@link UNK_11A4.verify|verify} messages.
     * @param message UNK_11A4 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUNK_11A4, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UNK_11A4 message, length delimited. Does not implicitly {@link UNK_11A4.verify|verify} messages.
     * @param message UNK_11A4 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUNK_11A4, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UNK_11A4 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UNK_11A4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UNK_11A4;

    /**
     * Decodes a UNK_11A4 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UNK_11A4
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UNK_11A4;

    /**
     * Verifies a UNK_11A4 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UNK_11A4 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UNK_11A4
     */
    public static fromObject(object: { [k: string]: any }): UNK_11A4;

    /**
     * Creates a plain object from a UNK_11A4 message. Also converts values to other types if specified.
     * @param message UNK_11A4
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UNK_11A4, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UNK_11A4 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UNK_11A4
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a UNK_11A7. */
export interface IUNK_11A7 {

    /** UNK_11A7 unk1 */
    unk1: number;
}

/** Represents a UNK_11A7. */
export class UNK_11A7 implements IUNK_11A7 {

    /**
     * Constructs a new UNK_11A7.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUNK_11A7);

    /** UNK_11A7 unk1. */
    public unk1: number;

    /**
     * Creates a new UNK_11A7 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UNK_11A7 instance
     */
    public static create(properties?: IUNK_11A7): UNK_11A7;

    /**
     * Encodes the specified UNK_11A7 message. Does not implicitly {@link UNK_11A7.verify|verify} messages.
     * @param message UNK_11A7 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUNK_11A7, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UNK_11A7 message, length delimited. Does not implicitly {@link UNK_11A7.verify|verify} messages.
     * @param message UNK_11A7 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUNK_11A7, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UNK_11A7 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UNK_11A7
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UNK_11A7;

    /**
     * Decodes a UNK_11A7 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UNK_11A7
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UNK_11A7;

    /**
     * Verifies a UNK_11A7 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UNK_11A7 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UNK_11A7
     */
    public static fromObject(object: { [k: string]: any }): UNK_11A7;

    /**
     * Creates a plain object from a UNK_11A7 message. Also converts values to other types if specified.
     * @param message UNK_11A7
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UNK_11A7, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UNK_11A7 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UNK_11A7
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a UNK_0044. */
export interface IUNK_0044 {
}

/** Represents a UNK_0044. */
export class UNK_0044 implements IUNK_0044 {

    /**
     * Constructs a new UNK_0044.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUNK_0044);

    /**
     * Creates a new UNK_0044 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UNK_0044 instance
     */
    public static create(properties?: IUNK_0044): UNK_0044;

    /**
     * Encodes the specified UNK_0044 message. Does not implicitly {@link UNK_0044.verify|verify} messages.
     * @param message UNK_0044 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUNK_0044, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UNK_0044 message, length delimited. Does not implicitly {@link UNK_0044.verify|verify} messages.
     * @param message UNK_0044 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUNK_0044, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UNK_0044 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UNK_0044
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UNK_0044;

    /**
     * Decodes a UNK_0044 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UNK_0044
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UNK_0044;

    /**
     * Verifies a UNK_0044 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UNK_0044 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UNK_0044
     */
    public static fromObject(object: { [k: string]: any }): UNK_0044;

    /**
     * Creates a plain object from a UNK_0044 message. Also converts values to other types if specified.
     * @param message UNK_0044
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UNK_0044, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UNK_0044 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UNK_0044
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_WITHROOMS_CLEAN_REQ. */
export interface IDEVICE_WITHROOMS_CLEAN_REQ {

    /** DEVICE_WITHROOMS_CLEAN_REQ cleanType */
    cleanType: number;

    /** DEVICE_WITHROOMS_CLEAN_REQ ctrlValue */
    ctrlValue: number;

    /** DEVICE_WITHROOMS_CLEAN_REQ roomNumber */
    roomNumber: number;

    /** DEVICE_WITHROOMS_CLEAN_REQ roomIdList */
    roomIdList: Uint8Array;
}

/** Represents a DEVICE_WITHROOMS_CLEAN_REQ. */
export class DEVICE_WITHROOMS_CLEAN_REQ implements IDEVICE_WITHROOMS_CLEAN_REQ {

    /**
     * Constructs a new DEVICE_WITHROOMS_CLEAN_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_WITHROOMS_CLEAN_REQ);

    /** DEVICE_WITHROOMS_CLEAN_REQ cleanType. */
    public cleanType: number;

    /** DEVICE_WITHROOMS_CLEAN_REQ ctrlValue. */
    public ctrlValue: number;

    /** DEVICE_WITHROOMS_CLEAN_REQ roomNumber. */
    public roomNumber: number;

    /** DEVICE_WITHROOMS_CLEAN_REQ roomIdList. */
    public roomIdList: Uint8Array;

    /**
     * Creates a new DEVICE_WITHROOMS_CLEAN_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_WITHROOMS_CLEAN_REQ instance
     */
    public static create(properties?: IDEVICE_WITHROOMS_CLEAN_REQ): DEVICE_WITHROOMS_CLEAN_REQ;

    /**
     * Encodes the specified DEVICE_WITHROOMS_CLEAN_REQ message. Does not implicitly {@link DEVICE_WITHROOMS_CLEAN_REQ.verify|verify} messages.
     * @param message DEVICE_WITHROOMS_CLEAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_WITHROOMS_CLEAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_WITHROOMS_CLEAN_REQ message, length delimited. Does not implicitly {@link DEVICE_WITHROOMS_CLEAN_REQ.verify|verify} messages.
     * @param message DEVICE_WITHROOMS_CLEAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_WITHROOMS_CLEAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_WITHROOMS_CLEAN_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_WITHROOMS_CLEAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_WITHROOMS_CLEAN_REQ;

    /**
     * Decodes a DEVICE_WITHROOMS_CLEAN_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_WITHROOMS_CLEAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_WITHROOMS_CLEAN_REQ;

    /**
     * Verifies a DEVICE_WITHROOMS_CLEAN_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_WITHROOMS_CLEAN_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_WITHROOMS_CLEAN_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_WITHROOMS_CLEAN_REQ;

    /**
     * Creates a plain object from a DEVICE_WITHROOMS_CLEAN_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_WITHROOMS_CLEAN_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_WITHROOMS_CLEAN_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_WITHROOMS_CLEAN_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_WITHROOMS_CLEAN_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_WITHROOMS_CLEAN_RSP. */
export interface IDEVICE_WITHROOMS_CLEAN_RSP {

    /** DEVICE_WITHROOMS_CLEAN_RSP result */
    result: number;
}

/** Represents a DEVICE_WITHROOMS_CLEAN_RSP. */
export class DEVICE_WITHROOMS_CLEAN_RSP implements IDEVICE_WITHROOMS_CLEAN_RSP {

    /**
     * Constructs a new DEVICE_WITHROOMS_CLEAN_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_WITHROOMS_CLEAN_RSP);

    /** DEVICE_WITHROOMS_CLEAN_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_WITHROOMS_CLEAN_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_WITHROOMS_CLEAN_RSP instance
     */
    public static create(properties?: IDEVICE_WITHROOMS_CLEAN_RSP): DEVICE_WITHROOMS_CLEAN_RSP;

    /**
     * Encodes the specified DEVICE_WITHROOMS_CLEAN_RSP message. Does not implicitly {@link DEVICE_WITHROOMS_CLEAN_RSP.verify|verify} messages.
     * @param message DEVICE_WITHROOMS_CLEAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_WITHROOMS_CLEAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_WITHROOMS_CLEAN_RSP message, length delimited. Does not implicitly {@link DEVICE_WITHROOMS_CLEAN_RSP.verify|verify} messages.
     * @param message DEVICE_WITHROOMS_CLEAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_WITHROOMS_CLEAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_WITHROOMS_CLEAN_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_WITHROOMS_CLEAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_WITHROOMS_CLEAN_RSP;

    /**
     * Decodes a DEVICE_WITHROOMS_CLEAN_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_WITHROOMS_CLEAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_WITHROOMS_CLEAN_RSP;

    /**
     * Verifies a DEVICE_WITHROOMS_CLEAN_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_WITHROOMS_CLEAN_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_WITHROOMS_CLEAN_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_WITHROOMS_CLEAN_RSP;

    /**
     * Creates a plain object from a DEVICE_WITHROOMS_CLEAN_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_WITHROOMS_CLEAN_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_WITHROOMS_CLEAN_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_WITHROOMS_CLEAN_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_WITHROOMS_CLEAN_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_WLAN_INFO_GETTING_REQ. */
export interface IDEVICE_WLAN_INFO_GETTING_REQ {
}

/** Represents a DEVICE_WLAN_INFO_GETTING_REQ. */
export class DEVICE_WLAN_INFO_GETTING_REQ implements IDEVICE_WLAN_INFO_GETTING_REQ {

    /**
     * Constructs a new DEVICE_WLAN_INFO_GETTING_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_WLAN_INFO_GETTING_REQ);

    /**
     * Creates a new DEVICE_WLAN_INFO_GETTING_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_WLAN_INFO_GETTING_REQ instance
     */
    public static create(properties?: IDEVICE_WLAN_INFO_GETTING_REQ): DEVICE_WLAN_INFO_GETTING_REQ;

    /**
     * Encodes the specified DEVICE_WLAN_INFO_GETTING_REQ message. Does not implicitly {@link DEVICE_WLAN_INFO_GETTING_REQ.verify|verify} messages.
     * @param message DEVICE_WLAN_INFO_GETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_WLAN_INFO_GETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_WLAN_INFO_GETTING_REQ message, length delimited. Does not implicitly {@link DEVICE_WLAN_INFO_GETTING_REQ.verify|verify} messages.
     * @param message DEVICE_WLAN_INFO_GETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_WLAN_INFO_GETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_WLAN_INFO_GETTING_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_WLAN_INFO_GETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_WLAN_INFO_GETTING_REQ;

    /**
     * Decodes a DEVICE_WLAN_INFO_GETTING_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_WLAN_INFO_GETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_WLAN_INFO_GETTING_REQ;

    /**
     * Verifies a DEVICE_WLAN_INFO_GETTING_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_WLAN_INFO_GETTING_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_WLAN_INFO_GETTING_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_WLAN_INFO_GETTING_REQ;

    /**
     * Creates a plain object from a DEVICE_WLAN_INFO_GETTING_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_WLAN_INFO_GETTING_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_WLAN_INFO_GETTING_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_WLAN_INFO_GETTING_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_WLAN_INFO_GETTING_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_WLAN_INFO_GETTING_RSP. */
export interface IDEVICE_WLAN_INFO_GETTING_RSP {

    /** DEVICE_WLAN_INFO_GETTING_RSP result */
    result: number;

    /** DEVICE_WLAN_INFO_GETTING_RSP body */
    body: DEVICE_WLAN_INFO_GETTING_RSP.IBody;
}

/** Represents a DEVICE_WLAN_INFO_GETTING_RSP. */
export class DEVICE_WLAN_INFO_GETTING_RSP implements IDEVICE_WLAN_INFO_GETTING_RSP {

    /**
     * Constructs a new DEVICE_WLAN_INFO_GETTING_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_WLAN_INFO_GETTING_RSP);

    /** DEVICE_WLAN_INFO_GETTING_RSP result. */
    public result: number;

    /** DEVICE_WLAN_INFO_GETTING_RSP body. */
    public body: DEVICE_WLAN_INFO_GETTING_RSP.IBody;

    /**
     * Creates a new DEVICE_WLAN_INFO_GETTING_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_WLAN_INFO_GETTING_RSP instance
     */
    public static create(properties?: IDEVICE_WLAN_INFO_GETTING_RSP): DEVICE_WLAN_INFO_GETTING_RSP;

    /**
     * Encodes the specified DEVICE_WLAN_INFO_GETTING_RSP message. Does not implicitly {@link DEVICE_WLAN_INFO_GETTING_RSP.verify|verify} messages.
     * @param message DEVICE_WLAN_INFO_GETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_WLAN_INFO_GETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_WLAN_INFO_GETTING_RSP message, length delimited. Does not implicitly {@link DEVICE_WLAN_INFO_GETTING_RSP.verify|verify} messages.
     * @param message DEVICE_WLAN_INFO_GETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_WLAN_INFO_GETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_WLAN_INFO_GETTING_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_WLAN_INFO_GETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_WLAN_INFO_GETTING_RSP;

    /**
     * Decodes a DEVICE_WLAN_INFO_GETTING_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_WLAN_INFO_GETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_WLAN_INFO_GETTING_RSP;

    /**
     * Verifies a DEVICE_WLAN_INFO_GETTING_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_WLAN_INFO_GETTING_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_WLAN_INFO_GETTING_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_WLAN_INFO_GETTING_RSP;

    /**
     * Creates a plain object from a DEVICE_WLAN_INFO_GETTING_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_WLAN_INFO_GETTING_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_WLAN_INFO_GETTING_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_WLAN_INFO_GETTING_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_WLAN_INFO_GETTING_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_WLAN_INFO_GETTING_RSP {

    /** Properties of a Body. */
    interface IBody {

        /** Body ipv4 */
        ipv4: string;

        /** Body ssid */
        ssid: string;

        /** Body port */
        port: number;

        /** Body mask */
        mask: string;

        /** Body mac */
        mac: string;
    }

    /** Represents a Body. */
    class Body implements IBody {

        /**
         * Constructs a new Body.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_WLAN_INFO_GETTING_RSP.IBody);

        /** Body ipv4. */
        public ipv4: string;

        /** Body ssid. */
        public ssid: string;

        /** Body port. */
        public port: number;

        /** Body mask. */
        public mask: string;

        /** Body mac. */
        public mac: string;

        /**
         * Creates a new Body instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Body instance
         */
        public static create(properties?: DEVICE_WLAN_INFO_GETTING_RSP.IBody): DEVICE_WLAN_INFO_GETTING_RSP.Body;

        /**
         * Encodes the specified Body message. Does not implicitly {@link DEVICE_WLAN_INFO_GETTING_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_WLAN_INFO_GETTING_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Body message, length delimited. Does not implicitly {@link DEVICE_WLAN_INFO_GETTING_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_WLAN_INFO_GETTING_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Body message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_WLAN_INFO_GETTING_RSP.Body;

        /**
         * Decodes a Body message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_WLAN_INFO_GETTING_RSP.Body;

        /**
         * Verifies a Body message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Body message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Body
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_WLAN_INFO_GETTING_RSP.Body;

        /**
         * Creates a plain object from a Body message. Also converts values to other types if specified.
         * @param message Body
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_WLAN_INFO_GETTING_RSP.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Body to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Body
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_MAPID_SELECT_MAP_PLAN_REQ. */
export interface IDEVICE_MAPID_SELECT_MAP_PLAN_REQ {

    /** DEVICE_MAPID_SELECT_MAP_PLAN_REQ mapHeadId */
    mapHeadId: number;

    /** DEVICE_MAPID_SELECT_MAP_PLAN_REQ planId */
    planId?: (number|null);

    /** DEVICE_MAPID_SELECT_MAP_PLAN_REQ mode */
    mode: number;
}

/** Represents a DEVICE_MAPID_SELECT_MAP_PLAN_REQ. */
export class DEVICE_MAPID_SELECT_MAP_PLAN_REQ implements IDEVICE_MAPID_SELECT_MAP_PLAN_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SELECT_MAP_PLAN_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SELECT_MAP_PLAN_REQ);

    /** DEVICE_MAPID_SELECT_MAP_PLAN_REQ mapHeadId. */
    public mapHeadId: number;

    /** DEVICE_MAPID_SELECT_MAP_PLAN_REQ planId. */
    public planId: number;

    /** DEVICE_MAPID_SELECT_MAP_PLAN_REQ mode. */
    public mode: number;

    /**
     * Creates a new DEVICE_MAPID_SELECT_MAP_PLAN_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SELECT_MAP_PLAN_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SELECT_MAP_PLAN_REQ): DEVICE_MAPID_SELECT_MAP_PLAN_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SELECT_MAP_PLAN_REQ message. Does not implicitly {@link DEVICE_MAPID_SELECT_MAP_PLAN_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SELECT_MAP_PLAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SELECT_MAP_PLAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SELECT_MAP_PLAN_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SELECT_MAP_PLAN_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SELECT_MAP_PLAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SELECT_MAP_PLAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SELECT_MAP_PLAN_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SELECT_MAP_PLAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SELECT_MAP_PLAN_REQ;

    /**
     * Decodes a DEVICE_MAPID_SELECT_MAP_PLAN_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SELECT_MAP_PLAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SELECT_MAP_PLAN_REQ;

    /**
     * Verifies a DEVICE_MAPID_SELECT_MAP_PLAN_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SELECT_MAP_PLAN_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SELECT_MAP_PLAN_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SELECT_MAP_PLAN_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SELECT_MAP_PLAN_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SELECT_MAP_PLAN_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SELECT_MAP_PLAN_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SELECT_MAP_PLAN_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SELECT_MAP_PLAN_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SELECT_MAP_PLAN_RSP. */
export interface IDEVICE_MAPID_SELECT_MAP_PLAN_RSP {

    /** DEVICE_MAPID_SELECT_MAP_PLAN_RSP result */
    result: number;

    /** DEVICE_MAPID_SELECT_MAP_PLAN_RSP unk1 */
    unk1: number;
}

/** Represents a DEVICE_MAPID_SELECT_MAP_PLAN_RSP. */
export class DEVICE_MAPID_SELECT_MAP_PLAN_RSP implements IDEVICE_MAPID_SELECT_MAP_PLAN_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SELECT_MAP_PLAN_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SELECT_MAP_PLAN_RSP);

    /** DEVICE_MAPID_SELECT_MAP_PLAN_RSP result. */
    public result: number;

    /** DEVICE_MAPID_SELECT_MAP_PLAN_RSP unk1. */
    public unk1: number;

    /**
     * Creates a new DEVICE_MAPID_SELECT_MAP_PLAN_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SELECT_MAP_PLAN_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SELECT_MAP_PLAN_RSP): DEVICE_MAPID_SELECT_MAP_PLAN_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SELECT_MAP_PLAN_RSP message. Does not implicitly {@link DEVICE_MAPID_SELECT_MAP_PLAN_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SELECT_MAP_PLAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SELECT_MAP_PLAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SELECT_MAP_PLAN_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SELECT_MAP_PLAN_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SELECT_MAP_PLAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SELECT_MAP_PLAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SELECT_MAP_PLAN_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SELECT_MAP_PLAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SELECT_MAP_PLAN_RSP;

    /**
     * Decodes a DEVICE_MAPID_SELECT_MAP_PLAN_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SELECT_MAP_PLAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SELECT_MAP_PLAN_RSP;

    /**
     * Verifies a DEVICE_MAPID_SELECT_MAP_PLAN_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SELECT_MAP_PLAN_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SELECT_MAP_PLAN_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SELECT_MAP_PLAN_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SELECT_MAP_PLAN_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SELECT_MAP_PLAN_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SELECT_MAP_PLAN_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SELECT_MAP_PLAN_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SELECT_MAP_PLAN_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_PLAN_PARAMS_REQ. */
export interface IDEVICE_MAPID_SET_PLAN_PARAMS_REQ {

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ mapHeadId */
    mapHeadId: number;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ planId */
    planId: number;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ mapName */
    mapName: string;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ planName */
    planName: string;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ roomList */
    roomList?: (DEVICE_MAPID_SET_PLAN_PARAMS_REQ.IRoom[]|null);

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ areaInfo */
    areaInfo: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ;
}

/** Represents a DEVICE_MAPID_SET_PLAN_PARAMS_REQ. */
export class DEVICE_MAPID_SET_PLAN_PARAMS_REQ implements IDEVICE_MAPID_SET_PLAN_PARAMS_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SET_PLAN_PARAMS_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_PLAN_PARAMS_REQ);

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ mapHeadId. */
    public mapHeadId: number;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ planId. */
    public planId: number;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ mapName. */
    public mapName: string;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ planName. */
    public planName: string;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ roomList. */
    public roomList: DEVICE_MAPID_SET_PLAN_PARAMS_REQ.IRoom[];

    /** DEVICE_MAPID_SET_PLAN_PARAMS_REQ areaInfo. */
    public areaInfo: IDEVICE_MAPID_SET_AREA_CLEAN_INFO_REQ;

    /**
     * Creates a new DEVICE_MAPID_SET_PLAN_PARAMS_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_PLAN_PARAMS_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_PLAN_PARAMS_REQ): DEVICE_MAPID_SET_PLAN_PARAMS_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SET_PLAN_PARAMS_REQ message. Does not implicitly {@link DEVICE_MAPID_SET_PLAN_PARAMS_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_PLAN_PARAMS_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_PLAN_PARAMS_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_PLAN_PARAMS_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_PLAN_PARAMS_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_PLAN_PARAMS_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_PLAN_PARAMS_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_PLAN_PARAMS_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_PLAN_PARAMS_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_PLAN_PARAMS_REQ;

    /**
     * Decodes a DEVICE_MAPID_SET_PLAN_PARAMS_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_PLAN_PARAMS_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_PLAN_PARAMS_REQ;

    /**
     * Verifies a DEVICE_MAPID_SET_PLAN_PARAMS_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_PLAN_PARAMS_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_PLAN_PARAMS_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_PLAN_PARAMS_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_PLAN_PARAMS_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_PLAN_PARAMS_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_PLAN_PARAMS_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_PLAN_PARAMS_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_PLAN_PARAMS_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_MAPID_SET_PLAN_PARAMS_REQ {

    /** Properties of a Room. */
    interface IRoom {

        /** Room roomId */
        roomId: number;

        /** Room roomName */
        roomName: string;

        /** Room enable */
        enable: boolean;
    }

    /** Represents a Room. */
    class Room implements IRoom {

        /**
         * Constructs a new Room.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_MAPID_SET_PLAN_PARAMS_REQ.IRoom);

        /** Room roomId. */
        public roomId: number;

        /** Room roomName. */
        public roomName: string;

        /** Room enable. */
        public enable: boolean;

        /**
         * Creates a new Room instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Room instance
         */
        public static create(properties?: DEVICE_MAPID_SET_PLAN_PARAMS_REQ.IRoom): DEVICE_MAPID_SET_PLAN_PARAMS_REQ.Room;

        /**
         * Encodes the specified Room message. Does not implicitly {@link DEVICE_MAPID_SET_PLAN_PARAMS_REQ.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_MAPID_SET_PLAN_PARAMS_REQ.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Room message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_PLAN_PARAMS_REQ.Room.verify|verify} messages.
         * @param message Room message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_MAPID_SET_PLAN_PARAMS_REQ.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Room message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_PLAN_PARAMS_REQ.Room;

        /**
         * Decodes a Room message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Room
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_PLAN_PARAMS_REQ.Room;

        /**
         * Verifies a Room message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Room message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Room
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_PLAN_PARAMS_REQ.Room;

        /**
         * Creates a plain object from a Room message. Also converts values to other types if specified.
         * @param message Room
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_MAPID_SET_PLAN_PARAMS_REQ.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Room to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Room
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_MAPID_SET_PLAN_PARAMS_RSP. */
export interface IDEVICE_MAPID_SET_PLAN_PARAMS_RSP {

    /** DEVICE_MAPID_SET_PLAN_PARAMS_RSP result */
    result: number;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_RSP unk1 */
    unk1: number;
}

/** Represents a DEVICE_MAPID_SET_PLAN_PARAMS_RSP. */
export class DEVICE_MAPID_SET_PLAN_PARAMS_RSP implements IDEVICE_MAPID_SET_PLAN_PARAMS_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SET_PLAN_PARAMS_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_PLAN_PARAMS_RSP);

    /** DEVICE_MAPID_SET_PLAN_PARAMS_RSP result. */
    public result: number;

    /** DEVICE_MAPID_SET_PLAN_PARAMS_RSP unk1. */
    public unk1: number;

    /**
     * Creates a new DEVICE_MAPID_SET_PLAN_PARAMS_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_PLAN_PARAMS_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_PLAN_PARAMS_RSP): DEVICE_MAPID_SET_PLAN_PARAMS_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SET_PLAN_PARAMS_RSP message. Does not implicitly {@link DEVICE_MAPID_SET_PLAN_PARAMS_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_PLAN_PARAMS_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_PLAN_PARAMS_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_PLAN_PARAMS_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_PLAN_PARAMS_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_PLAN_PARAMS_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_PLAN_PARAMS_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_PLAN_PARAMS_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_PLAN_PARAMS_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_PLAN_PARAMS_RSP;

    /**
     * Decodes a DEVICE_MAPID_SET_PLAN_PARAMS_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_PLAN_PARAMS_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_PLAN_PARAMS_RSP;

    /**
     * Verifies a DEVICE_MAPID_SET_PLAN_PARAMS_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_PLAN_PARAMS_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_PLAN_PARAMS_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_PLAN_PARAMS_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_PLAN_PARAMS_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_PLAN_PARAMS_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_PLAN_PARAMS_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_PLAN_PARAMS_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_PLAN_PARAMS_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ. */
export interface IDEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ {

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ mapHeadId */
    mapHeadId: number;

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ type */
    type: number;

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ dataLen */
    dataLen: number;

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ data */
    data: Uint8Array;

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ roomId */
    roomId: number;
}

/** Represents a DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ. */
export class DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ implements IDEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ);

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ mapHeadId. */
    public mapHeadId: number;

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ type. */
    public type: number;

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ dataLen. */
    public dataLen: number;

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ data. */
    public data: Uint8Array;

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ roomId. */
    public roomId: number;

    /**
     * Creates a new DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ): DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message. Does not implicitly {@link DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ;

    /**
     * Decodes a DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ;

    /**
     * Verifies a DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_ARRANGEROOM_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP. */
export interface IDEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP {

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP result */
    result: number;
}

/** Represents a DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP. */
export class DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP implements IDEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP);

    /** DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP): DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message. Does not implicitly {@link DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP;

    /**
     * Decodes a DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP;

    /**
     * Verifies a DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_ARRANGEROOM_INFO_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_VIRWALL_ALL_LIST_SETTING_RSP. */
export interface IDEVICE_VIRWALL_ALL_LIST_SETTING_RSP {

    /** DEVICE_VIRWALL_ALL_LIST_SETTING_RSP result */
    result: number;

    /** DEVICE_VIRWALL_ALL_LIST_SETTING_RSP unk1 */
    unk1: string;

    /** DEVICE_VIRWALL_ALL_LIST_SETTING_RSP unk2 */
    unk2: number;
}

/** Represents a DEVICE_VIRWALL_ALL_LIST_SETTING_RSP. */
export class DEVICE_VIRWALL_ALL_LIST_SETTING_RSP implements IDEVICE_VIRWALL_ALL_LIST_SETTING_RSP {

    /**
     * Constructs a new DEVICE_VIRWALL_ALL_LIST_SETTING_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_VIRWALL_ALL_LIST_SETTING_RSP);

    /** DEVICE_VIRWALL_ALL_LIST_SETTING_RSP result. */
    public result: number;

    /** DEVICE_VIRWALL_ALL_LIST_SETTING_RSP unk1. */
    public unk1: string;

    /** DEVICE_VIRWALL_ALL_LIST_SETTING_RSP unk2. */
    public unk2: number;

    /**
     * Creates a new DEVICE_VIRWALL_ALL_LIST_SETTING_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_VIRWALL_ALL_LIST_SETTING_RSP instance
     */
    public static create(properties?: IDEVICE_VIRWALL_ALL_LIST_SETTING_RSP): DEVICE_VIRWALL_ALL_LIST_SETTING_RSP;

    /**
     * Encodes the specified DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message. Does not implicitly {@link DEVICE_VIRWALL_ALL_LIST_SETTING_RSP.verify|verify} messages.
     * @param message DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_VIRWALL_ALL_LIST_SETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message, length delimited. Does not implicitly {@link DEVICE_VIRWALL_ALL_LIST_SETTING_RSP.verify|verify} messages.
     * @param message DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_VIRWALL_ALL_LIST_SETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_VIRWALL_ALL_LIST_SETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_VIRWALL_ALL_LIST_SETTING_RSP;

    /**
     * Decodes a DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_VIRWALL_ALL_LIST_SETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_VIRWALL_ALL_LIST_SETTING_RSP;

    /**
     * Verifies a DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_VIRWALL_ALL_LIST_SETTING_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_VIRWALL_ALL_LIST_SETTING_RSP;

    /**
     * Creates a plain object from a DEVICE_VIRWALL_ALL_LIST_SETTING_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_VIRWALL_ALL_LIST_SETTING_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_VIRWALL_ALL_LIST_SETTING_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_VIRWALL_ALL_LIST_SETTING_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_VIRWALL_ALL_LIST_SETTING_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a USER_SET_DEVICE_QUIETHOURS_REQ. */
export interface IUSER_SET_DEVICE_QUIETHOURS_REQ {

    /** USER_SET_DEVICE_QUIETHOURS_REQ isOpen */
    isOpen: boolean;

    /** USER_SET_DEVICE_QUIETHOURS_REQ beginTime */
    beginTime: number;

    /** USER_SET_DEVICE_QUIETHOURS_REQ endTime */
    endTime: number;
}

/** Represents a USER_SET_DEVICE_QUIETHOURS_REQ. */
export class USER_SET_DEVICE_QUIETHOURS_REQ implements IUSER_SET_DEVICE_QUIETHOURS_REQ {

    /**
     * Constructs a new USER_SET_DEVICE_QUIETHOURS_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUSER_SET_DEVICE_QUIETHOURS_REQ);

    /** USER_SET_DEVICE_QUIETHOURS_REQ isOpen. */
    public isOpen: boolean;

    /** USER_SET_DEVICE_QUIETHOURS_REQ beginTime. */
    public beginTime: number;

    /** USER_SET_DEVICE_QUIETHOURS_REQ endTime. */
    public endTime: number;

    /**
     * Creates a new USER_SET_DEVICE_QUIETHOURS_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns USER_SET_DEVICE_QUIETHOURS_REQ instance
     */
    public static create(properties?: IUSER_SET_DEVICE_QUIETHOURS_REQ): USER_SET_DEVICE_QUIETHOURS_REQ;

    /**
     * Encodes the specified USER_SET_DEVICE_QUIETHOURS_REQ message. Does not implicitly {@link USER_SET_DEVICE_QUIETHOURS_REQ.verify|verify} messages.
     * @param message USER_SET_DEVICE_QUIETHOURS_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUSER_SET_DEVICE_QUIETHOURS_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified USER_SET_DEVICE_QUIETHOURS_REQ message, length delimited. Does not implicitly {@link USER_SET_DEVICE_QUIETHOURS_REQ.verify|verify} messages.
     * @param message USER_SET_DEVICE_QUIETHOURS_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUSER_SET_DEVICE_QUIETHOURS_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a USER_SET_DEVICE_QUIETHOURS_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns USER_SET_DEVICE_QUIETHOURS_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): USER_SET_DEVICE_QUIETHOURS_REQ;

    /**
     * Decodes a USER_SET_DEVICE_QUIETHOURS_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns USER_SET_DEVICE_QUIETHOURS_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): USER_SET_DEVICE_QUIETHOURS_REQ;

    /**
     * Verifies a USER_SET_DEVICE_QUIETHOURS_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a USER_SET_DEVICE_QUIETHOURS_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns USER_SET_DEVICE_QUIETHOURS_REQ
     */
    public static fromObject(object: { [k: string]: any }): USER_SET_DEVICE_QUIETHOURS_REQ;

    /**
     * Creates a plain object from a USER_SET_DEVICE_QUIETHOURS_REQ message. Also converts values to other types if specified.
     * @param message USER_SET_DEVICE_QUIETHOURS_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: USER_SET_DEVICE_QUIETHOURS_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this USER_SET_DEVICE_QUIETHOURS_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for USER_SET_DEVICE_QUIETHOURS_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a USER_SET_DEVICE_QUIETHOURS_RSP. */
export interface IUSER_SET_DEVICE_QUIETHOURS_RSP {

    /** USER_SET_DEVICE_QUIETHOURS_RSP result */
    result: number;
}

/** Represents a USER_SET_DEVICE_QUIETHOURS_RSP. */
export class USER_SET_DEVICE_QUIETHOURS_RSP implements IUSER_SET_DEVICE_QUIETHOURS_RSP {

    /**
     * Constructs a new USER_SET_DEVICE_QUIETHOURS_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUSER_SET_DEVICE_QUIETHOURS_RSP);

    /** USER_SET_DEVICE_QUIETHOURS_RSP result. */
    public result: number;

    /**
     * Creates a new USER_SET_DEVICE_QUIETHOURS_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns USER_SET_DEVICE_QUIETHOURS_RSP instance
     */
    public static create(properties?: IUSER_SET_DEVICE_QUIETHOURS_RSP): USER_SET_DEVICE_QUIETHOURS_RSP;

    /**
     * Encodes the specified USER_SET_DEVICE_QUIETHOURS_RSP message. Does not implicitly {@link USER_SET_DEVICE_QUIETHOURS_RSP.verify|verify} messages.
     * @param message USER_SET_DEVICE_QUIETHOURS_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUSER_SET_DEVICE_QUIETHOURS_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified USER_SET_DEVICE_QUIETHOURS_RSP message, length delimited. Does not implicitly {@link USER_SET_DEVICE_QUIETHOURS_RSP.verify|verify} messages.
     * @param message USER_SET_DEVICE_QUIETHOURS_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUSER_SET_DEVICE_QUIETHOURS_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a USER_SET_DEVICE_QUIETHOURS_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns USER_SET_DEVICE_QUIETHOURS_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): USER_SET_DEVICE_QUIETHOURS_RSP;

    /**
     * Decodes a USER_SET_DEVICE_QUIETHOURS_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns USER_SET_DEVICE_QUIETHOURS_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): USER_SET_DEVICE_QUIETHOURS_RSP;

    /**
     * Verifies a USER_SET_DEVICE_QUIETHOURS_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a USER_SET_DEVICE_QUIETHOURS_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns USER_SET_DEVICE_QUIETHOURS_RSP
     */
    public static fromObject(object: { [k: string]: any }): USER_SET_DEVICE_QUIETHOURS_RSP;

    /**
     * Creates a plain object from a USER_SET_DEVICE_QUIETHOURS_RSP message. Also converts values to other types if specified.
     * @param message USER_SET_DEVICE_QUIETHOURS_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: USER_SET_DEVICE_QUIETHOURS_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this USER_SET_DEVICE_QUIETHOURS_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for USER_SET_DEVICE_QUIETHOURS_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a USER_SET_DEVICE_CLEANPREFERENCE_REQ. */
export interface IUSER_SET_DEVICE_CLEANPREFERENCE_REQ {

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ ecoMode */
    ecoMode?: (boolean|null);

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ repeatClean */
    repeatClean?: (boolean|null);

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ cleanBroken */
    cleanBroken?: (boolean|null);

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ carpetTurbo */
    carpetTurbo?: (boolean|null);

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ historyMap */
    historyMap?: (boolean|null);

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ waterLevel */
    waterLevel?: (number|null);
}

/** Represents a USER_SET_DEVICE_CLEANPREFERENCE_REQ. */
export class USER_SET_DEVICE_CLEANPREFERENCE_REQ implements IUSER_SET_DEVICE_CLEANPREFERENCE_REQ {

    /**
     * Constructs a new USER_SET_DEVICE_CLEANPREFERENCE_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUSER_SET_DEVICE_CLEANPREFERENCE_REQ);

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ ecoMode. */
    public ecoMode: boolean;

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ repeatClean. */
    public repeatClean: boolean;

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ cleanBroken. */
    public cleanBroken: boolean;

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ carpetTurbo. */
    public carpetTurbo: boolean;

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ historyMap. */
    public historyMap: boolean;

    /** USER_SET_DEVICE_CLEANPREFERENCE_REQ waterLevel. */
    public waterLevel: number;

    /**
     * Creates a new USER_SET_DEVICE_CLEANPREFERENCE_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns USER_SET_DEVICE_CLEANPREFERENCE_REQ instance
     */
    public static create(properties?: IUSER_SET_DEVICE_CLEANPREFERENCE_REQ): USER_SET_DEVICE_CLEANPREFERENCE_REQ;

    /**
     * Encodes the specified USER_SET_DEVICE_CLEANPREFERENCE_REQ message. Does not implicitly {@link USER_SET_DEVICE_CLEANPREFERENCE_REQ.verify|verify} messages.
     * @param message USER_SET_DEVICE_CLEANPREFERENCE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUSER_SET_DEVICE_CLEANPREFERENCE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified USER_SET_DEVICE_CLEANPREFERENCE_REQ message, length delimited. Does not implicitly {@link USER_SET_DEVICE_CLEANPREFERENCE_REQ.verify|verify} messages.
     * @param message USER_SET_DEVICE_CLEANPREFERENCE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUSER_SET_DEVICE_CLEANPREFERENCE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a USER_SET_DEVICE_CLEANPREFERENCE_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns USER_SET_DEVICE_CLEANPREFERENCE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): USER_SET_DEVICE_CLEANPREFERENCE_REQ;

    /**
     * Decodes a USER_SET_DEVICE_CLEANPREFERENCE_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns USER_SET_DEVICE_CLEANPREFERENCE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): USER_SET_DEVICE_CLEANPREFERENCE_REQ;

    /**
     * Verifies a USER_SET_DEVICE_CLEANPREFERENCE_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a USER_SET_DEVICE_CLEANPREFERENCE_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns USER_SET_DEVICE_CLEANPREFERENCE_REQ
     */
    public static fromObject(object: { [k: string]: any }): USER_SET_DEVICE_CLEANPREFERENCE_REQ;

    /**
     * Creates a plain object from a USER_SET_DEVICE_CLEANPREFERENCE_REQ message. Also converts values to other types if specified.
     * @param message USER_SET_DEVICE_CLEANPREFERENCE_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: USER_SET_DEVICE_CLEANPREFERENCE_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this USER_SET_DEVICE_CLEANPREFERENCE_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for USER_SET_DEVICE_CLEANPREFERENCE_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a USER_SET_DEVICE_CLEANPREFERENCE_RSP. */
export interface IUSER_SET_DEVICE_CLEANPREFERENCE_RSP {

    /** USER_SET_DEVICE_CLEANPREFERENCE_RSP result */
    result: number;
}

/** Represents a USER_SET_DEVICE_CLEANPREFERENCE_RSP. */
export class USER_SET_DEVICE_CLEANPREFERENCE_RSP implements IUSER_SET_DEVICE_CLEANPREFERENCE_RSP {

    /**
     * Constructs a new USER_SET_DEVICE_CLEANPREFERENCE_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUSER_SET_DEVICE_CLEANPREFERENCE_RSP);

    /** USER_SET_DEVICE_CLEANPREFERENCE_RSP result. */
    public result: number;

    /**
     * Creates a new USER_SET_DEVICE_CLEANPREFERENCE_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns USER_SET_DEVICE_CLEANPREFERENCE_RSP instance
     */
    public static create(properties?: IUSER_SET_DEVICE_CLEANPREFERENCE_RSP): USER_SET_DEVICE_CLEANPREFERENCE_RSP;

    /**
     * Encodes the specified USER_SET_DEVICE_CLEANPREFERENCE_RSP message. Does not implicitly {@link USER_SET_DEVICE_CLEANPREFERENCE_RSP.verify|verify} messages.
     * @param message USER_SET_DEVICE_CLEANPREFERENCE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUSER_SET_DEVICE_CLEANPREFERENCE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified USER_SET_DEVICE_CLEANPREFERENCE_RSP message, length delimited. Does not implicitly {@link USER_SET_DEVICE_CLEANPREFERENCE_RSP.verify|verify} messages.
     * @param message USER_SET_DEVICE_CLEANPREFERENCE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUSER_SET_DEVICE_CLEANPREFERENCE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a USER_SET_DEVICE_CLEANPREFERENCE_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns USER_SET_DEVICE_CLEANPREFERENCE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): USER_SET_DEVICE_CLEANPREFERENCE_RSP;

    /**
     * Decodes a USER_SET_DEVICE_CLEANPREFERENCE_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns USER_SET_DEVICE_CLEANPREFERENCE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): USER_SET_DEVICE_CLEANPREFERENCE_RSP;

    /**
     * Verifies a USER_SET_DEVICE_CLEANPREFERENCE_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a USER_SET_DEVICE_CLEANPREFERENCE_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns USER_SET_DEVICE_CLEANPREFERENCE_RSP
     */
    public static fromObject(object: { [k: string]: any }): USER_SET_DEVICE_CLEANPREFERENCE_RSP;

    /**
     * Creates a plain object from a USER_SET_DEVICE_CLEANPREFERENCE_RSP message. Also converts values to other types if specified.
     * @param message USER_SET_DEVICE_CLEANPREFERENCE_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: USER_SET_DEVICE_CLEANPREFERENCE_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this USER_SET_DEVICE_CLEANPREFERENCE_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for USER_SET_DEVICE_CLEANPREFERENCE_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_ZERO_CALIBRATION_REQ. */
export interface IDEVICE_ZERO_CALIBRATION_REQ {

    /** DEVICE_ZERO_CALIBRATION_REQ unk1 */
    unk1: number;
}

/** Represents a DEVICE_ZERO_CALIBRATION_REQ. */
export class DEVICE_ZERO_CALIBRATION_REQ implements IDEVICE_ZERO_CALIBRATION_REQ {

    /**
     * Constructs a new DEVICE_ZERO_CALIBRATION_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_ZERO_CALIBRATION_REQ);

    /** DEVICE_ZERO_CALIBRATION_REQ unk1. */
    public unk1: number;

    /**
     * Creates a new DEVICE_ZERO_CALIBRATION_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_ZERO_CALIBRATION_REQ instance
     */
    public static create(properties?: IDEVICE_ZERO_CALIBRATION_REQ): DEVICE_ZERO_CALIBRATION_REQ;

    /**
     * Encodes the specified DEVICE_ZERO_CALIBRATION_REQ message. Does not implicitly {@link DEVICE_ZERO_CALIBRATION_REQ.verify|verify} messages.
     * @param message DEVICE_ZERO_CALIBRATION_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_ZERO_CALIBRATION_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_ZERO_CALIBRATION_REQ message, length delimited. Does not implicitly {@link DEVICE_ZERO_CALIBRATION_REQ.verify|verify} messages.
     * @param message DEVICE_ZERO_CALIBRATION_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_ZERO_CALIBRATION_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_ZERO_CALIBRATION_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_ZERO_CALIBRATION_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ZERO_CALIBRATION_REQ;

    /**
     * Decodes a DEVICE_ZERO_CALIBRATION_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_ZERO_CALIBRATION_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ZERO_CALIBRATION_REQ;

    /**
     * Verifies a DEVICE_ZERO_CALIBRATION_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_ZERO_CALIBRATION_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_ZERO_CALIBRATION_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_ZERO_CALIBRATION_REQ;

    /**
     * Creates a plain object from a DEVICE_ZERO_CALIBRATION_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_ZERO_CALIBRATION_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_ZERO_CALIBRATION_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_ZERO_CALIBRATION_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_ZERO_CALIBRATION_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_ZERO_CALIBRATION_RSP. */
export interface IDEVICE_ZERO_CALIBRATION_RSP {

    /** DEVICE_ZERO_CALIBRATION_RSP result */
    result: number;

    /** DEVICE_ZERO_CALIBRATION_RSP body */
    body: DEVICE_ZERO_CALIBRATION_RSP.IBody;
}

/** Represents a DEVICE_ZERO_CALIBRATION_RSP. */
export class DEVICE_ZERO_CALIBRATION_RSP implements IDEVICE_ZERO_CALIBRATION_RSP {

    /**
     * Constructs a new DEVICE_ZERO_CALIBRATION_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_ZERO_CALIBRATION_RSP);

    /** DEVICE_ZERO_CALIBRATION_RSP result. */
    public result: number;

    /** DEVICE_ZERO_CALIBRATION_RSP body. */
    public body: DEVICE_ZERO_CALIBRATION_RSP.IBody;

    /**
     * Creates a new DEVICE_ZERO_CALIBRATION_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_ZERO_CALIBRATION_RSP instance
     */
    public static create(properties?: IDEVICE_ZERO_CALIBRATION_RSP): DEVICE_ZERO_CALIBRATION_RSP;

    /**
     * Encodes the specified DEVICE_ZERO_CALIBRATION_RSP message. Does not implicitly {@link DEVICE_ZERO_CALIBRATION_RSP.verify|verify} messages.
     * @param message DEVICE_ZERO_CALIBRATION_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_ZERO_CALIBRATION_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_ZERO_CALIBRATION_RSP message, length delimited. Does not implicitly {@link DEVICE_ZERO_CALIBRATION_RSP.verify|verify} messages.
     * @param message DEVICE_ZERO_CALIBRATION_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_ZERO_CALIBRATION_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_ZERO_CALIBRATION_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_ZERO_CALIBRATION_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ZERO_CALIBRATION_RSP;

    /**
     * Decodes a DEVICE_ZERO_CALIBRATION_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_ZERO_CALIBRATION_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ZERO_CALIBRATION_RSP;

    /**
     * Verifies a DEVICE_ZERO_CALIBRATION_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_ZERO_CALIBRATION_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_ZERO_CALIBRATION_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_ZERO_CALIBRATION_RSP;

    /**
     * Creates a plain object from a DEVICE_ZERO_CALIBRATION_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_ZERO_CALIBRATION_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_ZERO_CALIBRATION_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_ZERO_CALIBRATION_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_ZERO_CALIBRATION_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DEVICE_ZERO_CALIBRATION_RSP {

    /** Properties of a Body. */
    interface IBody {

        /** Body unk1 */
        unk1: number;
    }

    /** Represents a Body. */
    class Body implements IBody {

        /**
         * Constructs a new Body.
         * @param [properties] Properties to set
         */
        constructor(properties?: DEVICE_ZERO_CALIBRATION_RSP.IBody);

        /** Body unk1. */
        public unk1: number;

        /**
         * Creates a new Body instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Body instance
         */
        public static create(properties?: DEVICE_ZERO_CALIBRATION_RSP.IBody): DEVICE_ZERO_CALIBRATION_RSP.Body;

        /**
         * Encodes the specified Body message. Does not implicitly {@link DEVICE_ZERO_CALIBRATION_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DEVICE_ZERO_CALIBRATION_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Body message, length delimited. Does not implicitly {@link DEVICE_ZERO_CALIBRATION_RSP.Body.verify|verify} messages.
         * @param message Body message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DEVICE_ZERO_CALIBRATION_RSP.IBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Body message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_ZERO_CALIBRATION_RSP.Body;

        /**
         * Decodes a Body message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_ZERO_CALIBRATION_RSP.Body;

        /**
         * Verifies a Body message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Body message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Body
         */
        public static fromObject(object: { [k: string]: any }): DEVICE_ZERO_CALIBRATION_RSP.Body;

        /**
         * Creates a plain object from a Body message. Also converts values to other types if specified.
         * @param message Body
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DEVICE_ZERO_CALIBRATION_RSP.Body, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Body to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Body
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Properties of a DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ. */
export interface IDEVICE_UPGRADE_GET_AUTO_INSTALL_REQ {
}

/** Represents a DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ. */
export class DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ implements IDEVICE_UPGRADE_GET_AUTO_INSTALL_REQ {

    /**
     * Constructs a new DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_UPGRADE_GET_AUTO_INSTALL_REQ);

    /**
     * Creates a new DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ instance
     */
    public static create(properties?: IDEVICE_UPGRADE_GET_AUTO_INSTALL_REQ): DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ;

    /**
     * Encodes the specified DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message. Does not implicitly {@link DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ.verify|verify} messages.
     * @param message DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_UPGRADE_GET_AUTO_INSTALL_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message, length delimited. Does not implicitly {@link DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ.verify|verify} messages.
     * @param message DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_UPGRADE_GET_AUTO_INSTALL_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ;

    /**
     * Decodes a DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ;

    /**
     * Verifies a DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ;

    /**
     * Creates a plain object from a DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_UPGRADE_GET_AUTO_INSTALL_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP. */
export interface IDEVICE_UPGRADE_GET_AUTO_INSTALL_RSP {

    /** DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP result */
    result: number;
}

/** Represents a DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP. */
export class DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP implements IDEVICE_UPGRADE_GET_AUTO_INSTALL_RSP {

    /**
     * Constructs a new DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_UPGRADE_GET_AUTO_INSTALL_RSP);

    /** DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP instance
     */
    public static create(properties?: IDEVICE_UPGRADE_GET_AUTO_INSTALL_RSP): DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP;

    /**
     * Encodes the specified DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message. Does not implicitly {@link DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP.verify|verify} messages.
     * @param message DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_UPGRADE_GET_AUTO_INSTALL_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message, length delimited. Does not implicitly {@link DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP.verify|verify} messages.
     * @param message DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_UPGRADE_GET_AUTO_INSTALL_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP;

    /**
     * Decodes a DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP;

    /**
     * Verifies a DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP;

    /**
     * Creates a plain object from a DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_UPGRADE_GET_AUTO_INSTALL_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ. */
export interface IDEVICE_UPGRADE_SET_AUTO_INSTALL_REQ {

    /** DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ unk1 */
    unk1: number;
}

/** Represents a DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ. */
export class DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ implements IDEVICE_UPGRADE_SET_AUTO_INSTALL_REQ {

    /**
     * Constructs a new DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_UPGRADE_SET_AUTO_INSTALL_REQ);

    /** DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ unk1. */
    public unk1: number;

    /**
     * Creates a new DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ instance
     */
    public static create(properties?: IDEVICE_UPGRADE_SET_AUTO_INSTALL_REQ): DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ;

    /**
     * Encodes the specified DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message. Does not implicitly {@link DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ.verify|verify} messages.
     * @param message DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_UPGRADE_SET_AUTO_INSTALL_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message, length delimited. Does not implicitly {@link DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ.verify|verify} messages.
     * @param message DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_UPGRADE_SET_AUTO_INSTALL_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ;

    /**
     * Decodes a DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ;

    /**
     * Verifies a DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ;

    /**
     * Creates a plain object from a DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_UPGRADE_SET_AUTO_INSTALL_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP. */
export interface IDEVICE_UPGRADE_SET_AUTO_INSTALL_RSP {

    /** DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP result */
    result: number;
}

/** Represents a DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP. */
export class DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP implements IDEVICE_UPGRADE_SET_AUTO_INSTALL_RSP {

    /**
     * Constructs a new DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_UPGRADE_SET_AUTO_INSTALL_RSP);

    /** DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP instance
     */
    public static create(properties?: IDEVICE_UPGRADE_SET_AUTO_INSTALL_RSP): DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP;

    /**
     * Encodes the specified DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message. Does not implicitly {@link DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP.verify|verify} messages.
     * @param message DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_UPGRADE_SET_AUTO_INSTALL_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message, length delimited. Does not implicitly {@link DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP.verify|verify} messages.
     * @param message DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_UPGRADE_SET_AUTO_INSTALL_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP;

    /**
     * Decodes a DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP;

    /**
     * Verifies a DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP;

    /**
     * Creates a plain object from a DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_UPGRADE_SET_AUTO_INSTALL_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a USER_SET_DEVICE_CTRL_SETTING_REQ. */
export interface IUSER_SET_DEVICE_CTRL_SETTING_REQ {

    /** USER_SET_DEVICE_CTRL_SETTING_REQ voiceMode */
    voiceMode?: (boolean|null);

    /** USER_SET_DEVICE_CTRL_SETTING_REQ volume */
    volume?: (number|null);
}

/** Represents a USER_SET_DEVICE_CTRL_SETTING_REQ. */
export class USER_SET_DEVICE_CTRL_SETTING_REQ implements IUSER_SET_DEVICE_CTRL_SETTING_REQ {

    /**
     * Constructs a new USER_SET_DEVICE_CTRL_SETTING_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUSER_SET_DEVICE_CTRL_SETTING_REQ);

    /** USER_SET_DEVICE_CTRL_SETTING_REQ voiceMode. */
    public voiceMode: boolean;

    /** USER_SET_DEVICE_CTRL_SETTING_REQ volume. */
    public volume: number;

    /**
     * Creates a new USER_SET_DEVICE_CTRL_SETTING_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns USER_SET_DEVICE_CTRL_SETTING_REQ instance
     */
    public static create(properties?: IUSER_SET_DEVICE_CTRL_SETTING_REQ): USER_SET_DEVICE_CTRL_SETTING_REQ;

    /**
     * Encodes the specified USER_SET_DEVICE_CTRL_SETTING_REQ message. Does not implicitly {@link USER_SET_DEVICE_CTRL_SETTING_REQ.verify|verify} messages.
     * @param message USER_SET_DEVICE_CTRL_SETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUSER_SET_DEVICE_CTRL_SETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified USER_SET_DEVICE_CTRL_SETTING_REQ message, length delimited. Does not implicitly {@link USER_SET_DEVICE_CTRL_SETTING_REQ.verify|verify} messages.
     * @param message USER_SET_DEVICE_CTRL_SETTING_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUSER_SET_DEVICE_CTRL_SETTING_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a USER_SET_DEVICE_CTRL_SETTING_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns USER_SET_DEVICE_CTRL_SETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): USER_SET_DEVICE_CTRL_SETTING_REQ;

    /**
     * Decodes a USER_SET_DEVICE_CTRL_SETTING_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns USER_SET_DEVICE_CTRL_SETTING_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): USER_SET_DEVICE_CTRL_SETTING_REQ;

    /**
     * Verifies a USER_SET_DEVICE_CTRL_SETTING_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a USER_SET_DEVICE_CTRL_SETTING_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns USER_SET_DEVICE_CTRL_SETTING_REQ
     */
    public static fromObject(object: { [k: string]: any }): USER_SET_DEVICE_CTRL_SETTING_REQ;

    /**
     * Creates a plain object from a USER_SET_DEVICE_CTRL_SETTING_REQ message. Also converts values to other types if specified.
     * @param message USER_SET_DEVICE_CTRL_SETTING_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: USER_SET_DEVICE_CTRL_SETTING_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this USER_SET_DEVICE_CTRL_SETTING_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for USER_SET_DEVICE_CTRL_SETTING_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a USER_SET_DEVICE_CTRL_SETTING_RSP. */
export interface IUSER_SET_DEVICE_CTRL_SETTING_RSP {

    /** USER_SET_DEVICE_CTRL_SETTING_RSP result */
    result: number;
}

/** Represents a USER_SET_DEVICE_CTRL_SETTING_RSP. */
export class USER_SET_DEVICE_CTRL_SETTING_RSP implements IUSER_SET_DEVICE_CTRL_SETTING_RSP {

    /**
     * Constructs a new USER_SET_DEVICE_CTRL_SETTING_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUSER_SET_DEVICE_CTRL_SETTING_RSP);

    /** USER_SET_DEVICE_CTRL_SETTING_RSP result. */
    public result: number;

    /**
     * Creates a new USER_SET_DEVICE_CTRL_SETTING_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns USER_SET_DEVICE_CTRL_SETTING_RSP instance
     */
    public static create(properties?: IUSER_SET_DEVICE_CTRL_SETTING_RSP): USER_SET_DEVICE_CTRL_SETTING_RSP;

    /**
     * Encodes the specified USER_SET_DEVICE_CTRL_SETTING_RSP message. Does not implicitly {@link USER_SET_DEVICE_CTRL_SETTING_RSP.verify|verify} messages.
     * @param message USER_SET_DEVICE_CTRL_SETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUSER_SET_DEVICE_CTRL_SETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified USER_SET_DEVICE_CTRL_SETTING_RSP message, length delimited. Does not implicitly {@link USER_SET_DEVICE_CTRL_SETTING_RSP.verify|verify} messages.
     * @param message USER_SET_DEVICE_CTRL_SETTING_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUSER_SET_DEVICE_CTRL_SETTING_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a USER_SET_DEVICE_CTRL_SETTING_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns USER_SET_DEVICE_CTRL_SETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): USER_SET_DEVICE_CTRL_SETTING_RSP;

    /**
     * Decodes a USER_SET_DEVICE_CTRL_SETTING_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns USER_SET_DEVICE_CTRL_SETTING_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): USER_SET_DEVICE_CTRL_SETTING_RSP;

    /**
     * Verifies a USER_SET_DEVICE_CTRL_SETTING_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a USER_SET_DEVICE_CTRL_SETTING_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns USER_SET_DEVICE_CTRL_SETTING_RSP
     */
    public static fromObject(object: { [k: string]: any }): USER_SET_DEVICE_CTRL_SETTING_RSP;

    /**
     * Creates a plain object from a USER_SET_DEVICE_CTRL_SETTING_RSP message. Also converts values to other types if specified.
     * @param message USER_SET_DEVICE_CTRL_SETTING_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: USER_SET_DEVICE_CTRL_SETTING_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this USER_SET_DEVICE_CTRL_SETTING_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for USER_SET_DEVICE_CTRL_SETTING_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ. */
export interface IDEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ {

    /** DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ itemId */
    itemId: number;
}

/** Represents a DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ. */
export class DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ implements IDEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ);

    /** DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ itemId. */
    public itemId: number;

    /**
     * Creates a new DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ): DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message. Does not implicitly {@link DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ;

    /**
     * Decodes a DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ;

    /**
     * Verifies a DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_CONSUMABLES_PARAM_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP. */
export interface IDEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP {

    /** DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP result */
    result: number;
}

/** Represents a DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP. */
export class DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP implements IDEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP);

    /** DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP): DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message. Does not implicitly {@link DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP;

    /**
     * Decodes a DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP;

    /**
     * Verifies a DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_CONSUMABLES_PARAM_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a USER_GET_DEVICE_QUIETHOURS_REQ. */
export interface IUSER_GET_DEVICE_QUIETHOURS_REQ {
}

/** Represents a USER_GET_DEVICE_QUIETHOURS_REQ. */
export class USER_GET_DEVICE_QUIETHOURS_REQ implements IUSER_GET_DEVICE_QUIETHOURS_REQ {

    /**
     * Constructs a new USER_GET_DEVICE_QUIETHOURS_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUSER_GET_DEVICE_QUIETHOURS_REQ);

    /**
     * Creates a new USER_GET_DEVICE_QUIETHOURS_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns USER_GET_DEVICE_QUIETHOURS_REQ instance
     */
    public static create(properties?: IUSER_GET_DEVICE_QUIETHOURS_REQ): USER_GET_DEVICE_QUIETHOURS_REQ;

    /**
     * Encodes the specified USER_GET_DEVICE_QUIETHOURS_REQ message. Does not implicitly {@link USER_GET_DEVICE_QUIETHOURS_REQ.verify|verify} messages.
     * @param message USER_GET_DEVICE_QUIETHOURS_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUSER_GET_DEVICE_QUIETHOURS_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified USER_GET_DEVICE_QUIETHOURS_REQ message, length delimited. Does not implicitly {@link USER_GET_DEVICE_QUIETHOURS_REQ.verify|verify} messages.
     * @param message USER_GET_DEVICE_QUIETHOURS_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUSER_GET_DEVICE_QUIETHOURS_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a USER_GET_DEVICE_QUIETHOURS_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns USER_GET_DEVICE_QUIETHOURS_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): USER_GET_DEVICE_QUIETHOURS_REQ;

    /**
     * Decodes a USER_GET_DEVICE_QUIETHOURS_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns USER_GET_DEVICE_QUIETHOURS_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): USER_GET_DEVICE_QUIETHOURS_REQ;

    /**
     * Verifies a USER_GET_DEVICE_QUIETHOURS_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a USER_GET_DEVICE_QUIETHOURS_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns USER_GET_DEVICE_QUIETHOURS_REQ
     */
    public static fromObject(object: { [k: string]: any }): USER_GET_DEVICE_QUIETHOURS_REQ;

    /**
     * Creates a plain object from a USER_GET_DEVICE_QUIETHOURS_REQ message. Also converts values to other types if specified.
     * @param message USER_GET_DEVICE_QUIETHOURS_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: USER_GET_DEVICE_QUIETHOURS_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this USER_GET_DEVICE_QUIETHOURS_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for USER_GET_DEVICE_QUIETHOURS_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a USER_GET_DEVICE_QUIETHOURS_RSP. */
export interface IUSER_GET_DEVICE_QUIETHOURS_RSP {

    /** USER_GET_DEVICE_QUIETHOURS_RSP isOpen */
    isOpen: boolean;

    /** USER_GET_DEVICE_QUIETHOURS_RSP beginTime */
    beginTime: number;

    /** USER_GET_DEVICE_QUIETHOURS_RSP endTime */
    endTime: number;
}

/** Represents a USER_GET_DEVICE_QUIETHOURS_RSP. */
export class USER_GET_DEVICE_QUIETHOURS_RSP implements IUSER_GET_DEVICE_QUIETHOURS_RSP {

    /**
     * Constructs a new USER_GET_DEVICE_QUIETHOURS_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUSER_GET_DEVICE_QUIETHOURS_RSP);

    /** USER_GET_DEVICE_QUIETHOURS_RSP isOpen. */
    public isOpen: boolean;

    /** USER_GET_DEVICE_QUIETHOURS_RSP beginTime. */
    public beginTime: number;

    /** USER_GET_DEVICE_QUIETHOURS_RSP endTime. */
    public endTime: number;

    /**
     * Creates a new USER_GET_DEVICE_QUIETHOURS_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns USER_GET_DEVICE_QUIETHOURS_RSP instance
     */
    public static create(properties?: IUSER_GET_DEVICE_QUIETHOURS_RSP): USER_GET_DEVICE_QUIETHOURS_RSP;

    /**
     * Encodes the specified USER_GET_DEVICE_QUIETHOURS_RSP message. Does not implicitly {@link USER_GET_DEVICE_QUIETHOURS_RSP.verify|verify} messages.
     * @param message USER_GET_DEVICE_QUIETHOURS_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUSER_GET_DEVICE_QUIETHOURS_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified USER_GET_DEVICE_QUIETHOURS_RSP message, length delimited. Does not implicitly {@link USER_GET_DEVICE_QUIETHOURS_RSP.verify|verify} messages.
     * @param message USER_GET_DEVICE_QUIETHOURS_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUSER_GET_DEVICE_QUIETHOURS_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a USER_GET_DEVICE_QUIETHOURS_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns USER_GET_DEVICE_QUIETHOURS_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): USER_GET_DEVICE_QUIETHOURS_RSP;

    /**
     * Decodes a USER_GET_DEVICE_QUIETHOURS_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns USER_GET_DEVICE_QUIETHOURS_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): USER_GET_DEVICE_QUIETHOURS_RSP;

    /**
     * Verifies a USER_GET_DEVICE_QUIETHOURS_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a USER_GET_DEVICE_QUIETHOURS_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns USER_GET_DEVICE_QUIETHOURS_RSP
     */
    public static fromObject(object: { [k: string]: any }): USER_GET_DEVICE_QUIETHOURS_RSP;

    /**
     * Creates a plain object from a USER_GET_DEVICE_QUIETHOURS_RSP message. Also converts values to other types if specified.
     * @param message USER_GET_DEVICE_QUIETHOURS_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: USER_GET_DEVICE_QUIETHOURS_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this USER_GET_DEVICE_QUIETHOURS_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for USER_GET_DEVICE_QUIETHOURS_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ. */
export interface IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ {
}

/** Represents a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ. */
export class DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ implements IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ {

    /**
     * Constructs a new DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ);

    /**
     * Creates a new DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ): DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message. Does not implicitly {@link DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ;

    /**
     * Decodes a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ;

    /**
     * Verifies a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP. */
export interface IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP {
}

/** Represents a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP. */
export class DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP implements IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP {

    /**
     * Constructs a new DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP);

    /**
     * Creates a new DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP): DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message. Does not implicitly {@link DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP;

    /**
     * Decodes a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP;

    /**
     * Verifies a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_SET_HISTORY_MAP_ENABLE_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ. */
export interface IDEVICE_MAPID_INTO_MODEIDLE_INFO_REQ {

    /** DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ mode */
    mode: number;
}

/** Represents a DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ. */
export class DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ implements IDEVICE_MAPID_INTO_MODEIDLE_INFO_REQ {

    /**
     * Constructs a new DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_INTO_MODEIDLE_INFO_REQ);

    /** DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ mode. */
    public mode: number;

    /**
     * Creates a new DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ instance
     */
    public static create(properties?: IDEVICE_MAPID_INTO_MODEIDLE_INFO_REQ): DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ;

    /**
     * Encodes the specified DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message. Does not implicitly {@link DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_INTO_MODEIDLE_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message, length delimited. Does not implicitly {@link DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ.verify|verify} messages.
     * @param message DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_INTO_MODEIDLE_INFO_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ;

    /**
     * Decodes a DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ;

    /**
     * Verifies a DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ;

    /**
     * Creates a plain object from a DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_INTO_MODEIDLE_INFO_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP. */
export interface IDEVICE_MAPID_INTO_MODEIDLE_INFO_RSP {

    /** DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP result */
    result: number;
}

/** Represents a DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP. */
export class DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP implements IDEVICE_MAPID_INTO_MODEIDLE_INFO_RSP {

    /**
     * Constructs a new DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MAPID_INTO_MODEIDLE_INFO_RSP);

    /** DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP instance
     */
    public static create(properties?: IDEVICE_MAPID_INTO_MODEIDLE_INFO_RSP): DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP;

    /**
     * Encodes the specified DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message. Does not implicitly {@link DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MAPID_INTO_MODEIDLE_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message, length delimited. Does not implicitly {@link DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP.verify|verify} messages.
     * @param message DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MAPID_INTO_MODEIDLE_INFO_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP;

    /**
     * Decodes a DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP;

    /**
     * Verifies a DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP;

    /**
     * Creates a plain object from a DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MAPID_INTO_MODEIDLE_INFO_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MOP_FLOOR_CLEAN_REQ. */
export interface IDEVICE_MOP_FLOOR_CLEAN_REQ {

    /** DEVICE_MOP_FLOOR_CLEAN_REQ ctrlValue */
    ctrlValue: number;
}

/** Represents a DEVICE_MOP_FLOOR_CLEAN_REQ. */
export class DEVICE_MOP_FLOOR_CLEAN_REQ implements IDEVICE_MOP_FLOOR_CLEAN_REQ {

    /**
     * Constructs a new DEVICE_MOP_FLOOR_CLEAN_REQ.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MOP_FLOOR_CLEAN_REQ);

    /** DEVICE_MOP_FLOOR_CLEAN_REQ ctrlValue. */
    public ctrlValue: number;

    /**
     * Creates a new DEVICE_MOP_FLOOR_CLEAN_REQ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MOP_FLOOR_CLEAN_REQ instance
     */
    public static create(properties?: IDEVICE_MOP_FLOOR_CLEAN_REQ): DEVICE_MOP_FLOOR_CLEAN_REQ;

    /**
     * Encodes the specified DEVICE_MOP_FLOOR_CLEAN_REQ message. Does not implicitly {@link DEVICE_MOP_FLOOR_CLEAN_REQ.verify|verify} messages.
     * @param message DEVICE_MOP_FLOOR_CLEAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MOP_FLOOR_CLEAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MOP_FLOOR_CLEAN_REQ message, length delimited. Does not implicitly {@link DEVICE_MOP_FLOOR_CLEAN_REQ.verify|verify} messages.
     * @param message DEVICE_MOP_FLOOR_CLEAN_REQ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MOP_FLOOR_CLEAN_REQ, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MOP_FLOOR_CLEAN_REQ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MOP_FLOOR_CLEAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MOP_FLOOR_CLEAN_REQ;

    /**
     * Decodes a DEVICE_MOP_FLOOR_CLEAN_REQ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MOP_FLOOR_CLEAN_REQ
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MOP_FLOOR_CLEAN_REQ;

    /**
     * Verifies a DEVICE_MOP_FLOOR_CLEAN_REQ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MOP_FLOOR_CLEAN_REQ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MOP_FLOOR_CLEAN_REQ
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MOP_FLOOR_CLEAN_REQ;

    /**
     * Creates a plain object from a DEVICE_MOP_FLOOR_CLEAN_REQ message. Also converts values to other types if specified.
     * @param message DEVICE_MOP_FLOOR_CLEAN_REQ
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MOP_FLOOR_CLEAN_REQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MOP_FLOOR_CLEAN_REQ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MOP_FLOOR_CLEAN_REQ
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a DEVICE_MOP_FLOOR_CLEAN_RSP. */
export interface IDEVICE_MOP_FLOOR_CLEAN_RSP {

    /** DEVICE_MOP_FLOOR_CLEAN_RSP result */
    result: number;
}

/** Represents a DEVICE_MOP_FLOOR_CLEAN_RSP. */
export class DEVICE_MOP_FLOOR_CLEAN_RSP implements IDEVICE_MOP_FLOOR_CLEAN_RSP {

    /**
     * Constructs a new DEVICE_MOP_FLOOR_CLEAN_RSP.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDEVICE_MOP_FLOOR_CLEAN_RSP);

    /** DEVICE_MOP_FLOOR_CLEAN_RSP result. */
    public result: number;

    /**
     * Creates a new DEVICE_MOP_FLOOR_CLEAN_RSP instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DEVICE_MOP_FLOOR_CLEAN_RSP instance
     */
    public static create(properties?: IDEVICE_MOP_FLOOR_CLEAN_RSP): DEVICE_MOP_FLOOR_CLEAN_RSP;

    /**
     * Encodes the specified DEVICE_MOP_FLOOR_CLEAN_RSP message. Does not implicitly {@link DEVICE_MOP_FLOOR_CLEAN_RSP.verify|verify} messages.
     * @param message DEVICE_MOP_FLOOR_CLEAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDEVICE_MOP_FLOOR_CLEAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DEVICE_MOP_FLOOR_CLEAN_RSP message, length delimited. Does not implicitly {@link DEVICE_MOP_FLOOR_CLEAN_RSP.verify|verify} messages.
     * @param message DEVICE_MOP_FLOOR_CLEAN_RSP message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDEVICE_MOP_FLOOR_CLEAN_RSP, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DEVICE_MOP_FLOOR_CLEAN_RSP message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DEVICE_MOP_FLOOR_CLEAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DEVICE_MOP_FLOOR_CLEAN_RSP;

    /**
     * Decodes a DEVICE_MOP_FLOOR_CLEAN_RSP message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DEVICE_MOP_FLOOR_CLEAN_RSP
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DEVICE_MOP_FLOOR_CLEAN_RSP;

    /**
     * Verifies a DEVICE_MOP_FLOOR_CLEAN_RSP message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DEVICE_MOP_FLOOR_CLEAN_RSP message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DEVICE_MOP_FLOOR_CLEAN_RSP
     */
    public static fromObject(object: { [k: string]: any }): DEVICE_MOP_FLOOR_CLEAN_RSP;

    /**
     * Creates a plain object from a DEVICE_MOP_FLOOR_CLEAN_RSP message. Also converts values to other types if specified.
     * @param message DEVICE_MOP_FLOOR_CLEAN_RSP
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DEVICE_MOP_FLOOR_CLEAN_RSP, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DEVICE_MOP_FLOOR_CLEAN_RSP to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DEVICE_MOP_FLOOR_CLEAN_RSP
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
