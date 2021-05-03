using System;
using System.Collections.Generic;
using System.Text;

namespace HomeWork.Class04.Exercise1.PetShop.Entities
{
    public class Fish : Pet
    {
        public string Colour { get; set; }
        public string Size { get; set; }

        public override void PrintInfo()
        {
            switch (Size)
            {
                case "xs":
                    Console.WriteLine("*xs* Where is the fish ?");
                    break;
                case "s":
                    Console.WriteLine("*s* Oh, here it is");
                    break;
                case "xxl":
                    Console.WriteLine("*xxl* It gonna eat ya!");
                    break;
                default:
                    break;

            }
        }
    }
}
