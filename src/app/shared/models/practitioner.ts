export class Practitioner {
    resourceType: string;
    id?: string;
    text?: StandardText;
    identifier?: Identifier[];
    active?: boolean;
    name?: HumanName[];
    telecom?: ContactPoint[];
    address?: Address[];
    //gender?: "male" | "female" | "other" | "unknown";
    gender?: string;
    birthDate?: string;
    photo?: Attachment[];
    qualification?: BackboneElement[];
    communication?: CodeableConcept[];

    constructor(
        id?: string,
        text?: StandardText,
        identifier?: Identifier[],
        active?: boolean,
        name?: HumanName[],
        telecom?: ContactPoint[],
        address?: Address[],
        gender?: string,
        birthDate?: string,
        photo?: Attachment[],
        qualification?: BackboneElement[],
        communication?: CodeableConcept[]
        ) {
        this.resourceType = "Practitioner";
        this.text = text;
        this.identifier = identifier;
        this.active = active;
        this.name = name;
        this.telecom = telecom;
        this.address = address;
        this.birthDate = birthDate;
        this.photo = photo;
        this.qualification = qualification;
        this.communication = communication;
        this.gender = gender;
    }
}

export class Identifier {
    use?: "usual" | "official" | "temp" | "secondary" | "old";
    type?: CodeableConcept;
    system?: string;
    value?: string;
    period?: Period;
    assigner?: string;

    constructor(type?: CodeableConcept, system?: string, value?: string, period?: Period, assigner?: string) {
        this.use = "usual";
        this.type = type;
        this.system = system;
        this.value = value;
        this.period = period;
        this.assigner = assigner;
    }
}

export class CodeableConcept {
    coding?: Coding[];
    text?: string;

    constructor(coding?: Coding[], text?: string) {
        this.coding = coding;
        this.text = text;
    }
}

export class Coding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean

    constructor(system?: string, version?: string, code?: string, display?: string, userSelected?: boolean) {
        this.system = system;
        this.version = version;
        this.code = code;
        this.display = display;
        this.userSelected = userSelected;
    }
}

export class Period {
    start?: string;
    end?: string;

    constructor(start?: string, end?: string) {
        this.start = start;
        this.end = end;
    }
}

export class HumanName {
    use?: "usual" | "official" | "temp" | "nickname" | "anonymous" | "old" | "maiden";
    text?: string;
    family?: string;
    given?: string[];
    prefix?: string[];
    suffix?: string[];
    period?: Period;

    constructor(text?: string, family?: string, given?: string[], prefix?: string[], suffix?: string[], period?: Period) {
        this.text = text;
        this.family = family;
        this.given = given;
        this.prefix = prefix;
        this.suffix = suffix;
        this.period = period;
    }
}

export class ContactPoint {
    system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other";
    value?: string;
    use?: "home" | "work" | "temp" | "old" | "mobile";
    rank?: number;
    period?: Period;

    constructor(value?: string, rank?: number, period?: Period) {
        this.system = "phone";
        this.value = value;
        this.use = "home";
        this.rank = rank;
        this.period = period;
    }

}

export class Address {
    use?: "home" | "work" | "temp" | "old" | "billing";
    type?: "postal" | "physical" | "both";
    text?: string;
    line?: string[];
    city?: string;
    district?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    period?: Period;

    constructor(text?: string, line?: string[], city?: string, district?: string, state?: string, postalCode?: string, country?: string, period?: Period) {
        this.use = "home";
        this.type = "both";
        this.text = text;
        this.line = line;
        this.city = city;
        this.district = district;
        this.state = state;
        this.postalCode = postalCode;
        this.country = country;
        this.period = period;
    }
}

export class Attachment {
    contentType?: string;
    language?: string;
    data?: string;
    url?: string;
    size?: number;
    hash?: string;
    title?: string;
    creation?: string

    constructor(contentType?: string, language?: string, data?: string, url?: string, size?: number, hash?: string, title?: string, creation?: string) {
        this.contentType = contentType;
        this.language = language;
        this.data = data;
        this.url = url;
        this.size = size;
        this.hash = hash;
        this.title = title;
        this.creation = creation;
    }
}

export class BackboneElement {
    modifierExtension?: Extension[];
    identifier?: Identifier[];
    code: CodeableConcept;
    period?: Period;
    issuer?: Reference

    constructor(code: CodeableConcept, modifierExtension?: Extension[], identifier?: Identifier[], period?: Period, issuer?: Reference) {
        this.modifierExtension = modifierExtension;
        this.identifier = identifier;
        this.code = code;
        this.period = period;
        this.issuer = issuer;
    }
}

export class Extension {
    url: string;
    value?: string;

    constructor(url: string, value?: string) {
        this.url = url;
        this.value = value;
    }
}

export class Reference {
    reference?: string;
    type?: string;
    identifier?: Identifier;
    display?: string;

    constructor(reference?: string, type?: string, identifier?: Identifier, display?: string) {
        this.reference = reference;
        this.type = type;
        this.identifier = identifier;
        this.display = display;
    }
}

export class StandardText {
    status?: string;
    div?: string;
    
    constructor(status?: string, div?: string) {
        this.status = status;
        this.div = div;
    }
}