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
        WebAddress: string;;
        public byte[] CompanyLogo { get; set; }
        public decimal HourlyRate { get; set; }
        VAT: string;
        RegistrationNumber: string;
        CreatedBy: number;
        public Nullable<System.DateTime> CreatedDate { get; set; }
        UpdatedBy: number;
        public Nullable<System.DateTime> UpdatedDate: datet
        UserID: number;
        ConnectionString: string;
        DatabaseName: string;
        Approved: boolean;
        Rejected: boolean;
        RejectedReason: string;
}
