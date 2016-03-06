﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

namespace TOUR_OF_HEROES
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.UseIISPlatformHandler();

            app.UseDefaultFiles();
            app.UseStaticFiles();
            
            app.Run(context =>
            {
                if (context.Request.Path.Value != "/app") {
                    
                    //var fileIndex = HostingEnvironment.("~/index.html");
                    context.Response.Redirect("/");
                    //context.Response.ContentType = "text/html";
                    //context.Response.WriteAsync(File.ReadAllText(fileIndex));

                    };
                return Task.FromResult<object>(null);
            }
            );
            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
