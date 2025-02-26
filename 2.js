function ipv4Parser(ip, subnet) {
    let ipOctets = ip.split('.').map(Number);
    let subnetOctets = subnet.split('.').map(Number);
    
    let networkBlock = [];
    let hostIdentifier = [];

    for (let i = 0; i < 4; i++) {
        networkBlock.push(ipOctets[i] & subnetOctets[i]);
        hostIdentifier.push(ipOctets[i] & ~subnetOctets[i]);
    }

    return [networkBlock.join('.'), hostIdentifier.join('.')];
}

console.log(ipv4Parser("192.168.2.1", "255.255.255.0"));
console.log(ipv4Parser("10.0.5.7", "255.255.0.0"));
