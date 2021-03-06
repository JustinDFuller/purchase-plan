package datastore

import (
	"context"

	ds "cloud.google.com/go/datastore"
	"github.com/justindfuller/purchaseplan.io/plan"
)

// Client is a wrapper around the datastore client.
// It should contain specific functions for this api.
type Client struct {
	c *ds.Client
}

// New creates a wrapper around the datastore client, using the given GCP project.
func New(ctx context.Context, project string) (Client, error) {
	var c Client
	cl, err := ds.NewClient(ctx, project)
	c.c = cl
	return c, err
}

// Close will close the connection to datastore.
// Call this on program exit.
func (c Client) Close() {
	c.c.Close()
}

// PutUser will save a User struct to datastore.
func (c Client) PutUser(ctx context.Context, u plan.User) error {
	k := ds.NameKey("Users", u.Email, nil)
	_, err := c.c.Put(ctx, k, &u)
	return err
}

// GetUser retries a User struct from datastore.
func (c Client) GetUser(ctx context.Context, id string) (plan.User, error) {
	var u plan.User
	k := ds.NameKey("Users", id, nil)
	err := c.c.Get(ctx, k, &u)
	return u, err
}

// IsNotFound returns if the error is a datastore 404.
func IsNotFound(err error) bool {
	return err == ds.ErrNoSuchEntity
}
