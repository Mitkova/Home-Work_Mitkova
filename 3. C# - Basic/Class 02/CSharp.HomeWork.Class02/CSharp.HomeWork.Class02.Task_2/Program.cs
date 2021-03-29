
using System;

namespace CSharp.HomeWork.Class02.Task_2
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal a, b, c, d;
            
            Console.Write("Enter the First number: ");
            a = Convert.ToDecimal(Console.ReadLine());

            Console.Write("Enter the Second number: ");
            b = Convert.ToDecimal(Console.ReadLine());

            Console.Write("Enter the Third number: ");
            c = Convert.ToDecimal(Console.ReadLine());

            Console.Write("Enter the Fourth number: ");
            d = Convert.ToDecimal(Console.ReadLine());

            decimal averageNumber = (a + b + c + d) / 4;

            // Sakav vaka vo edna linija se, no ne mi uspeja !!!
            //Console.WriteLine("The average of ", a , b, c, "and ", d, " is: ", averageNumber);
            Console.WriteLine("The average of {0}, {1}, {2}, and {3} is: {4} ",a, b, c, d, averageNumber);


            // Imav i vakov obid pred da sfatam kako se pravi se da bide vo edna linija :D
            Console.Write("The average of ");
            Console.Write(a);
            Console.Write(", ");
            Console.Write(b);
            Console.Write(", ");
            Console.Write(c);
            Console.Write(", ");
            Console.Write(" and ");
            Console.Write(d);
            Console.Write(" is: ");
            Console.Write(averageNumber);
            Console.WriteLine();
        }
    }
}
