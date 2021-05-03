using System;
using System.Collections.Generic;
using System.Text;

namespace HomeWork.Class04.Exercise1.PetShop.Entities
{
    public class Dog : Pet
    {
        public bool GoodBoi { get; set; }
        public string FavoriteFood { get; set; }

        public override void PrintInfo()
        {
            Console.WriteLine($"Dog {Name} wants to eat {FavoriteFood}"); ;
        }
    }
}
