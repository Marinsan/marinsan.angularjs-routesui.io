﻿using Routes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
namespace Routes.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee  
        public ActionResult Index()
        {
            return View();
        }
 
        public JsonResult Get_AllEmployee()
        {
            using (EmployeesEntities Obj = new EmployeesEntities())
            {
                List<Employee> Emp = Obj.Employee.ToList();
                return Json(Emp, JsonRequestBehavior.AllowGet);
            }
        }


        public JsonResult Get_EmployeeById(string Id)
        {
            using (EmployeesEntities Obj = new EmployeesEntities())
            {
                int EmpId = int.Parse(Id);
                return Json(Obj.Employee.Find(EmpId), JsonRequestBehavior.AllowGet);
            }
        }

  
        public string Insert_Employee(Employee Employe)
        {
            if (Employe != null)
            {
                using (EmployeesEntities Obj = new EmployeesEntities())
                {
                    Obj.Employee.Add(Employe);
                    Obj.SaveChanges();
                    return "Employee Added Successfully";
                }
            }
            else
            {
                return "Employee Not Inserted! Try Again";
            }
        }


        public string Delete_Employee(Employee Emp)
        {
            if (Emp != null)
            {
                using (EmployeesEntities Obj = new EmployeesEntities())
                {
                    var Emp_ = Obj.Entry(Emp);
                    if (Emp_.State == System.Data.Entity.EntityState.Detached)
                    {
                        Obj.Employee.Attach(Emp);
                        Obj.Employee.Remove(Emp);
                    }
                    Obj.SaveChanges();
                    return "Treballador borrat correctament"; 
                }
            }
            else
            {
                return "Employee Not Deleted! Try Again";
            }
        }


        [HttpPost]
        public ActionResult Update_Employee(Employee Emp)
        {
            using (EmployeesEntities entities = new EmployeesEntities())
            {
                Employee updatedEmployee = (from c in entities.Employee
                                            where c.Emp_Id == Emp.Emp_Id
                                            select c).FirstOrDefault();
                updatedEmployee.Emp_Name = Emp.Emp_Name;
                updatedEmployee.Emp_City = Emp.Emp_City;
                updatedEmployee.Emp_Age = Emp.Emp_Age;
                entities.SaveChanges();
            }

            return new EmptyResult();
        }
    }
}