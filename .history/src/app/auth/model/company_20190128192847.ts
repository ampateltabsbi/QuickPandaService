export class Company {
  ID { get; set; }
        public string CompanyName { get; set; }
        public bool IsActive { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        CityID { get; set; }
        StateID { get; set; }
        CountryID { get; set; }
        public string PostCode { get; set; }
        public string WebAddress { get; set; }
        public byte[] CompanyLogo { get; set; }
        public decimal HourlyRate { get; set; }
        public string VAT { get; set; }
        public string RegistrationNumber { get; set; }
        CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        UserID { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public bool Approved { get; set; }
        public bool Rejected { get; set; }
        public string RejectedReason { get; set; }
}
