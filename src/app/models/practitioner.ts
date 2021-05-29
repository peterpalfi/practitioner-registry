export interface Practitioner {
    resourceType: string,
    id: string,
    text: StandardText,
    identifier?: Identifier[],
    active?: boolean,
    name?: HumanName[],
    telecom?: ContactPoint[],
    address?: Address[],
    gender?: "male" | "female" | "other" | "unknown",
    birthDate?: string,
    photo?: Attachment[],
    qualification?: BackboneElement[],
    communication?: CodeableConcept[]
}

export interface Identifier {
    use?: "usual" | "official" | "temp" | "secondary" | "old",
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: string

}

export interface CodeableConcept {
    coding?: Coding[],
    text?: string
}

export interface Coding {
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}

export interface Period {
    start?: string,
    end?: string
}

export interface HumanName {
    use?: "usual" | "official" | "temp" | "nickname" | "anonymous" | "old" | "maiden",
    text?: string,
    family?: string,
    given?: string[],
    prefix?: string[],
    suffix?: string[],
    period?: Period
}

export interface ContactPoint {
    system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other",
    value?: string,
    use?: "home" | "work" | "temp" | "old" | "mobile",
    rank?: number,
    period?: Period

}

export interface Address {
    use?: "home" | "work" | "temp" | "old" | "billing",
    type?: "postal" | "physical" | "both",
    text?: string,
    line?: string[],
    city?: string,
    district?: string,
    state?: string,
    postalCode?: string,
    country?: string,
    period?: Period
}

export interface Attachment {
    contentType?: string,
    language?: string,
    data?: string,
    url?: string,
    size?: number,
    hash?: string,
    title?: string,
    creation?: string
}

export interface BackboneElement {
    modifierExtension?: Extension[],
    identifier?: Identifier[],
    code: CodeableConcept,
    period?: Period,
    issuer?: Reference
}

export interface Extension {
    url: string,
    value?: string
}

export interface Reference {
    reference?: string,
    type?: string,
    identifier?: Identifier,
    display?: string
}

export interface StandardText {
    status: string,
    div: string
}