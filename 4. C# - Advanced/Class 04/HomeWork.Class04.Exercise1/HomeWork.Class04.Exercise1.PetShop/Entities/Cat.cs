using System;
using System.Collections.Generic;
using System.Text;

namespace HomeWork.Class04.Exercise1.PetShop.Entities
{
    public class Cat : Pet
    {
        public bool Lazy {get; set;}
        public int LivesLeft {get; set;}

        public override void PrintInfo()
        {
            Console.WriteLine($"Cat {Name} has {LivesLeft} lives left!");
        }
    }
}
