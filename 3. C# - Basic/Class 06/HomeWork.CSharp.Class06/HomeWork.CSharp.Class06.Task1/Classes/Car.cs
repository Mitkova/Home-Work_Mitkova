using System;
using System.Collections.Generic;
using System.Text;

namespace HomeWork.CSharp.Class06.Task1.Classes
{
    public class Car
    {
        public string Model { get; set; }
        public int Speed { get; set; }
        public Driver Driver { get; set; }

        #region  Car Object   //Pocnav vaka da ja pravam so Objects, pa vidov nekoi drugi idei za resenia i prodolziv vo drug pravec so Arrays
        //Car hyundai = new Car()
        //{
        //    Model = "Hyundai",
        //    Speed = 150,
        //    Driver = 1
        //};

        //Car mazda = new Car()
        //{
        //    Model = "Mazda",
        //    Speed = 200,
        //    Driver = 2
        //};

        //Car ferrari = new Car()
        //{
        //    Model = "Ferrari",
        //    Speed = 340,
        //    Driver = 3
        //};

        //Car porsche = new Car()
        //{
        //    Model = "Porsche",
        //    Speed = 370,
        //    Driver = 4
        //};
        #endregion 
       
        public Car()
        {
        }

        public Car(string model, int speed)
        {
            Model = model;
            Speed = speed;
        }

        public void SetDriver(Driver driver)
        {
            Driver = driver;
        }
        public int CalculateSpeed()
        {
            Car car = new Car();
            car.Speed = int.Parse(Console.ReadLine());
            return Driver != null ? Speed * Driver.Skill : 0;
        }

    }
}
