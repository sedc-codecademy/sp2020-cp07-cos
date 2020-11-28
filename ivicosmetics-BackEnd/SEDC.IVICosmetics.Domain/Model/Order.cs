using SEDC.IVICosmetics.Domain.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace SEDC.IVICosmetics.Domain.Model
{
    public class Order
    {
        public int Id { get; set; }
       
        public  StatusType Status { get; set; }

        public bool isPaid { get; set; }
        public DateTime DateOfOrder { get; set; }
        public string ClientId { get; set; }
        public UserClient Client { get; set; }


    }
}
