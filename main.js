const deletProperty = (arr) => {
    if(Object.keys(arr[0])== arr[1]){
        delete arr[1];
        return "Yes";
    }
    else{
        return "No";
    }
    
}
deletProperty([{
    fname: "jone"
}, 'fname'])


