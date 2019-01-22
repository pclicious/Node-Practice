var cmd=require('node-cmd');
 
    cmd.get(
        'echo hello',
        function(err, data, stderr){
            console.log('CMD output : ',data)
        }
    );