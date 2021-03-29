using System;

namespace CSharp.HomeWork.Class02.Task_3.SwapNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int number1;
            int number2;
            int temporaryVariable;

            Console.Write("Input the First Number: ");
            number1 = Convert.ToInt32(Console.ReadLine());

            Console.Write("Input the Second Number: ");
            number2 = Convert.ToInt32(Console.ReadLine());

            temporaryVariable = number1;
            number1 = number2;
            number2 = temporaryVariable;

            Console.WriteLine("First Number: " + number1);
            Console.WriteLine("Second Number: " + number2);
        }
    }
}
