using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace PcbNext.Data
{
    public class PcbRoute : IPcbRoute
    {
         [BsonId]
         public string Id { get; set; }
      
        [BsonElement]
         public List<IPcbRoutePart> Parts { get; set; }

         [BsonElement]
         public INet Net { get; set; }

         public PcbRoute()
         {
             Id = Guid.NewGuid().ToString();
             Parts = new List<IPcbRoutePart>();
         }

         public void Fake()
         {
             Net = new SignalNet();
             Net.Fake();

             
             
         }

    }

}
