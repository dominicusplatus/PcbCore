using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;

namespace PcbNext.Data
{
    public interface INet : IFakeable
    {
         [BsonId]
         string Id { get; set; }

          [BsonElement]
         string Name { get; set; }        

         //todo - type 

         //todo 
          
    }

}
