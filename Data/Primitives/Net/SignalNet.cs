using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace PcbNext.Data
{
    public class SignalNet : INet
    {
         [BsonId]
         public string Id { get; set; }

          [BsonElement]
         public string Name { get; set; }        

         //todo - type 

         //todo 

        public SignalNet()
        {
            Id = Guid.NewGuid().ToString();
        }

         public void Fake()
         {
            Name = Guid.NewGuid().ToString();
         }
          
    }

}
