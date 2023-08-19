## Basic Syntax

```c
#include <stdio.h>

int main() {
    printf("Hello World\n");
    return 0;
}
```

## Makefile

```make
CFLAGS=-ggdb -Wall -Wextra			# Macros

all: hello							# default target

# Build targets
hello: hello_world.c
	gcc $(CFLAGS) -o hello hello_world.c

clean:
	rm hello
```