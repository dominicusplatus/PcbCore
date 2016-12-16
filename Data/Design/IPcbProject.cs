using System.Linq;
using System.Collections;
using System.Collections.Generic;

using MongoDB;
using MongoDB.Bson.Serialization.Attributes;

namespace PcbNext.Data
{
public interface IPcbProject
{

       [BsonElement]
    IPcbSettings Settings  { get; set; }
}

}
