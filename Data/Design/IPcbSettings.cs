using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;

namespace PcbNext.Data
{
public interface IPcbSettings
{
       [BsonElement]
     int Id { get; set; }
   
   
      [BsonElement]
     int DisplayUnits { get; set; }
    
       [BsonElement]
    
     List<int> VisibleLayers { get; set; }
}

}