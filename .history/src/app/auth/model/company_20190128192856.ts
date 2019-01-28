export class Company {
  ID { get; set; }
        CompanyName { get; set; }
        public bool IsActive { get; set; }
        Email { get; set; }
        Phone { get; set; }
        Address1 { get; set; }
        Address2 { get; set; }
        CityID { get; set; }
        StateID { get; set; }
        CountryID { get; set; }
        PostCode { get; set; }
        WebAddress { get; set; }
        public byte[] CompanyLogo { get; set; }
        public decimal HourlyRate { get; set; }
        VAT { get; set; }
        RegistrationNumber { get; set; }
        CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        UserID { get; set; }
        ConnectionString { get; set; }
        DatabaseName { get; set; }
        public bool Approved { get; set; }
        public bool Rejected { get; set; }
        RejectedReason { get; set; }
}
