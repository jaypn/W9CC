
var users = [
    {
    usertweet: "Multiple smallPRs so your colleages can review your code",    
    username: "Jayp",
    userdate: "08-14-2020",
    userage: 21,

    },

    {
    usertweet: "Dear Math please grow up and resolve your own problems.",    
    username: "Kabenzi",
    userdate: "08-11-2020",
    userage: 17,
    
        
    },

        
        
    {
            usertweet: "exams be like:if a ladder of 400cm stands at an abtuse angle and a man that weights 80 kgs climds. what is his birthday!",    
            username: "Fanny",
            userdate: "08-12-2020",
            userage: 18,
        
            },

            {
                usertweet: "Cutting tennis balls in half lets you store more balls saving space.",    
                username: "Chantal",
                userdate: "08-13-2020",
                userage: 16,
            
                }, 
                
                {
                    usertweet: "i think i can make a website company, me afeter completing html an scss",     
                    username: "Manzi",
                    userdate: "08-19-2020",
                    userage: 22,
                
                    },

                    {
                        usertweet:"raise up your hands if you think you are not crazy",     
                        username: "Tom",
                        userdate: "08-11-2020",
                        userage: 15,
                    
                        },



                        {
                            usertweet: "call me by your name",  
                            username: "Teddy",
                            userdate: "08-14-2009",
                            userage: 19,
                        
                            },

                            {
                                usertweet:  "i will be calling you everyday to know if you are doing good!",  
                                username: "Pachino",
                                userdate: "08-13-2009",
                                userage: 20,
                            
                                },

                                {
                                    usertweet: "if you didnt spend 6hours automating a task tahat takes takes you 30 secondes did you really do work?",  
                                    username: "Eric",
                                    userdate: "08-19-2009",
                                    userage: 19,
                                
                                    },

                                    {
                                        usertweet:"I dont like my life anymore",
                                        username:"Tito",
                                        userdate: "10-21-2000",
                                        userage: 32

                                    }



];



function filteruserage(user) {
    if(user.userage.title >=18) {
        return true;
    } else {
        return false;
    }
}

var userage = users.filter(filteruserage);
console.log(userage);