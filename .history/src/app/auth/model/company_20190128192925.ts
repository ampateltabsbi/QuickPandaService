export class Company {
  public int ID { get; set; }
        public string CompanyName { get; set; }
        public bool IsActive { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public int CityID { get; set; }
        public int StateID { get; set; }
        public int CountryID { get; set; }
        public string PostCode { get; set; }
        public string WebAddress { get; set; }
        public byte[] CompanyLogo { get; set; }
        public decimal HourlyRate { get; set; }
        public string VAT { get; set; }
        public string RegistrationNumber { get; set; }
        public int CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public int UpdatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public int UserID { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public bool Approved { get; set; }
        public bool Rejected { get; set; }
        public string RejectedReason { get; set; }
}
