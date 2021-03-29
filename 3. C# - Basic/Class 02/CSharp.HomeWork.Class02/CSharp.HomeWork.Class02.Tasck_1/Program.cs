using System;

namespace CSharp.HomeWork.Class02.Tasck_1
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Enter the First number:");
            decimal x, y;
            char operation;

            Console.Write("Enter the First number: ");
            x = Convert.ToDecimal(Console.ReadLine());

            Console.Write("Enter the Second number: ");
            y = Convert.ToDecimal(Console.ReadLine());

            Console.Write("Enter the Operation: ");
            operation = Convert.ToChar(Console.ReadLine());

            if (operation == '+')
            {
                Console.WriteLine("The result is: {0} + {1} = {2}", x, y, x + y);
            }
            else if (operation == '-')
            {
                Console.WriteLine("The result is: {0} - {1} = {2}", x, y, x - y);
            }
            else if ((operation == 'x') || (operation == '*'))
            {
                Console.WriteLine("The result is: {0} * {1} = {2}", x, y, x * y);
            }
            else if (operation == '/')
            {
                Console.WriteLine("The result is: {0} / {1} = {2}", x, y, x / y);
            }
            else
                Console.WriteLine("Wrong Character!!!    Enter ( +, - , * or / )");
        }
    }
}
