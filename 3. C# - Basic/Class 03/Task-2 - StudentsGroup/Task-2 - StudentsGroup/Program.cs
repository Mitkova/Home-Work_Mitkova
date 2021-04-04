using System;

namespace StudentGroup.Task2
{
    class Program
    {
        static void Main(string[] args)
        {

            string[] studentsG1 = new string[5] { "Anji", "Goran", "Blagoj", "Marina", "Nadica" };
            string[] studentsG2 = new string[5] { "MIke", "Bob", "Lusi", "Frank", "John" };

            Console.WriteLine($"Enter number  {1} for studentsG1 or number {2} for studentsG2");
            string userInput = Console.ReadLine();

            //int number = int.Parse(userInput);
            //Console.WriteLine(number);

            bool isValidNumber = int.TryParse(userInput, out int number);
            if (isValidNumber)
            {
                if (number == 1)
                {
                    foreach (string array1 in studentsG1) ;
                    Console.WriteLine($"The studets in G1 are: {array1} ");
                }
                else if (number == 2)
                {
                    foreach (string array2 in studentsG2) ;
                    Console.WriteLine($"The studets in G2 are: {array2}");
                }
                else
                {
                    Console.WriteLine("You entered wrong character, enter number 1 or number 2");
                }
            }
            Console.ReadLine();
        }
    }
}
