using HomeWork.CSharp.Class06.Task1.Classes;
using System;

namespace HomeWork.CSharp.Class06.Task1
{
    class Program
    {
        static void Main(string[] args)
        {
            Driver[] drivers = new Driver[4]
            {
                new Driver("Andjlea", 10),
                new Driver("Greg", 8),
                new Driver("Jill", 6),
                new Driver("Anne", 4),
            };

            Car[] cars = new Car[4]
            {
                new Car("Hyundai", 150),
                new Car("Mazda", 180),
                new Car("Ferrari", 250),
                new Car("Porsche", 300)
            };

            Console.WriteLine("Select first car and driver");
            int firstCarIndex = SelectCar(cars);
            int firstDriverIndex = SelectDriver(drivers);

            Car firstCar = cars[firstCarIndex];
            Driver firstDriver = drivers[firstDriverIndex];
            firstCar.SetDriver(firstDriver);

            Console.WriteLine("Select second car and driver");
            int secondCarIndex = SelectCar(cars, firstCar);
            int secondDriverIndex = SelectDriver(drivers);

            if (firstCarIndex == secondCarIndex)
            {
                Console.WriteLine("Error! You chouse the same car twice");
                return;
            }

            if (firstDriverIndex == secondDriverIndex)
            {
                Console.WriteLine("Error! You chouse the same car twice");
                return;
            }

            Car secondCar = cars[secondCarIndex];
            Driver secondDriver = drivers[secondDriverIndex];
            secondCar.SetDriver(secondDriver);

            Car winner = RaceCars(firstCar, secondCar);

            if (winner == null)
            {
                Console.WriteLine("Equal race!");
                return;
            }

            Console.WriteLine($"The winner is {winner.Driver.Name} with {winner.Model} " +
                $"with speed {winner.CalculateSpeed()}");

            static Car RaceCars(Car car1, Car car2)
            {
                if (car1.CalculateSpeed() > car2.CalculateSpeed())
                    return car1;
                Console.WriteLine(car1 + " Was Faster");

                if (car2.CalculateSpeed() > car1.CalculateSpeed())
                    return car2;
                return null;
            }

            Console.ReadLine();
        }
    }
}
