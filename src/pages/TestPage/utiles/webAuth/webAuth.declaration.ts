export interface IWebAuth {
    rpName: string;
    rpId: string;
    credentialOpt?: PublicKeyCredentialCreationOptions;
    assertionOpt?: PublicKeyCredentialRequestOptions;
}

export interface IAssertionOpt {
    challenge: string;
}

export interface ICredentialOpt extends IAssertionOpt {
    userId: string;
    userName: string;
    userDisplayName: string;
}