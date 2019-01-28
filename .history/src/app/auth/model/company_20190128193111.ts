export class Company {
  ID: number;
        public string CompanyName: string;
        public bool IsActive { get; set; }
        public string Email: string;
        public string Phone: string;
        public string Address1: string;
        public string Address2: string;}
        CityID: number;
        StateID: number;
        CountryID: number;
        public string PostCode: string;
        public string WebAddress: string;; 
        public byte[] CompanyLogo { get; set; }
        public decimal HourlyRate { get; set; }
        public string VAT { get; set; }
        public string RegistrationNumber { get; set; }
        CreatedBy: number;
        public Nullable<System.DateTime> CreatedDate { get; set; }
        UpdatedBy: number;
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        UserID: number;
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public bool Approved { get; set; }
        public bool Rejected { get; set; }
        public string RejectedReason { get; set; }
}
