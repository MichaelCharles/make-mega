# make-mega

Make large files for testing.

## Usage

Running `make-mega` on its own will produce a file of 100 megabytes.

```
make-mega
```

Adding a value afterwards will specify the file size in megabytes. For example, the following will produce a file of 200 megabytes.

```
make-mega 200
```

## Install

```
npm install -g make-mega
```

## Releases
 * 0.2.0 - Change to using a stream to append the data to the file. This should remove the previous file size limitations.