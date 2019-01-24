import { Binary } from 'selenium-webdriver/firefox';

export class Company {
    ID: number;
    CompanyName: string;
    IsActive: boolean;
    Email: string;
    Phone: string;
    Address1: string;
    Address2: string;
    CityID: number;
    StateID: number;
    CountryID: number;
    PostCode: string;
    WebAddress: string;
    CompanyLogo: Binary;
    HourlyRate: number;
    VAT: string;
    RegistrationNumber: string;
    CreatedBy: number;
    CreatedDate: Date;
    UpdatedBy: number;
    UpdatedDate: Date;
    UserID: number;
}
