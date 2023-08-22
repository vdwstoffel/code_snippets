# Basic Syntax

```c
#include <stdio.h>

int main() {
    printf("Hello World\n");
    return 0;
}
```

# Makefile

```make
CFLAGS=-ggdb -Wall -Wextra			# Macros

all: hello							# default target

# Build targets
hello: hello_world.c
	gcc $(CFLAGS) -o hello hello_world.c

clean:
	rm hello
```

# Integers
```c
// normal integer
int month; 
short int num2;
long int num3;
long long int num4;

// signed integers
int8_t has8bits = 0x12;
int16_t has16bits = 0x1234;
int32_t has32bits = 0x12345678;
int64_t has64bits = 0x12345678abcdef0;

// unsigned integers
uint8_t has8bits = 0x12;
uint16_t has16bits = 0x1234;
uint32_t has32bits = 0x12345678;
uint64_t has64bits = 0x12345678abcdef0;
```
```text
%d  to print decimal
%o  to print octal
%x  to print hex
```
