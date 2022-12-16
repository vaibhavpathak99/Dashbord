import axios from "axios";
import React, { useEffect, useState } from "react";
import{Table} from "antd"
// import Submit from './Submit.js'
import Form from './Form';
import Form2 from './Form2';

   

const columns  = [

    
 { 
    
   title: 'Barcode',
   dataIndex: 'count',
   key: 'Barcode',
   
    
 },
 
 {
   title: 'EpcsExp',
   dataIndex: 'barcode',
   key: 'EpcsExp',
   
   render(text, record) {
     return {
      



       
       props: {
         style: { background: parseInt(text) < 200 ? "red" : "#90EE90" }
       },
       children: <div>{text}</div>
     };
   }
 
 },
//  {
//   //  title: 'Found',
//   //  dataIndex: 'Found',
//   //  key: 'Found',
   
//    render(text, record) {
//      return {
       
//        props: {
        
//          style: { background: parseInt(text) < 200 ? "red" : "green" }
//        },
//        children: <div>{text}</div>
//      };
//    }
 
   
//  },
 
 
 
];


   
 const data = [
    
  {
    
    "count": 1,
    "barcode": "8907546419704"
  },
  {
    "count": 2,
    "barcode": "8907546419711"
  },
  {
    "count": 2,
    "barcode": "8907546419728"
  },
  {
    "count": 2,
    "barcode": "8907546419735"
  },
  {
    "count": 2,
    "barcode": "8907546419742"
  },
  {
    "count": 2,
    "barcode": "8907546419759"
  },
  {
    "count": 2,
    "barcode": "8907546419766"
  },
  {
    "count": 1,
    "barcode": "8907546455184"
  },
  {
    "count": 2,
    "barcode": "8907546455191"
  },
  {
    "count": 3,
    "barcode": "8907546455207"
  },
  {
    "count": 3,
    "barcode": "8907546455214"
  },
  {
    "count": 2,
    "barcode": "8907546455221"
  },
  {
    "count": 1,
    "barcode": "8907546455306"
  },
  {
    "count": 2,
    "barcode": "8907546455313"
  },
  {
    "count": 3,
    "barcode": "8907546455320"
  },
  {
    "count": 3,
    "barcode": "8907546455337"
  },
  {
    "count": 2,
    "barcode": "8907546455344"
  },
  {
    "count": 1,
    "barcode": "8907546490383"
  },
  {
    "count": 2,
    "barcode": "8907546490390"
  },
  {
    "count": 2,
    "barcode": "8907546490406"
  },
  {
    "count": 1,
    "barcode": "8907546490413"
  },
  {
    "count": 2,
    "barcode": "8907546493049"
  },
  {
    "count": 3,
    "barcode": "8907546493056"
  },
  {
    "count": 3,
    "barcode": "8907546493063"
  },
  {
    "count": 2,
    "barcode": "8907546493070"
  },
  {
    "count": 1,
    "barcode": "8907546493087"
  },
  {
    "count": 2,
    "barcode": "8907546493148"
  },
  {
    "count": 3,
    "barcode": "8907546493155"
  },
  {
    "count": 3,
    "barcode": "8907546493162"
  },
  {
    "count": 2,
    "barcode": "8907546493179"
  },
  {
    "count": 1,
    "barcode": "8907546493186"
  },
  {
    "count": 2,
    "barcode": "8907546495241"
  },
  {
    "count": 3,
    "barcode": "8907546495258"
  },
  {
    "count": 3,
    "barcode": "8907546495265"
  },
  {
    "count": 2,
    "barcode": "8907546495272"
  },
  {
    "count": 1,
    "barcode": "8907546495289"
  },
  {
    "count": 1,
    "barcode": "8907546495647"
  },
  {
    "count": 3,
    "barcode": "8907546495654"
  },
  {
    "count": 3,
    "barcode": "8907546495661"
  },
  {
    "count": 2,
    "barcode": "8907546495678"
  },
  {
    "count": 1,
    "barcode": "8907546495685"
  },
  {
    "count": 1,
    "barcode": "8907546495692"
  },
  {
    "count": 1,
    "barcode": "8907546495708"
  },
  {
    "count": 3,
    "barcode": "8907546495715"
  },
  {
    "count": 3,
    "barcode": "8907546495722"
  },
  {
    "count": 2,
    "barcode": "8907546495739"
  },
  {
    "count": 1,
    "barcode": "8907546495746"
  },
  {
    "count": 1,
    "barcode": "8907546495753"
  },
  {
    "count": 1,
    "barcode": "8907546495760"
  },
  {
    "count": 3,
    "barcode": "8907546495777"
  },
  {
    "count": 3,
    "barcode": "8907546495784"
  },
  {
    "count": 2,
    "barcode": "8907546495791"
  },
  {
    "count": 1,
    "barcode": "8907546495807"
  },
  {
    "count": 1,
    "barcode": "8907546495814"
  },
  {
    "count": 1,
    "barcode": "8907546495821"
  },
  {
    "count": 3,
    "barcode": "8907546495838"
  },
  {
    "count": 3,
    "barcode": "8907546495845"
  },
  {
    "count": 2,
    "barcode": "8907546495852"
  },
  {
    "count": 1,
    "barcode": "8907546495869"
  },
  {
    "count": 1,
    "barcode": "8907546495876"
  },
  {
    "count": 1,
    "barcode": "8907546495883"
  },
  {
    "count": 3,
    "barcode": "8907546495890"
  },
  {
    "count": 3,
    "barcode": "8907546495906"
  },
  {
    "count": 2,
    "barcode": "8907546495913"
  },
  {
    "count": 1,
    "barcode": "8907546495920"
  },
  {
    "count": 1,
    "barcode": "8907546495937"
  },
  {
    "count": 1,
    "barcode": "8907546504059"
  },
  {
    "count": 2,
    "barcode": "8907546504066"
  },
  {
    "count": 2,
    "barcode": "8907546504073"
  },
  {
    "count": 2,
    "barcode": "8907546504080"
  },
  {
    "count": 1,
    "barcode": "8907546504097"
  },
  {
    "count": 2,
    "barcode": "8907546511002"
  },
  {
    "count": 3,
    "barcode": "8907546511019"
  },
  {
    "count": 3,
    "barcode": "8907546511026"
  },
  {
    "count": 2,
    "barcode": "8907546511033"
  },
  {
    "count": 1,
    "barcode": "8907546511040"
  },
  {
    "count": 2,
    "barcode": "8907546511200"
  },
  {
    "count": 3,
    "barcode": "8907546511217"
  },
  {
    "count": 3,
    "barcode": "8907546511224"
  },
  {
    "count": 2,
    "barcode": "8907546511231"
  },
  {
    "count": 1,
    "barcode": "8907546511248"
  },
  {
    "count": 2,
    "barcode": "8907546535121"
  },
  {
    "count": 2,
    "barcode": "8907546535138"
  },
  {
    "count": 2,
    "barcode": "8907546535145"
  },
  {
    "count": 1,
    "barcode": "8907546535466"
  },
  {
    "count": 2,
    "barcode": "8907546535473"
  },
  {
    "count": 2,
    "barcode": "8907546535480"
  },
  {
    "count": 2,
    "barcode": "8907546535497"
  },
  {
    "count": 2,
    "barcode": "8907546538986"
  },
  {
    "count": 2,
    "barcode": "8907546538993"
  },
  {
    "count": 2,
    "barcode": "8907546539006"
  },
  {
    "count": 2,
    "barcode": "8907546539013"
  },
  {
    "count": 2,
    "barcode": "8907546539020"
  },
  {
    "count": 2,
    "barcode": "8907546539037"
  },
  {
    "count": 1,
    "barcode": "8907546547209"
  },
  {
    "count": 2,
    "barcode": "8907546547216"
  },
  {
    "count": 2,
    "barcode": "8907546547223"
  },
  {
    "count": 2,
    "barcode": "8907546547230"
  },
  {
    "count": 1,
    "barcode": "8907546547247"
  },
  {
    "count": 1,
    "barcode": "8907546559844"
  },
  {
    "count": 2,
    "barcode": "8907546559851"
  },
  {
    "count": 2,
    "barcode": "8907546559868"
  },
  {
    "count": 2,
    "barcode": "8907546559875"
  },
  {
    "count": 1,
    "barcode": "8907546559882"
  },
  {
    "count": 1,
    "barcode": "8907546559899"
  },
  {
    "count": 2,
    "barcode": "8907546559905"
  },
  {
    "count": 2,
    "barcode": "8907546559912"
  },
  {
    "count": 2,
    "barcode": "8907546559929"
  },
  {
    "count": 1,
    "barcode": "8907546559936"
  },
  {
    "count": 1,
    "barcode": "8907546559998"
  },
  {
    "count": 2,
    "barcode": "8907546560000"
  },
  {
    "count": 2,
    "barcode": "8907546560017"
  },
  {
    "count": 2,
    "barcode": "8907546560024"
  },
  {
    "count": 1,
    "barcode": "8907546560031"
  },
  {
    "count": 1,
    "barcode": "8907546560048"
  },
  {
    "count": 2,
    "barcode": "8907546560055"
  },
  {
    "count": 2,
    "barcode": "8907546560062"
  },
  {
    "count": 2,
    "barcode": "8907546560079"
  },
  {
    "count": 1,
    "barcode": "8907546560086"
  },
  {
    "count": 2,
    "barcode": "8907546562288"
  },
  {
    "count": 3,
    "barcode": "8907546562295"
  },
  {
    "count": 3,
    "barcode": "8907546562301"
  },
  {
    "count": 2,
    "barcode": "8907546562318"
  },
  {
    "count": 1,
    "barcode": "8907546562325"
  },
  {
    "count": 1,
    "barcode": "8907546563728"
  },
  {
    "count": 2,
    "barcode": "8907546563735"
  },
  {
    "count": 2,
    "barcode": "8907546563742"
  },
  {
    "count": 2,
    "barcode": "8907546563759"
  },
  {
    "count": 2,
    "barcode": "8907546563766"
  },
  {
    "count": 2,
    "barcode": "8907546563773"
  },
  {
    "count": 2,
    "barcode": "8907546565654"
  },
  {
    "count": 2,
    "barcode": "8907546565661"
  },
  {
    "count": 2,
    "barcode": "8907546565678"
  },
  {
    "count": 1,
    "barcode": "8907546565685"
  },
  {
    "count": 3,
    "barcode": "8907546565692"
  },
  {
    "count": 3,
    "barcode": "8907546565708"
  },
  {
    "count": 3,
    "barcode": "8907546565715"
  },
  {
    "count": 3,
    "barcode": "8907546565722"
  },
  {
    "count": 3,
    "barcode": "8907546565739"
  },
  {
    "count": 1,
    "barcode": "8907546565746"
  },
  {
    "count": 3,
    "barcode": "8907546565753"
  },
  {
    "count": 3,
    "barcode": "8907546565760"
  },
  {
    "count": 3,
    "barcode": "8907546565777"
  },
  {
    "count": 3,
    "barcode": "8907546565784"
  },
  {
    "count": 3,
    "barcode": "8907546565791"
  },
  {
    "count": 1,
    "barcode": "8907546565807"
  },
  {
    "count": 2,
    "barcode": "8907546565814"
  },
  {
    "count": 2,
    "barcode": "8907546565821"
  },
  {
    "count": 3,
    "barcode": "8907546565838"
  },
  {
    "count": 3,
    "barcode": "8907546565845"
  },
  {
    "count": 3,
    "barcode": "8907546565852"
  },
  {
    "count": 1,
    "barcode": "8907546569393"
  },
  {
    "count": 1,
    "barcode": "8907546569409"
  },
  {
    "count": 2,
    "barcode": "8907546569416"
  },
  {
    "count": 2,
    "barcode": "8907546569423"
  },
  {
    "count": 1,
    "barcode": "8907546569430"
  },
  {
    "count": 1,
    "barcode": "8907546569447"
  },
  {
    "count": 1,
    "barcode": "8907546571921"
  },
  {
    "count": 1,
    "barcode": "8907546571938"
  },
  {
    "count": 1,
    "barcode": "8907546571945"
  },
  {
    "count": 1,
    "barcode": "8907546571952"
  },
  {
    "count": 1,
    "barcode": "8907546571969"
  },
  {
    "count": 1,
    "barcode": "8907546572928"
  },
  {
    "count": 1,
    "barcode": "8907546572935"
  },
  {
    "count": 1,
    "barcode": "8907546572942"
  },
  {
    "count": 1,
    "barcode": "8907546572959"
  },
  {
    "count": 1,
    "barcode": "8907546572966"
  },
  {
    "count": 1,
    "barcode": "8907546572973"
  },
  {
    "count": 1,
    "barcode": "8907546572980"
  },
  {
    "count": 1,
    "barcode": "8907546572997"
  },
  {
    "count": 1,
    "barcode": "8907546573000"
  },
  {
    "count": 1,
    "barcode": "8907546573017"
  },
  {
    "count": 1,
    "barcode": "8907546573178"
  },
  {
    "count": 1,
    "barcode": "8907546573185"
  },
  {
    "count": 1,
    "barcode": "8907546573192"
  },
  {
    "count": 1,
    "barcode": "8907546573208"
  },
  {
    "count": 1,
    "barcode": "8907546573215"
  },
  {
    "count": 1,
    "barcode": "8907546573222"
  },
  {
    "count": 1,
    "barcode": "8907546573239"
  },
  {
    "count": 1,
    "barcode": "8907546573246"
  },
  {
    "count": 1,
    "barcode": "8907546573253"
  },
  {
    "count": 1,
    "barcode": "8907546573260"
  },
  {
    "count": 1,
    "barcode": "8907546573277"
  },
  {
    "count": 1,
    "barcode": "8907546573284"
  },
  {
    "count": 1,
    "barcode": "8907546573291"
  },
  {
    "count": 1,
    "barcode": "8907546573307"
  },
  {
    "count": 1,
    "barcode": "8907546573314"
  },
  {
    "count": 1,
    "barcode": "8907546573826"
  },
  {
    "count": 2,
    "barcode": "8907546573833"
  },
  {
    "count": 2,
    "barcode": "8907546573840"
  },
  {
    "count": 2,
    "barcode": "8907546573857"
  },
  {
    "count": 1,
    "barcode": "8907546573864"
  },
  {
    "count": 1,
    "barcode": "8907546574373"
  },
  {
    "count": 1,
    "barcode": "8907546574380"
  },
  {
    "count": 1,
    "barcode": "8907546574397"
  },
  {
    "count": 1,
    "barcode": "8907546574403"
  },
  {
    "count": 1,
    "barcode": "8907546574410"
  },
  {
    "count": 1,
    "barcode": "8907546574427"
  },
  {
    "count": 1,
    "barcode": "8907546574434"
  },
  {
    "count": 1,
    "barcode": "8907546574441"
  },
  {
    "count": 1,
    "barcode": "8907546574458"
  },
  {
    "count": 1,
    "barcode": "8907546574465"
  },
  {
    "count": 1,
    "barcode": "8907546583016"
  },
  {
    "count": 2,
    "barcode": "8907546583023"
  },
  {
    "count": 2,
    "barcode": "8907546583030"
  },
  {
    "count": 2,
    "barcode": "8907546583047"
  },
  {
    "count": 1,
    "barcode": "8907546583054"
  },
  {
    "count": 1,
    "barcode": "8907546583061"
  },
  {
    "count": 1,
    "barcode": "8907546583078"
  },
  {
    "count": 2,
    "barcode": "8907546583085"
  },
  {
    "count": 2,
    "barcode": "8907546583092"
  },
  {
    "count": 2,
    "barcode": "8907546583108"
  },
  {
    "count": 1,
    "barcode": "8907546583115"
  },
  {
    "count": 1,
    "barcode": "8907546583122"
  },
  {
    "count": 1,
    "barcode": "8907546583559"
  },
  {
    "count": 2,
    "barcode": "8907546583566"
  },
  {
    "count": 2,
    "barcode": "8907546583573"
  },
  {
    "count": 2,
    "barcode": "8907546583580"
  },
  {
    "count": 1,
    "barcode": "8907546583597"
  },
  {
    "count": 1,
    "barcode": "8907546583603"
  },
  {
    "count": 1,
    "barcode": "8907546583610"
  },
  {
    "count": 2,
    "barcode": "8907546583627"
  },
  {
    "count": 2,
    "barcode": "8907546583634"
  },
  {
    "count": 2,
    "barcode": "8907546583641"
  },
  {
    "count": 1,
    "barcode": "8907546583658"
  },
  {
    "count": 1,
    "barcode": "8907546583665"
  },
  {
    "count": 1,
    "barcode": "8907546589377"
  },
  {
    "count": 2,
    "barcode": "8907546589384"
  },
  {
    "count": 3,
    "barcode": "8907546589391"
  },
  {
    "count": 2,
    "barcode": "8907546589407"
  },
  {
    "count": 1,
    "barcode": "8907546589414"
  },
  {
    "count": 1,
    "barcode": "8907546589421"
  },
  {
    "count": 1,
    "barcode": "8907546589650"
  },
  {
    "count": 1,
    "barcode": "8907546589667"
  },
  {
    "count": 2,
    "barcode": "8907546589674"
  },
  {
    "count": 1,
    "barcode": "8907546589681"
  },
  {
    "count": 1,
    "barcode": "8907546589698"
  },
  {
    "count": 1,
    "barcode": "8907546589704"
  },
  {
    "count": 1,
    "barcode": "8907546590786"
  },
  {
    "count": 1,
    "barcode": "8907546590793"
  },
  {
    "count": 2,
    "barcode": "8907546590809"
  },
  {
    "count": 2,
    "barcode": "8907546590816"
  },
  {
    "count": 1,
    "barcode": "8907546590823"
  },
  {
    "count": 1,
    "barcode": "8907546590830"
  },
  {
    "count": 1,
    "barcode": "8907546591134"
  },
  {
    "count": 2,
    "barcode": "8907546591141"
  },
  {
    "count": 3,
    "barcode": "8907546591158"
  },
  {
    "count": 2,
    "barcode": "8907546591165"
  },
  {
    "count": 1,
    "barcode": "8907546591172"
  },
  {
    "count": 1,
    "barcode": "8907546591189"
  },
  {
    "count": 1,
    "barcode": "8907546592131"
  },
  {
    "count": 2,
    "barcode": "8907546592148"
  },
  {
    "count": 3,
    "barcode": "8907546592155"
  },
  {
    "count": 1,
    "barcode": "8907546592162"
  },
  {
    "count": 1,
    "barcode": "8907546592179"
  },
  {
    "count": 1,
    "barcode": "8907546592186"
  },
  {
    "count": 2,
    "barcode": "8907546592193"
  },
  {
    "count": 3,
    "barcode": "8907546592209"
  },
  {
    "count": 1,
    "barcode": "8907546592216"
  },
  {
    "count": 1,
    "barcode": "8907546592223"
  },
  {
    "count": 1,
    "barcode": "8907546592353"
  },
  {
    "count": 2,
    "barcode": "8907546592360"
  },
  {
    "count": 3,
    "barcode": "8907546592377"
  },
  {
    "count": 1,
    "barcode": "8907546592384"
  },
  {
    "count": 1,
    "barcode": "8907546592391"
  },
  {
    "count": 1,
    "barcode": "8907546592674"
  },
  {
    "count": 2,
    "barcode": "8907546592681"
  },
  {
    "count": 3,
    "barcode": "8907546592698"
  },
  {
    "count": 2,
    "barcode": "8907546592704"
  },
  {
    "count": 1,
    "barcode": "8907546592711"
  },
  {
    "count": 1,
    "barcode": "8907546592728"
  },
  {
    "count": 1,
    "barcode": "8907546592735"
  },
  {
    "count": 2,
    "barcode": "8907546592742"
  },
  {
    "count": 3,
    "barcode": "8907546592759"
  },
  {
    "count": 2,
    "barcode": "8907546592766"
  },
  {
    "count": 1,
    "barcode": "8907546592773"
  },
  {
    "count": 1,
    "barcode": "8907546592780"
  },
  {
    "count": 1,
    "barcode": "8907546594517"
  },
  {
    "count": 1,
    "barcode": "8907546594524"
  },
  {
    "count": 1,
    "barcode": "8907546594531"
  },
  {
    "count": 1,
    "barcode": "8907546594548"
  },
  {
    "count": 1,
    "barcode": "8907546594555"
  },
  {
    "count": 1,
    "barcode": "8907546594814"
  },
  {
    "count": 2,
    "barcode": "8907546594821"
  },
  {
    "count": 2,
    "barcode": "8907546594838"
  },
  {
    "count": 2,
    "barcode": "8907546594845"
  },
  {
    "count": 1,
    "barcode": "8907546594852"
  },
  {
    "count": 1,
    "barcode": "8907546595217"
  },
  {
    "count": 1,
    "barcode": "8907546595224"
  },
  {
    "count": 1,
    "barcode": "8907546595231"
  },
  {
    "count": 1,
    "barcode": "8907546595248"
  },
  {
    "count": 1,
    "barcode": "8907546595255"
  },
  {
    "count": 1,
    "barcode": "8907546595712"
  },
  {
    "count": 2,
    "barcode": "8907546595729"
  },
  {
    "count": 2,
    "barcode": "8907546595736"
  },
  {
    "count": 1,
    "barcode": "8907546595743"
  },
  {
    "count": 1,
    "barcode": "8907546595750"
  },
  {
    "count": 1,
    "barcode": "8907546596061"
  },
  {
    "count": 2,
    "barcode": "8907546596078"
  },
  {
    "count": 2,
    "barcode": "8907546596085"
  },
  {
    "count": 2,
    "barcode": "8907546596092"
  },
  {
    "count": 1,
    "barcode": "8907546596108"
  },
  {
    "count": 1,
    "barcode": "8907546596818"
  },
  {
    "count": 2,
    "barcode": "8907546596825"
  },
  {
    "count": 2,
    "barcode": "8907546596832"
  },
  {
    "count": 2,
    "barcode": "8907546596849"
  },
  {
    "count": 1,
    "barcode": "8907546596856"
  },
  {
    "count": 1,
    "barcode": "8907546596863"
  },
  {
    "count": 2,
    "barcode": "8907546596870"
  },
  {
    "count": 2,
    "barcode": "8907546596887"
  },
  {
    "count": 2,
    "barcode": "8907546596894"
  },
  {
    "count": 1,
    "barcode": "8907546596900"
  },
  {
    "count": 2,
    "barcode": "8907546598485"
  },
  {
    "count": 2,
    "barcode": "8907546598492"
  },
  {
    "count": 2,
    "barcode": "8907546598508"
  },
  {
    "count": 2,
    "barcode": "8907546598515"
  },
  {
    "count": 2,
    "barcode": "8907546598522"
  },
  {
    "count": 2,
    "barcode": "8907546598539"
  },
  {
    "count": 2,
    "barcode": "8907546598720"
  },
  {
    "count": 2,
    "barcode": "8907546598737"
  },
  {
    "count": 2,
    "barcode": "8907546598744"
  },
  {
    "count": 2,
    "barcode": "8907546598751"
  },
  {
    "count": 2,
    "barcode": "8907546598768"
  },
  {
    "count": 2,
    "barcode": "8907546598775"
  },
  {
    "count": 2,
    "barcode": "8907546598782"
  },
  {
    "count": 2,
    "barcode": "8907546598799"
  },
  {
    "count": 2,
    "barcode": "8907546598805"
  },
  {
    "count": 2,
    "barcode": "8907546598812"
  },
  {
    "count": 2,
    "barcode": "8907546598829"
  },
  {
    "count": 2,
    "barcode": "8907546598836"
  },
  {
    "count": 2,
    "barcode": "8907546598843"
  },
  {
    "count": 2,
    "barcode": "8907546598850"
  },
  {
    "count": 2,
    "barcode": "8907546598867"
  },
  {
    "count": 2,
    "barcode": "8907546598966"
  },
  {
    "count": 2,
    "barcode": "8907546598973"
  },
  {
    "count": 2,
    "barcode": "8907546598980"
  },
  {
    "count": 2,
    "barcode": "8907546598997"
  },
  {
    "count": 2,
    "barcode": "8907546599000"
  },
  {
    "count": 2,
    "barcode": "8907546599017"
  },
  {
    "count": 1,
    "barcode": "8907546602410"
  },
  {
    "count": 1,
    "barcode": "8907546602427"
  },
  {
    "count": 2,
    "barcode": "8907546602434"
  },
  {
    "count": 2,
    "barcode": "8907546602441"
  },
  {
    "count": 1,
    "barcode": "8907546602458"
  },
  {
    "count": 1,
    "barcode": "8907546602465"
  },
  {
    "count": 1,
    "barcode": "8907546602533"
  },
  {
    "count": 2,
    "barcode": "8907546602540"
  },
  {
    "count": 3,
    "barcode": "8907546602557"
  },
  {
    "count": 2,
    "barcode": "8907546602564"
  },
  {
    "count": 1,
    "barcode": "8907546602571"
  },
  {
    "count": 1,
    "barcode": "8907546602588"
  },
  {
    "count": 1,
    "barcode": "8907546603196"
  },
  {
    "count": 2,
    "barcode": "8907546603202"
  },
  {
    "count": 3,
    "barcode": "8907546603219"
  },
  {
    "count": 2,
    "barcode": "8907546603226"
  },
  {
    "count": 1,
    "barcode": "8907546603233"
  },
  {
    "count": 2,
    "barcode": "8907546603417"
  },
  {
    "count": 2,
    "barcode": "8907546603424"
  },
  {
    "count": 2,
    "barcode": "8907546603431"
  },
  {
    "count": 1,
    "barcode": "8907546603448"
  },
  {
    "count": 1,
    "barcode": "8907546603455"
  },
  {
    "count": 1,
    "barcode": "8907546604902"
  },
  {
    "count": 1,
    "barcode": "8907546604919"
  },
  {
    "count": 2,
    "barcode": "8907546604926"
  },
  {
    "count": 2,
    "barcode": "8907546604933"
  },
  {
    "count": 1,
    "barcode": "8907546604940"
  },
  {
    "count": 1,
    "barcode": "8907546604957"
  },
  {
    "count": 1,
    "barcode": "8907546607569"
  },
  {
    "count": 2,
    "barcode": "8907546607576"
  },
  {
    "count": 2,
    "barcode": "8907546607583"
  },
  {
    "count": 2,
    "barcode": "8907546607590"
  },
  {
    "count": 1,
    "barcode": "8907546607606"
  },
  {
    "count": 1,
    "barcode": "8907546607613"
  },
  {
    "count": 5,
    "barcode": "8907546609662"
  },
  {
    "count": 5,
    "barcode": "8907546609679"
  },
  {
    "count": 3,
    "barcode": "8907546609686"
  },
  {
    "count": 3,
    "barcode": "8907546609693"
  },
  {
    "count": 3,
    "barcode": "8907546609709"
  },
  {
    "count": 3,
    "barcode": "8907546609716"
  },
  {
    "count": 2,
    "barcode": "8907546609723"
  },
  {
    "count": 2,
    "barcode": "8907546609730"
  },
  {
    "count": 3,
    "barcode": "8907546609747"
  },
  {
    "count": 2,
    "barcode": "8907546609754"
  },
  {
    "count": 2,
    "barcode": "8907546609761"
  },
  {
    "count": 3,
    "barcode": "8907546609839"
  },
  {
    "count": 2,
    "barcode": "8907546609846"
  },
  {
    "count": 3,
    "barcode": "8907546610118"
  },
  {
    "count": 3,
    "barcode": "8907546610125"
  },
  {
    "count": 3,
    "barcode": "8907546610132"
  },
  {
    "count": 2,
    "barcode": "8907546610170"
  },
  {
    "count": 3,
    "barcode": "8907546610187"
  },
  {
    "count": 2,
    "barcode": "8907546610194"
  },
  {
    "count": 2,
    "barcode": "8907546610200"
  },
  {
    "count": 2,
    "barcode": "8907546610217"
  },
  {
    "count": 2,
    "barcode": "8907546610224"
  },
  {
    "count": 3,
    "barcode": "8907546610231"
  },
  {
    "count": 1,
    "barcode": "8907546610576"
  },
  {
    "count": 1,
    "barcode": "8907546610811"
  },
  {
    "count": 1,
    "barcode": "8907546611054"
  },
  {
    "count": 1,
    "barcode": "8907546611290"
  },
  {
    "count": 1,
    "barcode": "8907546611535"
  },
  {
    "count": 1,
    "barcode": "8907546611726"
  },
  {
    "count": 1,
    "barcode": "8907546611733"
  },
  {
    "count": 1,
    "barcode": "8907546612402"
  },
  {
    "count": 2,
    "barcode": "8907546612600"
  },
  {
    "count": 2,
    "barcode": "8907546612617"
  },
  {
    "count": 2,
    "barcode": "8907546613287"
  },
  {
    "count": 2,
    "barcode": "8907546613485"
  },
  {
    "count": 2,
    "barcode": "8907546613492"
  },
  {
    "count": 2,
    "barcode": "8907546614161"
  },
  {
    "count": 2,
    "barcode": "8907546614369"
  },
  {
    "count": 2,
    "barcode": "8907546614376"
  },
  {
    "count": 2,
    "barcode": "8907546614758"
  },
  {
    "count": 1,
    "barcode": "8907546615250"
  },
  {
    "count": 1,
    "barcode": "8907546615458"
  },
  {
    "count": 1,
    "barcode": "8907546615465"
  },
  {
    "count": 1,
    "barcode": "8907546631069"
  },
  {
    "count": 1,
    "barcode": "8907546631137"
  },
  {
    "count": 1,
    "barcode": "8907546631359"
  },
  {
    "count": 1,
    "barcode": "8907546631427"
  },
  {
    "count": 1,
    "barcode": "8907546631649"
  },
  {
    "count": 1,
    "barcode": "8907546631717"
  },
  {
    "count": 1,
    "barcode": "8907546631939"
  },
  {
    "count": 1,
    "barcode": "8907546632004"
  },
  {
    "count": 1,
    "barcode": "8907546632226"
  },
  {
    "count": 1,
    "barcode": "8907546632295"
  },
  {
    "count": 1,
    "barcode": "8907546633926"
  },
  {
    "count": 2,
    "barcode": "8907546634046"
  },
  {
    "count": 2,
    "barcode": "8907546634169"
  },
  {
    "count": 2,
    "barcode": "8907546634282"
  },
  {
    "count": 1,
    "barcode": "8907546634404"
  },
  {
    "count": 1,
    "barcode": "8907546636286"
  },
  {
    "count": 1,
    "barcode": "8907546636293"
  },
  {
    "count": 2,
    "barcode": "8907546636309"
  },
  {
    "count": 2,
    "barcode": "8907546636316"
  },
  {
    "count": 1,
    "barcode": "8907546636323"
  },
  {
    "count": 1,
    "barcode": "8907546636330"
  },
  {
    "count": 1,
    "barcode": "8907546636408"
  },
  {
    "count": 1,
    "barcode": "8907546636415"
  },
  {
    "count": 2,
    "barcode": "8907546636422"
  },
  {
    "count": 2,
    "barcode": "8907546636439"
  },
  {
    "count": 1,
    "barcode": "8907546636446"
  },
  {
    "count": 1,
    "barcode": "8907546636453"
  },
  {
    "count": 2,
    "barcode": "8907546640382"
  },
  {
    "count": 2,
    "barcode": "8907546640399"
  },
  {
    "count": 2,
    "barcode": "8907546640405"
  },
  {
    "count": 2,
    "barcode": "8907546640412"
  },
  {
    "count": 2,
    "barcode": "8907546640429"
  },
  {
    "count": 2,
    "barcode": "8907546640436"
  },
  {
    "count": 1,
    "barcode": "8907546648432"
  },
  {
    "count": 2,
    "barcode": "8907546648449"
  },
  {
    "count": 2,
    "barcode": "8907546648456"
  },
  {
    "count": 2,
    "barcode": "8907546648463"
  },
  {
    "count": 1,
    "barcode": "8907546648470"
  },
  {
    "count": 1,
    "barcode": "8907546652194"
  },
  {
    "count": 1,
    "barcode": "8907546652200"
  },
  {
    "count": 1,
    "barcode": "8907546652217"
  },
  {
    "count": 1,
    "barcode": "8907546652224"
  },
  {
    "count": 1,
    "barcode": "8907546652231"
  },
  {
    "count": 1,
    "barcode": "8907546652248"
  },
  {
    "count": 1,
    "barcode": "8907546652255"
  },
  {
    "count": 1,
    "barcode": "8907546652262"
  },
  {
    "count": 1,
    "barcode": "8907546652279"
  },
  {
    "count": 1,
    "barcode": "8907546652286"
  },
  {
    "count": 1,
    "barcode": "8907546652293"
  },
  {
    "count": 1,
    "barcode": "8907546652309"
  },
  {
    "count": 1,
    "barcode": "8907546652316"
  },
  {
    "count": 1,
    "barcode": "8907546652323"
  },
  {
    "count": 1,
    "barcode": "8907546652330"
  },
  {
    "count": 1,
    "barcode": "8907546652347"
  },
  {
    "count": 1,
    "barcode": "8907546652354"
  },
  {
    "count": 1,
    "barcode": "8907546652361"
  },
  {
    "count": 1,
    "barcode": "8907546652378"
  },
  {
    "count": 1,
    "barcode": "8907546652385"
  },
  {
    "count": 1,
    "barcode": "8907546652453"
  },
  {
    "count": 2,
    "barcode": "8907546652460"
  },
  {
    "count": 2,
    "barcode": "8907546652477"
  },
  {
    "count": 2,
    "barcode": "8907546652484"
  },
  {
    "count": 1,
    "barcode": "8907546652491"
  },
  {
    "count": 1,
    "barcode": "8907546652507"
  },
  {
    "count": 1,
    "barcode": "8907546652576"
  },
  {
    "count": 2,
    "barcode": "8907546652583"
  },
  {
    "count": 2,
    "barcode": "8907546652590"
  },
  {
    "count": 2,
    "barcode": "8907546652606"
  },
  {
    "count": 1,
    "barcode": "8907546652613"
  },
  {
    "count": 1,
    "barcode": "8907546652620"
  },
  {
    "count": 1,
    "barcode": "8907546652637"
  },
  {
    "count": 2,
    "barcode": "8907546652644"
  },
  {
    "count": 2,
    "barcode": "8907546652651"
  },
  {
    "count": 2,
    "barcode": "8907546652668"
  },
  {
    "count": 1,
    "barcode": "8907546652675"
  },
  {
    "count": 1,
    "barcode": "8907546652682"
  },
  {
    "count": 1,
    "barcode": "8907546657984"
  },
  {
    "count": 1,
    "barcode": "8907546658011"
  },
  {
    "count": 1,
    "barcode": "8907546658042"
  },
  {
    "count": 1,
    "barcode": "8907546658073"
  },
  {
    "count": 1,
    "barcode": "8907546658103"
  },
  {
    "count": 1,
    "barcode": "8907546664555"
  },
  {
    "count": 2,
    "barcode": "8907546664562"
  },
  {
    "count": 2,
    "barcode": "8907546664579"
  },
  {
    "count": 2,
    "barcode": "8907546664586"
  },
  {
    "count": 1,
    "barcode": "8907546664593"
  },
  {
    "count": 1,
    "barcode": "8907546664609"
  },
  {
    "count": 2,
    "barcode": "8907546664616"
  },
  {
    "count": 2,
    "barcode": "8907546664623"
  },
  {
    "count": 2,
    "barcode": "8907546664630"
  },
  {
    "count": 1,
    "barcode": "8907546664647"
  },
  {
    "count": 1,
    "barcode": "8907546664654"
  },
  {
    "count": 2,
    "barcode": "8907546664661"
  },
  {
    "count": 2,
    "barcode": "8907546664678"
  },
  {
    "count": 2,
    "barcode": "8907546664685"
  },
  {
    "count": 1,
    "barcode": "8907546664692"
  },
  {
    "count": 2,
    "barcode": "8907546665552"
  },
  {
    "count": 2,
    "barcode": "8907546665569"
  },
  {
    "count": 2,
    "barcode": "8907546665576"
  },
  {
    "count": 1,
    "barcode": "8907546665583"
  },
  {
    "count": 1,
    "barcode": "8907546665590"
  },
  {
    "count": 1,
    "barcode": "8907546665606"
  },
  {
    "count": 2,
    "barcode": "8907546665613"
  },
  {
    "count": 2,
    "barcode": "8907546665620"
  },
  {
    "count": 2,
    "barcode": "8907546665637"
  },
  {
    "count": 1,
    "barcode": "8907546665644"
  },
  {
    "count": 1,
    "barcode": "8907546665651"
  },
  {
    "count": 1,
    "barcode": "8907546665668"
  }
     
 ];

 
const About = () =>
  <div>
<Form/>

<Table  columns={columns} dataSource={data} />;

<Form2/>
</div>
 
export default About;


    

