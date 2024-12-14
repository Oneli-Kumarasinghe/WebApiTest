class Passenger{
constructor(nic_no,full_name,address,contact_info,email,date_of_birth, password)
    {
        this.nic_no= nic_no;
        this.full_name = full_name;
        this.address= address;
        this.contact_info= contact_info;
        this.email=email;
        this.date_of_birth=date_of_birth;
        this.password=password;
    }
}
module.exports = Passenger;