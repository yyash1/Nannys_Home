package com.app.entities;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@Entity
@AllArgsConstructor
public class User extends BaseEntity {

	@Column(nullable = false)
    private String firstName;
	@Column(nullable = false)
	private  String lastName;
    @Column(length = 10, name = "phoneNumbers",nullable = false)
    private  long phoneNumber;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private short age;
    @Column(nullable = false)
    private String password;
  //customer can have many address
    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<Address> addresses = new ArrayList<>();
    
  //customer can have multiple roles
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns =  @JoinColumn(name = "userT", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role", referencedColumnName = "id"))
    private Set<Roles> roles = new HashSet<>();
    
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Booking booking;    public User(String firstName, String lastName, long phoneNumber, String email, short age) {
    	this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.age = age;
    }
    //JsonManagedReference
    public void addAddress(Address address){
        addresses.add(address);
        address.setUser(this);
    }

    public void removeAddress(Address address){
        addresses.remove(address);
        address.setUser(null);
    }
    
    public void removeRole(Roles role){
        roles.remove(role);
    }
    
//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return this.getRoles()
//                .stream()
//                .map(role -> new SimpleGrantedAuthority(role.getName()))
//                .collect(Collectors.toSet());
//    }
//    @Override
//    public String getUsername() {
//        return this.email;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return true;
//    }
    public void addBooking(Booking book){
        this.addBooking(book);
        book.setUser(this);
    }

    //Method for the remove the cart
    public void removeBooking(Booking book){
        this.addBooking(null);
        book.setUser(null);
    }
}

