# Troubleshoot

This page contains troubleshooting advice for video miners and lists some of the most common issues that a video miner might encounter.

## OrchestratorCapped error

This error means that your orchestrator has hit its session limit so it is not longer accepting work from broadcasters. See the [session limit guide](./limits.md) for information on setting the session limit.

## Cannot allocate memory error

If this error occurs on startup when using the `-nvidia` flag, the transcoding test using the Nvidia GPUs likely failed because it hit the maximum number of video encoding/decoding sessions supported on a single GPU. Different Nvidia GPUs have different limits (if any) - more information can be found on [this page](https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new) and by searching for "nvenc nvdec session limit" online.

## insufficient funds for gas * price + value error

This error means that the node attempted to submit a transaction, but its account did not have enough ETH available for the transaction. You should add more ETH to your account in order to submit the transaction.

## Common Questions

**What does being ‘publicly accessible’ mean? Can I run a transcoder from home?**

Orchestrators should be reachable by broadcasters via the public IP and port that is set during registration. The only port that is required to be public is the one that was set during registration (default 8935). Be aware that there are many risks to running a public server. Only set up an orchestrator if you are comfortable with managing these risks.

Transcoders will not be able to serve the Livepeer network if they are behind a NAT (eg, a home router). If this is the case, special accommodations must be made for the transcoder, such as port forwarding or putting the the transcoder in the DMZ. The only port that is required to be public is the one that was set during the transcoder registration step (default 8935). Be aware that there are many risks to running a public server. Only set up a transcoder if you are comfortable with managing these risks.

**Can I run an orchestrator from home?**

Running an orchestrator at home likely means that you will be behind a NAT (i.e. a home router). This is generally not recommended. But, if you do choose to do so, special accommodations will need to be made for the orchestrator such as port forwarding or putting the orchestrator in the DMZ.

Some orchestrators in the past have used [hairpinning](https://en.wikipedia.org/wiki/Hairpinning) by:

- Adding a second rule to the SNAT chain like:

    ```bash
    13119   786268 DNAT       tcp  --  *      *       0.0.0.0/0            <EXTERNAL_IP>       tcp dpt:8935 to:10.0.0.10
       2      120 SNAT       tcp  --  *      *       10.0.0.10            10.0.0.10            to:<EXTERNAL_IP>
    ```
- Running a command like:

    ```bash
    iptables -t nat -A POSTROUTING -p tcp -s 10.0.0.10 -d 10.0.0.10 -j SNAT --to-source <EXTERNAL_IP>
    ```

**What is the service URI? Does this need to be an IP?**

The service registry acts as a discovery mechanism to allow broadcasters to look up the addresses of orchestrators on the network. Orchestrators register their service URI by storing it on the blockchain. During reigstration you are only asked for your IP:port, but the URI stored on the blockchain in the form of https://IP:port. Orchestrators are expected to provide a consistent and reliable service, so IPs here should remain static. However, a host (DNS) name is also allowed for the service URI to give some flexibility.

**What does this error mean? “Service address https://127.0.0.1:4433 did not match discovered address https://127.1.5.10:8935; set the correct address in livepeer_cli or use -serviceAddr”**

When starting up, the orchestrator checks if the current public IP matches the IP that is stored on the blockchain. If there is a mismatch, there is a possibility that your node is not publicly accessible. Override the locally inferred IP address by setting `-serviceAddr IP:port` to what is stored on the blockchain. Ensure your node is actually accessible at that address.