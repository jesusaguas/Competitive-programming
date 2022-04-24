# Basic computer science concepts

This file briefly goes through basic computer science concepts that you might get asked on an interview.

## Table of Contents

- [Operating systems](#operating-systems)

## Operating systems

Know about locks and mutexes and semaphores and monitors and how they work. Know about deadlock and livelock and how to avoid them. Know what resources a processes needs, and a thread needs, and how context switching works, and how it's initiated by the operating system and underlying hardware. Know a little about scheduling.


### Deadlock

A deadlock is a situation in which processes block each other due to resource acquisition and none of the processes makes any progress as they wait for the resource held by the other process.

In an operating system, a deadlock occurs when a process or thread enters a waiting state because a requested system resource is held by another waiting process, which in turn is waiting for another resource held by another waiting process. If a process remains indefinitely unable to change its state because resources requested by it are being used by another process that itself is waiting, then the system is said to be in a deadlock.

![Deadlock](/images/deadlock.png)

### Livelock

Livelock is a deadlock-like situation in which processes block each other with a repeated state change yet make no progress.
The difference between a deadlock is that processes block each other and wait indefinitely but they change their resource state continuously. The notable point is that the resource state change has no effect and does not help the processes make any progress in their task.
A real-world example of livelock occurs when two people make a telephone call to each other and both find the line is busy. Both gentlemen decide to hang up and attempt to call after the same time interval. Thus, in the next retry too, they ended up in the same situation. This is an example of a live lock as this can go on forever.

### Starvation

Starvation is the outcome of a deadlock, livelock, or as a result of continuous resource denial to a process, when a process is unable to gain regular access to the shared resources it requires to complete a task and thus, unable to make any progress.
One of the possible solutions to prevent starvation is to use a resource scheduling algorithm with a priority queue that also uses the aging technique.

### Mutex

A Mutex is a Mutually exclusive flag. Is like a token you need to be able to use the resources and its exclusive, only one can have it to use the resources.