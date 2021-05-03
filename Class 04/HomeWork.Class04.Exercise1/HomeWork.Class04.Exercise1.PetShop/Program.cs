using HomeWork.Class04.Exercise1.PetShop.Entities;
using System;

namespace HomeWork.Class04.Exercise1.PetShop
{
    class Program
    {
        public static PetStore<Dog> DogStore = new PetStore<Dog>();
        public static PetStore<Cat> CatStore = new PetStore<Cat>();
        public static PetStore<Fish> FishStore = new PetStore<Fish>();
        static void Main(string[] args)
        {
            DogStore.Insert(new Dog() { Name = "Sparky", Age = 2, Type = "Labrador", GoodBoi = true, FavoriteFood = "Patiki" });
            DogStore.Insert(new Dog() { Name = "Fox", Age = 4, Type = "Volcjak", GoodBoi = false, FavoriteFood = "Chickens" });
            DogStore.PrintPets();
            Console.WriteLine("Boying Anji");
            DogStore.BuyPet("Trpe");
            Console.WriteLine("Buy Sparky");
            DogStore.BuyPet("Sparky");
            DogStore.PrintPets();

            Console.WriteLine("---------------------------------");
            CatStore.Insert(new Cat() {Name = "Mikica", Age = 3, Type = "domastic", Lazy = true, LivesLeft = 9 });
            CatStore.Insert(new Cat() {Name = "BlackDevil", Age = 8, Type = "streetAnimal", Lazy = false, LivesLeft = 3 });
            CatStore.PrintPets();
            Console.WriteLine("Buying whiteCat");
            CatStore.BuyPet("whiteCat");
            Console.WriteLine("Buying BlackDevil");
            CatStore.BuyPet("Mikica");
            CatStore.PrintPets();

            Console.WriteLine("*********************************");
            FishStore.Insert(new Fish() { Name = "WiWi", Age = 3, Type = "krap", Colour = "Gold", Size = "s" });
            FishStore.Insert(new Fish() { Name = "LuLu", Age = 5, Type = "shark", Colour = "NavyBlue", Size = "xxl" });
            FishStore.PrintPets();
            Console.WriteLine("Buuying planktone");
            FishStore.BuyPet("Planktone");
            Console.WriteLine("Buying LuLu");
            FishStore.BuyPet("LuLu");
            FishStore.PrintPets(); // tuka sakam da mi isprinta za Size: xxl, *xxl* It gonna eat ya!, no go printa toa.

            Console.ReadLine();
        }
    }
}
