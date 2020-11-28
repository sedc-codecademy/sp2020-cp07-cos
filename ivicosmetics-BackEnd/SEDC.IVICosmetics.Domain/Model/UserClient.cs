using System;
using System.Collections.Generic;
using System.Text;

namespace SEDC.IVICosmetics.Domain.Model
{
    public class UserClient
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public List<Order> Orders { get; set; }
    }
}
