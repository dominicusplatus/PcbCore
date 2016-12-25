using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using PcbNext.Data;

namespace pcbcore.Controllers
{
    [Route("api/[controller]")]
    public class PcbRoutesController : Controller
    {

        [HttpGet("[action]")]
        public IEnumerable<IPcbRoute> Routes()
        {
            List<IPcbRoute> routes = new List<IPcbRoute>();
            PcbRoute route = new PcbRoute();
            route.Fake();
            
            routes.Add(route);
            return routes.AsEnumerable();
        }

    }
}