export class Company {
  ID: number;
        CompanyName: string;
        public bool IsActive { get; set; }
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
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        UserID: number;
        ConnectionString: string;
        DatabaseName: string;
        public bool Approved: string;
        public bool Rejected: string;
        RejectedReason: string;
}
